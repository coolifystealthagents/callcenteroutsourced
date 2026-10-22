'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const MAIN_ID = 'main-content'

function getMain() {
  return document.querySelector<HTMLElement>('main')
}

export default function SkipLink() {
  const pathname = usePathname()

  useEffect(() => {
    const main = getMain()
    if (main && !main.id) main.id = MAIN_ID
  }, [pathname])

  function skipToMain(event: React.MouseEvent<HTMLAnchorElement>) {
    const main = getMain()
    if (!main) return

    event.preventDefault()
    if (!main.id) main.id = MAIN_ID
    if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1')
    window.history.replaceState(null, '', `#${main.id}`)
    main.focus({ preventScroll: true })
    main.scrollIntoView({ block: 'start' })
  }

  return <a className="skip-link" href={`#${MAIN_ID}`} onClick={skipToMain}>Skip to main content</a>
}
