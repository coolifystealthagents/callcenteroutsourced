import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { researchPosts, researchPostsPerPage } from '../../../fleet-data'
import { ResearchIndex } from '../../ResearchIndex'
import { researchPageCount, researchPagePath, validResearchArchivePage } from '../../research-pagination'

const pages = researchPageCount(researchPosts.length, researchPostsPerPage)

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, pages - 1) }, (_, index) => ({ page: String(index + 2) }))
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params
  const currentPage = validResearchArchivePage(page, pages)
  if (currentPage === null) notFound()
  const title = `Call Center Evidence Briefs, Page ${currentPage}`
  const description = `Page ${currentPage} of desk-reviewed evidence briefs for call center roles, controls, ownership, and handoffs.`
  const canonical = researchPagePath(currentPage)
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, images: [{ url: '/index-heroes/research-evidence-map.svg', alt: 'Evidence map connecting published sources to operating decisions' }] },
  }
}

export default async function ResearchArchivePage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const currentPage = validResearchArchivePage(page, pages)
  if (currentPage === null) notFound()
  return <ResearchIndex currentPage={currentPage} />
}