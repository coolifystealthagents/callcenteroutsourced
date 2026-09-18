import { notFound } from 'next/navigation'
import { CTA, Footer, Header, JsonLd } from '../../components'
import { fleetServices } from '../../fleet-data'
import { site } from '../../data'

const base = `https://${site.domain.toLowerCase()}`

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = fleetServices.find((candidate) => candidate.slug === slug)
  if (!service) return { title: 'Not found' }
  return {
    title: service.title,
    description: service.desc,
    alternates: { canonical: `/services/${slug}` },
  }
}

const ListCard = ({ title, items }: { title: string; items: readonly string[] }) => (
  <article className="card">
    <h2>{title}</h2>
    <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
  </article>
)

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = fleetServices.find((candidate) => candidate.slug === slug)
  if (!service) notFound()
  const url = `${base}/services/${service.slug}`

  return <>
    <Header />
    <main>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.desc,
        url,

      }} />
      <section className="fleet-hero variant-2">
        <div className="container">
          <p className="eyebrow">Philippines-based customer contact support</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.desc}</p>
          <a className="btn primary" href="/contact-us">Discuss this service</a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <article className="card" style={{ marginBottom: '1.5rem' }}>
            <p className="eyebrow">The operating problem</p>
            <h2>When this service lane makes sense</h2>
            <p>{service.problem}</p>
          </article>
          <div className="fleet-detail-grid">
            <ListCard title="Source records" items={service.sourceRecords} />
            <ListCard title="Work to include" items={service.tasks} />
            <ListCard title="Expected outputs" items={service.outputs} />
            <ListCard title="Manager approvals" items={service.managerApprovals} />
            <ListCard title="Controls to retain" items={service.controls} />
            <ListCard title="Authority boundaries" items={service.boundaries} />
            <ListCard title="First-week plan" items={service.firstWeek} />
          </div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>
}
