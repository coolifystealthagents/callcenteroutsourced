import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'publishing/2026-10-13/manifest.json'),'utf8'));
const {october13BlogBatch}=await import('../../app/blog-oct13.ts');
const {october13ResearchBatch}=await import('../../app/research-oct13.ts');
const date='2026-10-13', visible='October 13, 2026';
const errors=[];const check=(ok,msg)=>{if(!ok)errors.push(msg)};
const wordCount=value=>(value.match(/[\p{L}\p{N}’'-]+/gu)||[]).length;

check(manifest.site==='CallCenterOutsourced.com','site mismatch');
check(manifest.canonicalDomain==='https://callcenteroutsourced.com','canonical domain mismatch');
check(manifest.repository==='coolifystealthagents/callcenteroutsourced','repository mismatch');
check(manifest.branch==='main','branch mismatch');
check(manifest.baseSha==='b81628cfa7f37e7431e5ae7f3e2cdb2ea4f8f0a1','immutable base SHA mismatch');
check(manifest.publicationDate===date&&manifest.visiblePublicationDate===visible,'manifest date mismatch');
check(october13BlogBatch.length===12,'requires 12 Blog');check(october13ResearchBatch.length===5,'requires 5 Research');
check(manifest.articles.length===17&&manifest.thumbnailCount===17,'requires 17 articles and thumbnails');

const combined=[...october13BlogBatch.map(x=>({section:'Blog',...x})),...october13ResearchBatch.map(x=>({section:'Research',...x}))];
const bySlug=new Map(manifest.articles.map(x=>[x.slug,x]));
const titles=new Set(), slugs=new Set(), imageHashes=new Set(), paragraphs=new Map();
for(const article of combined){
 const label=`${article.section}:${article.slug}`, item=bySlug.get(article.slug);
 check(article.published===date&&article.updated===date,label+': date mismatch');
 check(!/(?:oct(?:ober)?\s+13|2026[-/]10[-/]13)/i.test(article.title),label+': date in title');
 check(!titles.has(article.title.toLowerCase()),label+': duplicate title');titles.add(article.title.toLowerCase());
 check(!slugs.has(article.slug),label+': duplicate slug');slugs.add(article.slug);
 check(Boolean(item),label+': absent from manifest');if(!item)continue;
 check(item.title===article.title&&item.thumbnailTitle===article.title,label+': exact thumbnail title mismatch');
 check(item.section===article.section&&item.publicationDate===date,label+': manifest section/date mismatch');
 check(item.route===`/${article.section.toLowerCase()}/${article.slug}`,label+': route mismatch');
 const imageRef=article.section==='Blog'?article.heroImage:article.image;
 check(imageRef===`/${item.thumbnailPath.replace(/^public\//,'')}`,label+': image registry mismatch');
 const ip=path.join(root,item.thumbnailPath);check(fs.existsSync(ip),label+': thumbnail missing');
 if(fs.existsSync(ip)){
  const png=fs.readFileSync(ip);check(png.subarray(1,4).toString()==='PNG',label+': thumbnail not PNG');
  const dims=[png.readUInt32BE(16),png.readUInt32BE(20)], expected=article.section==='Blog'?[1024,1024]:[1536,1024];
  check(dims[0]===expected[0]&&dims[1]===expected[1],label+`: expected ${expected.join('x')}`);
  check(png.includes(Buffer.from(article.title)),label+': exact title metadata missing');
  const hash=crypto.createHash('sha256').update(png).digest('hex');check(!imageHashes.has(hash),label+': duplicate thumbnail bytes');imageHashes.add(hash);
 }
 const prose=article.section==='Blog'?[article.intro,...article.sections.flatMap(s=>s.paragraphs||[])]:article.sections.map(s=>s.body);
 check(wordCount(prose.join(' '))>=(article.section==='Blog'?850:1050),label+': insufficient depth');
 check(prose.some(p=>p.includes(visible)),label+': visible publication date missing from article content');
 if(article.section==='Blog'){
  check(article.sections.length===7,label+': Blog requires seven sections');check((article.related||[]).length>=3,label+': Blog related links missing');
 }else{
  check(article.sections.length>=10,label+': Research depth sections missing');check(article.sources?.length===10&&new Set(article.sources.map(s=>s.url)).size===10,label+': exactly 10 unique sources required');check(article.sources?.every(s=>s.url.startsWith('https://')),label+': source is not HTTPS');check((article.related||[]).length===3,label+': Research related content missing');check((article.internalLinks||[]).some(x=>x.startsWith('/blog/')),label+': Blog cross-reference missing');
 }
 for(const p of prose){if(wordCount(p)<25)continue;const key=p.toLowerCase().replace(/[^\p{L}\p{N} ]/gu,'').replace(/\s+/g,' ').trim();const owner=paragraphs.get(key);if(owner)errors.push(`${label}: duplicate substantive paragraph from ${owner}`);else paragraphs.set(key,label)}
}
check(titles.size===17&&slugs.size===17&&imageHashes.size===17,'all title/slug/image values must be unique');

const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8'), fleet=fs.readFileSync(path.join(root,'app/fleet-data.ts'),'utf8');
check(data.includes("import { october13BlogBatch } from './blog-oct13';")&&data.includes('...october13BlogBatch'),'Blog registry incomplete');
check(fleet.includes("import { october13ResearchBatch } from './research-oct13.ts';")&&fleet.includes('...october13ResearchBatch'),'Research registry incomplete');
for(const p of [...manifest.registryPaths,...manifest.routePaths,...manifest.indexPaths,'app/components.tsx','app/sitemap.xml/route.ts'])check(fs.existsSync(path.join(root,p)),`system path missing: ${p}`);
const br=fs.readFileSync(path.join(root,manifest.routePaths[0]),'utf8'), rr=fs.readFileSync(path.join(root,manifest.routePaths[1]),'utf8');
check(br.includes('displayDate(post.published)')&&br.includes('Keep planning'),'Blog visible date/sidebar/related behavior missing');
check(rr.includes('displayDate(publishedDate)')&&rr.includes('Related operating guides')&&rr.includes('Related evidence briefs'),'Research visible date/sidebar/related behavior missing');
check(fs.readFileSync(path.join(root,'app/blog/page.tsx'),'utf8').includes('blogPosts'),'Blog index loader missing');check(fs.readFileSync(path.join(root,'app/research/page.tsx'),'utf8').includes('researchPosts'),'Research index loader missing');
check(fs.readFileSync(path.join(root,'app/sitemap.xml/route.ts'),'utf8').includes('blogPosts')&&fs.readFileSync(path.join(root,'app/sitemap.xml/route.ts'),'utf8').includes('researchPosts'),'sitemap inclusion missing');

const existing=execFileSync('git',['grep','-h','-E','slug:|"slug":',manifest.baseSha,'--','app/*.ts'],{cwd:root,encoding:'utf8',maxBuffer:20_000_000});
for(const slug of slugs)check(!existing.includes(slug),`${slug}: collision in immutable base corpus`);

if(errors.length){console.error(`FAIL CallCenterOutsourced October 13: ${errors.length} error(s)`);for(const e of errors)console.error('- '+e);process.exit(1)}
console.log('PASS CallCenterOutsourced October 13: 12 Blog + 5 Research, 10 authoritative HTTPS sources per Research, 17 unique exact-title native PNGs, visible/frontmatter dates, separate registries/routes/indexes/sidebar/related/sitemap, immutable-base collision audit, depth/hashes, and zero duplicate substantive prose.');
