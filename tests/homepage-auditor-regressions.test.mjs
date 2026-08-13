import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fleetServices } from '../app/fleet-data.ts'
import { homepageServiceCards } from '../app/homepage-service-cards.ts'
import { august13ReplacementBlogBatch } from '../app/blog-aug13-replacements.ts'

const root = process.cwd()
const homepage = fs.readFileSync(path.join(root, 'app/page.tsx'), 'utf8')
const components = fs.readFileSync(path.join(root, 'app/components.tsx'), 'utf8')
const routedSlugs = new Set(fleetServices.map((service) => service.slug))

test('each rendered homepage service card targets a unique generated service route', () => {
  assert.equal(homepageServiceCards.length, 4)
  assert.equal(new Set(homepageServiceCards.map((card) => card.slug)).size, 4)
  for (const card of homepageServiceCards) {
    assert.ok(routedSlugs.has(card.slug), `missing generated service route for ${card.slug}`)
    assert.match(card.title, /\S/)
    assert.match(card.desc, /\S/)
  }
  assert.match(homepage, /homepageServiceCards\.map\(\(service, index\) =>/)
  assert.match(homepage, /href=\{`\/services\/\$\{service\.slug\}`\}/)
})

test('all homepage image definitions consumed by rendered images have non-empty labels', () => {
  for (const card of homepageServiceCards) {
    assert.match(card.imageAlt, /\S/, `${card.slug} image label`)
    assert.ok(fs.existsSync(path.join(root, 'public', card.icon.replace(/^\//, ''))), card.icon)
  }
  assert.match(homepage, /src=\{service\.icon\} alt=\{service\.imageAlt\}/)
  assert.match(homepage, /alt="Illustration of a customer support professional providing clear call coverage"/)
  assert.match(homepage, /alt="Customer support team reviewing quality operations"/)
  assert.match(components, /alt=\{`\$\{site\.brand\} logo`\}/)
})

test('August 13 blog internal service links target generated service routes', () => {
  for (const post of august13ReplacementBlogBatch) {
    for (const link of [...post.related, ...post.banners]) {
      const match = link.href.match(/^\/services\/([^/?#]+)$/)
      assert.ok(match, `${post.slug}: invalid service link ${link.href}`)
      assert.ok(routedSlugs.has(match[1]), `${post.slug}: missing generated service route ${link.href}`)
    }
  }
})
