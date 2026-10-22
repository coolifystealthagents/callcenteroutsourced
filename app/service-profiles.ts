export type FleetService = {
  slug: string
  title: string
  desc: string
  problem: string
  sourceRecords: readonly string[]
  tasks: readonly string[]
  outputs: readonly string[]
  managerApprovals: readonly string[]
  controls: readonly string[]
  boundaries: readonly string[]
  firstWeek: readonly string[]
  heroImage: string
  audience: readonly string[]
  startingScenarios: readonly string[]
  workflow: readonly string[]
  example: string
  faqs: readonly { question: string; answer: string }[]
  relatedServices: readonly string[]
}

type CoreFleetService = Omit<FleetService, 'heroImage' | 'audience' | 'startingScenarios' | 'workflow' | 'example' | 'faqs' | 'relatedServices'>

const coreFleetServices: readonly CoreFleetService[] = [
  {
    slug: 'inbound-call-handling',
    title: 'Inbound Call Handling',
    desc: 'Add Philippines-based agents to an inbound queue for approved questions, message taking, appointment help, and documented manager handoffs.',
    problem: 'Calls go unanswered or reach busy specialists because the primary team cannot cover every ring, peak, and after-hours window.',
    sourceRecords: ['Approved call script and knowledge base', 'Phone queue, CRM record, and customer verification fields', 'Transfer directory and escalation matrix'],
    tasks: ['Answer approved billing, order, booking, and account questions', 'Take complete messages and confirm the best callback window', 'Book or move appointments inside written scheduling rules', 'Tag each call and route urgent or unusual cases to a named manager'],
    outputs: ['Complete call disposition and customer note', 'Tracked callback or warm-transfer record', 'End-of-shift open-call handoff'],
    managerApprovals: ['Refunds, credits, and policy exceptions', 'Sensitive account or identity changes', 'Safety, legal, payment, or high-impact complaint decisions'],
    controls: ['Use named phone and CRM accounts', 'Sample recordings, notes, and dispositions against one rubric', 'Compare promised callbacks with completed callbacks', 'Test the escalation path during every staffed shift'],
    boundaries: ['No improvising policy or commercial terms', 'No copying payment credentials into notes', 'No closing an escalation without an accountable owner'],
    firstWeek: ['Day 1: review ten common call reasons and approved answers', 'Day 2: run practice calls and verification drills', 'Day 3: open one queue for a limited manager-covered shift', 'Day 5: review the first twenty calls before adding hours'],
  },
  {
    slug: 'omnichannel-customer-support',
    title: 'Omnichannel Customer Support',
    desc: 'Coordinate phone, email, chat, and ticket work so customers keep one case history, one owner, and a visible next step when channels change.',
    problem: 'Customers repeat their story and receive conflicting answers when conversations move between phone, chat, email, and ticket queues.',
    sourceRecords: ['Channel inboxes and ticket system', 'Customer identity and consent record', 'Approved response library and channel-switch rules'],
    tasks: ['Triage new contacts by reason, urgency, and owner', 'Continue approved cases across email, chat, phone, and tickets', 'Merge context into the system of record without duplicating sensitive data', 'Confirm the customer-facing next step and response window'],
    outputs: ['Unified case note with channel history', 'Queue assignment and response deadline', 'Cross-channel handoff summary'],
    managerApprovals: ['Merging uncertain customer identities', 'Changing channel consent or notification purpose', 'Compensation, policy exceptions, and sensitive complaints'],
    controls: ['Require one canonical case ID across channels', 'Review duplicate and reopened cases each day', 'Use approved language for channel moves and consent', 'Audit unresolved contacts by age and owner'],
    boundaries: ['No merging records on name similarity alone', 'No moving protected data into unapproved chat tools', 'No promising a response window the receiving queue has not accepted'],
    firstWeek: ['Day 1: map one customer journey across every active channel', 'Day 2: practice linking and declining uncertain record matches', 'Day 3: pilot one reason code across two channels', 'Day 5: review repeats, reopens, and unowned handoffs'],
  },
  {
    slug: 'outbound-appointment-setting',
    title: 'Outbound Appointment Setting',
    desc: 'Run permission-aware outreach from an approved contact list, qualify fit with a bounded script, and place accepted appointments on the right calendar.',
    problem: 'Sales or service teams lose follow-up opportunities because approved prospects are not contacted consistently or calendar details are incomplete.',
    sourceRecords: ['Approved contact list and lawful-contact instructions', 'Qualification script and disqualifying criteria', 'Calendar availability, time-zone rules, and disposition list'],
    tasks: ['Call approved contacts during permitted windows', 'Ask scripted qualification and scheduling questions', 'Offer only current, approved appointment slots', 'Record no-answer, decline, callback, and booked outcomes'],
    outputs: ['Calendar event with confirmed time zone and contact details', 'Call disposition and follow-up date', 'Suppression or do-not-contact update when requested'],
    managerApprovals: ['Campaign purpose, audience, and permitted calling windows', 'Changes to qualification criteria or promotional claims', 'Exceptions involving consent, complaints, or high-value opportunities'],
    controls: ['Use only manager-approved lists and caller identities', 'Honor opt-out instructions immediately', 'Reconcile booked calls with source dispositions', 'Sample recordings for script and claim accuracy'],
    boundaries: ['No purchasing or enriching lists without authorization', 'No guaranteeing results or inventing urgency', 'No repeated contact after a valid stop request'],
    firstWeek: ['Day 1: validate the list source, script, and local calling windows', 'Day 2: role-play objections, opt-outs, and time-zone confirmation', 'Day 3: run a small monitored call batch', 'Day 5: reconcile dispositions, appointments, and suppression records'],
  },
  {
    slug: 'order-management-support',
    title: 'Order Management Support',
    desc: 'Handle approved order-status questions, record changes, and exception handoffs while keeping refunds, credits, and fulfillment decisions with client owners.',
    problem: 'Customers wait for routine order updates while specialists spend time copying status, correcting records, and finding exception owners.',
    sourceRecords: ['Commerce or order-management system', 'Carrier and fulfillment status feeds', 'Approved change, cancellation, refund, and escalation rules'],
    tasks: ['Confirm order and shipment status using approved identifiers', 'Correct permitted contact or delivery fields', 'Open fulfillment, damage, or missing-item cases', 'Send approved status updates and next-step instructions'],
    outputs: ['Updated order note and customer communication record', 'Exception ticket with evidence and owner', 'Daily aging list for unresolved orders'],
    managerApprovals: ['Refunds, credits, replacements, and cancellations', 'Address changes after a fulfillment cutoff', 'Fraud, chargeback, inventory, and carrier-liability decisions'],
    controls: ['Use least-privilege order-system roles', 'Compare updates with the source order and carrier record', 'Review aging exceptions and repeat contacts', 'Keep payment data outside free-text notes'],
    boundaries: ['No overriding inventory or fulfillment controls', 'No payment-card collection in unapproved channels', 'No promising delivery dates not supported by the carrier or owner'],
    firstWeek: ['Day 1: map five common order journeys and cutoff rules', 'Day 2: practice routine updates and exception creation', 'Day 3: process a supervised batch of status contacts', 'Day 5: audit record accuracy, aging, and customer promises'],
  },
  {
    slug: 'tier-one-technical-support',
    title: 'Tier-One Technical Support',
    desc: 'Resolve documented low-risk issues, collect reproducible evidence, and escalate product, security, or account problems with a complete technical handoff.',
    problem: 'Specialists are interrupted by repeat setup questions and incomplete tickets that lack environment details, troubleshooting history, or impact.',
    sourceRecords: ['Approved troubleshooting tree and known-issue list', 'Ticket system, product status page, and account record', 'Severity definitions and engineering escalation template'],
    tasks: ['Confirm the product, version, environment, and observed symptom', 'Guide customers through approved reversible troubleshooting steps', 'Check known incidents and documented workarounds', 'Escalate reproducible defects with steps, evidence, and impact'],
    outputs: ['Troubleshooting record with steps and results', 'Resolved tier-one ticket or complete specialist handoff', 'Tagged known-issue and documentation-gap report'],
    managerApprovals: ['Credential, permission, or account-ownership changes', 'Security, privacy, outage, and data-loss incidents', 'Unsupported workarounds, credits, and product commitments'],
    controls: ['Restrict support access by product and customer role', 'Require exact reproduction notes before escalation', 'Sample resolved tickets for technical and claim accuracy', 'Link workarounds to an owner and review date'],
    boundaries: ['No requesting passwords or secret authentication codes', 'No remote changes outside the approved runbook', 'No blaming the customer or declaring a root cause without evidence'],
    firstWeek: ['Day 1: review the top issue tree and severity definitions', 'Day 2: reproduce sample issues in a safe environment', 'Day 3: handle one low-risk ticket category with live review', 'Day 5: compare resolutions, reopens, and escalation completeness'],
  },
  {
    slug: 'collections-reminder-calls',
    title: 'Collections Reminder Calls',
    desc: 'Deliver approved account reminders, capture customer responses, and route disputes or hardship requests without giving agents settlement authority.',
    problem: 'Routine payment reminders are inconsistent, while disputes and sensitive account conversations reach the wrong person or lack a record.',
    sourceRecords: ['Client-approved account list and balance view', 'Reminder script, identity check, and contact restrictions', 'Dispute, hardship, complaint, and legal escalation paths'],
    tasks: ['Place approved reminder calls during permitted local windows', 'Complete the required identity check before discussing an account', 'Record promise-to-pay dates or customer-stated disputes', 'Route hardship, complaint, attorney, or deceased-party contacts'],
    outputs: ['Timestamped contact attempt and disposition', 'Customer-stated promise or dispute record', 'Restricted-contact or escalation update'],
    managerApprovals: ['Settlements, payment plans, fee changes, and account adjustments', 'Responses to legal, regulatory, bankruptcy, or attorney contacts', 'Changes to contact frequency, channel, or account status'],
    controls: ['Apply jurisdiction and client contact rules before dialing', 'Suppress restricted numbers and valid stop requests', 'Review recordings for identity and script compliance', 'Reconcile promise dates with account-system updates'],
    boundaries: ['No threats, pressure, or unsupported legal statements', 'No disclosing account details before verification', 'No collecting payment credentials outside the approved payment path'],
    firstWeek: ['Day 1: validate the account source and contact restrictions', 'Day 2: practice identity, dispute, and stop-request scenarios', 'Day 3: place a small supervised reminder batch', 'Day 5: audit recordings, suppressions, disputes, and promises'],
  },
  {
    slug: 'customer-win-back-support',
    title: 'Customer Win-Back Support',
    desc: 'Contact approved former or at-risk customers with a bounded discovery script, document reasons, and route eligible opportunities to an authorized owner.',
    problem: 'Teams lose useful feedback and qualified recovery opportunities because cancellation reasons and follow-up ownership are incomplete.',
    sourceRecords: ['Approved win-back audience and suppression list', 'Reason-code guide and discovery script', 'Current eligibility, offer, and handoff rules'],
    tasks: ['Contact approved customers with a transparent reason for outreach', 'Capture customer-stated cancellation or dissatisfaction reasons', 'Explain only current approved options and eligibility', 'Route interested or unresolved customers to the named owner'],
    outputs: ['Reason-coded conversation record', 'Qualified follow-up with owner and deadline', 'Opt-out or ineligible-account update'],
    managerApprovals: ['Discounts, credits, contract changes, and special offers', 'Responses to legal, privacy, safety, or executive complaints', 'Audience expansion and changes to eligibility rules'],
    controls: ['Use a dated approved audience and offer sheet', 'Honor contact preferences and stop requests', 'Sample calls for accurate offer wording', 'Compare handoffs with owner acceptance and outcomes'],
    boundaries: ['No invented discounts or scarcity', 'No arguing with a customer decision', 'No hiding the commercial purpose of the contact'],
    firstWeek: ['Day 1: define the audience, exclusions, and reason codes', 'Day 2: role-play dissatisfaction, opt-out, and eligibility scenarios', 'Day 3: run a small monitored outreach cohort', 'Day 5: review reasons, handoff acceptance, and complaint signals'],
  },
  {
    slug: 'dispatch-coordination',
    title: 'Dispatch Coordination',
    desc: 'Coordinate approved service requests, technician or driver updates, and customer windows while operational exceptions remain with the dispatch owner.',
    problem: 'Field teams and customers receive stale arrival information because requests, availability, and exceptions are tracked in separate places.',
    sourceRecords: ['Dispatch board and work-order system', 'Coverage zones, skill rules, and availability', 'Customer window, location, access notes, and escalation tree'],
    tasks: ['Validate request details and required skill or equipment', 'Offer approved windows from current dispatch availability', 'Relay technician or driver status using the source record', 'Escalate delays, safety concerns, and out-of-scope requests'],
    outputs: ['Complete work order with location and access notes', 'Confirmed window and communication log', 'Delay or exception handoff with impact and owner'],
    managerApprovals: ['Emergency priority and route overrides', 'Overtime, pricing, refunds, and service-scope exceptions', 'Safety, access, hazardous-site, and missed-service decisions'],
    controls: ['Use the live dispatch board as the source of truth', 'Confirm time zone, address, and customer window', 'Review unassigned and overdue work orders', 'Record every reassignment and customer promise'],
    boundaries: ['No dispatching unqualified resources', 'No promising arrival times outside approved windows', 'No directing field staff through a safety exception'],
    firstWeek: ['Day 1: map request types, zones, skills, and priority rules', 'Day 2: practice scheduling, delay, and safety scenarios', 'Day 3: coordinate one service category with dispatcher review', 'Day 5: audit windows, reassignments, and unowned exceptions'],
  },
  {
    slug: 'survey-and-feedback-calls',
    title: 'Survey and Feedback Calls',
    desc: 'Collect customer feedback with a neutral approved questionnaire, preserve stated answers, and route urgent service or privacy concerns separately.',
    problem: 'Feedback programs produce unreliable results when agents paraphrase answers, lead respondents, or mix survey responses with complaint handling.',
    sourceRecords: ['Approved respondent list and contact permissions', 'Questionnaire, answer scale, and neutral probe rules', 'Complaint, safety, privacy, and do-not-contact escalation paths'],
    tasks: ['Invite approved customers to a voluntary survey', 'Read questions and answer scales consistently', 'Record verbatim comments where the form requires them', 'Separate urgent complaints and contact-preference requests from survey scoring'],
    outputs: ['Completed response with timestamp and questionnaire version', 'Nonresponse and refusal disposition', 'Escalated concern linked to the responsible owner'],
    managerApprovals: ['Question wording, sample design, and audience changes', 'Interpretation or publication of survey results', 'Remedies for complaints raised during the survey'],
    controls: ['Use one versioned questionnaire per field period', 'Avoid coaching, guessing, or completing missing answers', 'Review a sample for neutral delivery and accurate capture', 'Report response and refusal counts with the analysis'],
    boundaries: ['No presenting a voluntary survey as mandatory', 'No turning comments into verified facts', 'No publishing personal data or unsupported conclusions'],
    firstWeek: ['Day 1: review the sample, consent language, and questionnaire', 'Day 2: calibrate neutral delivery with recorded practice', 'Day 3: run a small field cohort', 'Day 5: compare recordings, captured answers, refusals, and escalations'],
  },
  {
    slug: 'workforce-reporting-support',
    title: 'Workforce Reporting Support',
    desc: 'Prepare schedule, queue, and adherence reports from defined source systems while staffing judgments and employee decisions stay with managers.',
    problem: 'Leaders cannot see coverage gaps early because schedule, attendance, queue volume, and exception data are reconciled too late.',
    sourceRecords: ['Workforce schedule and approved staffing plan', 'Telephony or queue interval report', 'Attendance, exception, and approved leave records'],
    tasks: ['Reconcile scheduled and actual coverage by interval', 'Flag missing punches, unexplained exceptions, and understaffed periods', 'Prepare queue-volume and service-level summaries', 'Maintain an evidence-linked staffing decision log'],
    outputs: ['Daily coverage and exception report', 'Weekly trend pack with source timestamps', 'Open data-quality and manager-decision list'],
    managerApprovals: ['Schedule changes, overtime, and staffing levels', 'Attendance interpretation, coaching, discipline, and payroll changes', 'Service-level targets and forecasting assumptions'],
    controls: ['Preserve source timestamps and report definitions', 'Separate missing data from confirmed exceptions', 'Reconcile totals across schedule and queue systems', 'Restrict employee data to approved recipients'],
    boundaries: ['No employee performance conclusions from one metric', 'No editing source attendance records without approval', 'No exposing personnel data in broad operational channels'],
    firstWeek: ['Day 1: define every field, source, time zone, and owner', 'Day 2: rebuild one historical report and reconcile totals', 'Day 3: produce a supervised daily coverage report', 'Day 5: review exceptions, source gaps, and manager decisions'],
  },
  {
    slug: 'operations-support',
    title: 'Call Center Operations Support',
    desc: 'Remove repeat queue administration from supervisors through controlled CRM cleanup, callback tracking, shift handoffs, and operating-list maintenance.',
    problem: 'Supervisors spend the end of each shift cleaning records and chasing follow-ups instead of reviewing quality and resolving exceptions.',
    sourceRecords: ['Queue dashboard and shift roster', 'CRM records, callback ledger, and shared inbox', 'Daily operations checklist and escalation register'],
    tasks: ['Prepare queue and shift handoff summaries', 'Clean permitted CRM fields and duplicate work lists', 'Track promised callbacks and unresolved follow-ups', 'Maintain supervisor action and escalation lists'],
    outputs: ['End-of-shift operations brief', 'Reconciled callback and follow-up ledger', 'Data-quality exception list'],
    managerApprovals: ['Staffing, schedule, and queue-priority changes', 'Refund, cancellation, policy, and customer-outcome decisions', 'CRM deletion, merge, permission, and ownership changes'],
    controls: ['Compare updates with the originating ticket or message', 'Sample changed records for completeness', 'Age callbacks and exceptions by owner', 'Keep a visible approval queue for restricted actions'],
    boundaries: ['No closing work because an owner is unavailable', 'No merging or deleting uncertain records', 'No representing administrative preparation as a manager decision'],
    firstWeek: ['Day 1: document one shift checklist and source systems', 'Day 2: process a redacted batch of records and callbacks', 'Day 3: prepare a supervised shift handoff', 'Day 5: audit updates, aging, and approval wait time'],
  },
  {
    slug: 'customer-support',
    title: 'Customer Support Staffing',
    desc: 'Add trained support capacity for repeat questions, status checks, basic troubleshooting, and documented follow-up across an approved queue.',
    problem: 'A growing support backlog delays routine answers and follow-up because the internal team must protect time for complex customer decisions.',
    sourceRecords: ['Approved knowledge base and response templates', 'Customer record and ticket history', 'Authority matrix for answers, changes, and escalations'],
    tasks: ['Answer common questions using current approved guidance', 'Confirm case, order, appointment, or account status', 'Tag and prioritize requests by customer impact', 'Send approved follow-up and confirm the next owner'],
    outputs: ['Complete support ticket and customer-facing reply', 'Escalation with facts, action taken, and decision needed', 'Daily backlog and repeat-question summary'],
    managerApprovals: ['Policy exceptions, refunds, credits, and account ownership', 'Legal, medical, financial, safety, or regulated advice', 'Changes to product commitments, scope, or customer terms'],
    controls: ['Version approved answers and retire stale templates', 'Sample replies for accuracy, tone, and completeness', 'Track reopen, repeat-contact, and unresolved rates', 'Review the oldest unowned cases each shift'],
    boundaries: ['No guessing when the source answer is missing', 'No making protected account changes without authority', 'No closing a ticket before the promised next step is recorded'],
    firstWeek: ['Day 1: choose one low-risk queue and authority matrix', 'Day 2: practice approved answers and escalation triggers', 'Day 3: handle a small reviewed ticket batch', 'Day 5: inspect replies, reopens, backlog aging, and knowledge gaps'],
  },
  {
    slug: 'reporting-and-qa',
    title: 'Call Center Reporting and QA',
    desc: 'Sample customer contacts against a versioned rubric, prepare evidence-linked findings, and give managers a bounded view of quality trends.',
    problem: 'Managers have contact data but cannot distinguish isolated mistakes, recurring control gaps, and rubric disagreements without consistent samples.',
    sourceRecords: ['Approved QA rubric and calibration examples', 'Calls, chats, tickets, and associated system records', 'Issue taxonomy, coaching log, and policy versions'],
    tasks: ['Select and document a defined review sample', 'Score observable behaviors against the current rubric', 'Tag repeat defects, script gaps, and process failures', 'Prepare evidence-linked weekly findings for manager review'],
    outputs: ['QA scorecard with sample definition and examples', 'Calibration disagreement log', 'Trend summary and manager decision list'],
    managerApprovals: ['Final coaching, discipline, and employee conclusions', 'Rubric, threshold, sample, and policy changes', 'Publication of performance or customer-impact claims'],
    controls: ['Version the rubric and preserve the scored evidence', 'Calibrate reviewers on the same small sample', 'Separate observed facts from interpretation', 'Report sample size and limitations with every trend'],
    boundaries: ['No claiming a sample represents all contacts without support', 'No editing source records to match the score', 'No turning a QA preparation role into disciplinary authority'],
    firstWeek: ['Day 1: choose the channel, period, sample, and rubric version', 'Day 2: score ten contacts with the manager', 'Day 3: reconcile reviewer disagreements and unclear criteria', 'Day 5: issue a bounded report with evidence and open decisions'],
  },
]

