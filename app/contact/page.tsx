import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Use the canonical coverage request form for Call Center Outsourced.',
  alternates: { canonical: '/contact-us' },
}

export default function Contact() {
  permanentRedirect('/contact-us')
}
