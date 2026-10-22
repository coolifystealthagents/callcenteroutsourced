'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const links = Array.from(navigationRef.current?.querySelectorAll<HTMLAnchorElement>('a[href]') ?? [])
    links[0]?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        buttonRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return

      const focusable = [buttonRef.current, ...links].filter(Boolean) as HTMLElement[]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className={`nav site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="logo site-identity" href="/" aria-label="Call Center Outsourced home">
          <img className="site-logo" src="/logo.svg" alt="" width="44" height="44" />
          <span className="site-header-brand">Call Center Outsourced</span>
        </a>
        <a className="parent-brand" href="https://stealthagents.com/" rel="noreferrer">
          <img src="/brand/stealth-agents-logo.png" alt="Stealth Agents" width="150" height="48" />
          <img className="parent-attribution-badge" src="/brand/powered-by-stealthagents.png" alt="Powered by StealthAgents" width="210" height="28" />
        </a>
        <button
          ref={buttonRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen((current) => !current)}
        >
          <span aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav ref={navigationRef} id="primary-navigation" className={`links fleet-nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <a aria-current={isActive('/') ? 'page' : undefined} onClick={() => setOpen(false)} href="/">Home</a>
          <a aria-current={isActive('/services') ? 'page' : undefined} onClick={() => setOpen(false)} href="/services">Services</a>
          <a aria-current={isActive('/contact-us') ? 'page' : undefined} onClick={() => setOpen(false)} href="/contact-us">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