type ServiceDecisionProfile = Pick<FleetService, 'audience' | 'startingScenarios' | 'example' | 'relatedServices'>

const decisionProfiles: Record<string, ServiceDecisionProfile> = {
  'inbound-call-handling': {
    audience: ['Teams missing calls during peaks, breaks, or after-hours coverage', 'Managers who need routine calls separated from policy decisions'],
    startingScenarios: ['Overflow one established phone queue while the internal team is busy', 'Cover a defined evening window with a manager available for escalation'],
    example: 'A customer calls to move an appointment. The agent verifies the approved fields, offers a current slot, records the change, and routes a policy question to the named manager.',
    relatedServices: ['omnichannel-customer-support', 'customer-support'],
  },
  'omnichannel-customer-support': {
    audience: ['Support teams receiving the same request through several channels', 'Operations leaders who need one owner and history for each case'],
    startingScenarios: ['Join email and chat contacts under one case identifier', 'Create a controlled handoff when a customer moves from chat to phone'],
    example: 'A customer starts in chat and later emails supporting details. The agent links both contacts to the verified case, summarizes the new evidence, and keeps the existing owner and response commitment visible.',
    relatedServices: ['inbound-call-handling', 'customer-support'],
  },
  'outbound-appointment-setting': {
    audience: ['Teams with an approved contact list and documented outreach permission', 'Managers who want qualification and calendar work kept within a script'],
    startingScenarios: ['Follow up with people who explicitly requested a consultation', 'Call an approved customer cohort about available service appointments'],
    example: 'An approved contact asks for a later meeting. The agent confirms the time zone, checks live availability, books an allowed slot, and records the campaign disposition and any contact preference.',
    relatedServices: ['inbound-call-handling', 'survey-and-feedback-calls'],
  },
  'order-management-support': {
    audience: ['Commerce teams with high volumes of routine status questions', 'Fulfillment managers who need complete exception records before deciding remedies'],
    startingScenarios: ['Answer shipment-status contacts from the order and carrier records', 'Open a documented exception for a damaged or incomplete order'],
    example: 'A customer reports a missing item. The agent verifies the order, records the item and available evidence, opens the approved exception type, and sends the case to the owner authorized to decide a remedy.',
    relatedServices: ['customer-support', 'omnichannel-customer-support'],
  },
  'tier-one-technical-support': {
    audience: ['Product teams with repeat setup and documented troubleshooting questions', 'Specialists who need escalations to include reproducible evidence'],
    startingScenarios: ['Handle one low-risk setup category from an approved runbook', 'Collect environment details before routing a possible product defect'],
    example: 'A user reports that a documented feature will not load. The agent records the version and environment, follows reversible checks, captures each result, and escalates with reproduction steps when the issue remains.',
    relatedServices: ['customer-support', 'reporting-and-qa'],
  },
  'collections-reminder-calls': {
    audience: ['Account teams with approved reminder lists and jurisdiction-specific instructions', 'Managers who retain authority over disputes, hardship, and payment arrangements'],
    startingScenarios: ['Deliver a neutral reminder for an approved account cohort', 'Capture and route customer-stated disputes without deciding their validity'],
    example: 'After completing the required identity check, the agent states the approved reminder. The customer disputes the balance, so the agent records the statement verbatim and routes it without proposing a settlement.',
    relatedServices: ['outbound-appointment-setting', 'customer-support'],
  },
  'customer-win-back-support': {
    audience: ['Retention teams with a defined eligible audience and current options', 'Leaders seeking structured cancellation feedback and owned follow-up'],
    startingScenarios: ['Contact a small approved cohort of recently cancelled customers', 'Route interested former customers to an authorized retention owner'],
    example: 'A former customer explains that an unavailable feature drove cancellation. The agent records the stated reason, explains only a currently approved option, and creates a follow-up for the authorized owner without promising a discount.',
    relatedServices: ['survey-and-feedback-calls', 'outbound-appointment-setting'],
  },
  'dispatch-coordination': {
    audience: ['Field-service teams coordinating customer windows and live work orders', 'Dispatch owners who want routine updates separated from route or safety decisions'],
    startingScenarios: ['Schedule one standard request type from live availability', 'Relay documented delay information and create an owned exception'],
    example: 'A technician reports a delay to the dispatch board. The agent checks the current record, contacts the customer with an approved window, logs the conversation, and routes a requested priority change to dispatch.',
    relatedServices: ['inbound-call-handling', 'operations-support'],
  },
  'survey-and-feedback-calls': {
    audience: ['Research teams using an approved questionnaire and respondent list', 'Service managers who need feedback captured separately from complaint resolution'],
    startingScenarios: ['Pilot a short voluntary survey with one defined customer cohort', 'Collect verbatim comments after a completed service interaction'],
    example: 'A respondent gives a low score and describes an unresolved safety concern. The agent preserves the stated answer, does not reinterpret the score, and separately opens the required urgent escalation with a named owner.',
    relatedServices: ['customer-win-back-support', 'reporting-and-qa'],
  },
  'workforce-reporting-support': {
    audience: ['Operations teams reconciling schedule, attendance, and queue reports', 'Managers who need source-linked staffing information before making decisions'],
    startingScenarios: ['Rebuild one daily coverage report from named source systems', 'Prepare an exception list for missing or conflicting interval data'],
    example: 'The schedule and queue report disagree for one interval. The agent preserves both source timestamps, flags the mismatch as unresolved, and places it in the manager decision list rather than changing attendance data.',
    relatedServices: ['operations-support', 'reporting-and-qa'],
  },
  'operations-support': {
    audience: ['Supervisors spending substantial time on repeat queue administration', 'Support teams with callbacks and handoffs spread across several work lists'],
    startingScenarios: ['Prepare one end-of-shift brief from approved systems', 'Reconcile promised callbacks against their current owners and status'],
    example: 'At shift end, the agent finds a promised callback without a completed outcome. The agent checks the source case, confirms the assigned owner, and places the open commitment in the handoff instead of closing it.',
    relatedServices: ['workforce-reporting-support', 'reporting-and-qa'],
  },
  'customer-support': {
    audience: ['Growing teams with a backlog of repeat, documented customer questions', 'Managers who want added capacity while retaining sensitive decisions'],
    startingScenarios: ['Assign one low-risk ticket category with approved answers', 'Add coverage for routine status checks and documented follow-up'],
    example: 'A customer asks about an order and then requests a refund. The agent answers the verified status question, records the refund request and relevant facts, and routes the decision to the authorized manager.',
    relatedServices: ['inbound-call-handling', 'omnichannel-customer-support'],
  },
  'reporting-and-qa': {
    audience: ['Contact-center leaders who need consistent review across calls and tickets', 'Managers preparing evidence for calibration and coaching decisions'],
    startingScenarios: ['Score a defined sample against one versioned quality rubric', 'Compare two reviewers on the same small calibration set'],
    example: 'Two reviewers disagree on whether a handoff met the rubric. The analyst links the interaction evidence, records each interpretation, and sends the unclear criterion to the manager instead of forcing agreement.',
    relatedServices: ['operations-support', 'workforce-reporting-support'],
  },
}

