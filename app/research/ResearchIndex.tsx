import { Header, Footer } from '../components'
import { researchPosts, researchPostsPerPage } from '../fleet-data'
import { EditorialIndexCard, editorialCardImages } from '../EditorialIndexCard'
import { researchPageCount, researchPagePath } from './research-pagination'

export function ResearchIndex({ currentPage }: { currentPage: number }) {
  const pages = researchPageCount(researchPosts.length, researchPostsPerPage)
  const offset = (currentPage - 1) * researchPostsPerPage
  const posts = researchPosts.slice(offset, offset + researchPostsPerPage)

  return <>
    <Header />
    <main className="research-index-page">
      <section className="research-hero index-visual-hero">
        <div className="container index-hero-grid">
          <div><p className="eyebrow">Evidence brief library{currentPage > 1 ? `, page ${currentPage}` : ''}</p><h1>Desk-reviewed evidence for staffing decisions</h1><p className="lead">Compare roles, controls, and onboarding decisions with source context and practical operating guidance kept visibly separate.</p><div className="research-meta"><span>{researchPosts.length} briefs</span><span>Source lists</span><span>Buyer controls</span></div></div>
          <img src="/index-heroes/research-evidence-map.svg" alt="Published sources connected through an evidence map to a bounded operating decision" width="1200" height="800" />
        </div>
      </section>
      <section className="section research-library-section"><div className="container">
        <div className="index-section-heading"><p className="eyebrow">Research library</p><h2>Read the evidence, limits, and operating questions together</h2><p>These are desk reviews, not claims of original empirical research. Source counts describe each bibliography and do not prove provider performance.</p></div>
        <div className="editorial-index-grid research-card-grid">
          {posts.map((post, index) => {
            const itemIndex = offset + index
            return <EditorialIndexCard key={post.slug} kind="research" href={`/research/${post.slug}`} title={post.title} excerpt={post.excerpt} published={post.sourceDate ?? post.published} minutes={6} sourceCount={post.sources?.length ?? 0} topic={itemIndex % 3 === 0 ? 'Hiring controls' : itemIndex % 3 === 1 ? 'Scope benchmarks' : 'Workflow design'} image={post.image ?? editorialCardImages[(itemIndex + 7) % editorialCardImages.length]} imageAlt={`Evidence brief illustration for ${post.title}`} />
          })}
        </div>
        <nav className="pagination" aria-label="Research pages">
          {currentPage > 1 && <a href={researchPagePath(currentPage - 1)} rel="prev">Previous</a>}
          {Array.from({ length: pages }, (_, index) => {
            const page = index + 1
            return <a aria-current={page === currentPage ? 'page' : undefined} href={researchPagePath(page)} key={page}>{page}</a>
          })}
          {currentPage < pages && <a href={researchPagePath(currentPage + 1)} rel="next">Next</a>}
        </nav>
      </div></section>
      <section className="section research-methodology"><div className="container"><h2>Desk-review method and limits</h2><p>Each brief lists the sources consulted, makes assumptions visible, and separates sourced facts from editorial recommendations. A listed source count describes the bibliography. It is not a claim of original empirical research, a legal opinion, or proof that one provider will achieve a particular result.</p></div></section>
    </main>
    <Footer />
  </>
}