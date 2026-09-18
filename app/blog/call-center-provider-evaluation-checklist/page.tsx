import type { Metadata } from 'next'
import { CTA, Footer, Header, JsonLd } from '../../components'

const canonical = 'https://callcenteroutsourced.com/blog/call-center-provider-evaluation-checklist'
const title = 'Call Center Provider Evaluation Checklist'
const description = 'Compare outsourced call center providers using documented scope, evidence, controls, pilot results, and total operating cost—not unsupported rankings.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'article', siteName: 'Call Center Outsourced' },
}

const evaluationAreas = [
  ['Queue fit', 'List the contact reasons, channels, hours, languages, expected volume, seasonality, and customer outcomes the provider would own.'],
  ['Authority limits', 'Separate approved answers and routine updates from refunds, policy exceptions, identity overrides, regulated advice, and sensitive complaints.'],
  ['People and coverage', 'Ask who will work the queue, who provides daily supervision, how absences are covered, and which hours have an accountable manager.'],
  ['Systems and data', 'Map every tool and data field. Confirm named accounts, least-privilege access, authentication, recording, retention, and offboarding steps.'],
  ['Quality evidence', 'Define the sample, rubric, calibration process, error categories, review owner, and action log before judging a quality score.'],
  ['Commercial terms', 'Compare the same scope: staffing hours, management, tools, telephony, training, overtime, setup, replacements, and exit support.'],
] as const

const evidenceRequests = [
  'A redacted example of the proposed shift handoff, ticket note, QA scorecard, or callback ledger',
  'The exact staffing, supervisor, backup, and escalation coverage for the requested operating hours',
  'A permissions map showing what an agent can view, change, export, approve, and escalate',
  'A written pilot plan with sample size, review cadence, decision owner, success conditions, and stop conditions',
  'Current contract terms for setup, minimums, management, tools, replacement, data return, and termination',
]

const pilotSteps = [
  ['1. Freeze the scope', 'Use one queue or contact reason, a written volume range, named systems, and a short list of permitted actions.'],
  ['2. Prepare examples', 'Provide redacted good and bad examples, approved language, escalation triggers, and the expected system record.'],
  ['3. Run a bounded cohort', 'Start with a defined period and manager coverage. Do not move every channel or customer type at once.'],
  ['4. Review evidence', 'Inspect conversations and records together. Count reopens, missing notes, unowned promises, and boundary violations.'],
  ['5. Decide explicitly', 'Expand, revise, pause, or stop based on the agreed evidence. Record unresolved risks and their owners.'],
] as const

export default function ProviderEvaluationChecklist() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: canonical,
    publisher: { '@type': 'Organization', name: 'Call Center Outsourced', url: 'https://callcenteroutsourced.com' },
  }

  return <>
    <Header />
    <main>
      <JsonLd data={schema} />
      <section className="fleet-hero variant-2">
        <div className="container">
          <p className="eyebrow">Buyer guide</p>
          <h1>Compare call center providers with evidence, not rankings.</h1>
          <p className="lead">A provider name or directory position does not prove fit. Use the same operating brief, evidence request, and pilot decision for every candidate.</p>
          <a className="btn primary" href="#evaluation">Open the evaluation checklist</a>
        </div>
      </section>

      <section className="section" id="evaluation">
        <div className="container">
          <div className="cco-section-head">
            <div><p className="eyebrow">Evaluation areas</p><h2>Compare the same operating facts.</h2></div>
            <p>This checklist does not rank or endorse providers. It helps a buyer make requirements and evidence comparable.</p>
          </div>
          <div className="fleet-detail-grid">
            {evaluationAreas.map(([heading, body]) => <article className="card" key={heading}><h2>{heading}</h2><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section cco-ops-section">
        <div className="container">
          <p className="eyebrow cco-eyebrow-light">Evidence request</p>
          <h2>Ask each candidate for reviewable artifacts.</h2>
          <div className="card"><ul>{evidenceRequests.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <p>Redacted examples show format and control design; they do not prove how a future team will perform. Confirm ownership, dates, and whether the artifact represents the proposed service.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Pilot design</p>
          <h2>Make the hiring decision on a bounded pilot.</h2>
          <div className="fleet-detail-grid">
            {pilotSteps.map(([heading, body]) => <article className="card" key={heading}><h2>{heading}</h2><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <p className="eyebrow">Decision record</p>
          <h2>Record why the selected option fits.</h2>
          <p>Keep the evaluated scope, evidence reviewed, commercial comparison, pilot results, unresolved risks, and approving owner together. Re-evaluate when the queue, channel, hours, systems, data, or authority limits materially change.</p>
          <p><strong>Limitation:</strong> public website claims, reviews, badges, and client logos should be treated as leads for verification—not proof of staffing quality or guaranteed outcomes.</p>
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </>
}
