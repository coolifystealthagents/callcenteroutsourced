import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const source=fs.readFileSync(path.join(root,'app/blog-sep28.ts'),'utf8');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-09-28/blog.json'),'utf8'));
const slugs=[...source.matchAll(/\{slug:'([^']+)'/g)].map((match)=>match[1]);
if(slugs.length!==12) throw new Error(`expected 12 Blog topics, found ${slugs.length}`);
if(new Set(slugs).size!==12) throw new Error('duplicate slug inside CALA-104 batch');
if(manifest.requiredCount!==12||manifest.preparedCount!==12||manifest.entries.length!==12) throw new Error('manifest must contain exactly 12 prepared entries');
if(manifest.publicationDate!=='2026-09-28'||manifest.timezone!=='UTC'||manifest.dateStatus!=='source-date-reconciled-awaiting-first-live') throw new Error('invalid pre-live publication-date state');
if(manifest.entries.some((entry)=>entry.sourcePublicationDate!=='2026-09-28'||entry.actualPublicationDate!==null)) throw new Error('pre-live manifest must preserve source date and must not claim an actual publication date');
if(JSON.stringify(slugs)!==JSON.stringify(manifest.entries.map((entry)=>entry.slug))) throw new Error('source and manifest slugs differ');
if(manifest.entries.some((entry)=>entry.bodyWords<900)) throw new Error('body-only Blog depth is below 900 words');
if(manifest.audit.maximumPairwiseFiveWordShingleJaccard>=0.5) throw new Error('five-word-shingle overlap is at or above 50%');
const otherSources=fs.readdirSync(path.join(root,'app')).filter((name)=>/^blog-.*\.ts$/.test(name)&&name!=='blog-sep28.ts').map((name)=>fs.readFileSync(path.join(root,'app',name),'utf8')).join('\n');
for(const slug of slugs) if(otherSources.includes(`slug:'${slug}'`)||otherSources.includes(`slug: "${slug}"`)) throw new Error(`existing Blog slug reused: ${slug}`);
if(!fs.readFileSync(path.join(root,'app/data.ts'),'utf8').includes('...september28BlogBatch')) throw new Error('batch is not wired into Blog routes');
console.log('CALA-104 Blog validation passed: exact 12 new routed entries, >=900 body words, maximum overlap below 50%, provisional UTC date explicit.');
