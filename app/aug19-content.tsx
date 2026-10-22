import fs from 'node:fs'
import path from 'node:path'
import type { Metadata } from 'next'
import { Header, Footer, CTA } from './components'
import { EditorialShell, type EditorialSidebarLink, type EditorialTocItem } from './EditorialShell'
import meta from './aug19-meta.json'

const SITE = 'https://callcenteroutsourced.com'
type Family = 'blog' | 'research'
type Item = { family: Family, title: string, description: string, hero: string }

function item(slug: string): Item {
  return (meta as Record<string, Item>)[slug]
}

function source(family: Family, slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8')
  return raw.replace(/^---[\s\S]*?---\s*/, '').replace(/^#[^\n]+\n+/, '').replace(/^\*August 19, 2026\*\s*/, '')
}

function headingId(label: string, used: Map<string, number>) {
  const base = label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section'
  const count = used.get(base) ?? 0
  used.set(base, count + 1)
  return count ? `${base}-${count + 1}` : base
}

function articleBlocks(text: string) {
  const used = new Map<string, number>()
  const tableOfContents: EditorialTocItem[] = []
  const content = text.split(/\n\n+/).filter(Boolean).map((part, index) => {
    if (part.startsWith('## ')) {
      const label = part.slice(3).trim()
      const id = headingId(label, used)
      tableOfContents.push({ id, label })
      return <h2 id={id} key={index}>{label}</h2>
    }
    if (part.startsWith('- ')) {
      return <ul key={index}>{part.split('\n').map((line, lineIndex) => <li key={lineIndex}>{line.replace(/^- /, '').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1: $2')}</li>)}</ul>
    }
    return <p key={index}>{part}</p>
  })
  return { content, tableOfContents }
}

export function getAug19Metadata(family: Family, slug: string): Metadata {
  const entry = item(slug)
  return {
    title: entry.title,
    description: entry.description,
    alternates: { canonical: `/${family}/${slug}` },
    openGraph: { title: entry.title, description: entry.description, url: `${SITE}/${family}/${slug}`, images: [entry.hero] },
  }
}

export function renderAug19Article(family: Family, slug: string) {
  const entry = item(slug)
  const { content, tableOfContents } = articleBlocks(source(family, slug))
  const sidebarLinks: EditorialSidebarLink[] = family === 'research'
    ? [{ href: '/research', label: 'Browse evidence briefs' }, { href: '/services/reporting-and-qa', label: 'Review reporting and QA support' }]
    : [{ href: '/blog', label: 'Browse planning guides' }, { href: '/services', label: 'Compare service scopes' }]
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.title,
    datePublished: '2026-08-19',
    dateModified: '2026-08-19',
    mainEntityOfPage: `${SITE}/${family}/${slug}`,
    image: `${SITE}${entry.hero}`,
  }

  return <>
    <Header />
    <main className="article-shell">
      <article className="container editorial-container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <p className="eyebrow">{family === 'research' ? 'Research' : 'Blog'}</p>
        <h1>{entry.title}</h1>
        <p><time dateTime="2026-08-19">August 19, 2026</time></p>
        <img src={entry.hero} alt={`${entry.title} editorial illustration`} width="1536" height="1024" style={{ width: '100%', height: 'auto', borderRadius: '18px' }} />
        <EditorialShell tableOfContents={tableOfContents} sidebarLinks={sidebarLinks} sidebarHeading={family === 'research' ? 'Related services' : 'Continue planning'}>
          <div className="article-body">{content}</div>
        </EditorialShell>
      </article>
      <CTA />
    </main>
    <Footer />
  </>
}
