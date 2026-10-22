import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fleetServices } from '../app/service-profiles.ts'

const root = process.cwd()
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')

const commercialSources = [
  'app/page.tsx',
  'app/services/page.tsx',
  'app/services/[slug]/page.tsx',
  'app/contact-us/page.tsx',
]

test('shared chrome contains exact parent attribution, official logo, sticky menu, and exact destinations', () => {
  const components = read('app/components.tsx')
  const header = read('app/SiteHeader.tsx')
  const css = read('app/globals.css')
  assert.ok((components.match(/Powered by StealthAgents/g) ?? []).length >= 1)
  assert.match(header, /Powered by StealthAgents/)
  assert.match(components, /\/brand\/stealth-agents-logo\.png/)
  assert.match(header, /href="\/"[^>]*>Home</)
  assert.match(header, /href="\/services"[^>]*>Services</)
  assert.match(header, /href="\/contact-us"[^>]*>Contact Us</)
  assert.match(header, /aria-expanded/)
  assert.match(header, /aria-controls/)
  assert.match(header, /Escape/)
  assert.match(css, /\.nav\{[^}]*position:sticky/)
  assert.match(css, /scroll-margin-top/)
  assert.match(header, /powered-by-stealthagents\.png[^>]+alt="Powered by StealthAgents"/)
  assert.match(components, /powered-by-stealthagents\.png[^>]+alt="Powered by StealthAgents"/)
  assert.match(css, /img\.parent-attribution-badge[^}]*width:210px[^}]*height:28px/)
})

test('contact first fold includes one accessible review marquee, the complete form, and then the official team section', async () => {
  const { stealthAgentsReviews } = await import('../app/stealth-agents-reviews.ts')
  assert.ok(stealthAgentsReviews.length >= 10)
  assert.equal(new Set(stealthAgentsReviews.map((review) => review.quote)).size, stealthAgentsReviews.length)
  assert.ok(stealthAgentsReviews.every((review) => review.sourceUrl === 'https://stealthagents.com/' && review.rating === 5))
  const contact = read('app/contact-us/page.tsx')
  const css = read('app/contact-us/contact.css')
  assert.match(contact, /StealthAgents reviews/)
  assert.match(contact, /stealthAgentsReviews/)
  assert.equal(stealthAgentsReviews.length, 14)
  assert.equal((contact.match(/review-marquee-track/g) ?? []).length, 1)
  assert.match(contact, /aria-hidden="true"/)
  assert.match(contact, /14 unique verified reviews/)
  assert.match(contact, /<StandardContactForm/)
  assert.match(contact, /Official team, Bacolod/)
  assert.match(contact, /\/brand\/stealth-agents-team-bacolod\.jpg/)
  assert.match(contact, /\/brand\/stealth-agents-logo\.png/)
  assert.doesNotMatch(contact, /go\.oncehub\.com/)
  assert.doesNotMatch(contact, /0\{i\+1\}/)
  assert.match(css, /@keyframes[^}]*review/i)
  assert.match(css, /prefers-reduced-motion/)
  assert.doesNotMatch(contact, /play|pause|previous|next|pagination/i)
  assert.ok(contact.indexOf('contact-first-fold') < contact.indexOf('Official team, Bacolod'))
  assert.ok(contact.indexOf('Official team, Bacolod') < contact.indexOf('Prepare your request'))
})

test('conversion journey keeps form, scheduler, and confirmation on separate required routes', () => {
  const form = read('app/contact-us/StandardContactForm.tsx')
  const thankYou = read('app/thank-you/page.tsx')
  const confirmation = read('app/thanks-whats-next/page.tsx')
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/)
  assert.match(thankYou, /https:\/\/go\.oncehub\.com\/StealthAgentsTeam/)
  assert.match(thankYou, /<iframe/)
  assert.match(thankYou, /title="Schedule a consultation with the Stealth Agents team"/)
  assert.match(thankYou, /thanks-whats-next/)
  assert.doesNotMatch(thankYou, /href=["']\/thanks-whats-next/)
  assert.doesNotMatch(thankYou, /Open the consultation scheduler|View confirmed booking details/)
  assert.match(confirmation, /consultation booking is confirmed/i)
})

test('every service profile provides long-form decision content and a unique hero', () => {
  const heroPaths = new Set()
  for (const service of fleetServices) {
    assert.match(service.heroImage, /^\/service-heroes\/.+\.svg$/)
    assert.ok(!heroPaths.has(service.heroImage), `${service.slug}: duplicated hero`)
    heroPaths.add(service.heroImage)
    assert.ok(service.audience.length >= 2, `${service.slug}: audience`)
    assert.ok(service.startingScenarios.length >= 2, `${service.slug}: scenarios`)
    assert.ok(service.workflow.length >= 4, `${service.slug}: workflow`)
    assert.ok(service.example.length >= 80, `${service.slug}: example`)
    assert.ok(service.faqs.length >= 3, `${service.slug}: faqs`)
    assert.ok(service.relatedServices.length >= 2, `${service.slug}: related`)
    assert.ok(fs.existsSync(path.join(root, 'public', service.heroImage)), service.heroImage)
  }
})

test('editorial templates provide complete sticky TOCs, supporting sidebars, and mobile fallback', () => {
  const shell = read('app/EditorialShell.tsx')
  const css = read('app/globals.css')
  const editorialCss = read('app/editorial-shell.css')
  for (const file of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    assert.match(read(file), /EditorialShell/, file)
  }
  assert.match(shell, /Table of contents/)
  assert.match(shell, /aria-current/)
  assert.match(shell, /Related services|Continue planning/)
  assert.match(css, /\.editorial-sidebar\{[^}]*position:sticky/)
  assert.match(css, /@media\(max-width:[^)]+\)[\s\S]*\.editorial-sidebar/)
  assert.match(editorialCss, /@media\(max-width:900px\)[\s\S]*\.editorial-toc\{display:none\}/)
})

test('commercial layouts contain no decorative zero-padded labels or alphabet markers', () => {
  for (const file of commercialSources) {
    const source = read(file)
    assert.doesNotMatch(source, /padStart\(2|>0\{[^}]+\}|>0[1-9]</, file)
  }
})

test('required branded assets, registry, branded 404, skip link, and security policy exist', () => {
  for (const file of [
    'public/brand/stealth-agents-logo.png',
    'public/brand/stealth-agents-team-bacolod.jpg',
    'design-registry.json',
    'app/not-found.tsx',
  ]) assert.ok(fs.existsSync(path.join(root, file)), file)
  assert.match(read('app/layout.tsx'), /skip-link/)
  assert.match(read('next.config.mjs'), /Permissions-Policy/)
})

test('visible application copy contains no em dash or en dash characters', () => {
  const files = []
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (/\.(?:ts|tsx|md)$/.test(entry.name)) files.push(full)
    }
  }
  walk(path.join(root, 'app'))
  const offenders = files.filter((file) => /[—–]/u.test(fs.readFileSync(file, 'utf8')))
  assert.deepEqual(offenders.map((file) => path.relative(root, file)), [])
})
