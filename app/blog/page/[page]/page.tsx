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
  return { title, description, alternates: { canonical: `/blog/page/${n}` }, openGraph: { title, description, url: `/blog/page/${n}`, images: [{ url: '/index-heroes/blog-workbench.svg', alt: 'Call center editorial planning workbench' }] } }
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const n = Number(page)
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage))
  if (!Number.isInteger(n) || n < 2 || n > pages) notFound()
  const posts = blogPosts.slice((n - 1) * postsPerPage, n * postsPerPage)
  const offset = (n - 1) * postsPerPage
  return <>
    <Header />
    <main className="editorial-index-page">
      <section className="fleet-hero index-visual-hero blog-index-hero"><div className="container index-hero-grid"><div><p className="eyebrow">Guide archive · Page {n}</p><h1>More call center operating guides</h1><p className="lead">Continue through practical guidance for staffing scopes, customer records, quality controls, and manager ownership.</p></div><img src="/index-heroes/blog-workbench.svg" alt="Call center guide library represented by an editorial operations workbench" width="1200" height="800" /></div></section>
      <section className="section"><div className="container"><div className="editorial-index-grid">
        {posts.map((post, index) => <EditorialIndexCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} excerpt={post.excerpt} published={post.published} minutes={post.minutes} topic={(offset + index) % 3 === 0 ? 'Queue operations' : (offset + index) % 3 === 1 ? 'Quality and controls' : 'Buyer planning'} image={editorialCardImages[(offset + index) % editorialCardImages.length]} imageAlt={`Editorial illustration for ${post.title}`} />)}
      </div><nav className="pagination" aria-label="Blog pages">{Array.from({ length: pages }, (_, i) => <a aria-current={i + 1 === n ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>{i + 1}</a>)}</nav></div></section>
      {n === 2 && <FeaturedComparison />}
    </main>
    <Footer />
  </>
}
