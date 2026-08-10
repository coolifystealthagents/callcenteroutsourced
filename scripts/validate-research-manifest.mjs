import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root=process.cwd();
const manifestPath='.paperclip/aug10-2026/research.json';
const manifest=JSON.parse(fs.readFileSync(path.join(root,manifestPath),'utf8'));
const source=fs.readFileSync(path.join(root,'app/fleet-data.ts'),'utf8');
const article=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8');
const fail=(condition,m)=>{if(condition)throw new Error(m)};
const titleForSlug=(slug)=>{const words=slug.split('-').slice(0,-3).map(x=>x[0].toUpperCase()+x.slice(1));return `${words.join(' ')}: A Research Brief`};
fail(manifest.entries.length<manifest.minimum,'count below minimum');
const slugs=manifest.entries.map(e=>e.slug);
fail(new Set(slugs).size!==slugs.length,'duplicate slugs');
for(const e of manifest.entries){
  fail(!/^\/research\/[a-z0-9-]+$/.test(e.route)||e.route!==`/research/${e.slug}`,'bad family route');
  fail(e.sourcePath!=='app/fleet-data.ts'||!fs.existsSync(path.join(root,e.sourcePath)),'missing source record');
  fail(e.sourceDate!=='2026-08-10'||e.renderedDate!=='2026-08-10'||e.sourceDateField!=='published','bad date');
  const parent=execFileSync('git',['show',`${e.introducedByCommit}^:${e.sourcePath}`],{cwd:root,encoding:'utf8'});
  const introduced=execFileSync('git',['show',`${e.introducedByCommit}:${e.sourcePath}`],{cwd:root,encoding:'utf8'});
  const title=titleForSlug(e.slug);
  fail(parent.includes(title)||!introduced.includes(title),`provenance failed: ${e.slug}`);
}
fail(!article.includes('datePublished:post.published')||!article.includes('article:published_time')||!article.includes('<time dateTime={post.published}>'),'render template missing date fields');
fail(!article.includes('alternates:{canonical:url}')||!article.includes('publishedTime:post.published'),'canonical metadata missing');
fail(!fs.readFileSync(path.join(root,'app/sitemap.xml/route.ts'),'utf8').includes('researchPosts.map(r=>`/research/${r.slug}`)'),'sitemap route missing');
fail(!source.includes('].slice().sort((a, b) => b.published.localeCompare(a.published))'),'index sort missing');
const builtRoot=path.join(root,'.next/server/app/research');
if(fs.existsSync(builtRoot)){
  const files=[]; const walk=d=>{for(const n of fs.readdirSync(d)){const p=path.join(d,n);const s=fs.statSync(p);s.isDirectory()?walk(p):files.push(p)}}; walk(builtRoot);
  const bundle=files.filter(f=>f.endsWith('/[slug]/page.js')).map(f=>fs.readFileSync(f,'utf8')).join('\n');
  for(const e of manifest.entries){const matches=files.filter(f=>f.includes(e.slug)&&/\.html$/.test(f)); if(matches.length)fail(!matches.some(f=>fs.readFileSync(f,'utf8').includes('2026-08-10')),`built route missing date: ${e.slug}`); else fail(!bundle.includes('2026-08-10')||!bundle.includes('article:published_time'),`built route bundle missing date fields: ${e.slug}`);}
}
console.log(`research manifest PASS: ${manifest.entries.length} entries`);
