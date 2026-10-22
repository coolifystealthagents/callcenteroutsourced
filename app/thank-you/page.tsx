import type { Metadata } from 'next'
import { Footer, Header } from '../components'

export const metadata: Metadata = {
  title: 'Schedule Your Consultation',
  description: 'Choose a consultation time after submitting your call center staffing request.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
}

const schedulerUrl = 'https://go.oncehub.com/StealthAgentsTeam'

export default function ThankYouPage() {
  return <>
    <Header />
    <main className="sa-booking-page">
      <div className="container sa-booking-grid">
        <div className="sa-booking-left">
          <p className="sa-booking-kicker">Request received</p>
          <h1>Thank you. Choose a consultation time.</h1>
          <p className="sa-booking-lead">Your written request gives the staffing team useful context about your queues, hours, systems, and boundaries. Scheduling is the final step.</p>
          <img className="sa-booking-image" src="/illustrations/call-center-original/reporting-qa.svg" alt="Operations specialist reviewing consultation requirements and reporting" width="960" height="640" />
        </div>
        <section className="sa-booking-calendar" aria-labelledby="schedule-title">
          <h2 id="schedule-title">Schedule your staffing consultation</h2>
          <p>Choose an available time in the secure OnceHub scheduler below. When your booking is complete, OnceHub will continue automatically to the branded <strong>/thanks-whats-next</strong> confirmation page.</p>
          <iframe
            className="sa-oncehub-frame"
            src={schedulerUrl}
            title="Schedule a consultation with the Stealth Agents team"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="fullscreen"
          />
        </section>
      </div>
    </main>
    <Footer />
  </>
}
