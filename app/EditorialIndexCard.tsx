type EditorialIndexCardProps = {
  href: string
  title: string
  excerpt: string
  image: string
  imageAlt: string
  published?: string
  minutes: number
  topic: string
  kind?: 'blog' | 'research'
  sourceCount?: number
}

const displayDate = (date: string) => new Intl.DateTimeFormat('en-US', {
  month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
}).format(new Date(`${date}T00:00:00Z`))

export const editorialCardImages = [
  '/blog-aug23/outsourced-call-center-supervisor-calibration-huddle.png',
  '/blog-aug23/outsourced-call-center-callback-promise-ledger.png',
  '/blog-aug23/outsourced-call-center-knowledge-change-notice.png',
  '/blog-aug23/outsourced-call-center-queue-priority-calibration.png',
  '/blog-aug23/outsourced-call-center-customer-identity-check.png',
  '/blog-aug23/outsourced-call-center-crm-duplicate-prevention.png',
  '/blog-aug20/outsourced-call-center-escalation-routing-map.png',
  '/blog-aug20/outsourced-call-center-qa-sample-selection.png',
  '/aug19-heroes/outsourced-call-center-work-queue-ownership.webp',
  '/aug19-heroes/outsourced-call-center-source-of-truth-map.webp',
  '/research-aug21/callback-timezone-integrity.png',
  '/research-aug21/case-linkage-evidence.png',
  '/blog-aug21/outsourced-call-center-vendor-onboarding-control.webp',
  '/blog-aug21/outsourced-call-center-schedule-adherence-exception.webp',
  '/blog-aug21/outsourced-call-center-queue-transition.webp',
  '/blog-aug21/outsourced-call-center-qa-calibration-disagreement.webp',
  '/blog-aug20/outsourced-call-center-script-change-approval.png',
  '/blog-aug20/outsourced-call-center-peak-coverage-trigger.png',
  '/blog-aug20/outsourced-call-center-first-contact-resolution-review.png',
  '/blog-aug20/outsourced-call-center-customer-promise-reconciliation.png',
  '/aug19-heroes/outsourced-call-center-launch-readiness-review.webp',
  '/aug19-heroes/outsourced-call-center-handoff-acceptance-log.webp',
  '/aug19-heroes/outsourced-call-center-exception-queue-triage.webp',
  '/aug19-heroes/outsourced-call-center-access-recertification-review.webp',
] as const

export function EditorialIndexCard({ href, title, excerpt, image, imageAlt, published, minutes, topic, kind = 'blog', sourceCount }: EditorialIndexCardProps) {
  return <article className={`editorial-index-card ${kind === 'research' ? 'research-index-card' : ''}`}>
    <a className="editorial-card-image-link" href={href} aria-label={`Read ${title}`}>
      <img className="editorial-card-image" src={image} alt={imageAlt} width="640" height="400" loading="lazy" />
    </a>
    <div className="editorial-card-body">
      <p className="editorial-card-topic">{topic}</p>
      <h2><a href={href}>{title}</a></h2>
      <p>{excerpt}</p>
      <div className="editorial-card-meta">
        {published ? <time dateTime={published}>{displayDate(published)}</time> : <span>Planning guide</span>}
        <span>{minutes} min read</span>
        {typeof sourceCount === 'number' ? <span>{sourceCount} sources</span> : null}
      </div>
      <a className="editorial-card-link" href={href}>Read {kind === 'research' ? 'brief' : 'guide'} <span aria-hidden="true">→</span></a>
    </div>
  </article>
}
