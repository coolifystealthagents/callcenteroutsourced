import { Footer, Header } from './components'

export default function NotFound() {
  return <>
    <Header />
    <main className="legal-page" aria-labelledby="not-found-title">
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow">Page not found</p>
          <h1 id="not-found-title">This route is not in the call queue.</h1>
          <p className="lead">The address may have changed. Return home, browse the service collection, or contact the staffing team.</p>
          <div className="actions">
            <a className="btn primary" href="/">Return home</a>
            <a className="btn secondary" href="/services">Browse call center services</a>
            <a className="btn secondary" href="/contact-us">Contact Us</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
}
