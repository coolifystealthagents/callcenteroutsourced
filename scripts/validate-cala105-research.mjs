import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {september28Cala105ResearchBatch as batch} from '../app/research-sep28-cala105.ts';

assert.equal(batch.length,5,'exactly five Research articles');
const loader=await readFile(new URL('../app/fleet-data.ts',import.meta.url),'utf8');
assert.match(loader,/september28Cala105ResearchBatch/,'batch is loaded');
const allFiles=['research-sep25-cala102.ts','research-sep24-cala101.ts','research-sep23-cala99.ts','research-sep22-cala97.ts','research-sep18-cala92.ts','research-sep14.ts','research-sep11.ts','research-sep10.ts','research-sep9.ts','research-sep8.ts','research-sep7.ts','research-sep4.ts','research-sep3.ts','research-sep2.ts','research-sep1.ts','research-aug23.ts','research-aug21.ts','research-aug20.ts','research-aug19.ts','research-aug18.ts','research-aug17.ts','research-aug14.ts','research-aug13-replacements.ts'];
const prior=(await Promise.all(allFiles.map(f=>readFile(new URL(`../app/${f}`,import.meta.url),'utf8')))).join('\n');
const slugs=new Set();
const bodies=[];
for(const post of batch){
  assert.equal(post.published,'2026-09-28');
  assert.equal(post.sourceDate,'2026-09-28');
  assert(!slugs.has(post.slug),'unique batch slug'); slugs.add(post.slug);
  assert(!prior.includes(`slug:'${post.slug}'`)&&!prior.includes(`"slug": "${post.slug}"`),`new slug: ${post.slug}`);
  const body=post.sections.map(s=>`${s.heading} ${s.body}`).join(' ');
  const words=body.trim().split(/\s+/).length;
  assert(words>=1200,`${post.slug} has ${words} substantive body words`);
  assert((post.sources?.length??0)>=4,`${post.slug} has authoritative sources`);
  assert(post.internalLinks?.includes('/research'));
  assert(post.internalLinks?.some(x=>x.startsWith('/services/')));
  assert(post.sections.some(s=>/method/i.test(s.heading)));
  assert(post.sections.some(s=>/limitations/i.test(s.heading)));
  bodies.push({slug:post.slug,words,text:body.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean)});
}
const shingles=words=>new Set(Array.from({length:Math.max(0,words.length-4)},(_,i)=>words.slice(i,i+5).join(' ')));
let max={score:0,pair:''};
for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){
  const a=shingles(bodies[i].text),b=shingles(bodies[j].text);
  let intersection=0; for(const item of a)if(b.has(item))intersection++;
  const score=intersection/(a.size+b.size-intersection);
  if(score>max.score)max={score,pair:`${bodies[i].slug} <> ${bodies[j].slug}`};
}
assert(max.score<0.5,`maximum five-word-shingle Jaccard is ${(max.score*100).toFixed(2)}%`);
console.log(JSON.stringify({status:'PASS',count:batch.length,wordCounts:Object.fromEntries(bodies.map(x=>[x.slug,x.words])),maximumFiveWordShingleJaccard:Number((max.score*100).toFixed(2)),maximumPair:max.pair},null,2));
