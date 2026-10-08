# Service-led topical-authority link ledger

**Scope:** CallCenterOutsourced.com only. This working map pairs existing Philippines-based service pages with existing research briefs. It does not add public copy, make performance claims, or authorize a link by itself.

## Rules before a reader-facing handoff

1. Confirm both routes still exist in the generated build and sitemap.
2. Read the whole research brief. Add a service handoff only when the brief answers the service buyer's next decision.
3. Keep the client owner responsible for policy, remedies, sensitive data, and exceptions.
4. Search the source route for the target href before editing. Do not repeat a verified handoff.
5. Refresh the source record's real date field and prove its rendered canonical, schema date, marker, href, H1, and sitemap entry before release.

| Service pillar | Existing supporting research question | Supporting route | Controlled next handoff | Status |
| --- | --- | --- | --- | --- |
| Inbound Call Handling | Can a team preserve the customer's requested callback window and the owner of a missed promise? | `/research/call-center-callback-window-verification-research-brief` | `/services/inbound-call-handling` | Delivered locally in `e4974846af0ef0af3aebb856130a0e0c2491204c`; the fresh 2026-09-13 build finds the target href once in the source `<main>`. Public verification remains pending, so do not duplicate. |
| Omnichannel Customer Support | Can a case retain its context when a customer changes channel? | `/research/call-center-channel-switch-continuity-research-brief` | `/services/omnichannel-customer-support` | Verified 2026-09-09: the generated source `<main>` contains the target href once. Delivered; do not duplicate. |
| Outbound Appointment Setting | What permission and purpose must be clear before an outbound contact? | `/research/call-center-outbound-contact-permission-research-brief` | `/services/outbound-appointment-setting` | Delivered locally in `7f59b5185e212718962a4a2070a427da6a7d91ab`; the 2026-09-14 build finds the route-local handoff marker and target href once. Public verification is stale, so do not duplicate. |
| Order Management Support | Which source state can a team explain without turning an estimate into a promise? | `/research/call-center-order-status-evidence-research-brief` | `/services/order-management-support` | Verified 2026-09-09: the generated source `<main>` contains the target href once. Delivered; do not duplicate. |
| Tier-One Technical Support | How can an agent know that an answer is current and route a knowledge exception? | `/research/call-center-knowledge-answer-freshness-research-brief` | `/services/tier-one-technical-support` | Delivered locally in `0e4840c3f62da0231a6fbb6ad511b6d961fe7941`; the fresh 2026-10-08 build finds the target href once in the source `<main>`. Public verification remains pending, so do not duplicate. |
| Customer Win-Back Support | How should a team keep contact purpose and preference records aligned across systems? | `/research/call-center-customer-preference-propagation-research-brief` | `/services/customer-win-back-support` | Verified 2026-10-08 in a fresh build: both routes have self-canonicals and sitemap locations; the source `<main>` has zero target hrefs. |
| Workforce Reporting Support | Which signals show a queue has outgrown its review coverage, rather than merely become busy? | `/research/call-center-queue-capacity-signal-research-brief` | `/services/workforce-reporting-support` | Verified 2026-10-08 in a fresh build: both routes have self-canonicals and sitemap locations; the source `<main>` has zero target hrefs. |

## Reconciled source routes

The former payment-channel, time-zone-promise, and complaint-impact source paths do not generate in the current route inventory. They are not execution candidates until an existing generated research route supports a new, separately reviewed map row.

### September 28 reconciliation

`/research/inbound-ivr-intent-handoff-drift-research` now has one route-local link to `/services/inbound-call-handling`. Its question concerns the same inbound queue boundary, and both generated routes have self-canonicals and sitemap locations. This pair is delivered in the current source baseline and must not be used as a future duplicate-CTA candidate.

## Reconciled execution order — 2026-10-08

A fresh production build confirms that the knowledge-answer-freshness research route already contains one route-local link to `/services/tier-one-technical-support`. It is delivered locally and non-duplicable; the prior zero-link note was stale and must not be used to add another CTA.

The first verified-absent candidate is `/research/call-center-customer-preference-propagation-research-brief` → `/services/customer-win-back-support`. Both exact generated routes have self-canonicals and sitemap entries, while the source `<main>` has zero links to that service. Before any reader-facing change, review the record-level handoff model and preserve the client owner's control of contact purpose, customer preferences, policy wording, exceptions, and customer remedies.
