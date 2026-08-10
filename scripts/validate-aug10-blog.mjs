import fs from 'node:fs';
import crypto from 'node:crypto';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const index = fs.readFileSync('app/blog/page.tsx', 'utf8');
const dataTopics = source.match(/const dailyBlogTopics = \[[\s\S]*?\] as const;/)?.[0] ?? '';
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');

const fail = (message) => { throw new Error(message); };
if (manifest.schemaVersion !== 1 || manifest.contract !== 'sites3-aug10-public-date-v6') fail('manifest contract mismatch');
if (manifest.family !== 'blog' || manifest.targetDate !== '2026-08-10') fail('manifest scope/date mismatch');
if (manifest.entries.length < manifest.minimum || manifest.entries.length < 22) fail('accepted count below minimum');
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== manifest.entries.length) fail('duplicate manifest slug');
if (!source.includes(".sort((a, b) =>")) fail('blog data is not sorted newest-first');
if (!index.includes('posts.map')) fail('blog index is not routed');
if (!route.includes('datePublished:post.published') || !route.includes('publishedTime:post.published') || !route.includes('Published {post.published}')) fail('rendered date fields missing');
if (!route.includes('alternates:{canonical:url}')) fail('canonical metadata missing');
if (!sitemap.includes('blogs.map')) fail('blog sitemap mapping missing');

for (const entry of manifest.entries) {
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) fail(`bad route: ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'published' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') fail(`bad date record: ${entry.slug}`);
  if (!dataTopics.includes(`['${entry.slug}'`)) fail(`source record missing: ${entry.slug}`);
  const topicIndex = [...dataTopics.matchAll(/\['([^']+)'/g)].map((match) => match[1]).lastIndexOf(entry.slug);
  if (topicIndex < 25) fail(`source date is not August 10: ${entry.slug}`);
  if (!sitemap.includes('...blogs.map')) fail(`sitemap eligibility missing: ${entry.slug}`);
}
const expectedOriginal = new Set(['call-center-after-hours-answering','call-center-appointment-scheduling','call-center-bilingual-support-coverage','call-center-callback-queue-management','call-center-call-transfer-rules','call-center-chat-support-sop','call-center-complaint-handling','call-center-crm-data-quality','call-center-disaster-continuity-plan','call-center-email-support-workflow','call-center-escalation-matrix','call-center-first-call-resolution','call-center-holiday-coverage','call-center-inbound-call-script','call-center-language-quality-review','call-center-live-chat-escalation','call-center-omnichannel-routing','call-center-outbound-calling-checklist','call-center-performance-scorecard','call-center-phone-system-migration','call-center-retention-calls','call-center-shift-handoff','call-center-support-capacity-planning','call-center-service-recovery-workflow']);
if (manifest.entries.length !== expectedOriginal.size || manifest.entries.some((entry) => !expectedOriginal.has(entry.slug) || entry.provenance !== 'original-aug10-batch' || entry.introducedByCommit !== '6cf2e4e0031473ef7739ab0c216e934519582a25')) fail('manifest does not match the proven original batch');
console.log(`PASS ${manifest.entries.length} blog entries; manifest ${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
