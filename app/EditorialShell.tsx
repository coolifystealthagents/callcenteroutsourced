import type { ReactNode } from 'react'
import EditorialToc from './EditorialToc'
import './editorial-shell.css'

export type EditorialTocItem = {
  id: string
  label: string
}

export type EditorialSidebarLink = {
  href: string
  label: string
}

type EditorialShellProps = {
  children: ReactNode
  tableOfContents: readonly EditorialTocItem[]
  sidebarLinks: readonly EditorialSidebarLink[]
  sidebarHeading?: 'Related services' | 'Continue planning'
}

/** Table of contents anatomy with a client TOC that owns aria-current state. */
export function EditorialShell({
  children,
  tableOfContents,
  sidebarLinks,
  sidebarHeading = 'Continue planning',
}: EditorialShellProps) {
  return <div className="editorial-shell">
    <div className="editorial-content">{children}</div>
    <aside className="editorial-sidebar" aria-label="Article navigation and related resources">
      <EditorialToc items={tableOfContents} />
      {sidebarLinks.length > 0 && <section className="editorial-support" aria-labelledby="editorial-support-heading">
        <h2 id="editorial-support-heading">{sidebarHeading}</h2>
        <ul>{sidebarLinks.map((link) => <li key={`${link.href}-${link.label}`}><a href={link.href}>{link.label}</a></li>)}</ul>
      </section>}
    </aside>
  </div>
}
