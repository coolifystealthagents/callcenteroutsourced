import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import nextConfig from '../next.config.mjs'
import robots from '../app/robots.ts'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')

test('major indexes do not use decorative zero-padded number labels', () => {
  for (const file of ['app/services/page.tsx', 'app/blog/page.tsx', 'app/blog/page/[page]/page.tsx', 'app/research/page.tsx', 'app/research/ResearchIndex.tsx', 'app/research/page/[page]/page.tsx']) {
    assert.doesNotMatch(read(file), />\s*0[1-9]\s*</, file)
  }
})

test('sitemap includes complete dynamic inventory and excludes blocked or redirect routes', () => {
  const source = read('app/sitemap.ts')
  const governedAugustInventory = JSON.parse(read('app/aug19-meta.json'))
  assert.match(source, /blogPosts\.map/)
  assert.match(source, /researchPosts\.map/)
  assert.match(source, /fleetServices\.map/)
  assert.match(source, /Object\.entries\(aug19Meta\)/)
  assert.equal(Object.keys(governedAugustInventory).length, 17)
  assert.match(source, /pageCount - 1/)
  assert.match(source, /return \[\.\.\.new Map\(entries\.map/)
  for (const blocked of ['/contact', '/cancellation', '/blog/page/1', '/research/page/1', '/thank-you', '/thanks-whats-next']) {
    assert.doesNotMatch(source, new RegExp(`path: ['\"]${blocked.replaceAll('/', '\\/')}['\"]`), blocked)
  }
})

test('robots publishes the canonical sitemap and blocks conversion-only routes', () => {
  const value = robots()
  assert.equal(value.sitemap, 'https://callcenteroutsourced.com/sitemap.xml')
  const rules = Array.isArray(value.rules) ? value.rules : [value.rules]
  const disallowed = rules.flatMap((rule) => rule.disallow ?? [])
  assert.ok(disallowed.includes('/thank-you'))
  assert.ok(disallowed.includes('/thanks-whats-next'))
})

test('permanent redirects cover cancellation and duplicate first archive pages', async () => {
  const redirects = await nextConfig.redirects()
  assert.ok(redirects.some((rule) => rule.source === '/cancellation' && rule.destination === '/cancellation-policy' && rule.permanent))
  assert.ok(redirects.some((rule) => rule.source === '/blog/page/1' && rule.destination === '/blog' && rule.permanent))
  assert.ok(redirects.some((rule) => rule.source === '/research/page/1' && rule.destination === '/research' && rule.permanent))
})

test('page metadata titles do not repeat the global template suffix', () => {
  const files = []
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const full = path.join(directory, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name === 'page.tsx') files.push(full)
    }
  }
  walk(path.join(root, 'app'))
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8')
    assert.doesNotMatch(source, /title\s*:\s*(?:`[^`]*|['"][^'"]*)\|\s*(?:\$\{site\.brand\}|Call Center Outsourced)/, path.relative(root, file))
  }
})
