export const site = {
  "domain": "CallCenterOutsourced.com",
  "slug": "callcenteroutsourced",
  "brand": "Call Center Outsourced",
  "primary": "call center outsourced",
  "audience": "businesses comparing outsourced call center models and staffing details",
  "angle": "call coverage, staffing ratios, scripts, QA, SLAs, and reporting",
  "style": "Queue wall command center",
  "dark": "#082f49",
  "color": "#0ea5e9",
  "accent": "#f59e0b",
  "heroImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "alt": "customer service team in outsourced call center",
  "badge": "Call center"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations support for call centers that need queue notes, schedule coverage, CRM cleanup, and clean handoffs without giving offshore staff owner-level control.",
    "buyerProblem": "Back-office work is slowing down the phone team.",
    "fit": "Use this lane when supervisors keep losing time to queue notes, missed follow-up, shift changes, and CRM cleanup. The offshore role should remove repeat admin work while managers keep control of staffing, refunds, policy calls, and customer decisions.",
    "bestTasks": ["Daily queue notes and shift handoff summaries", "CRM cleanup after calls and chat tickets", "Callback lists, appointment reminders, and follow-up tracking", "Simple coverage reports for supervisors"],
    "qualityChecks": ["Sample ten records each day for missing notes", "Review late callbacks before the next shift", "Keep a manager approval list for refunds, cancellations, and escalations"],
    "guardrails": ["Refund, cancellation, and credit decisions", "Final staffing levels and schedule cuts", "Policy exceptions for angry or high-value customers"],
    "report": "A useful first report shows completed follow-ups, open callbacks, missed data fields, and any decision that needs a supervisor.",
    "launchPlan": [
      { "day": "1", "title": "Give sample tickets", "body": "Share ten finished tickets, the exact note style, and the fields that must be filled in every time." },
      { "day": "2", "title": "Limit access", "body": "Start with read-only or narrow CRM access until the worker can show clean notes and safe handoffs." },
      { "day": "3", "title": "Check a small batch", "body": "Review the first twenty records together and fix unclear rules before adding more volume." },
      { "day": "5", "title": "Set the weekly scorecard", "body": "Track completed records, missing fields, late callbacks, and supervisor escalations." }
    ],
    "faqs": [
      { "question": "Can offshore staff manage call center operations alone?", "answer": "They can support the work, but a manager should still own staffing, policy calls, and performance decisions." },
      { "question": "What should we prepare first?", "answer": "Prepare sample tickets, CRM field rules, callback rules, and a short escalation list before the first shift." },
      { "question": "How soon can quality be checked?", "answer": "Quality can be checked on day one if the pilot starts with a small batch and a clear review list." }
    ]
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer support staffing for teams that need call, chat, email, and ticket coverage with scripts, QA review, and clear escalation rules.",
    "buyerProblem": "Customers wait too long because the support queue has no backup.",
    "fit": "Use this lane for repeat questions, status checks, basic troubleshooting, appointment support, and ticket follow-up. Keep sensitive decisions with your manager until the support worker has proven accuracy.",
    "bestTasks": ["Answer common call, chat, email, and ticket questions", "Confirm order, booking, appointment, or case status", "Tag tickets and route urgent issues", "Send approved follow-up messages"],
    "qualityChecks": ["Score call notes and chat replies against the script", "Review escalations during the first two weeks", "Track first response time, reopen rate, and unresolved tickets"],
    "guardrails": ["Refund approvals and goodwill credits", "Legal, medical, financial, or safety advice", "Changes to policy, pricing, or account ownership"],
    "report": "The first report should show volume handled, response time, common questions, escalations, and script gaps that need a manager answer.",
    "launchPlan": [
      { "day": "1", "title": "Pick the safest queue", "body": "Start with one channel or one ticket type, not every customer contact at once." },
      { "day": "2", "title": "Load scripts and examples", "body": "Give approved answers, bad-answer examples, and the words that should trigger an escalation." },
      { "day": "3", "title": "Review live samples", "body": "Check real replies before the worker handles a larger queue." },
      { "day": "5", "title": "Tune the script", "body": "Add missing answers and remove wording that confuses customers." }
    ],
    "faqs": [
      { "question": "Should outsourced support start on phone or tickets?", "answer": "Most teams should start with tickets or chat because samples are easier to review. Phone coverage can follow once scripts and escalation rules are stable." },
      { "question": "Can staff work US hours?", "answer": "Yes, but the schedule should be part of the role scope before matching staff." },
      { "question": "What is the biggest launch risk?", "answer": "The biggest risk is vague authority. Write down what the worker can answer and what must go to a manager." }
    ]
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin support for call center teams that need inbox sorting, appointment updates, reporting prep, document cleanup, and supervisor follow-up.",
    "buyerProblem": "Supervisors are doing admin work after every shift.",
    "fit": "Use this lane when the phone team needs help with inbox cleanup, scheduling updates, forms, notes, and daily prep. The offshore assistant should make the next shift easier without making customer or employee decisions alone.",
    "bestTasks": ["Sort shared inboxes and tag action items", "Update appointments, calendars, and follow-up lists", "Prepare simple daily reports for managers", "Clean files, forms, and customer records"],
    "qualityChecks": ["Review a sample of updated records each day", "Check calendar changes against source requests", "Keep a written list of items waiting for manager approval"],
    "guardrails": ["Hiring, discipline, payroll, and HR decisions", "Customer promises that change price or policy", "Password resets or access changes without approval"],
    "report": "A good admin report lists closed items, pending manager decisions, calendar changes, and any record that looks incomplete.",
    "launchPlan": [
      { "day": "1", "title": "Make the inbox rules clear", "body": "Show what to archive, what to tag, what to answer, and what to leave for a manager." },
      { "day": "2", "title": "Run one checklist", "body": "Use one daily admin checklist before adding calendar, forms, and reporting work." },
      { "day": "3", "title": "Audit the updates", "body": "Compare completed work against source messages so errors are easy to catch." },
      { "day": "5", "title": "Add the next task set", "body": "Add another repeat task only after the first checklist is clean." }
    ],
    "faqs": [
      { "question": "Is admin support different from customer support?", "answer": "Yes. Admin support works behind the queue. Customer support talks to customers or handles tickets directly." },
      { "question": "What access should admin staff get first?", "answer": "Start with limited access to the inbox, calendar, or CRM fields needed for the first checklist." },
      { "question": "How do we stop admin mistakes?", "answer": "Use sample work, narrow permissions, and a daily review during the first week." }
    ]
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA support for call centers that need ticket sampling, scorecards, trend notes, and manager-ready weekly summaries.",
    "buyerProblem": "The team has call data but no simple view of what is going wrong.",
    "fit": "Use this lane when supervisors need help sampling tickets, finding repeat issues, and turning raw queue data into a short weekly review. The offshore role should prepare the evidence. Managers still own coaching, staffing, and policy changes.",
    "bestTasks": ["Sample calls, chats, or tickets against a QA checklist", "Tag common customer issues and script gaps", "Prepare weekly volume, response, and escalation notes", "Build a manager-ready scorecard"],
    "qualityChecks": ["Use the same QA rubric on every sample", "Compare two reviewers on a small batch before scaling", "Separate facts from coaching opinions"],
    "guardrails": ["Final agent coaching or discipline", "Changing QA scoring rules without manager approval", "Publishing customer data outside approved systems"],
    "report": "The first QA report should show sample size, pass/fail reasons, repeat issue tags, script gaps, and coaching topics for a manager to review.",
    "launchPlan": [
      { "day": "1", "title": "Choose the QA sample", "body": "Pick the channel, date range, sample size, and checklist before any scoring starts." },
      { "day": "2", "title": "Score together", "body": "Review the first ten samples with a manager so the rubric is not guessed." },
      { "day": "3", "title": "Find repeat issues", "body": "Group misses by cause, such as script gap, tool issue, training gap, or unclear policy." },
      { "day": "5", "title": "Send the summary", "body": "Send a short weekly report with facts, examples, and manager questions." }
    ],
    "faqs": [
      { "question": "Can offshore staff run QA?", "answer": "They can prepare QA samples and reports. A manager should still own final coaching and policy decisions." },
      { "question": "What sample size is useful at first?", "answer": "Start small, often ten to twenty records, so the scoring rules can be fixed before more samples are added." },
      { "question": "What should the QA report include?", "answer": "Include sample size, issue tags, examples, script gaps, and a short list of manager decisions." }
    ]
  }
] as const;
export const blogPosts = [
  {
    "slug": "call-center-outsourced-planning",
    "title": "Call Center Outsourced: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "call-center-outsourced-tasks-to-outsource",
    "title": "Call Center Outsourced: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "call-center-outsourced-provider-questions",
    "title": "Call Center Outsourced: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "call-center-outsourced-onboarding-checklist",
    "title": "Call Center Outsourced: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'the coverage team',
  promise: 'Get a managed call center coverage plan built around the queues you need handled.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'coverage planning call to turn your queue needs into a clear service scope',
    'team matching based on channels, schedule, tools, and communication needs',
    'onboarding guidance for scripts, scorecards, reporting, and safe tool access',
    'managed support with a defined path for quality, attendance, and coverage questions',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'The coverage team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every coverage plan depends on queue scope, channels, schedule, tools, and management needs. Send the details and the coverage team can guide the best fit.';
