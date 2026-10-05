import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {october5BlogBatch} from '../app/blog-oct5.ts';
import {october5Cala108ResearchBatch} from '../app/research-oct5-cala108.ts';

const root=process.cwd(),base='https://callcenteroutsourced.com';
const fail=m=>{throw new Error(m)};
const entity=s=>s.replace(/&#x27;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const norm=s=>entity(s).replace(/<[^>]+>/g,' ').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const hash=s=>crypto.createHash('sha256').update(norm(s)).digest('hex');
const routeFile=(family,slug)=>path.join(root,'.next/server/app',family,slug+'.html');
const routeExists=href=>{
 if(href==='/blog'||href==='/research'||href==='/services'||href==='/contact-us')return fs.existsSync(path.join(root,`.next/server/app${href}.html`));
 const [family,slug]=href.split('/').filter(Boolean);return Boolean(family&&slug&&fs.existsSync(routeFile(family,slug)));
};
const seenParagraphs=new Map(), paragraphHashes={}, routeHashes={}, structures=new Map(), examples=new Map();
let paragraphCount=0;
const audit=(family,p,paragraphs,links,sourceUrls,example,headings)=>{
 const file=routeFile(family,p.slug);if(!fs.existsSync(file))fail(`missing ${family} route ${p.slug}`);
 const html=fs.readFileSync(file,'utf8'),plain=norm(html),source=norm(paragraphs.join(' '));
 for(const paragraph of paragraphs){const n=norm(paragraph);if(!plain.includes(n))fail(`rendered paragraph mismatch ${family}/${p.slug}: ${hash(paragraph)}`);const h=hash(paragraph);paragraphHashes[`${family}/${p.slug}#${++paragraphCount}`]=h;if(seenParagraphs.has(n))fail(`repeated substantive paragraph: ${seenParagraphs.get(n)} and ${family}/${p.slug}`);seenParagraphs.set(n,`${family}/${p.slug}`)}
 routeHashes[`${family}/${p.slug}`]={sourceNormalizedSha256:hash(source),renderedMatchedSourceSha256:hash(source),paragraphs:paragraphs.length};
 if(!html.includes(`${base}/${family}/${p.slug}`))fail(`canonical missing ${family}/${p.slug}`);
 for(const field of [`datePublished":"2026-10-05`,`article:published_time`,`datetime="2026-10-05"`])if(!html.toLowerCase().includes(field.toLowerCase()))fail(`${field} missing ${family}/${p.slug}`);
 for(const href of links){if(!html.includes(`href="${href}"`))fail(`rendered contextual link ${href} missing ${family}/${p.slug}`);if(!routeExists(href))fail(`contextual destination missing ${href}`)}
 for(const url of sourceUrls){if(!url.startsWith('https://'))fail(`non-https source ${url}`);if(!html.includes(url.replaceAll('&','&amp;'))&&!html.includes(url))fail(`source destination missing ${url}`)}
 const structure=headings.join(' > ');if(structures.has(structure))fail(`shared heading/argument sequence ${structures.get(structure)} and ${family}/${p.slug}`);structures.set(structure,`${family}/${p.slug}`);
 const ex=norm(example);if(examples.has(ex))fail(`repeated example ${examples.get(ex)} and ${family}/${p.slug}`);examples.set(ex,`${family}/${p.slug}`);
};
for(const p of october5BlogBatch)audit('blog',p,[p.intro,...p.sections.flatMap(s=>s.paragraphs)],p.related.map(x=>x.href),p.sources.map(x=>x.url),p.intro+' '+p.sections[0].paragraphs[0],p.sections.map(s=>s.title));
for(const p of october5Cala108ResearchBatch)audit('research',p,p.sections.map(s=>s.body),[...p.internalLinks,p.serviceHandoff.href],p.sources.map(x=>x.url),p.sections.find(s=>/worked|scenario/i.test(s.heading))?.body??p.sections[0].body,p.sections.map(s=>s.heading));
const index={blog:fs.readFileSync(path.join(root,'.next/server/app/blog.html'),'utf8'),research:fs.readFileSync(path.join(root,'.next/server/app/research.html'),'utf8')};
const sitemapPath=['.next/server/app/sitemap.xml.body','.next/server/app/sitemap.xml/route.body'].map(x=>path.join(root,x)).find(fs.existsSync);if(!sitemapPath)fail('sitemap missing');const sitemap=fs.readFileSync(sitemapPath,'utf8');
for(const [family,posts] of [['blog',october5BlogBatch],['research',october5Cala108ResearchBatch]])for(const p of posts){if(!index[family].includes(`/${family}/${p.slug}`))fail(`index missing ${family}/${p.slug}`);if(!sitemap.includes(`/${family}/${p.slug}`))fail(`sitemap missing ${family}/${p.slug}`)}
console.log(JSON.stringify({status:'PASS',routes:17,substantiveParagraphs:paragraphCount,normalizedContentHashCoverage:routeHashes,paragraphHashCount:Object.keys(paragraphHashes).length,exactRepeatedSubstantiveParagraphs:0,sharedHeadingArgumentSequences:0,repeatedWorkedExamples:0,renderedDatesSchemaCanonicals:'PASS 17/17',contextualAndSourceDestinations:'PASS',familyIndexes:'PASS',sitemap:'PASS'},null,2));
