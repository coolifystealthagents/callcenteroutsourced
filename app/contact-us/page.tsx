import { Footer, Header, JsonLd } from '../components'
import { stealthAgentsReviews } from '../stealth-agents-reviews'
import StandardContactForm from './StandardContactForm'
import './contact.css'

const canonical = 'https://callcenteroutsourced.com/contact-us'

export const metadata = {
  title: 'Contact the Staffing Team',
  description: 'Share your outsourced call center requirements, then schedule a focused staffing consultation.',
  alternates: { canonical },
  robots: { index: true, follow: true },
}

const preparation = [
  ['Queues and channels', 'List the call, email, chat, ticket, callback, and administrative work that needs reliable coverage.'],
  ['Hours and volume', 'Share operating hours, time zones, seasonal patterns, queue volume, and service goals.'],
  ['Systems and access', 'Name the approved telephony, CRM, ticketing, knowledge, and communication systems involved.'],
  ['Authority boundaries', 'Identify who owns refunds, exceptions, sensitive access, quality review, and escalations.'],
]

function ReviewCard({ review, duplicate = false }: { review: (typeof stealthAgentsReviews)[number], duplicate?: boolean }) {
  return <blockquote className="review-card" aria-hidden={duplicate ? true : undefined}>
    <div className="review-stars"><span aria-hidden="true">★★★★★</span><span className="sr-only">5 out of 5 stars</span></div>
    <p>“{review.quote}”</p>
    <footer>
      <cite>{review.name}</cite>
      <span>{review.role}</span>
    </footer>
  </blockquote>
}

export default function ContactUsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Call Center Outsourced',
    url: canonical,
    description: metadata.description,
  }

  return <>
    <Header />
    <main className="contact-page">
      <JsonLd data={schema} />

      <section className="contact-first-fold" aria-labelledby="contact-heading">
        <div className="container contact-first-grid">
          <div className="contact-first-copy">
            <p className="rollout-eyebrow">Contact Us</p>
            <h1 id="contact-heading">Scope your call center coverage.</h1>
            <p className="contact-lead">Tell us what your queues, hours, systems, and service standards require. We will review the operating scope before your consultation.</p>
            <div className="contact-assurances" aria-label="What to expect">
              <span>Scope reviewed by a staffing specialist</span>
              <span>No obligation</span>
            </div>

            <section className="first-fold-reviews" aria-labelledby="reviews-heading">
              <div className="review-heading-row">
                <div>
                  <p className="review-label">Verified client feedback</p>
                  <h2 id="reviews-heading">StealthAgents reviews</h2>
                </div>
                <span className="review-rating"><span aria-hidden="true">★★★★★</span><span className="sr-only">5 out of 5 stars</span></span>
              </div>
              <div className="review-marquee" tabIndex={0} aria-label="14 verified Stealth Agents client reviews. Focus or hover to hold the moving reviews.">
                <div className="review-marquee-track">
                  <div className="review-set">
                    {stealthAgentsReviews.map((review) => <ReviewCard review={review} key={review.name} />)}
                  </div>
                  <div className="review-set" aria-hidden="true">
                    {stealthAgentsReviews.map((review) => <ReviewCard review={review} duplicate key={`duplicate-${review.name}`} />)}
                  </div>
                </div>
              </div>
              <p className="review-source">14 unique verified reviews. Source: <a href="https://stealthagents.com/">Stealth Agents</a></p>
            </section>
          </div>

          <StandardContactForm endpoint="/api/contact" encoding="form" />
        </div>
      </section>

      <section className="rollout-section rollout-soft" aria-labelledby="team-heading">
        <div className="container rollout-team">
          <div className="rollout-team-photo">
            <img src="/brand/stealth-agents-team-bacolod.jpg" width="1200" height="800" alt="Stealth Agents operations team in Bacolod" />
          </div>
          <div className="team-content">
            <div className="official-team-plate">
              <img src="/brand/stealth-agents-logo.png" width="150" height="48" alt="Stealth Agents" />
              <span>Official team, Bacolod</span>
            </div>
            <h2 id="team-heading">Managed operations behind your coverage.</h2>
            <p>Call Center Outsourced is supported by Stealth Agents. The Bacolod team helps recruit, onboard, and manage specialists around documented responsibilities, approved systems, coverage schedules, and escalation paths.</p>
            <p>Your engagement has operating support beyond placement: managers help maintain attendance, workflow continuity, quality review, and clear ownership as requirements change.</p>
          </div>
        </div>
      </section>

      <section className="rollout-section" aria-labelledby="prepare-heading">
        <div className="container">
          <p className="rollout-eyebrow">Prepare your request</p>
          <h2 id="prepare-heading">Bring details that make support measurable.</h2>
          <div className="rollout-cards">
            {preparation.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}
