import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const source=fs.readFileSync(path.join(root,'app/blog-sep25.ts'),'utf8');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-09-25/blog.json'),'utf8'));
const slugs=[...source.matchAll(/\{slug:'([^']+)'/g)].map((match)=>match[1]);
if(slugs.length!==12) throw new Error(`expected 12 Blog topics, found ${slugs.length}`);
if(new Set(slugs).size!==12) throw new Error('duplicate slug inside CALA-103 batch');
if(manifest.requiredCount!==12||manifest.entries.length!==12) throw new Error('manifest must contain exactly 12 entries');
if(!['provisional-until-first-live','reconciled-before-combined-push'].includes(manifest.dateStatus)) throw new Error('invalid publication-date state');
if(JSON.stringify(slugs)!==JSON.stringify(manifest.entries.map((entry)=>entry.slug))) throw new Error('source and manifest slugs differ');
const otherSources=fs.readdirSync(path.join(root,'app')).filter((name)=>/^blog-.*\.ts$/.test(name)&&name!=='blog-sep25.ts').map((name)=>fs.readFileSync(path.join(root,'app',name),'utf8')).join('\n');
for(const slug of slugs) if(otherSources.includes(`slug:'${slug}'`)||otherSources.includes(`slug: "${slug}"`)) throw new Error(`existing Blog slug reused: ${slug}`);
if(!source.includes("makeBuyerGuide(topic,index,september25BlogPublicationDate)")) throw new Error('batch must use the established long-form guide schema');
if(!fs.readFileSync(path.join(root,'app/data.ts'),'utf8').includes('...september25BlogBatch')) throw new Error('batch is not wired into Blog routes');
console.log('CALA-103 Blog validation passed: exactly 12 new, unique, routed long-form entries; publication-date state is explicit.');
