import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import nextConfig from '../next.config.mjs'
import { fleetServices } from '../app/fleet-data.ts'
import { homepageServiceCards } from '../app/homepage-service-cards.ts'
import { isTrustedContactOrigin } from '../app/contact-request.ts'

const root = process.cwd()
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8')
const normalizedSignature = (items = []) => items.map((item) => String(item).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()).join('|')

const governedServiceSlugs = [
  'inbound-call-handling',
  'omnichannel-customer-support',
  'outbound-appointment-setting',
  'order-management-support',
  'tier-one-technical-support',
  'collections-reminder-calls',
  'customer-win-back-support',
  'dispatch-coordination',
  'survey-and-feedback-calls',
  'workforce-reporting-support',
  'operations-support',
  'customer-support',
  'reporting-and-qa',
]

test('homepage headline names the outsourced call-center service directly', () => {
  const homepage = read('app/page.tsx')
  assert.match(homepage, /<h1>[^<]*(?:outsourced call[ -]center|call[ -]center outsourcing)[^<]*<\/h1>/i)
})

test('homepage desktop hero keeps its primary CTA inside the initial fold', () => {
  const homepage = read('app/page.tsx')
  const styles = read('app/redesign.css')
  assert.doesNotMatch(homepage, /clear next step/i)
  assert.match(homepage, /Outsourced call center coverage for your real queues/i)
  assert.doesNotMatch(styles, /\.cco-hero-copy h1\{[^}]*6\.4vw/)
})

test('blog content begins with site navigation and does not render global banners outside the page shell', () => {
  const layout = read('app/blog/layout.tsx')
  assert.doesNotMatch(layout, /BlogBanner|blog-banner-profile/)
})

test('contact country selector uses font-safe text labels rather than emoji flags', () => {
  const form = read('app/contact-us/StandardContactForm.tsx')
  assert.match(form, /\["US", "\+1"\]/)
  assert.doesNotMatch(form, /🇺🇸|🇨🇦|🇵🇭/u)
})

test('every governed service has a substantive and distinct operating profile', () => {
  const bySlug = new Map(fleetServices.map((service) => [service.slug, service]))
  assert.deepEqual([...bySlug.keys()].sort(), [...governedServiceSlugs].sort())

  const signatures = new Set()
  for (const slug of governedServiceSlugs) {
    const service = bySlug.get(slug)
    assert.ok(service, slug)
    assert.match(service.problem ?? '', /\S.{35,}/, `${slug}: problem`)
    assert.ok((service.sourceRecords ?? []).length >= 3, `${slug}: source records`)
    assert.ok(service.tasks.length >= 4, `${slug}: tasks`)
    assert.ok((service.outputs ?? []).length >= 3, `${slug}: outputs`)
    assert.ok((service.managerApprovals ?? []).length >= 3, `${slug}: manager approvals`)
    assert.ok(service.controls.length >= 4, `${slug}: controls`)
    assert.ok((service.boundaries ?? []).length >= 3, `${slug}: boundaries`)
    assert.ok(service.firstWeek.length >= 4, `${slug}: first week`)

    const signature = normalizedSignature([
      service.problem,
      ...(service.sourceRecords ?? []),
      ...service.tasks,
      ...(service.outputs ?? []),
      ...(service.managerApprovals ?? []),
      ...service.controls,
      ...(service.boundaries ?? []),
      ...service.firstWeek,
    ])
    assert.ok(!signatures.has(signature), `${slug}: duplicated operating profile`)
    signatures.add(signature)
  }
})

test('legacy high-intent service destinations are live governed service profiles', () => {
  const slugs = new Set(fleetServices.map((service) => service.slug))
  for (const slug of ['operations-support', 'customer-support', 'reporting-and-qa']) {
    assert.ok(slugs.has(slug), `missing ${slug}`)
  }
})

test('homepage service labels match their governed destination profiles', () => {
  const bySlug = new Map(fleetServices.map((service) => [service.slug, service]))
  const renderedHomepage = read('app/page.tsx')
  for (const card of homepageServiceCards) {
    const destination = bySlug.get(card.slug)
    assert.ok(destination, `${card.title}: missing ${card.slug}`)
    assert.equal(card.title, destination.title, `${card.title}: label does not match ${card.slug}`)
  }
  assert.match(renderedHomepage, /href="\/services\/reporting-and-qa"[^>]*>See the QA scope[\s\S]{0,30}<\/a>/)
})

