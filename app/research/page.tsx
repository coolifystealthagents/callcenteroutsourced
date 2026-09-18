import { Header, Footer } from '../components'
import { researchPosts } from '../fleet-data'
import { site } from '../data'

export const metadata = {
  title: `Evidence Briefs | ${site.brand}`,
  description: 'Desk-reviewed evidence briefs for planning Philippines-based support roles, controls, and handoffs.',
  alternates: { canonical: '/research' },
}

export default function Research() {
  const clusters = ['All Briefs', 'Hiring Controls', 'Scope Benchmarks', 'Workflow Design']
  return <>
    <Header />
    <main className="research-index-page">
      <section className="research-hero">
        <div className="container research-hero-grid">
          <div>
            <p className="eyebrow">Evidence brief library</p>
            <h1>Desk-reviewed evidence briefs for staffing decisions</h1>
            <p className="lead">Use these guides to compare roles, controls, and onboarding decisions. Each brief separates cited source material from practical operating guidance.</p>
            <div className="research-meta"><span>{researchPosts.length || 0} briefs</span><span>Source lists</span><span>Buyer controls</span></div>
          </div>
          <aside className="research-hero-card" aria-label="Evidence brief quality signals">
            <div><strong>01</strong><span>Published source context</span></div>
            <div><strong>02</strong><span>Practical screening questions</span></div>
            <div><strong>03</strong><span>Implementation checks</span></div>
          </aside>
        </div>
      </section>
      <section className="section research-library-section">
        <div className="container">
          <nav className="research-cluster-tabs" aria-label="Evidence brief topic filters">
            {clusters.map((cluster, i) => <a className={i === 0 ? 'active' : ''} href="/research" key={cluster}>{cluster}<small>{i === 0 ? researchPosts.length : Math.max(1, Math.ceil((researchPosts.length || 1) / 3))}</small></a>)}
          </nav>
          <div className="research-card-grid">
            {researchPosts.length ? researchPosts.map((post, index) => <a className="research-library-card" href={`/research/${post.slug}`} key={post.slug}>
              <span className="research-card-badge">{clusters[(index % 3) + 1]}</span>
              <h2>{post.title}</h2>
              <p className="research-card-highlight">Planning signal: compare the role, review owner, and handoff risk before hiring.</p>
              <p className="research-card-excerpt">{post.excerpt}</p>
              <div className="research-card-meta"><span>{site.brand} evidence brief</span><span>6 min read</span><span>{post.sources?.length || 0} listed sources</span></div>
            </a>) : <div className="research-library-card empty-state">
              <span className="research-card-badge">Coming soon</span>
              <h2>Evidence briefs are being prepared</h2>
              <p className="research-card-highlight">The library will group briefs by buyer controls, benchmarks, and workflow design.</p>
              <p className="research-card-excerpt">Visit the blog for practical planning guides while evidence briefs are prepared.</p>
              <a className="btn primary" href="/blog">Visit the blog</a>
            </div>}
          </div>
        </div>
      </section>
      <section className="section research-methodology">
        <div className="container"><h2>Desk-review method and limits</h2><p>Each brief lists the sources consulted, makes assumptions visible, and separates sourced facts from editorial recommendations. A listed source count describes the bibliography; it is not a claim of original empirical research.</p></div>
      </section>
    </main>
    <Footer />
  </>
}
