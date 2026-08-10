import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root=process.cwd();
const manifestPath='.paperclip/aug10-2026/research.json';
const manifest=JSON.parse(fs.readFileSync(path.join(root,manifestPath),'utf8'));
const source=fs.readFileSync(path.join(root,'app/fleet-data.ts'),'utf8');
const article=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8');
const sitemap=fs.readFileSync(path.join(root,'app/sitemap.xml/route.ts'),'utf8');
const fail=(condition,message)=>{if(condition)throw new Error(message)};
const titleForSlug=(slug)=>{const words=slug.split('-').slice(0,-3).map(x=>x[0].toUpperCase()+x.slice(1));return `${words.join(' ')}: A Research Brief`};
fail(manifest.schemaVersion!==1||manifest.contract!=='sites3-aug10-public-date-v6'||manifest.targetDate!=='2026-08-10'||manifest.family!=='research','manifest contract mismatch');
fail(manifest.entries.length<manifest.minimum,'count below minimum');
const slugs=manifest.entries.map(e=>e.slug);
fail(new Set(slugs).size!==slugs.length,'duplicate slugs');
for(const e of manifest.entries){
  fail(!/^\/research\/[a-z0-9-]+$/.test(e.route)||e.route!==`/research/${e.slug}`,'bad family route');
  fail(e.sourcePath!=='app/fleet-data.ts'||!fs.existsSync(path.join(root,e.sourcePath)),'missing source record');
  fail(e.sourceDate!=='2026-08-10'||e.renderedDate!=='2026-08-10'||e.sourceDateField!=='published','bad date');
  fail(e.provenance!=='original-aug10-batch'&&e.provenance!=='repair-replacement','bad provenance');
  fail(!Array.isArray(e.renderedDateFields)||e.renderedDateFields.length===0||e.renderedDateFields.some(f=>!['datePublished','article:published_time','time[datetime]'].includes(f)),'bad rendered date fields');
  fail(!sitemap.includes('researchPosts.map(r=>`/research/${r.slug}`'),'sitemap route missing');
  const parent=execFileSync('git',['show',`${e.introducedByCommit}^:${e.sourcePath}`],{cwd:root,encoding:'utf8'});
  const introduced=execFileSync('git',['show',`${e.introducedByCommit}:${e.sourcePath}`],{cwd:root,encoding:'utf8'});
  const title=titleForSlug(e.slug);
  fail(parent.includes(title)||!introduced.includes(title),`provenance failed: ${e.slug}`);
  const explicitSlug=`researchBodyV3('${e.slug}',`;
  fail(parent.includes(explicitSlug)||!introduced.includes(explicitSlug),`explicit slug provenance failed: ${e.slug}`);
}
fail(!article.includes('datePublished:post.published')||!article.includes('article:published_time')||!article.includes('<time dateTime={post.published}>'),'render template missing date fields');
fail(!article.includes('alternates:{canonical:url}')||!article.includes('publishedTime:post.published'),'canonical metadata missing');
fail(!source.includes('].slice().sort((a, b) => b.published.localeCompare(a.published))'),'index sort missing');
const builtRoot=path.join(root,'.next/server/app/research');
if(fs.existsSync(builtRoot)){
  const indexHtml=fs.readFileSync(path.join(root,'.next/server/app/research.html'),'utf8');
  const positions=manifest.entries.map(e=>indexHtml.indexOf(`/research/${e.slug}`));
  fail(positions.some(p=>p<0)||positions.some((p,i)=>i>0&&p<=positions[i-1]),'built research index is not newest-first');
  for(const e of manifest.entries){
    const htmlPath=path.join(builtRoot,`${e.slug}.html`);
    fail(!fs.existsSync(htmlPath),`built route missing: ${e.slug}`);
    const html=fs.readFileSync(htmlPath,'utf8');
    fail(!html.includes('2026-08-10'),`built route missing date: ${e.slug}`);
    fail(!html.includes(`https://callcenteroutsourced.com/research/${e.slug}`),`built canonical missing: ${e.slug}`);
    fail(!html.includes('article:published_time'),`built published-time missing: ${e.slug}`);
  }
}
console.log(`research manifest PASS: ${manifest.entries.length} entries`);
