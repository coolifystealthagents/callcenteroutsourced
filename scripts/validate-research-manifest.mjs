import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';

const root=process.cwd();
const manifestPath='.paperclip/aug10-2026/research.json';
const manifest=JSON.parse(fs.readFileSync(path.join(root,manifestPath),'utf8'));
const source=fs.readFileSync(path.join(root,'app/fleet-data.ts'),'utf8');
const article=fs.readFileSync(path.join(root,'app/research/[slug]/page.tsx'),'utf8');
const sitemap=fs.readFileSync(path.join(root,'app/sitemap.xml/route.ts'),'utf8');
const frozenIntroduction='87eadaa3c1e70c69ba94bb4f52b4e9f5e275f851';
const fail=(c,m)=>{if(c)throw new Error(m)};
fail(manifest.schemaVersion!==1||manifest.contract!=='sites3-aug10-public-date-v6'||manifest.targetDate!=='2026-08-10'||manifest.family!=='research','manifest contract mismatch');
fail(manifest.entries.length!==10||manifest.minimum!==10,'frozen batch must contain exactly 10 entries');
const slugs=manifest.entries.map(e=>e.slug); fail(new Set(slugs).size!==10,'duplicate or missing slugs');
for(const e of manifest.entries){
  fail(e.route!==`/research/${e.slug}`,'bad family route');
  fail(e.sourcePath!=='app/fleet-data.ts'||!fs.existsSync(path.join(root,e.sourcePath))||!source.includes(`'${e.slug}'`),'missing source record');
  fail(e.sourceDateField!=='sourceDate'||e.sourceDate!=='2026-08-10'||e.renderedDate!=='2026-08-10','bad date');
  fail(e.provenance!=='original-aug10-batch','unexpected provenance');
  fail(!Array.isArray(e.renderedDateFields)||e.renderedDateFields.length!==3||!e.renderedDateFields.includes('datePublished')||!e.renderedDateFields.includes('article:published_time')||!e.renderedDateFields.includes('time[datetime]'),'bad rendered date fields');
  fail(e.introducedByCommit!==frozenIntroduction,`frozen original provenance missing: ${e.slug}`);
  fail(!source.includes(`'${e.slug}': '2026-08-10'`),`explicit source date record missing: ${e.slug}`);
}
fail(!article.includes('publishedDate=post.sourceDate ?? post.published')||!article.includes('datePublished:publishedDate')||!article.includes('article:published_time')||!article.includes('<time dateTime={publishedDate}>'),'render template missing date fields');
fail(!article.includes('alternates:{canonical:url}')||!article.includes('publishedTime:publishedDate'),'canonical metadata missing');
fail(!source.includes('.slice().sort((a, b) => b.published.localeCompare(a.published))'),'index sort missing');
fail(!sitemap.includes('researchPosts.map(r=>`/research/${r.slug}`'),'sitemap route missing');
const builtRoot=path.join(root,'.next/server/app/research');
if(fs.existsSync(builtRoot)){
  const indexHtml=fs.readFileSync(path.join(root,'.next/server/app/research.html'),'utf8');
  const positions=manifest.entries.map(e=>indexHtml.indexOf(`/research/${e.slug}`));
  fail(positions.some(p=>p<0)||positions.some((p,i)=>i>0&&p<=positions[i-1]),'built research index is not newest-first');
  for(const e of manifest.entries){const html=fs.readFileSync(path.join(builtRoot,`${e.slug}.html`),'utf8'); fail(!html.includes('2026-08-10')||!html.includes('article:published_time')||!html.includes(`https://callcenteroutsourced.com/research/${e.slug}`),`built route audit failed: ${e.slug}`)}
}
console.log('research manifest PASS: 10 entries');
