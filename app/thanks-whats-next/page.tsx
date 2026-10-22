import type { Metadata } from 'next'
import { Footer, Header } from '../components'

export const metadata: Metadata = {
  title: 'Consultation Confirmed',
  description: 'Confirmation and preparation details for your call center staffing consultation.',
  alternates: { canonical: '/thanks-whats-next' },
  robots: { index: false, follow: false },
}

export default function BookingConfirmationPage() {
  return <>
    <Header />
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow">Booking complete</p>
          <h1>Your consultation booking is confirmed.</h1>
          <p className="lead">A staffing specialist will use the submitted request to prepare for your conversation.</p>
        </div>
      </section>
      <section className="legal-card">
        <h2>Prepare for the conversation</h2>
        <p>Keep representative queue volumes, service hours, systems, scripts, quality standards, and escalation owners available. If any booking detail changes, use the instructions in your scheduling confirmation.</p>
        <a className="btn secondary" href="/services">Review call center services</a>
      </section>
    </main>
    <Footer />
  </>
}
