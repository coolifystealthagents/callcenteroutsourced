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
const topicSlugs = (text) => [...topicBlock(text).matchAll(/\['([^']+)'/g)].map((match) => match[1]);
const hasSlug = (text, slug) => topicBlock(text).includes(`['${slug}'`);
const publicationDate = (text, slug) => text.match(new RegExp(`'${slug}': '([^']+)'`))?.[1];

const topLevelKeys = ['schemaVersion', 'contract', 'targetDate', 'family', 'domain', 'repository', 'branch', 'minimum', 'priorRunId', 'priorIssueId', 'validationCommands', 'cleanBuildPassed', 'existingCompliancePassed', 'indexNewestFirstPassed', 'entries'];
if (JSON.stringify(Object.keys(manifest)) !== JSON.stringify(topLevelKeys)) fail('manifest key shape mismatch');
if (manifest.repository !== 'coolifystealthagents/callcenteroutsourced' || manifest.branch !== 'main') fail('repository or branch identity mismatch');
if (!Array.isArray(manifest.validationCommands) || manifest.validationCommands.length < 5 || manifest.validationCommands.some((command) => typeof command !== 'string' || command.length === 0)) fail('validation command evidence missing');
const entryKeys = ['slug', 'route', 'sourcePath', 'provenance', 'introducedByCommit', 'sourceDateField', 'sourceDate', 'renderedDateFields', 'renderedDate'];

if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') fail('manifest contract mismatch');
if (manifest.family !== 'blog' || manifest.targetDate !== '2026-08-10') fail('manifest scope/date mismatch');
if (manifest.entries.length < 22 || new Set(manifest.entries.map((e) => e.slug)).size !== manifest.entries.length) fail('count or uniqueness failure');
if (!source.includes('const dailyBlogPublicationDates') || source.includes('index < 25')) fail('blog dates are not explicit per-slug source data');
if (!source.includes('.sort((a, b) =>')) fail('blog data is not sorted newest-first');
if (!index.includes('posts.map')) fail('blog index is not routed');
if (!route.includes('datePublished:post.published') || !route.includes('article:published_time') || !route.includes('<time dateTime={post.published}')) fail('rendered date fields missing');
if (!route.includes('alternates:{canonical:url}') || !sitemap.includes('...blogs.map')) fail('canonical or sitemap eligibility missing');

for (const entry of manifest.entries) {
  if (JSON.stringify(Object.keys(entry)) !== JSON.stringify(entryKeys)) fail(`entry key shape mismatch: ${entry.slug}`);
  if (!['original-aug10-batch', 'repair-replacement'].includes(entry.provenance)) fail(`bad provenance label: ${entry.slug}`);
  if (!/^[0-9a-f]{40}$/.test(entry.introducedByCommit)) fail(`bad introducing commit: ${entry.slug}`);
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) fail(`bad route: ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') fail(`bad date record: ${entry.slug}`);
  if (!['datePublished', 'article:published_time', 'time[datetime]'].includes(entry.renderedDateFields[0]) || entry.renderedDateFields.some((field) => !['datePublished', 'article:published_time', 'time[datetime]'].includes(field))) fail(`unsupported rendered field: ${entry.slug}`);
  if (!hasSlug(source, entry.slug)) fail(`source record missing: ${entry.slug}`);
  if (publicationDate(source, entry.slug) !== '2026-08-10') fail(`explicit source date missing: ${entry.slug}`);
  const parent = sourceAt(`${entry.introducedByCommit}^`);
  const introduced = sourceAt(entry.introducedByCommit);
  if (hasSlug(parent, entry.slug) || !hasSlug(introduced, entry.slug)) fail(`provenance diff failure: ${entry.slug}`);
  if (!sitemap.includes('...blogs.map')) fail(`sitemap mapping missing: ${entry.slug}`);
}
console.log(`PASS ${manifest.entries.length} blog entries; manifest ${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
