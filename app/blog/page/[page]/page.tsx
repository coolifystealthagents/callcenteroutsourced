import { BlogListing } from '../../blog-listing';
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header, Footer } from '../../../components'
import { blogPosts } from '../../../data'
import { postsPerPage } from '../../../fleet-data'
import { EditorialIndexCard, editorialCardImages } from '../../../EditorialIndexCard'
import { FeaturedComparison } from '../../FeaturedComparison'

export function generateStaticParams() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage))
  return Array.from({ length: Math.max(0, pages - 1) }, (_, i) => ({ page: String(i + 2) }))
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params
  const n = Number(page)
  const title = `Call Center Guides, Page ${n}`
  const description = `Page ${n} of practical call center workflow, quality, onboarding, reporting, and handoff guides.`
  return { title, description, alternates: { canonical: `/blog/page/${n}` }, openGraph: { title, description, url: `/blog/page/${n}`, images: [{ url: '/library-20261112/conversation-blog-8867267.webp', alt: 'Call center editorial planning workbench' }] } }
}

export default async function BlogPage({params}:{params:Promise<{page:string}>}){const {page}=await params;return <BlogListing page={Number(page)}/>;}
