import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {october5BlogBatch} from '../app/blog-oct5.ts';

const root=process.cwd();
const fail=(m)=>{throw new Error(m)};
const words=(s)=>s.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean);
const body=(p)=>[p.intro,...p.sections.flatMap(s=>s.paragraphs)].join(' ');
const shingles=(p)=>{const w=words(body(p)),out=new Set();for(let i=0;i<=w.length-5;i++)out.add(w.slice(i,i+5).join(' '));return out};
const normalize=(s)=>s.replace(/<[^>]+>/g,' ').replace(/&(?:#x27|apos);/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
if(october5BlogBatch.length!==12) fail(`expected 12, got ${october5BlogBatch.length}`);
const slugs=new Set(); const counts={}; const hashes={}; let max=0,maxPair='';
for(const p of october5BlogBatch){
 if(slugs.has(p.slug)) fail(`duplicate slug ${p.slug}`); slugs.add(p.slug);
 counts[p.slug]=words(body(p)).length; if(counts[p.slug]<900) fail(`short body ${p.slug}`);
 hashes[p.slug]=crypto.createHash('sha256').update(body(p)).digest('hex');
 const route=path.join(root,'.next/server/app/blog',p.slug+'.html');
 if(!fs.existsSync(route)) fail(`missing rendered route ${p.slug}`);
 const html=fs.readFileSync(route,'utf8'),plain=normalize(html);
 if(!plain.includes(p.title)) fail(`full title missing ${p.slug}`);
 if(!html.includes(`https://callcenteroutsourced.com/blog/${p.slug}`)) fail(`canonical missing ${p.slug}`);
 if(!html.includes('2026-10-05')) fail(`date missing ${p.slug}`);
 const final=normalize(p.sections.at(-1).paragraphs.at(-1));
 if(!plain.includes(final)) fail(`final substantive paragraph missing ${p.slug}`);
 if(!html.includes(p.heroImage)) fail(`rendered image missing ${p.slug}`);
 for(const link of p.related) if(!html.includes(`href="${link.href}"`)) fail(`contextual link ${link.href} missing ${p.slug}`);
}
for(let i=0;i<october5BlogBatch.length;i++)for(let j=i+1;j<october5BlogBatch.length;j++){
 const a=shingles(october5BlogBatch[i]),b=shingles(october5BlogBatch[j]);let n=0;for(const x of a)if(b.has(x))n++;
 const score=100*n/(a.size+b.size-n);if(score>max){max=score;maxPair=`${october5BlogBatch[i].slug} <> ${october5BlogBatch[j].slug}`}
}
if(max>=50) fail(`five-word-shingle overlap ${max.toFixed(2)}% ${maxPair}`);
const image=fs.readFileSync(path.join(root,'public/blog-aug20/outsourced-call-center-qa-sample-selection.png'));
if(image.subarray(0,8).toString('hex')!=='89504e470d0a1a0a') fail('hero image is not PNG');
const index=fs.readFileSync(path.join(root,'.next/server/app/blog.html'),'utf8');
for(const p of october5BlogBatch)if(!index.includes(`/blog/${p.slug}`))fail(`blog index missing ${p.slug}`);
const sitemapPath=['.next/server/app/sitemap.xml.body','.next/server/app/sitemap.xml/route.body'].map(p=>path.join(root,p)).find(fs.existsSync);
if(!sitemapPath)fail('built sitemap body missing');const sitemap=fs.readFileSync(sitemapPath,'utf8');
for(const p of october5BlogBatch)if(!sitemap.includes(`/blog/${p.slug}`))fail(`sitemap missing ${p.slug}`);
console.log(JSON.stringify({status:'PASS',count:12,wordCounts:counts,contentHashes:hashes,maximumFiveWordShingleJaccardPercent:+max.toFixed(2),maximumPair:maxPair,image:{path:'/blog-aug20/outsourced-call-center-qa-sample-selection.png',signature:'PNG',bytes:image.length},renderedRoutes:'PASS',contextualLinks:'PASS',blogIndex:'PASS',sitemap:'PASS'},null,2));
