import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {october5Cala108ResearchBatch as batch} from '../app/research-oct5-cala108.ts';

assert.equal(batch.length,5,'exactly five Research articles');
const loader=await readFile(new URL('../app/fleet-data.ts',import.meta.url),'utf8');
assert.match(loader,/october5Cala108ResearchBatch/,'batch is loaded');
const priorFiles=(await Array.fromAsync((await import('node:fs/promises')).glob(['research-*.ts'],{cwd:new URL('../app/',import.meta.url)}))).filter(file=>!file.endsWith('research-oct5-cala108.ts')).map(file=>new URL(`../app/${file}`,import.meta.url));
const prior=(await Promise.all(priorFiles.map(file=>readFile(file,'utf8')))).join('\n');
const slugs=new Set(),titles=new Set(),bodies=[];
for(const post of batch){
  assert.equal(post.published,'2026-10-05');
  assert.equal(post.sourceDate,'2026-10-05');
  assert(!slugs.has(post.slug),'unique batch slug'); slugs.add(post.slug);
  assert(!titles.has(post.title),'unique batch title'); titles.add(post.title);
  assert(!prior.includes(post.slug),`new slug: ${post.slug}`);
  const body=post.sections.map(section=>`${section.heading} ${section.body}`).join(' ');
  const words=body.trim().split(/\s+/).length;
  assert(words>=1200,`${post.slug} has ${words} substantive body words`);
  assert((post.sources?.length??0)>=3,`${post.slug} has at least three authoritative sources`);
  assert(post.internalLinks?.includes('/research'));
  assert(post.internalLinks?.some(link=>link.startsWith('/services/')));
  assert(post.sections.some(section=>/method|cohort|sampling|study|evidence|design/i.test(section.heading)));
  assert(post.sections.some(section=>/limitation/i.test(`${section.heading} ${section.body}`)));
  bodies.push({slug:post.slug,words,text:body.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean)});
}
const shingles=words=>new Set(Array.from({length:Math.max(0,words.length-4)},(_,index)=>words.slice(index,index+5).join(' ')));
let max={score:0,pair:''};
for(let left=0;left<bodies.length;left++)for(let right=left+1;right<bodies.length;right++){
  const a=shingles(bodies[left].text),b=shingles(bodies[right].text); let intersection=0;
  for(const item of a)if(b.has(item))intersection++;
  const score=intersection/(a.size+b.size-intersection);
  if(score>max.score)max={score,pair:`${bodies[left].slug} <> ${bodies[right].slug}`};
}
assert(max.score<0.5,`maximum five-word-shingle Jaccard is ${(max.score*100).toFixed(2)}%`);
console.log(JSON.stringify({status:'PASS',count:batch.length,wordCounts:Object.fromEntries(bodies.map(item=>[item.slug,item.words])),maximumFiveWordShingleJaccard:Number((max.score*100).toFixed(2)),maximumPair:max.pair},null,2));
