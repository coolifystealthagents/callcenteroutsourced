import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'publishing/2026-10-12/manifest.json'),'utf8'));
const {october12BlogBatch}=await import('../../app/blog-oct12.ts');
const {october12ResearchBatch}=await import('../../app/research-oct12.ts');
const date='2026-10-12';
const titleDate=/(?:2026-10-12|oct(?:ober)?\s+12)/i;
const wordCount=value=>(value.match(/[\p{L}\p{N}’'-]+/gu)||[]).length;
const errors=[];
const check=(condition,message)=>{if(!condition)errors.push(message)};

check(manifest.site==='CallCenterOutsourced.com','manifest site mismatch');
check(manifest.repository==='coolifystealthagents/callcenteroutsourced','manifest repository mismatch');
check(manifest.branch==='main','manifest branch mismatch');
check(manifest.publicationDate===date,'manifest date mismatch');
check(october12BlogBatch.length===12,`expected 12 Blog items, found ${october12BlogBatch.length}`);
check(october12ResearchBatch.length===5,`expected 5 Research items, found ${october12ResearchBatch.length}`);
check(manifest.articles.length===17,'manifest must contain 17 articles');

const appData=fs.readFileSync(path.join(root,'app/data.ts'),'utf8');
const fleetData=fs.readFileSync(path.join(root,'app/fleet-data.ts'),'utf8');
check(appData.includes("import { october12BlogBatch } from './blog-oct12';")&&appData.includes('...october12BlogBatch'),'Blog registry is incomplete');
check(fleetData.includes("import { october12ResearchBatch } from './research-oct12.ts';")&&fleetData.includes('...october12ResearchBatch'),'Research registry is incomplete');
for(const route of ['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx','app/blog/page.tsx','app/research/page.tsx'])check(fs.existsSync(path.join(root,route)),`missing ${route}`);
const blogRoute=fs.readFileSync(path.join(root,'app/blog/[slug]/page.tsx'),'utf8');
const researchRoute=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8');
check(blogRoute.includes('displayDate(post.published)')&&blogRoute.includes('Keep planning'),'Blog visible date or related-content behavior missing');
check(researchRoute.includes('displayDate(publishedDate)')&&researchRoute.includes('Related operating guides')&&researchRoute.includes('Related evidence briefs'),'Research visible date or related-content behavior missing');

const combined=[...october12BlogBatch.map(x=>({section:'Blog',...x})),...october12ResearchBatch.map(x=>({section:'Research',...x}))];
const manifestBySlug=new Map(manifest.articles.map(x=>[x.slug,x]));
const titles=new Set(),slugs=new Set(),imageHashes=new Set(),paragraphs=new Map();
for(const article of combined){
  const label=`${article.section}:${article.slug}`;
  check(article.published===date,`${label} published date mismatch`);
  check(article.updated===date,`${label} updated date mismatch`);
  check(!titleDate.test(article.title),`${label} title contains publication date`);
  check(!titles.has(article.title.toLowerCase()),`${label} duplicate title`); titles.add(article.title.toLowerCase());
  check(!slugs.has(article.slug),`${label} duplicate slug`); slugs.add(article.slug);
  const item=manifestBySlug.get(article.slug);
  check(Boolean(item),`${label} missing manifest record`);
  if(!item)continue;
  check(item.section===article.section,`${label} manifest section mismatch`);
  check(item.title===article.title&&item.thumbnailTitle===article.title,`${label} exact thumbnail title mismatch`);
  check(item.publicationDate===date,`${label} manifest date mismatch`);
  check(item.route===`/${article.section.toLowerCase()}/${article.slug}`,`${label} route mismatch`);
  const registryImage=article.section==='Blog'?article.heroImage:article.image;
  check(registryImage===`/${item.thumbnailPath.replace(/^public\//,'')}`,`${label} registry image mismatch`);
  const imagePath=path.join(root,item.thumbnailPath);
  check(fs.existsSync(imagePath),`${label} missing thumbnail`);
  if(fs.existsSync(imagePath)){
    const png=fs.readFileSync(imagePath);
    check(png.subarray(1,4).toString()==='PNG',`${label} thumbnail is not PNG`);
    const dimensions=[png.readUInt32BE(16),png.readUInt32BE(20)];
    const expected=article.section==='Blog'?[1024,1024]:[1536,1024];
    check(dimensions[0]===expected[0]&&dimensions[1]===expected[1],`${label} thumbnail must be ${expected.join('x')}`);
    const hash=crypto.createHash('sha256').update(png).digest('hex');
    check(!imageHashes.has(hash),`${label} thumbnail duplicates another image`); imageHashes.add(hash);
  }
  if(article.section==='Blog'){
    const prose=[article.intro,...article.sections.flatMap(section=>section.paragraphs||[])];
    check(wordCount(prose.join(' '))>=750,`${label} is too thin`);
    check(article.sections.length===7,`${label} must contain seven substantive sections`);
    check((article.related||[]).length>=3&&article.related.every(x=>!x.href.startsWith('/research/')),`${label} related links are missing or mixed with Research article routes`);
    for(const paragraph of prose){
      if(wordCount(paragraph)<25)continue;
      const key=paragraph.toLowerCase().replace(/\s+/g,' ').trim();
      const owner=paragraphs.get(key); if(owner)errors.push(`${label} duplicates substantive prose from ${owner}`); else paragraphs.set(key,label);
    }
  }else{
    const prose=article.sections.map(section=>section.body);
    check(wordCount(prose.join(' '))>=1050,`${label} Research item is too thin`);
    check(article.sources?.length===10&&new Set(article.sources.map(x=>x.url)).size===10,`${label} must contain 10 unique sources`);
    check(article.sources?.every(x=>x.url.startsWith('https://')),`${label} contains a non-HTTPS source`);
    check(prose.some(x=>x.includes('Published October 12, 2026.')),`${label} lacks an explicit visible date in article content`);
    check((article.internalLinks||[]).some(x=>x.startsWith('/blog/')),`${label} lacks a Blog cross-reference`);
    check((article.related||[]).length===3,`${label} needs three Research related items`);
    for(const paragraph of prose){
      if(wordCount(paragraph)<25)continue;
      const key=paragraph.toLowerCase().replace(/\s+/g,' ').trim();
      const owner=paragraphs.get(key); if(owner)errors.push(`${label} duplicates substantive prose from ${owner}`); else paragraphs.set(key,label);
    }
  }
}
check(titles.size===17&&slugs.size===17,'all 17 titles and slugs must be unique');
check(imageHashes.size===17,'all 17 thumbnails must be unique');

if(errors.length)throw new Error(`October 12 validation failed:\n- ${errors.join('\n- ')}`);
console.log('PASS: 12 Blog + 5 Research; visible exact date, date-free unique titles, separate registries/routes/indexes, related behavior, 10-source Research depth, unique substantive prose, and 17 unique exact-title thumbnails verified.');
