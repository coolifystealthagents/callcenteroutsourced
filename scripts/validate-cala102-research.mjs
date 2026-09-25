import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {september25Cala102ResearchBatch as batch} from '../app/research-sep25-cala102.ts';

assert.equal(batch.length,5,'exactly five Research articles');
const loader=await readFile(new URL('../app/fleet-data.ts',import.meta.url),'utf8');
assert.match(loader,/september25Cala102ResearchBatch/,'batch is loaded');
const allFiles=['research-sep24-cala101.ts','research-sep23-cala99.ts','research-sep22-cala97.ts','research-sep18-cala92.ts','research-sep14.ts','research-sep11.ts','research-sep10.ts','research-sep9.ts','research-sep8.ts','research-sep7.ts','research-sep4.ts','research-sep3.ts','research-sep2.ts','research-sep1.ts','research-aug23.ts','research-aug21.ts','research-aug20.ts','research-aug19.ts','research-aug17.ts','research-aug14.ts','research-aug13-replacements.ts'];
const prior=(await Promise.all(allFiles.map(f=>readFile(new URL(`../app/${f}`,import.meta.url),'utf8')))).join('\n');
const slugs=new Set();
for(const post of batch){
  assert.equal(post.published,'2026-09-25');
  assert.equal(post.sourceDate,'2026-09-25');
  assert(!slugs.has(post.slug),'unique batch slug'); slugs.add(post.slug);
  assert(!prior.includes(`slug:'${post.slug}'`)&&!prior.includes(`"slug": "${post.slug}"`),`new slug: ${post.slug}`);
  const words=[post.title,post.excerpt,...post.sections.map(s=>`${s.heading} ${s.body}`)].join(' ').trim().split(/\s+/).length;
  assert(words>=1200,`${post.slug} has ${words} substantive words`);
  assert((post.sources?.length??0)>=4,`${post.slug} has authoritative sources`);
  assert(post.internalLinks?.includes('/research'));
  assert(post.internalLinks?.some(x=>x.startsWith('/services/')));
  assert(post.sections.some(s=>/method/i.test(s.heading)));
  assert(post.sections.some(s=>/limitations/i.test(s.heading)));
}
console.log('PASS: 5/5 new Research articles; dates, word counts, sources, methodology, limitations, uniqueness, and internal links verified');
