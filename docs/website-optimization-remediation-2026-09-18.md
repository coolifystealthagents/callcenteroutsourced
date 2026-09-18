# Website Optimization Project — Call Center Outsourced remediation

Date: 2026-09-18
Scope: `callcenteroutsourced.com`
Mode: current remediation and release evidence; not a reconstruction of prior Paperclip work.

## Provenance boundary

Historical use of a prior “Website Optimization Project” or Paperclip artifact is **not verified** from repository history or the accessible project records. This ledger documents the current optimization pass without inventing historical provenance.

## Service inventory decisions

The current project reviewed major virtual-assistant and delegated-support functions that are realistic for a call-center operating model. Every retained lane has a dedicated route plus explicit source records, delegated tasks, expected outputs, manager approvals, controls, authority boundaries, and a first-week pilot.

| Service slug | Why it is retained |
|---|---|
| `inbound-call-handling` | Routine inbound questions, messages, appointment help, and escalation capture are reviewable delegated work. |
| `omnichannel-customer-support` | Cross-channel continuity is distinct from general support because record linkage, consent, and ownership must survive channel changes. |
| `outbound-appointment-setting` | Permission-aware outreach and calendar booking are bounded when list source, script, calling window, and offer authority are controlled. |
| `order-management-support` | Status updates and exception intake are realistic; refunds, credits, fraud, and fulfillment decisions remain manager-owned. |
| `tier-one-technical-support` | Documented reversible troubleshooting and evidence collection can be delegated; security, access, and root-cause decisions cannot. |
| `collections-reminder-calls` | Approved reminders and dispute capture are bounded; settlement, legal, and hardship decisions remain with authorized owners. |
| `customer-win-back-support` | Reason capture and approved outreach are realistic; discounts, contract changes, and complaint remedies require approval. |
| `dispatch-coordination` | Work-order preparation and approved scheduling can be delegated; safety, priority, overtime, and route overrides remain controlled. |
| `survey-and-feedback-calls` | Neutral questionnaire delivery and response capture are reviewable; sample design and result interpretation remain manager-owned. |
| `workforce-reporting-support` | Source-based schedule and queue reconciliation can be prepared by support staff; employee and staffing decisions cannot. |
| `operations-support` | Queue administration, CRM cleanup, callbacks, and shift handoffs remove repeat supervisor work without transferring manager authority. |
| `customer-support` | General low-risk questions, status checks, triage, and follow-up are realistic when the authority matrix is explicit. |
| `reporting-and-qa` | Evidence preparation and rubric scoring are delegable; coaching, discipline, and claims about representative performance remain manager-owned. |

## Conversion and claim controls

- The homepage headline names the outsourced call center offering directly.
- `/contact` permanently redirects to the canonical `/contact-us` form.
- Form success is authoritative: analytics availability cannot substitute for an accepted lead response.
- Parent-brand promotion, unsupported testimonial content, and unverifiable “top rated” or industry-count claims were removed from conversion pages.
- The unsupported provider ranking was retired in favor of `/blog/call-center-provider-evaluation-checklist`, an evidence-based comparison method with no provider endorsement.
- Canonical metadata is declared for index, legal, conversion, and pagination route families.

## Media decisions

Primary conversion pages now use deterministic first-party SVG illustrations authored specifically for Call Center Outsourced and documented with SHA-256 digests in `public/illustrations/call-center-original/PROVENANCE.md`. Generic stock photography, testimonial imagery, and externally attributed vendor artwork are not used on those routes. The prior external artwork origin and publication-rights record was **not verified**, so those assets are not relied on by the release candidate.

## Release gate

Completion requires automated tests, a production build, exact-commit deployment to the bound Coolify application, a fresh live crawl, conversion checks, canonical-host probes, and exhaustive responsive rendering of every live HTML route at desktop, tablet, and mobile widths.