test('service structured data does not guess the legal provider or misuse staff location as area served', () => {
  const page = read('app/services/[slug]/page.tsx')
  assert.doesNotMatch(page, /provider\s*:/)
  assert.doesNotMatch(page, /areaServed\s*:/)
})

test('public conversion pages contain no unverified parent-brand testimonials or claims', () => {
  const pages = [
    'app/contact-us/page.tsx',
    'app/thank-you/page.tsx',
    'app/contact/page.tsx',
  ]
  for (const file of pages) {
    const source = read(file)
    assert.doesNotMatch(source, /Stealth Agents|TestimonialsRail|Forbes|top rated|35\+ industries/i, file)
  }
})

test('conversion pages use first-party repository illustrations instead of unverified vendor or stock assets', () => {
  const contact = read('app/contact-us/page.tsx')
  const thankYou = read('app/thank-you/page.tsx')
  const homepage = read('app/page.tsx')
  const cards = read('app/homepage-service-cards.ts')
  assert.doesNotMatch(contact, /call-center-team\.jpg|images\.unsplash\.com/i)
  assert.doesNotMatch(thankYou, /thank-you-hero\.png|images\.unsplash\.com/i)
  for (const source of [contact, thankYou, homepage, cards]) {
    assert.doesNotMatch(source, /getillustrations|images\.unsplash\.com/i)
    assert.match(source, /\/illustrations\/call-center-original\//)
  }
  const manifest = read('public/illustrations/call-center-original/PROVENANCE.md')
  assert.match(manifest, /authored for Call Center Outsourced/i)
  assert.match(manifest, /SHA-256/i)
  assert.doesNotMatch(manifest, /purchase|vendor|GetIllustrations/i)
})

test('research pages describe desk-reviewed evidence briefs rather than unsupported original research projects', () => {
  const index = read('app/research/page.tsx')
  const article = read('app/research/[slug]/page.tsx')
  const records = read('app/fleet-data.ts')
  assert.doesNotMatch(index, /original research|source-backed research/i)
  assert.match(index, /evidence briefs|desk review/i)
  assert.doesNotMatch(article, /ResearchProject|authoritative sources reviewed/i)
  assert.doesNotMatch(records, /original research|authoritative sources reviewed/i)
  assert.match(article, /['"]@type['"]\s*:\s*['"]Article['"]/)
})

test('unverified named testimonial implementation is not shipped', () => {
  assert.equal(fs.existsSync(path.join(root, 'app/booking-components.tsx')), false)
})

test('privacy policy names the external inquiry and analytics processor relationship', () => {
  const privacy = read('app/privacy/page.tsx')
  assert.match(privacy, /Stealth Agents/i)
  assert.match(privacy, /analytics|lead-routing|inquir/i)
})

test('contact form never converts analytics availability into a false success redirect', () => {
  const form = read('app/contact-us/StandardContactForm.tsx')
  const successRedirect = form.indexOf('window.location.assign("/thank-you")')
  const outerCatch = form.indexOf('} catch {', successRedirect)
  const catchBlock = form.slice(outerCatch, form.indexOf('setSubmitting(false);', outerCatch) + 'setSubmitting(false);'.length)
  assert.doesNotMatch(catchBlock, /acrTracker|trackLead|window\.location\.assign/)
  assert.match(form, /if \(!response\.ok\) throw new Error/)
})

test('contact origin validation accepts public proxy origins and rejects hostile origins', () => {
  const internalUrl = 'http://0.0.0.0:3000/api/contact'
  assert.equal(isTrustedContactOrigin('https://callcenteroutsourced.com', internalUrl), true)
  assert.equal(isTrustedContactOrigin('https://www.callcenteroutsourced.com', internalUrl), true)
  assert.equal(isTrustedContactOrigin('https://attacker.example', internalUrl), false)
  assert.equal(isTrustedContactOrigin(null, internalUrl), true)
  assert.equal(isTrustedContactOrigin('http://127.0.0.1:3117', 'http://127.0.0.1:3117/api/contact'), true)
  assert.equal(isTrustedContactOrigin('http://127.0.0.1:3117', 'http://localhost:3117/api/contact'), true)
  assert.equal(isTrustedContactOrigin('http://127.0.0.1:3118', 'http://localhost:3117/api/contact'), false)
  const route = read('app/api/contact/route.ts')
  assert.match(route, /location:\s*['"]\/thank-you\?lead=accepted['"]/)
  assert.doesNotMatch(route, /NextResponse\.redirect|new URL\(['"]\/thank-you/)
})

test('unsupported ranking route permanently redirects to a claim-safe provider evaluation guide', () => {
  const oldRoute = read('app/blog/top-25-call-center-outsourcing-companies/page.tsx')
  const newRoutePath = 'app/blog/call-center-provider-evaluation-checklist/page.tsx'
  assert.ok(fs.existsSync(path.join(root, newRoutePath)))
  const newRoute = read(newRoutePath)
  assert.match(oldRoute, /permanentRedirect\(['"]\/blog\/call-center-provider-evaluation-checklist['"]\)/)
  assert.doesNotMatch(newRoute, /Stealth Agents|ranked first|#1|top rated|best-hire-or-money-back/i)
  assert.match(newRoute, /evaluation|compare|evidence|pilot/i)
})

test('all previously noncanonical route families declare self-canonical metadata', () => {
  const files = [
    'app/page.tsx',
    'app/blog/page.tsx',
    'app/blog/page/[page]/page.tsx',
    'app/cancellation-policy/page.tsx',
    'app/contact/page.tsx',
    'app/privacy/page.tsx',
    'app/research/page.tsx',
    'app/services/page.tsx',
    'app/terms/page.tsx',
    'app/thank-you/page.tsx',
  ]
  for (const file of files) assert.match(read(file), /canonical/, file)
})

test('duplicate contact route redirects permanently to the canonical contact page', async () => {
  assert.equal(typeof nextConfig.redirects, 'function')
  const redirects = await nextConfig.redirects()
  assert.ok(redirects.some((rule) => rule.source === '/contact' && rule.destination === '/contact-us' && rule.permanent === true))
})

test('proxy-aware canonical redirect helper handles www and original HTTP safely', async () => {
  const helperPath = path.join(root, 'app/canonical-request.ts')
  assert.ok(fs.existsSync(helperPath), 'missing app/canonical-request.ts')
  if (!fs.existsSync(helperPath)) return
  const { canonicalRedirectUrl } = await import('../app/canonical-request.ts')
  assert.equal(canonicalRedirectUrl('https://www.callcenteroutsourced.com/path?q=1', new Headers()), 'https://callcenteroutsourced.com/path?q=1')
  assert.equal(canonicalRedirectUrl('https://internal:3000/path?q=1', new Headers({ host: 'callcenteroutsourced.com', 'x-forwarded-proto': 'http' })), 'https://callcenteroutsourced.com/path?q=1')
  assert.equal(canonicalRedirectUrl('https://internal:3000/path', new Headers({ host: 'evil.example', 'x-forwarded-proto': 'http' })), null)
  assert.equal(canonicalRedirectUrl('https://callcenteroutsourced.com/path', new Headers({ host: 'callcenteroutsourced.com', 'x-forwarded-proto': 'https' })), null)
})

test('current Website Optimization Project ledger records service decisions and media provenance', () => {
  const ledgerPath = path.join(root, 'docs/website-optimization-remediation-2026-09-18.md')
  assert.ok(fs.existsSync(ledgerPath), 'missing current remediation ledger')
  if (!fs.existsSync(ledgerPath)) return
  const ledger = fs.readFileSync(ledgerPath, 'utf8')
  for (const slug of governedServiceSlugs) assert.match(ledger, new RegExp(`\\b${slug}\\b`), slug)
  assert.match(ledger, /first-party.*illustration/i)
  assert.match(ledger, /external.*not verified/i)
  assert.match(ledger, /historical.*not verified/i)
})

test('production packaging uses the repository lockfile and an explicit tracing root', () => {
  const dockerfile = read('Dockerfile')
  const config = read('next.config.mjs')
  assert.match(dockerfile, /RUN npm ci(?:\s|$)/)
  assert.doesNotMatch(dockerfile, /RUN npm install(?:\s|$)/)
  assert.match(config, /outputFileTracingRoot/)
  assert.match(config, /fileURLToPath\(import\.meta\.url\)/)
})