const enrichService = (service: CoreFleetService): FleetService => {
  const profile = decisionProfiles[service.slug]
  if (!profile) throw new Error(`Missing decision profile for ${service.slug}`)
  return {
    ...service,
    ...profile,
    heroImage: `/service-heroes/${service.slug}.svg`,
    workflow: [
      `Confirm the ${service.title.toLowerCase()} queue, source systems, hours, and accountable owners.`,
      'Document approved actions, required evidence, authority limits, and escalation triggers.',
      'Practice ordinary requests and exceptions with redacted examples before handling live work.',
      'Pilot a narrow queue, review the records with a manager, and revise the operating brief before expansion.',
    ],
    faqs: [
      { question: `What should we define before starting ${service.title.toLowerCase()}?`, answer: 'Define the in-scope requests, source of truth, permitted actions, access, hours, customer wording, and owner for each exception.' },
      { question: 'Which decisions stay with our managers?', answer: `Your managers retain the approvals listed on this page, plus any request outside the written authority boundary for ${service.title.toLowerCase()}.` },
      { question: 'How should we begin?', answer: 'Begin with one reviewable queue and a small set of representative examples. Inspect the records and handoffs before adding categories, channels, or hours.' },
    ],
  }
}

export const fleetServices: readonly FleetService[] = coreFleetServices.map(enrichService)
