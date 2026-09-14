# Call Center Outsourced topical-authority link ledger

Updated: 2026-09-13

## Scope

This ledger covers Philippines-based call-center staffing. It records only routes that are generated from the current repository data and links that answer the reader's next practical question. It is a planning record, not evidence of rankings, traffic, or backlinks.

## Current route model

- Service routes come from `fleetServices` in `app/fleet-data.ts` and are emitted by `app/services/[slug]/page.tsx`.
- Blog routes come from `blogPosts` in `app/data.ts` and are emitted by `app/blog/[slug]/page.tsx`.
- Research routes come from `researchPosts` in `app/fleet-data.ts` and are emitted by `app/research/[slug]/page.tsx`.
- The sitemap includes every generated service, blog, and research route in `app/sitemap.xml/route.ts`.
- Blog `related` cards and banners are already rendered. The current rich-article body renderer does not yet support a page-specific inline-link field, so an inline-link release must add one narrowly rather than changing shared copy.

## Service-led map

| Reader question | Supporting route to review | Confirmed service destination | Why the link helps |
| --- | --- | --- | --- |
| How should a team begin a live inbound queue? | `/blog/call-center-peak-hour-coverage-planning` | `/services/inbound-call-handling` | The reader can move from capacity planning to the approved inbound work, access limits, and first-week pilot. |
| How should staff hand off a booked or moved appointment? | `/blog/call-center-appointment-reschedule-handoff` | `/services/outbound-appointment-setting` | The article concerns appointment changes and the service page covers the matching customer-contact lane. |
| What happens when a customer request needs phone, chat, or email support? | `/research/call-center-customer-contact-channel-selection-a-research-brief` | `/services/omnichannel-customer-support` | The research brief frames channel choice; the service page gives the relevant staffing path. |
| How should a team review queue quality and recurring errors? | `/blog/call-center-contact-disposition-quality` | `/services/workforce-reporting-support` | The reader can move from disposition evidence to a reporting and QA support lane. |
| What should happen when a customer request cannot be resolved in the first queue? | `/research/call-center-call-transfer-controls-a-research-brief` | `/services/inbound-call-handling` | Transfer design begins with a defined receiving queue and a clear handoff owner. |
| How should a team protect customer records during ordinary support work? | `/blog/call-center-customer-data-minimization-notes` | `/services/omnichannel-customer-support` | The article explains note boundaries; the destination gives the related customer-support staffing scope. |

## First executable gap

`/research/call-center-callback-window-verification-research-brief` already has one data-owned handoff to `/services/inbound-call-handling`, delivered in source commit `e4974846af0ef0af3aebb856130a0e0c2491204c`. Its public release remains pending verification, so it is not a candidate for another CTA. The first verified-absent pair is now `/research/call-center-outbound-contact-permission-research-brief` to `/services/outbound-appointment-setting`; any future handoff must preserve the client owner's control of contact permission, exceptions, and customer remedies.

## Authorship and research evidence

- Blog `BlogPosting` schema currently names `Call Center Outsourced` as the organization author and publisher.
- Research `ResearchProject` schema currently names the same organization as author.
- No individual byline or staff profile is present in the reviewed route model. Do not create a personal author identity without on-site evidence.
- Research uses transparent desk-review language and lists external source URLs. A future research upgrade must retain method and limitation statements; it must not imply provider performance data or a Philippines-wide measurement without defensible data.

## Guardrails for the next release

1. Use only a confirmed `fleetServices` slug as the destination.
2. Change one chosen page only and keep the link adjacent to the decision it supports.
3. Preserve the page's Philippines-based staffing boundary and manager-control language.
4. Build, inspect the generated blog route and sitemap, then complete the single Coolify deployment and cache-busted apex/`www` exact-marker checks before calling a public change complete.

## Public-verification status — 2026-09-14

- Rendered source: `7f59b5185e212718962a4a2070a427da6a7d91ab` added the route-local outbound appointment handoff. The local production artifact has the expected H1, apex canonical, `article:modified_time` of `2026-09-14`, the handoff marker, its target href, and a sitemap entry (this sitemap has no `lastmod` by repository contract).
- Preserve rendered-source commit `7f59b5185e212718962a4a2070a427da6a7d91ab`; do not duplicate the handoff. Cache-busted apex and `www` each returned `200 text/html` with the expected H1 and apex canonical, but neither served the marker or `2026-09-14` modified date. The public sitemap returned `200 application/xml` and contains the route. No repository-approved deployment target or routine was found, so no deployment was triggered.
