import type { Metadata } from 'next'
import { ResearchIndex } from './ResearchIndex'

const title = 'Call Center Evidence Briefs'
const description = 'Desk-reviewed evidence briefs for planning Philippines-based support roles, controls, ownership, and handoffs.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/research' },
  openGraph: { title, description, url: '/research', images: [{ url: '/index-heroes/research-evidence-map.svg', alt: 'Evidence map connecting published sources to operating decisions' }] },
}

export default function Research() {
  return <ResearchIndex currentPage={1} />
}
