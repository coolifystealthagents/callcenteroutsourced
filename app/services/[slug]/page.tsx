import { notFound } from 'next/navigation'
import { CTA, Footer, Header, JsonLd } from '../../components'
import { fleetServices } from '../../fleet-data'
import { site } from '../../data'
import './service.css'

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
    openGraph: { title: service.title, description: service.desc, url: `/services/${slug}`, images: [{ url: service.heroImage, alt: `${service.title} workflow illustration` }] },
    twitter: { card: 'summary_large_image', images: [service.heroImage] },
  }
}

const ListCard = ({ title, items }: { title: string; items: readonly string[] }) => (
  <article className="service-list-card">
    <h2>{title}</h2>
    <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
  </article>
)

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = fleetServices.find((candidate) => candidate.slug === slug)
  if (!service) notFound()
  const url = `${base}/services/${service.slug}`
  const related = service.relatedServices
    .map((relatedSlug) => fleetServices.find((candidate) => candidate.slug === relatedSlug))
    .filter((candidate): candidate is (typeof fleetServices)[number] => Boolean(candidate))

  return <>
    <Header />
    <main className="service-detail">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.desc,
        url,
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }} />

      <section className="service-hero">
        <div className="container service-hero-grid">
          <div>
            <p className="eyebrow">Philippines-based customer contact support</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.desc}</p>
            <a className="btn primary" href="/contact-us">Discuss this service</a>
          </div>
          <figure className="service-hero-art">
            <img src={service.heroImage} alt={`${service.title} workflow illustration`} width="640" height="480" />
          </figure>
        </div>
      </section>

      <section className="section service-decision-intro">
        <div className="container service-intro-grid">
          <article>
            <p className="eyebrow">The operating problem</p>
            <h2>When this service lane makes sense</h2>
            <p>{service.problem}</p>
          </article>
          <article>
            <p className="eyebrow">Designed for</p>
            <h2>Teams that need bounded capacity</h2>
            <ul>{service.audience.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="section service-start" aria-labelledby="starting-scenarios">
        <div className="container">
          <div className="service-section-heading">
            <p className="eyebrow">A practical entry point</p>
            <h2 id="starting-scenarios">Where to start</h2>
            <p>Choose a narrow, observable lane before adding channels, hours, or decision authority.</p>
          </div>
          <div className="service-scenario-grid">
            {service.startingScenarios.map((scenario) => <article key={scenario}><h3>{scenario}</h3><p>Document the source record, allowed action, review owner, and safe fallback before launch.</p></article>)}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="workflow">
        <div className="container service-workflow-wrap">
          <div className="service-section-heading">
            <p className="eyebrow">Operating sequence</p>
            <h2 id="workflow">How the workflow is built</h2>
          </div>
          <ol className="service-workflow">
            {service.workflow.map((step) => <li key={step}><p>{step}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section service-example" aria-labelledby="example">
        <div className="container">
          <article>
            <p className="eyebrow">Example in context</p>
            <h2 id="example">What a bounded handoff looks like</h2>
            <p>{service.example}</p>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="scope-details">
        <div className="container">
          <div className="service-section-heading">
            <p className="eyebrow">Scope and governance</p>
            <h2 id="scope-details">The records, work, and controls</h2>
          </div>
          <div className="service-detail-grid">
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

      <section className="section service-faq" aria-labelledby="faq">
        <div className="container service-narrow">
          <div className="service-section-heading">
            <p className="eyebrow">Planning questions</p>
            <h2 id="faq">Frequently asked questions</h2>
          </div>
          {service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </div>
      </section>

      <section className="section service-related" aria-labelledby="related-services">
        <div className="container">
          <div className="service-section-heading">
            <p className="eyebrow">Continue planning</p>
            <h2 id="related-services">Related services</h2>
          </div>
          <div className="service-related-grid">
            {related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.desc}</p><b>View service</b></a>)}
          </div>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>
}
