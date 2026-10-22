'use client'

import { useEffect, useState } from 'react'
import type { EditorialTocItem } from './EditorialShell'

type EditorialTocProps = {
  items: readonly EditorialTocItem[]
}

export default function EditorialToc({ items }: EditorialTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const ids = new Set(items.map((item) => item.id))
    const updateFromHash = () => {
      const hashId = decodeURIComponent(window.location.hash.slice(1))
      if (ids.has(hashId)) setActiveId(hashId)
    }
    updateFromHash()

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))
      const id = visible[0]?.target.id
      if (id) setActiveId(id)
    }, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 1] })

    headings.forEach((heading) => observer.observe(heading))
    window.addEventListener('hashchange', updateFromHash)
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', updateFromHash)
    }
  }, [items])

  function activate(id: string, event: React.MouseEvent<HTMLAnchorElement>) {
    const heading = document.getElementById(id)
    if (!heading) return
    event.preventDefault()
    setActiveId(id)
    if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1')
    window.history.pushState(null, '', `#${id}`)
    heading.scrollIntoView({ behavior: 'smooth', block: 'start' })
    heading.focus({ preventScroll: true })
  }

  return <nav className="editorial-toc" aria-labelledby="editorial-toc-heading">
    <h2 id="editorial-toc-heading">Table of contents</h2>
    <ol>
      {items.map((item) => <li key={item.id}>
        <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined} onClick={(event) => activate(item.id, event)}>{item.label}</a>
      </li>)}
    </ol>
  </nav>
}
