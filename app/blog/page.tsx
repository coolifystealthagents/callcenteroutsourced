import type { Metadata } from 'next'
import { Header, Footer } from '../components'
import { blogPosts } from '../data'
import { postsPerPage } from '../fleet-data'
import { EditorialIndexCard, editorialCardImages } from '../EditorialIndexCard'

const title = 'Outsourced Call Center Guides'
const description = 'Practical editorial guides for call center scopes, scripts, onboarding, quality review, reporting, and manager handoffs.'
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: { title, description, url: '/blog', images: [{ url: '/index-heroes/blog-workbench.svg', alt: 'Call center editorial planning workbench' }] },
}

export default function Blog() {
  const pages = Math.max(1, Math.ceil(blogPosts.length / postsPerPage))
  const posts = blogPosts.slice(0, postsPerPage)
  return <>
    <Header />
    <main className="editorial-index-page">
      <section className="fleet-hero variant-2 index-visual-hero blog-index-hero">
        <div className="container index-hero-grid">
          <div><p className="eyebrow">Operations library</p><h1>Call center guides for decisions that hold up in the queue</h1><p className="lead">Use practical field guides to define roles, preserve customer promises, review quality, and build manager handoffs before volume moves.</p></div>
          <img src="/index-heroes/blog-workbench.svg" alt="Guides, scripts, quality notes, and a headset on an operations workbench" width="1200" height="800" />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="index-section-heading"><p className="eyebrow">Latest guidance</p><h2>Plan one observable workflow at a time</h2><p>Every card includes publication context and reading time. Open a guide for implementation steps, decision boundaries, and manager questions.</p></div>
          <div className="editorial-index-grid">
            {posts.map((post, index) => <EditorialIndexCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} excerpt={post.excerpt} published={post.published} minutes={post.minutes} topic={index % 3 === 0 ? 'Queue operations' : index % 3 === 1 ? 'Quality and controls' : 'Buyer planning'} image={editorialCardImages[index % editorialCardImages.length]} imageAlt={`Editorial illustration for ${post.title}`} />)}
          </div>
          <nav className="pagination" aria-label="Blog pages">{Array.from({ length: pages }, (_, i) => <a aria-current={i === 0 ? 'page' : undefined} href={i === 0 ? '/blog' : `/blog/page/${i + 1}`} key={i}>{i + 1}</a>)}</nav>
        </div>
      </section>
    </main>
    <Footer />
  </>
}
