import type { Metadata } from "next";
import { Header, Footer } from "../components";
import StandardContactForm from "./StandardContactForm";
import "./contact.css";
import "./image-fix.css";

export const metadata: Metadata = {
  title: "Contact Us | Outsourced Call Center Support",
  description: "Book a free consultation to scope reliable outsourced call center support for your business.",
  alternates: { canonical: "/contact-us" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact Us | Outsourced Call Center Support",
    description: "Plan outsourced call center coverage around clear channels, service levels, quality checks, and escalation rules.",
    url: "/contact-us",
    type: "website",
    images: [{ url: "/illustrations/call-center-original/quality-operations-review.svg", width: 960, height: 640, alt: "Illustration of a customer support team reviewing quality operations" }],
  },
};
const services = [
  ["Inbound customer care", "Answer customer questions in your brand voice, document the interaction, and route the next step."],
  ["Omnichannel coverage", "Support phone, email, chat, and callback queues with consistent case ownership."],
  ["Overflow and after-hours", "Extend coverage during peaks and off-hours with documented safety and escalation rules."],
  ["Quality operations", "Calibrate reviews, monitor service levels, coach patterns, and keep corrective actions visible."],
];
const controls = [
  ["Clear launch brief", "Document channels, hours, scripts, service levels, and the exact point where an agent escalates."],
  ["Visible quality checks", "Review a defined sample of conversations and turn recurring findings into coaching actions."],
  ["Accountable handoffs", "Keep complete case notes, named owners, and next-step deadlines visible in the system of record."],
];

export default function ContactUsPage(){return <>
  <Header/>
  <main className="trusted-contact tc-legal">
    <section className="tc-hero"><div className="container tc-hero-grid">
      <div className="tc-copy"><p className="tc-kicker">Outsourced coverage with clear control</p><h1>Scale customer conversations without losing control.</h1><p className="tc-lead">Tell us about your queues, channels, coverage hours, service levels, and escalation rules. We’ll help scope an outsourced call center team that protects quality while expanding capacity.</p><div className="tc-proof-row"><span>Scoped to your queue</span><span>Documented authority limits</span><span>Free consultation</span></div><a className="tc-text-link" href="#call-support">Explore the coverage plan →</a></div>
      <StandardContactForm endpoint="/api/contact" encoding="form"/>
    </div></section>
    <section className="tc-strip"><div className="container tc-strip-grid"><strong>A practical consultation</strong><span>✓ Task inventory</span><span>✓ Access boundaries</span><span>✓ Quality review</span><span>✓ Launch plan</span></div></section>
    <section className="tc-section" id="call-support"><div className="container"><div className="tc-section-head"><div><p className="tc-kicker">Where outsourced coverage fits</p><h2>Build capacity around measurable customer outcomes.</h2></div><p>The best outsourced call center programs pair clear scripts and service levels with complete notes, quality sampling, and a named escalation owner.</p></div><div className="tc-card-grid">{services.map(([title,body],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="tc-inline-cta"><strong>Know which queue needs help?</strong><a href="#contactPageForm">Discuss it with our team</a></div></div></section>
    <section className="tc-testimonials"><div className="container"><p className="tc-kicker">A controlled operating model</p><h2>Support that stays measurable after launch.</h2><div className="tc-quote-grid">{controls.map(([title,body])=><article key={title}><div aria-hidden="true">✓</div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="tc-section"><div className="container tc-check-grid"><div><p className="tc-kicker">Capability checklist</p><h2>An outsourcing plan needs operating controls.</h2><p>We’ll map the operating conditions that help an outsourced contact team stay responsive, consistent, and easy to govern.</p></div><ul><li>Queues, channels, scripts, and service levels</li><li>CRM, ticketing, telephony, and access boundaries</li><li>Escalation ownership and QA sampling cadence</li><li>Urgency, privacy, and escalation triggers</li><li>Case taxonomy and note-completeness rules</li><li>Coverage, FCR, and first-month scorecard</li></ul></div></section>
    <section className="tc-why"><div className="container tc-why-grid"><img src="/illustrations/call-center-original/quality-operations-review.svg" width="960" height="640" alt="Illustration of a customer support team reviewing quality operations"/><div><p className="tc-kicker">Why structure matters</p><h2>Every customer conversation should have an accountable outcome.</h2><p>We shape outsourced support around approved scripts, service levels, secure access, complete records, and unmistakable escalation points—so capacity grows without losing quality.</p><a href="#contactPageForm">Scope my outsourced call center →</a></div></div></section>
    <section className="tc-about"><div className="tc-image"><img src="/illustrations/call-center-original/quality-operations-review.svg" width="960" height="640" alt="Customer support leaders reviewing outsourced call center quality operations"/><div><span>Listen</span><span>Resolve</span><span>Review</span></div></div><div><p className="tc-kicker">Plan the work before launch</p><h2>Set clear rules for customer conversations.</h2><p className="tc-trust">Start with the customer questions the team may handle, the information it may use, and the cases it must hand back. Your manager keeps control of policy, customer promises, refunds, and exceptions.</p><p>That gives the support team a usable plan for channels, service levels, scripts, quality reviews, and escalation rules.</p></div></section>
    <section className="container tc-final"><div><p className="tc-kicker">A better outsourcing plan</p><h2>Build outsourced support your customers can confidently trust.</h2><p>Share your queues, channels, systems, and standards. We’ll help define the team and next steps.</p></div><a href="#contactPageForm">Book a free consultation</a></section>
  </main><Footer/>
</>}
