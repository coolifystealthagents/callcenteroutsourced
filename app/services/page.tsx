import type { Metadata } from 'next'
import { Header, Footer, CTA, JsonLd } from '../components'
import { fleetServices } from '../fleet-data'

const title = 'Outsourced Call Center Services'
const description = 'Compare Philippines-based call center service lanes, operating workflows, ownership boundaries, quality controls, and launch questions.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: { title, description, url: '/services', images: [{ url: '/index-heroes/services-control-room.svg', alt: 'Call center service control room and workflow board' }] },
}

const faqs = [
  { question: 'Which call center service should we outsource first?', answer: 'Start with one repeatable queue where the source record, permitted action, acceptance rule, and manager escalation are already clear. A narrow first lane is easier to train and review than a full channel migration.' },
  { question: 'What decisions should remain with our team?', answer: 'Keep policy interpretation, sensitive complaints, refunds, identity overrides, regulated advice, and exceptions with named client owners unless a documented approval model explicitly says otherwise.' },
  { question: 'How should we compare service providers?', answer: 'Give every candidate the same queue brief and request the same evidence: proposed staffing, supervision, access map, sample records, quality method, pilot design, and complete operating cost.' },
  { question: 'What should a first-week scorecard include?', answer: 'Track volume received, work completed, records missing required fields, promises due, escalations, reopened cases, and a small reviewed quality sample. Define each measure before launch.' },
] as const

export default function Services() {
  return <>
    <Header />
    <main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description, url: 'https://callcenteroutsourced.com/services', mainEntity: fleetServices.map((service) => ({ '@type': 'Service', name: service.title, url: `https://callcenteroutsourced.com/services/${service.slug}`, description: service.desc })) }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }} />
      <section className="fleet-hero variant-2 index-visual-hero">
        <div className="container index-hero-grid">
          <div>
            <p className="eyebrow">Philippines-based services</p>
            <h1>Call center services built around clear operating boundaries</h1>
            <p className="lead">Choose a focused customer contact workflow, then define its tools, schedule, approvals, evidence, and handoffs before assigning volume.</p>
            <a className="btn primary" href="#service-lanes">Compare service lanes</a>
          </div>
          <img src="/index-heroes/services-control-room.svg" alt="Call center service control room connecting queues, owners, and reports" width="1200" height="800" />
        </div>
      </section>
      <section className="section" id="service-lanes">
        <div className="container">
          <div className="index-section-heading"><p className="eyebrow">Service lanes</p><h2>Match the work, not just the job title</h2><p>Each service profile explains the source records, in-scope actions, manager approvals, expected outputs, first-week plan, and authority limits for that workflow.</p></div>
          <div className="fleet-service-grid">
            {fleetServices.map((service) => <a className="card fleet-service-card" href={`/services/${service.slug}`} key={service.slug}>
              <h2>{service.title}</h2><p>{service.desc}</p><b>Review scope and controls →</b>
            </a>)}
          </div>
        </div>
      </section>
      <section className="section index-decision-section">
        <div className="container index-decision-grid">
          <div><p className="eyebrow">Decision guidance</p><h2>Choose a starting lane that can be observed</h2><p>A suitable first lane has stable demand, an authoritative source record, repeatable responses, and an available decision owner. Avoid moving every channel at once. Start with one queue, one schedule, and a defined cohort so the client and service team can inspect the same evidence.</p></div>
          <div className="card"><h3>Write the operating brief</h3><ul><li>Contact reasons, channels, hours, volume range, and languages</li><li>Systems and fields needed for each approved action</li><li>Customer promise, response target, and closure evidence</li><li>Exception triggers and the accepting manager</li></ul></div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="index-section-heading"><p className="eyebrow">Operating workflow</p><h2>Move from intake to a controlled launch</h2></div>
          <ol className="index-workflow">
            <li><h3>Define the queue</h3><p>List included requests, excluded decisions, expected volume, hours, and service channels.</p></li>
            <li><h3>Map records and access</h3><p>Name the source of truth, required fields, permitted changes, retention needs, and individual access roles.</p></li>
            <li><h3>Set the handoff</h3><p>Document the evidence an agent sends, who accepts it, the response window, and the fallback when that owner is unavailable.</p></li>
            <li><h3>Pilot and review</h3><p>Run a bounded cohort, sample the work, reconcile open promises, and record an explicit expand, revise, pause, or stop decision.</p></li>
          </ol>
        </div>
      </section>
      <section className="section index-ownership-section">
        <div className="container index-decision-grid">
          <article><p className="eyebrow">Service team ownership</p><h2>Execution inside the approved lane</h2><ul><li>Follow approved scripts and system procedures</li><li>Complete required records and disposition fields</li><li>Escalate when evidence, access, or authority is missing</li><li>Report queue condition and open commitments</li></ul></article>
          <article><p className="eyebrow">Client ownership</p><h2>Policy, authority, and acceptance</h2><ul><li>Approve policy and customer-impact decisions</li><li>Provide secure access and authoritative content</li><li>Accept escalations within the agreed window</li><li>Review quality evidence and authorize scope changes</li></ul></article>
        </div>
      </section>
      <section className="section"><div className="container index-faq"><div className="index-section-heading"><p className="eyebrow">Buyer questions</p><h2>Frequently asked questions</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
      <CTA />
    </main>
    <Footer />
  </>
}
