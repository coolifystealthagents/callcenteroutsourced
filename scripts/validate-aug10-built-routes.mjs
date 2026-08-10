import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const base = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const fail = (message) => { throw new Error(message); };
const get = async (path) => {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) fail(`${path} returned ${response.status}`);
  return response.text();
};

const indexPages = [await get('/blog')];
for (let page = 2; page <= 4; page += 1) indexPages.push(await get(`/blog/page/${page}`));
const index = indexPages.join('\n');
const sitemap = await get('/sitemap.xml');
const orderedEntries = [...manifest.entries].sort((a, b) => a.slug.localeCompare(b.slug));
const positions = orderedEntries.map((entry) => index.indexOf(`href="${entry.route}"`));
if (positions.some((position) => position < 0)) fail('manifest route missing from blog index');
if (positions.some((position, index) => index > 0 && position < positions[index - 1])) fail('blog index is not newest-first');

for (const entry of manifest.entries) {
  const html = await get(entry.route);
  if (!html.includes(`"datePublished":"${entry.renderedDate}"`)) fail(`JSON-LD date missing: ${entry.slug}`);
  if (!html.includes(`property="article:published_time" content="${entry.renderedDate}"`)) fail(`OpenGraph date missing: ${entry.slug}`);
  if (!html.includes(`<time dateTime="${entry.renderedDate}">${entry.renderedDate}</time>`)) fail(`visible date missing: ${entry.slug}`);
  if (!html.includes(`<link rel="canonical" href="https://callcenteroutsourced.com${entry.route}"`)) fail(`canonical missing: ${entry.slug}`);
  if (!sitemap.includes(`https://callcenteroutsourced.com${entry.route}`)) fail(`sitemap route missing: ${entry.slug}`);
}
console.log(`PASS ${manifest.entries.length} built blog routes and newest-first index`);
