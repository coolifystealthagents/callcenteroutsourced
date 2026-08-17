# Call Center Outsourced topical-authority link ledger

Updated: 2026-08-17

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

`/blog/call-center-peak-hour-coverage-planning` currently uses the generic related-link fallback for legacy, non-generated service paths. The next bounded public change should replace its reader-facing planning handoff with the confirmed `/services/inbound-call-handling` route, after inspecting the built page for the old and new hrefs.

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
