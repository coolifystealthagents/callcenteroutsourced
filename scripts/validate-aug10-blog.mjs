import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/blog/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const fail = (message) => { throw new Error(message); };
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' });
const sourceAt = (commit) => git('show', `${commit}:app/data.ts`);
const topicBlock = (text) => text.match(/const dailyBlogTopics = \[[\s\S]*?\] as const;/)?.[0] ?? '';
const hasSlug = (text, slug) => topicBlock(text).includes(`['${slug}'`);

if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') fail('manifest contract mismatch');
if (manifest.family !== 'blog' || manifest.targetDate !== '2026-08-10') fail('manifest scope/date mismatch');
if (manifest.entries.length < 22 || new Set(manifest.entries.map((e) => e.slug)).size !== manifest.entries.length) fail('count or uniqueness failure');
if (!source.includes('.sort((a, b) =>')) fail('blog data is not sorted newest-first');
if (!index.includes('posts.map')) fail('blog index is not routed');
if (!route.includes('datePublished:post.published') || !route.includes('article:published_time') || !route.includes('<time dateTime={post.published}')) fail('rendered date fields missing');
if (!route.includes('alternates:{canonical:url}') || !sitemap.includes('...blogs.map')) fail('canonical or sitemap eligibility missing');

for (const entry of manifest.entries) {
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) fail(`bad route: ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') fail(`bad date record: ${entry.slug}`);
  if (!['datePublished', 'article:published_time', 'time[datetime]'].includes(entry.renderedDateFields[0]) || entry.renderedDateFields.some((field) => !['datePublished', 'article:published_time', 'time[datetime]'].includes(field))) fail(`unsupported rendered field: ${entry.slug}`);
  if (!hasSlug(source, entry.slug)) fail(`source record missing: ${entry.slug}`);
  const parent = sourceAt(`${entry.introducedByCommit}^`);
  const introduced = sourceAt(entry.introducedByCommit);
  if (hasSlug(parent, entry.slug) || !hasSlug(introduced, entry.slug)) fail(`provenance diff failure: ${entry.slug}`);
  if (!sitemap.includes('...blogs.map')) fail(`sitemap mapping missing: ${entry.slug}`);
}
console.log(`PASS ${manifest.entries.length} blog entries; manifest ${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
