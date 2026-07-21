# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the site's public marketing and editorial copy while preserving route slugs, service boundaries, structured data, and lead intent.

Reviewed:

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## What changed

- Replaced a broken guide title and four repeated, generic article bodies with call-center-specific guidance for coverage planning, first-task selection, provider review, and first-week setup.
- Removed unsupported savings, pilot-length, and task-count figures from the shared data file.
- Removed unrelated template copy about bookkeeping, development, marketing, and broad virtual staffing.
- Rewrote the placeholder thank-you page so it confirms what was submitted and points readers to the planning guides.
- Tightened contact, service, CTA, and homepage wording that sounded generic, robotic, or detached from call center work.
- Fixed the shared guide/service CTA container after local visual QA found it touching the viewport edge.
- Shortened the lower homepage CTA after local visual QA found an orphaned last word and a wrapped button label.
- Added article and breadcrumb structured data to the guide template without changing the existing URLs.

## Final anti-AI pass

The remaining copy was checked for inflated claims, generic corporate phrasing, fake contrasts, em-dash habits, chatbot language, vague proof, repeated template text, and empty conclusions. No unsupported testimonials, statistics, credentials, or first-person stories were added.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy pages were excluded. Their legal meaning was not reviewed or changed. Design research files were also left unchanged.
