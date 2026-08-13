import { Footer, Header, JsonLd } from './components';
import { blogPosts, site } from './data';
import { homepageServiceCards } from './homepage-service-cards';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: 'https://callcenteroutsourced.com',
    description: 'Independent guides and planning support for outsourced call center services, coverage, quality assurance, and customer support operations.',
  };

  return (
    <>
      <Header />
      <main className="cco-home" data-gi-rollout="two-illustration-packs-one-icon-pack">
        <JsonLd data={schema} />
        <section className="cco-hero">
          <div className="cco-orbit" aria-hidden="true" />
          <div className="container cco-hero-grid">
            <div className="cco-hero-copy">
              <p className="eyebrow cco-eyebrow-light"><span className="status-dot" /> Outsourced call center planning</p>
              <h1>Every call gets a clear next step.</h1>
              <p className="cco-hero-lead">Build dependable phone, chat, and ticket coverage around your hours, scripts, escalation rules, and quality standards.</p>
              <div className="actions">
                <a className="btn cco-btn-lime" href="/contact-us">Request a coverage plan</a>
                <a className="cco-text-link" href="#services">Explore service lanes <span>↘</span></a>
              </div>
              <div className="cco-hero-notes" aria-label="Planning priorities">
                <span>01&nbsp; Scope the queue</span>
                <span>02&nbsp; Set escalation rules</span>
                <span>03&nbsp; Launch with QA</span>
              </div>
            </div>

            <div className="cco-visual">
              <div className="cco-photo-frame">
                <img src="/illustrations/getillustrations/communication-illustrations-pack-svg/call-coverage-team.webp" alt="Illustration of a customer support professional providing clear call coverage" />
              </div>
              <aside className="cco-queue-card" aria-label="Example coverage brief">
                <div className="cco-card-head"><span>Coverage brief</span><i>Example</i></div>
                <div className="cco-channel"><span className="channel-icon">PH</span><div><b>Inbound support</b><small>Script + escalation map</small></div><em>Ready</em></div>
                <div className="cco-channel"><span className="channel-icon">CB</span><div><b>Callback lane</b><small>Owner + response window</small></div><em>Ready</em></div>
                <div className="cco-channel"><span className="channel-icon">QA</span><div><b>Quality review</b><small>Sample + coaching notes</small></div><em>Weekly</em></div>
                <div className="cco-queue-foot"><span>Shift handoff</span><b>Documented</b></div>
              </aside>
            </div>
          </div>
          <div className="container cco-capability-strip">
            <p>Coverage designed for</p>
            <div><span>Inbound calls</span><span>Overflow queues</span><span>Chat &amp; email</span><span>QA reviews</span></div>
          </div>
        </section>

        <section className="container cco-section" id="services">
          <div className="cco-section-head">
            <div><p className="eyebrow">Service lanes</p><h2>Choose the work. Keep the control.</h2></div>
            <p>Start with a focused queue that has clear examples and manager-owned decisions. Expand only after the handoff works.</p>
          </div>
          <div className="cco-service-grid">
            {homepageServiceCards.map((service, index) => (
              <a href={`/services/${service.slug}`} className="cco-service-card" key={service.slug}>
                <div><span className="cco-service-icon"><img src={service.icon} alt={service.imageAlt} width="36" height="36" /></span><span className="cco-service-num">0{index + 1}</span></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <b>View scope <span>↗</span></b>
              </a>
            ))}
          </div>
        </section>

        <section className="cco-ops-section">
          <div className="container cco-ops-grid">
            <div className="cco-ops-copy">
              <p className="eyebrow cco-eyebrow-light">The operating brief</p>
              <h2>A calmer queue starts with written rules.</h2>
              <p>Good outsourced support runs on a written brief. Your team should be able to inspect the work, coach the agent, and fix unclear rules.</p>
              <img src="/illustrations/getillustrations/inkdex-team-illustrations-svg/quality-operations-review.svg" alt="Customer support team reviewing quality operations" style={{ width: '100%', maxWidth: 360, marginTop: '1.5rem' }} loading="lazy" />
              <a className="cco-text-link light" href="/services/workforce-reporting-support">See the QA scope <span>↗</span></a>
            </div>
            <div className="cco-desk">
              <div className="cco-desk-top"><b>Shift handoff / Monday</b><span>Manager view</span></div>
              <div className="cco-desk-grid">
                <div className="cco-desk-panel">
                  <small>QUEUE OWNERSHIP</small>
                  <ul><li><i />Order status &amp; FAQs</li><li><i />Appointment callbacks</li><li><i />Urgent issue routing</li></ul>
                </div>
                <div className="cco-desk-panel">
                  <small>QUALITY SIGNALS</small>
                  <div className="signal"><span>Script accuracy</span><b>Review</b></div>
                  <div className="signal"><span>Escalation notes</span><b>Review</b></div>
                  <div className="signal"><span>Open callbacks</span><b>Handoff</b></div>
                </div>
              </div>
              <div className="cco-desk-bottom"><span className="status-dot" /> Next shift sees the open work, owner, and required action.</div>
            </div>
          </div>
        </section>

        <section className="container cco-section cco-process">
          <div className="cco-section-head">
            <div><p className="eyebrow">Managed launch</p><h2>Go live without giving up visibility.</h2></div>
            <p>Your coverage plan should connect the role, approved answers, access limits, review rhythm, and escalation path.</p>
          </div>
          <div className="cco-process-grid">
            <article><span>01</span><h3>Map demand</h3><p>Share channels, call reasons, hours, volume patterns, and the outcomes customers need.</p></article>
            <article><span>02</span><h3>Build the playbook</h3><p>Define approved replies, sensitive decisions, tool access, and the exact manager handoff.</p></article>
            <article><span>03</span><h3>Pilot one lane</h3><p>Start with a reviewable queue, inspect real samples, and tune the brief before scaling.</p></article>
            <article><span>04</span><h3>Review the signals</h3><p>Use queue notes, QA samples, callbacks, and escalation trends to guide improvements.</p></article>
          </div>
        </section>

        <section className="container cco-guides">
          <div className="cco-guides-intro"><p className="eyebrow">Field notes</p><h2>Plan before the first ring.</h2><p>Plain-language guides for provider comparisons, role scope, onboarding, and quality control.</p><a href="/blog">Read all guides ↗</a></div>
          <div className="cco-guide-list">
            {blogPosts.slice(0, 3).map((post, index) => <a href={`/blog/${post.slug}`} key={post.slug}><span>0{index + 1}</span><div><small>{post.minutes} min guide</small><h3>{post.title}</h3><p>{post.excerpt}</p></div><b>↗</b></a>)}
          </div>
        </section>

        <section className="container cco-final">
          <div><p className="eyebrow cco-eyebrow-light">Ready to map the queue?</p><h2>Make the next handoff clear.</h2></div>
          <a className="btn cco-btn-lime" href="/contact-us">Map my coverage</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
