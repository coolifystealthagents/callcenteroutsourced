import type { Metadata } from 'next'
import { Footer, Header } from '../components'

export const metadata: Metadata = {
  title: 'Request Next Steps | Call Center Outsourced',
  description: 'Review the next steps after submitting an outsourced call center coverage request.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return <>
    <Header />
    <main className="sa-booking-page">
      <div className="container sa-booking-grid">
        <div className="sa-booking-left">
          <p className="sa-booking-kicker">Coverage request next steps</p>
          <h1>Let’s prepare a focused call center coverage conversation.</h1>
          <p className="sa-booking-lead">If you just completed the request form, the next review will use the queues, channels, hours, systems, and authority limits you shared.</p>
          <img
            className="sa-booking-image"
            src="/illustrations/call-center-original/call-coverage-team.svg"
            alt="Illustration of a customer support professional preparing call coverage"
            width="720"
            height="900"
          />
        </div>
        <section className="sa-booking-calendar" aria-labelledby="next-steps-title">
          <h2 id="next-steps-title">What happens next</h2>
          <ol>
            <li><strong>Scope review:</strong> the submitted queue, channel, schedule, and task details are reviewed.</li>
            <li><strong>Boundary check:</strong> manager-only decisions and sensitive access are separated from delegated work.</li>
            <li><strong>Coverage conversation:</strong> a team member follows up using the contact details in the accepted request.</li>
          </ol>
          <p>Need to add context or submit a different request?</p>
          <a className="btn primary" href="/contact-us">Return to the coverage form</a>
        </section>
      </div>
    </main>
    <Footer />
  </>
}
