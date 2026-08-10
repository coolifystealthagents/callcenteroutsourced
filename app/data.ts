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
    "guardrails": ["Refund approvals and goodwill credits", "Legal, medical, financial, or safety advice", "Changes to policy, scope, or account ownership"],
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
    "guardrails": ["Hiring, discipline, payroll, and HR decisions", "Customer promises that change policy or commercial terms", "Password resets or access changes without approval"],
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
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  intro: string;
  keyword?: string;
  published?: string;
  updated?: string;
  sections: readonly {
    title: string;
    body?: string;
    paragraphs?: readonly string[];
    items?: readonly string[];
  }[];
  stats?: readonly { value: string; label: string; note: string; source: number }[];
  controlTable?: readonly { data: string; agent: string; manager: string }[];
  chart?: readonly { label: string; value: number; display: string }[];
  scripts?: readonly { situation: string; text: string }[];
  expertQuote?: { text: string; attribution: string; source: number };
  faqs?: readonly { question: string; answer: string }[];
  sources?: readonly { name: string; organization: string; date: string; url: string; note: string }[];
  related?: readonly { label: string; href: string }[];
  banners?: readonly { label: string; title: string; body: string; href: string; cta: string }[];
};

const baseBlogPosts: readonly BlogPost[] = [
  {
    slug: 'philippines-call-center-phishing-escalation-playbook',
    title: 'Philippines call center phishing escalation playbook',
    excerpt: 'Give Philippines-based call center agents a clear stop, record, and manager handoff process for suspicious calls, messages, links, and account requests.',
    minutes: 13,
    keyword: 'Philippines call center phishing escalation playbook',
    published: '2026-07-28',
    updated: '2026-07-28',
    intro: 'A phishing escalation playbook should help an agent act during the uncertain first minutes of a suspicious contact. It needs a safe way to pause, a named manager path, and a short incident record. This guide is written for Philippines-based call center teams, but the evidence below does not measure Filipino agent behavior.',
    stats: [
      { value: '30%', label: 'of breaches involved a third party', note: 'Verizon 2025 DBIR release, April 23, 2025; global finding, not a Philippines measure.', source: 1 },
      { value: '22%', label: 'began with credential abuse', note: 'Verizon 2025 DBIR release, April 23, 2025; global initial-access finding.', source: 1 },
      { value: '44%', label: 'included ransomware', note: 'Verizon 2025 DBIR release, April 23, 2025; global confirmed-breach finding.', source: 1 },
      { value: '193,407', label: 'phishing or spoofing complaints', note: 'FBI 2024 IC3 Annual Report, released April 23, 2025; US complaints, not confirmed incidents.', source: 2 },
    ],
    sections: [
      {
        title: 'Make the first response easy to remember',
        paragraphs: [
          'Use three verbs: stop, record, and hand off. The agent stops the requested action without opening a link, downloading a file, sharing a code, or changing an account. The agent then records a small set of facts and sends the case to the on-duty manager.',
          'This rule applies to calls, email, chat, text messages, and internal-looking requests. A caller may claim to be a customer, client executive, tool administrator, courier, or coworker. The claimed identity does not replace the approved verification path.',
        ],
        items: ['Stop the action and keep the customer record unchanged', 'Do not open, reply to, forward, or copy a suspicious link', 'Record the channel, time, case number, and requested action', 'Alert the named manager through the approved incident channel', 'Return to the queue only after the case and any exposed account are contained'],
      },
      {
        title: 'Recognize pressure without trying to prove intent',
        paragraphs: [
          'Agents do not need to decide whether a person is a criminal. They need to notice when a request conflicts with the normal process. Useful triggers include urgency, secrecy, a new destination for data, a request for a sign-in code, or instructions to move the conversation to a personal account.',
          'CISA advises people to recognize and report phishing, and it highlights urgent or emotional language, requests for personal or financial information, shortened links, and incorrect addresses as common signs.[4] NIST also tells users to be wary of unexpected messages and to verify requests through known contact details rather than the message itself.[5] These signs start a check; one sign alone does not prove an attack.',
        ],
      },
      {
        title: 'Use the evidence without blaming a location',
        paragraphs: [
          'Verizon released its 2025 Data Breach Investigations Report findings on April 23, 2025. It reported that 30% of breaches involved a third party, 22% began with credential abuse, and 44% included ransomware.[1] These are global findings from Verizon\'s incident and breach analysis, not a score for outsourced teams or workers in the Philippines.',
          'The FBI released its 2024 IC3 Annual Report on the same date. The report lists 859,532 total US complaints, including 193,407 phishing or spoofing complaints, 64,882 personal-data-breach complaints, and 36,002 tech-support complaints.[2] These are complaints submitted in the United States, not confirmed incidents and not observations of Filipino agents.',
          'The figures justify rehearsing common control failures. They do not estimate the chance that one agent, vendor, or center will face an attack. A local playbook should be shaped by the actual queue, systems, customer checks, and manager coverage.',
        ],
      },
      {
        title: 'Give the manager a bounded handoff',
        paragraphs: [
          'The first manager should confirm that the agent stopped and should move the conversation away from the suspicious contact. The manager checks the message or call through a trusted channel, alerts the client security contact, and follows the client incident plan. The agent should not investigate with personal tools.',
          'Use a named account and the smallest role needed for the queue. NIST\'s zero-trust guidance says that network location or ownership alone does not create trust.[3] An internal-looking message, office network, or company device therefore cannot be the only reason to approve a sensitive action.',
        ],
      },
      {
        title: 'Record enough facts for the next decision',
        paragraphs: [
          'Keep the incident card short enough to finish while details are fresh. Record the local time and time zone, channel, case number, displayed sender or caller details, requested action, verification result, and what the agent actually did. Mark unknown facts as unknown rather than filling gaps.',
          'Do not paste passwords, one-time codes, full payment details, identity documents, or unnecessary customer data into the handoff. Preserve the original item in the approved system when policy allows, and point the manager to its record. The client incident owner decides whether a separate evidence-preservation step is needed.',
        ],
        items: ['Write the time, time zone, channel, and case number', 'Describe the request and the exact step that raised concern', 'State whether anything was opened, entered, changed, or disclosed', 'Name the manager and client contact who received the handoff', 'Track containment instructions and the case owner without editing the original facts'],
      },
      {
        title: 'Use words that let the agent pause safely',
        paragraphs: [
          'A pause line protects the process without accusing a legitimate caller. It should say what the agent cannot do, what happens next, and where the request will go. Avoid explaining the hidden details of customer checks, because that can teach a caller how to answer them.',
          'For a suspicious message, the agent should avoid replying to the sender for confirmation. Verification should use a known directory entry, client portal, or established manager channel. If a manager sends an unusual request, the agent can still verify it outside the original thread.',
        ],
      },
      {
        title: 'Drill the playbook and fix the handoff gaps',
        paragraphs: [
          'Run short drills with redacted examples from the channels agents actually use. Include an urgent caller seeking an account change, an unexpected file in chat, and a manager-looking message asking for customer records. Tell participants which exercises are simulations so no one mistakes them for live incidents.',
          'Score observable actions: the agent stopped, avoided the link or disclosure, created an accurate record, used the right channel, and reached the correct manager. Also time the manager acknowledgment. A weak result may point to an unclear contact path or missing overnight coverage rather than an agent knowledge problem.',
        ],
        items: ['Run one voice scenario and one message scenario', 'Include the Philippine shift\'s primary and backup managers', 'Check the incident record for facts, unknowns, and unnecessary data', 'Confirm the client security path works during the actual shift', 'Retest the revised step in the next scheduled drill'],
      },
    ],
    controlTable: [
      { data: 'Unexpected link or file', agent: 'Leave it unopened, record its location, and alert the manager', manager: 'Verify through a trusted channel and follow the client incident plan' },
      { data: 'Request for a sign-in code', agent: 'Do not share the code or approve the prompt', manager: 'Check the account and contact the client security owner' },
      { data: 'Failed customer check', agent: 'Make no sensitive change and create a case handoff', manager: 'Review the request without revealing verification answers' },
      { data: 'Claimed executive request', agent: 'Pause and verify outside the original call or thread', manager: 'Confirm with a known contact and document the decision' },
      { data: 'Possible agent click or reply', agent: 'Disconnect from the suspicious contact and report exactly what happened', manager: 'Start the client\'s containment and evidence process' },
      { data: 'Customer data disclosure', agent: 'Stop further disclosure and identify the affected case', manager: 'Escalate to the client privacy and security contacts' },
    ],
    chart: [
      { label: 'Phishing or spoofing', value: 193407, display: '193,407' },
      { label: 'Personal data breach', value: 64882, display: '64,882' },
      { label: 'Tech support', value: 36002, display: '36,002' },
    ],
    scripts: [
      { situation: 'Caller asks to bypass a check', text: '\"I cannot complete that change through this call. I will record the request and send it to the on-duty manager for review.\"' },
      { situation: 'Unexpected link or attachment arrives', text: '\"I have not opened the item. I recorded the time, channel, and case number and sent them through the approved incident channel.\"' },
      { situation: 'Agent already clicked or replied', text: '\"I opened or replied to the item at [time] and stopped at [step]. I have made no further change and need the client incident owner to review case [number].\"' },
    ],
    expertQuote: {
      text: 'Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned).',
      attribution: 'NIST Special Publication 800-207, published August 2020',
      source: 3,
    },
    faqs: [
      { question: 'What should a Philippines call center agent do first after spotting a suspicious message?', answer: 'The agent should stop before opening, replying, forwarding, sharing a code, or changing a customer record. Next, the agent records the time, channel, case number, and requested action, then alerts the named manager through the approved incident channel.' },
      { question: 'Should an agent challenge a suspicious caller?', answer: 'No accusation is needed. The agent can say the action cannot be completed through that contact and route the case for review. Verification should happen through the approved customer process or a separate known channel.' },
      { question: 'What if the agent already clicked a link?', answer: 'The agent should stop further action and report the click immediately, including the time and anything entered or disclosed. The manager should start the client\'s containment process. Honest details are more useful than an attempt to investigate or hide the click.' },
      { question: 'What belongs in the manager handoff?', answer: 'Include the time and time zone, channel, case number, displayed contact details, requested action, verification result, and steps taken. Avoid copying secrets or extra customer data into chat. Point to the protected source record instead.' },
      { question: 'Do the cited figures show that Philippines call centers cause phishing incidents?', answer: 'No. Verizon\'s findings are global, while the FBI figures are US complaint counts. Neither source measures Filipino agent conduct. They support practicing controls for common attack paths, not claims about a country or workforce.' },
      { question: 'How should managers test the playbook?', answer: 'Use announced simulations with redacted voice and message examples. Check whether the agent stopped, recorded facts, avoided unnecessary data, and reached the correct manager. Then repair the contact path or instruction that failed and test it again.' },
    ],
    sources: [
      { name: '2025 Data Breach Investigations Report release', organization: 'Verizon Business', date: 'April 23, 2025', url: 'https://www.verizon.com/about/news/2025-data-breach-investigations-report', note: 'Global third-party involvement, credential abuse, and ransomware findings.' },
      { name: '2024 IC3 Annual Report', organization: 'Federal Bureau of Investigation', date: 'April 23, 2025', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'US complaint totals and complaint categories; complaints are not confirmed incidents.' },
      { name: 'Zero Trust Architecture, SP 800-207', organization: 'National Institute of Standards and Technology', date: 'August 2020', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Exact zero-trust statement and access-control framework.' },
      { name: 'Recognize and Report Phishing', organization: 'Cybersecurity and Infrastructure Security Agency', date: 'May 21, 2024', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Signs of phishing and reporting guidance.' },
      { name: 'Phishing guidance', organization: 'National Institute of Standards and Technology', date: 'accessed July 28, 2026', url: 'https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/phishing', note: 'Recognition and independent verification guidance.' },
      { name: 'Republic Act No. 10173', organization: 'The Lawphil Project', date: 'August 15, 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Text of the Philippine Data Privacy Act of 2012.' },
    ],
    related: [
      { label: 'Use the Philippines call center data security checklist', href: '/blog/philippines-call-center-data-security-checklist' },
      { label: 'Define the customer support lane', href: '/services/omnichannel-customer-support' },
      { label: 'Build a reporting and QA review', href: '/services/workforce-reporting-support' },
      { label: 'Prepare the live call workflow', href: '/services/inbound-call-handling' },
    ],
    banners: [
      { label: 'Call guide', title: 'Put the stop rule beside the live script', body: 'Give agents one pause line, one incident card, and one manager channel.', href: '/services/inbound-call-handling', cta: 'Review inbound call handling' },
      { label: 'Manager review', title: 'Check calls and incident records together', body: 'A clean handoff needs facts from the contact and the account history.', href: '/services/workforce-reporting-support', cta: 'Review reporting support' },
      { label: 'Shift handoff', title: 'Keep the escalation path open overnight', body: 'Name primary and backup contacts for the hours the Philippines team works.', href: '/services/omnichannel-customer-support', cta: 'Review customer support' },
    ],
  },
  {
    slug: 'philippines-call-center-data-security-checklist',
    title: 'Philippines call center data security checklist for outsourced teams',
    excerpt: 'Set safe access, customer verification, call notes, recordings, and manager handoffs for a Philippines-based support team.',
    minutes: 12,
    keyword: 'Philippines call center data security checklist',
    published: '2026-07-25',
    updated: '2026-07-25',
    intro: 'A Philippines call center data security checklist should tell agents what they may see, change, and send to a manager. It should also help managers check calls and account access. Write those rules before a Filipino agent enters a live queue.',
    stats: [
      { value: '30%', label: 'of breaches involved a third party', note: 'Verizon 2025 DBIR; global breach data, not a Philippines-only rate.', source: 1 },
      { value: '22%', label: 'began with credential abuse', note: 'Verizon 2025 DBIR initial access finding.', source: 1 },
      { value: '44%', label: 'included ransomware', note: 'Verizon 2025 DBIR confirmed breach analysis.', source: 1 },
      { value: '193,407', label: 'phishing or spoofing complaints', note: 'FBI IC3 2024 US complaint count, not confirmed incidents.', source: 2 },
    ],
    sections: [
      {
        title: 'What this checklist should cover',
        paragraphs: [
          'List the data agents handle, the tools they enter, the actions they may take, and the cases a manager must decide. A rule such as "protect customer data" is too broad for a live call. Write the field, action, and handoff instead.',
          'Start with one queue and one customer journey. An order-status line may need a name, order number, shipping status, and approved notes. An account-recovery line exposes different details and needs a different access plan.',
        ],
        items: ['Name every system and data field used in the first queue', 'List actions the agent can complete without approval', 'Name one manager for exceptions and urgent cases', 'Keep a review sample for calls, notes, transfers, and access logs'],
      },
      {
        title: 'Map the customer data before granting access',
        paragraphs: [
          'Walk through a real call and note every piece of customer information that appears. Include spoken data, CRM fields, recordings, transcripts, and notes left for the next shift. Redact the example before using it for training.',
          'The Philippines Data Privacy Act covers organizations that control personal information and those that process it for them.[5] The client should decide why data is used and which actions are allowed. The staffing team then needs matching written instructions.',
          'Remove fields the agent does not need for the assigned queue. An appointment agent may not need payment history or identity documents. Narrow screens, role permissions, and named accounts make the rule easier to enforce.',
        ],
      },
      {
        title: 'Read the risk numbers without stretching them',
        paragraphs: [
          'The 2025 Verizon Data Breach Investigations Report reviewed more than 22,000 security incidents and 12,195 confirmed breaches.[1] It found third-party involvement in 30% of breaches, credential abuse as an initial path in 22%, and ransomware in 44%. These are global findings, so they show common control problems rather than a failure rate for Filipino workers.',
          'The FBI received 859,532 internet-crime complaints in 2024.[2] Its category table includes 193,407 phishing or spoofing complaints, 64,882 personal-data-breach complaints, and 36,002 tech-support complaints. Complaints are reports from the United States, not proof that every report became a confirmed crime.',
          'The practical lesson is simple: a remote support plan needs controls for people, accounts, and outside vendors. It would be wrong to use these figures to predict what will happen in one call center. Use them to decide what your manager should test before launch.',
        ],
      },
      {
        title: 'Split agent work from manager control',
        paragraphs: [
          'Give the Filipino agent enough access to complete the assigned call, but keep high-impact changes behind a manager check. The agent can collect facts, follow an approved verification step, record the request, and route it. Your manager should keep control of identity overrides, refunds, account ownership, exports, and policy exceptions.',
          'NIST says location and device ownership are not enough reasons to trust an account. A user on a company network still needs the right check before access is granted. The exact NIST wording appears in the source quote below.[3]',
          'Use named accounts rather than shared logins. Turn on the strongest sign-in protection the tool supports, set the smallest useful role, and remove access when the person leaves the queue. CISA also advises people to recognize and report phishing instead of acting on unexpected links or urgent requests.[4]',
        ],
      },
      {
        title: 'Run a controlled first week',
        paragraphs: [
          'Day one should use practice calls and redacted records. Ask the agent to show the customer check, approved action, note, and manager handoff. Fix the written steps before adding live volume.',
          'On days two and three, open one live queue for a limited shift. Review the first calls quickly enough that the agent can remember what happened, and check both the recording and the account history. A correct answer with an unsafe data view is still a control miss.',
          'By day five, compare the written rule with the work your team saw. Rewrite steps that caused repeated questions and close unused permissions. Add a second queue only after the first has clean notes, safe access, and a reliable handoff.',
        ],
        items: ['Practice with redacted examples before live data', 'Review the first twenty call records and account actions', 'Check that every exception reached the named manager', 'Remove unused fields, permissions, and temporary files'],
      },
      {
        title: 'Give agents safe words for risky calls',
        paragraphs: [
          'Agents need a sentence they can use when a caller pushes past the approved process. Without one, a helpful person may improvise, reveal a field, or make a change to calm the caller. Practice the sentence during training so it sounds normal on a real call.',
          'A manager also needs a short handoff note that separates facts from guesses. The note should record what the caller requested, which check passed or failed, what the agent did, and what decision remains. Do not copy sensitive data into chat when a case number will point the manager to the protected record.',
        ],
      },
      {
        title: 'Review calls and prepare for incidents',
        paragraphs: [
          'Sample calls by risk instead of relying only on a random set. Include account-recovery attempts, requests to change contact details, unusual urgency, failed verification, repeated callbacks, and any case where an agent opened more than one system. A small focused sample often finds clearer rule gaps than a large pile of easy calls.',
          'Keep an incident card beside the normal call guide. It should tell the agent to stop the action, preserve the case number and time, alert the named manager, and avoid discussing the event outside the approved channel. The manager then follows the client incident plan and decides whether privacy, security, legal, or customer notices are required.',
          'Review access logs as well as conversations. A polite call can still involve the wrong screen, an unnecessary export, or a login from an unapproved device. Close the loop by recording the fix in the checklist and testing it on the next sample.',
        ],
        items: ['Failed or bypassed customer checks', 'Changes to contact, login, or account ownership details', 'Downloads, exports, screenshots, and copied records', 'Shared credentials or sign-ins from an unapproved device', 'Urgent requests that ask the agent to ignore the normal process'],
      },
    ],
    controlTable: [
      { data: 'Customer name and case number', agent: 'Open the assigned record and confirm the approved fields', manager: 'Approve any manual identity override' },
      { data: 'Contact details', agent: 'Read or update only through the written customer check', manager: 'Review unusual or repeated change requests' },
      { data: 'Call recordings', agent: 'Use recordings only in the approved call and review tools', manager: 'Set retention, download, and sharing rules' },
      { data: 'Order or appointment status', agent: 'Share the status allowed by the call guide', manager: 'Decide exceptions, credits, and policy changes' },
      { data: 'Login or recovery request', agent: 'Follow the approved check and create a handoff', manager: 'Own overrides and account-ownership changes' },
      { data: 'Exports and reports', agent: 'Prepare only the fields named in the task', manager: 'Approve recipients and sensitive-data exports' },
    ],
    chart: [
      { label: 'Phishing or spoofing', value: 193407, display: '193,407' },
      { label: 'Personal data breach', value: 64882, display: '64,882' },
      { label: 'Tech support', value: 36002, display: '36,002' },
    ],
    scripts: [
      { situation: 'Caller asks to skip a security check', text: '"I cannot make that change until the approved check is complete. I can record the request and send it to the account manager now."' },
      { situation: 'Agent sees a suspicious link or message', text: '"I have stopped the action and saved the case number and time. Please review the message in the approved system before anyone opens it."' },
      { situation: 'Manager handoff after a failed check', text: '"The caller asked for [action]. The approved check failed at [step]. I made no account change and routed case [number] for your decision."' },
    ],
    expertQuote: {
      text: 'Zero trust assumes there is no implicit trust granted to assets or user accounts based solely on their physical or network location (i.e., local area networks versus the internet) or based on asset ownership (enterprise or personally owned).',
      attribution: 'NIST Special Publication 800-207, published August 2020',
      source: 3,
    },
    faqs: [
      { question: 'What should a Philippines call center data security checklist include?', answer: 'Include the data fields used in each queue, named tools, agent permissions, customer checks, manager-only actions, escalation contacts, recording rules, access removal, and the samples managers will review. Keep the checklist tied to one real customer journey instead of using a broad policy alone.' },
      { question: 'Should Filipino call center agents use shared accounts?', answer: 'No. Named accounts make access easier to limit, review, and remove. A client should also use the strongest sign-in protection available and avoid giving one role access to unrelated customer data.' },
      { question: 'Who owns a customer identity override?', answer: 'A named client manager should own manual identity overrides and account-ownership changes. An agent can collect the facts, document which check failed, and route the case without making the final change.' },
      { question: 'How often should managers review calls?', answer: 'Review early calls every day during launch, then set a schedule based on queue risk and past misses. Add focused samples for failed checks, contact-detail changes, unusual urgency, and requests that cross the written authority line.' },
      { question: 'Do global breach figures measure Philippine call center risk?', answer: 'No. The Verizon figures cover its global breach data, and the FBI figures are US complaint counts. They help teams choose controls, but they do not predict the performance or honesty of a Filipino agent.' },
    ],
    sources: [
      { name: '2025 Data Breach Investigations Report release', organization: 'Verizon Business', date: 'April 23, 2025', url: 'https://www.verizon.com/about/news/2025-data-breach-investigations-report', note: 'Global incident and breach sample, third-party involvement, credential abuse, and ransomware findings.' },
      { name: '2024 IC3 Annual Report', organization: 'Federal Bureau of Investigation', date: 'April 23, 2025', url: 'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf', note: 'US internet-crime complaint totals and complaint-category counts.' },
      { name: 'Zero Trust Architecture, SP 800-207', organization: 'National Institute of Standards and Technology', date: 'August 2020', url: 'https://csrc.nist.gov/pubs/sp/800/207/final', note: 'Exact zero-trust definition and access-control framing.' },
      { name: 'Recognize and Report Phishing', organization: 'Cybersecurity and Infrastructure Security Agency', date: 'May 21, 2024', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing', note: 'Government guidance for recognizing and reporting suspicious messages.' },
      { name: 'Republic Act No. 10173', organization: 'The Lawphil Project', date: 'August 15, 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', note: 'Text of the Philippine Data Privacy Act of 2012.' },
    ],
    related: [
      { label: 'Plan an inbound call handling role', href: '/services/inbound-call-handling' },
      { label: 'Prepare your first-week call center checklist', href: '/blog' },
      { label: 'Ask a provider about tools and customer data', href: '/blog' },
      { label: 'Build a reporting and QA support lane', href: '/services/workforce-reporting-support' },
    ],
    banners: [
      { label: 'Access plan', title: 'Map each tool before the first shift', body: 'List the fields an agent needs and the changes a manager must approve.', href: '/services/inbound-call-handling', cta: 'Review inbound call support' },
      { label: 'Launch plan', title: 'Test one queue with real review', body: 'Use practice calls, narrow access, and a named manager before adding volume.', href: '/blog', cta: 'Open the first-week checklist' },
      { label: 'Staffing handoff', title: 'Turn the security rules into a role brief', body: 'Share the queue, systems, hours, and approval points with the coverage team.', href: '/contact-us', cta: 'Discuss the role' },
    ],
  },] as const;

const dailyBlogTopics = [
  ['after-hours-call-center-coverage', 'How to Plan After-Hours Call Center Coverage', 'Build an after-hours coverage lane with clear hours, scripts, escalation rules, and manager handoffs.'],
  ['call-center-qa-scorecard-template', 'Call Center QA Scorecard Template: What to Measure', 'Create a practical quality scorecard for calls, tickets, notes, and follow-up work.'],
  ['outsourced-call-center-onboarding-checklist', 'Outsourced Call Center Onboarding Checklist', 'Use a staged onboarding checklist to prepare people, tools, scripts, access, and review routines.'],
  ['call-center-service-level-agreement-basics', 'Call Center Service Level Agreement Basics', 'Define response targets, coverage expectations, ownership, exceptions, and reporting before launch.'],
  ['inbound-call-routing-workflow', 'Inbound Call Routing Workflow: A Manager Guide', 'Map an inbound call routing workflow that gets customers to the right queue without unnecessary transfers.'],
  ['call-center-callback-process', 'How to Build a Reliable Call Center Callback Process', 'Turn missed calls and promised follow-ups into a tracked callback process with visible ownership.'],
  ['call-center-script-review-guide', 'Call Center Script Review Guide', 'Review scripts for clarity, safe authority limits, useful discovery questions, and natural conversation.'],
  ['outsourced-call-center-data-access', 'Outsourced Call Center Data Access: A Practical Plan', 'Grant the smallest useful access while keeping customer records, credentials, and approvals controlled.'],
  ['call-center-workforce-coverage-plan', 'Call Center Workforce Coverage Plan', 'Match staffing coverage to demand patterns, service goals, breaks, absences, and escalation capacity.'],
  ['customer-service-ticket-triage', 'Customer Service Ticket Triage Rules That Scale', 'Create triage rules that separate urgency, customer impact, ownership, and the next safe action.'],
  ['call-center-handoff-notes', 'Call Center Handoff Notes: A Better Shift Change', 'Make shift handoffs useful with consistent notes, open actions, risks, and named owners.'],
  ['call-center-appointment-scheduling', 'Call Center Appointment Scheduling Workflow', 'Design a scheduling workflow that checks details, protects calendars, and confirms the next step.'],
  ['call-center-escalation-matrix', 'Call Center Escalation Matrix Template', 'Set practical escalation triggers so agents know when to continue, pause, or involve a manager.'],
  ['call-center-complaint-handling', 'Call Center Complaint Handling Process', 'Give agents a calm complaint process that records facts and preserves manager authority.'],
  ['call-center-knowledge-base-maintenance', 'Call Center Knowledge Base Maintenance', 'Keep internal answers accurate by assigning owners, review dates, examples, and change notes.'],
  ['call-center-email-support-workflow', 'Call Center Email Support Workflow', 'Organize email support around queues, response standards, templates, reviews, and follow-up ownership.'],
  ['call-center-chat-support-playbook', 'Call Center Chat Support Playbook', 'Prepare chat agents for fast, consistent conversations without sacrificing verification or quality.'],
  ['call-center-absenteeism-contingency-plan', 'Call Center Absenteeism Contingency Plan', 'Protect coverage when attendance changes with backup queues, manager decisions, and customer communication.'],
  ['call-center-training-needs-analysis', 'Call Center Training Needs Analysis', 'Use queue evidence and QA patterns to decide which training will improve customer outcomes.'],
  ['call-center-performance-reporting', 'Call Center Performance Reporting Guide', 'Build manager-ready reporting that connects volume, quality, response time, and open risks.'],
  ['call-center-vendor-transition-plan', 'Call Center Vendor Transition Plan', 'Move support work between teams with documented processes, controlled access, and measurable handoffs.'],
  ['call-center-customer-verification', 'Customer Verification in Call Center Workflows', 'Design verification steps that protect accounts without making agents guess or reveal the rules.'],
  ['call-center-refund-escalation', 'Call Center Refund Escalation Rules', 'Separate information gathering from refund authority with clear evidence and approval paths.'],
  ['call-center-weekly-operations-review', 'Call Center Weekly Operations Review Agenda', 'Run a focused weekly review covering queue health, quality, staffing, risks, and decisions.'],
  ['call-center-outsourcing-readiness', 'Call Center Outsourcing Readiness Assessment', 'Check whether the work, tools, ownership, and quality controls are ready for outside coverage.'],
  ['call-center-call-recording-policy', 'Call Center Call Recording Policy Guide', 'Set a clear call recording workflow with notice, access, retention, review, and manager ownership.'],
  ['call-center-knowledge-transfer-plan', 'Call Center Knowledge Transfer Plan', 'Move queue knowledge into examples, checklists, ownership rules, and reviewable handoffs before launch.'],
  ['call-center-weekend-coverage', 'Weekend Call Center Coverage Planning', 'Plan weekend coverage around demand, backup ownership, escalation access, and a practical manager handoff.'],
  ['call-center-queue-prioritization', 'Call Center Queue Prioritization Rules', 'Prioritize call work with visible customer impact, urgency, ownership, and safe next actions.'],
  ['call-center-customer-follow-up', 'Call Center Customer Follow-Up Workflow', 'Track promised follow-ups with a due time, approved message, named owner, and completion check.'],
  ['call-center-agent-access-review', 'Call Center Agent Access Review Checklist', 'Review user access by queue, tool, data field, approver, and removal date before scope expands.'],
  ['call-center-call-disposition-guide', 'Call Center Call Disposition Guide', 'Choose disposition codes that make the next action, owner, and reporting meaning easy to understand.'],
  ['call-center-voice-of-customer-notes', 'Voice of Customer Notes for Call Centers', 'Capture recurring customer themes without mixing observations, personal data, and manager decisions.'],
  ['call-center-contact-center-sop', 'Contact Center SOP Writing Guide', 'Write operating procedures with a clear trigger, action, exception path, example, and reviewer.'],
  ['call-center-new-hire-nesting', 'Call Center New Hire Nesting Plan', 'Move new agents from practice to limited live work with sampling, coaching, escalation drills, and sign-off.'],
  ['call-center-peak-season-prep', 'Peak Season Call Center Preparation', 'Prepare scripts, coverage, queue rules, escalation paths, and reporting before demand rises.'],
  ['call-center-quality-monitoring-routine', 'Call Center Quality Monitoring Routine', 'Build a repeatable quality monitoring rhythm that connects samples, findings, coaching, and action owners.'],
  ['call-center-customer-data-handling', 'Call Center Customer Data Handling Workflow', 'Define how agents collect, view, record, transfer, and escalate customer data within approved scope.'],
  ['call-center-missed-call-recovery', 'Missed Call Recovery Process', 'Turn missed calls into a visible recovery queue with priority rules, scripts, deadlines, and ownership.'],
  ['call-center-manager-handoff-checklist', 'Call Center Manager Handoff Checklist', 'Give managers the facts, customer impact, action taken, deadline, and decision needed on every escalation.'],
  ['call-center-multichannel-support-model', 'Multichannel Call Center Support Model', 'Connect phone, email, chat, and ticket work with shared ownership, records, standards, and escalation rules.'],
  ['call-center-outsourcing-pilot-plan', 'Call Center Outsourcing Pilot Plan', 'Test one controlled workflow with clear scope, access, quality gates, customer protections, and an exit decision.'],
  ['call-center-schedule-change-process', 'Call Center Schedule Change Process', 'Handle shift changes with approval, coverage impact, worker communication, and a documented exception path.'],
  ['call-center-customer-feedback-loop', 'Call Center Customer Feedback Loop', 'Turn customer feedback into tagged evidence, an accountable review, an approved change, and a follow-up check.'],
  ['call-center-knowledge-gap-review', 'Call Center Knowledge Gap Review', 'Find missing or confusing answers by comparing queue questions, QA findings, escalations, and article ownership.'],
  ['call-center-queue-backlog-plan', 'Call Center Queue Backlog Management Plan', 'Reduce backlog with age bands, customer impact, capacity decisions, and a manager-owned pause rule.'],
  ['call-center-call-monitoring-checklist', 'Call Center Call Monitoring Checklist', 'Use a focused monitoring checklist for identity, accuracy, empathy, documentation, and safe escalation.'],
  ['call-center-service-recovery-workflow', 'Call Center Service Recovery Workflow', 'Give agents a safe recovery path that acknowledges impact while keeping compensation and policy exceptions with managers.'],
  ['call-center-after-hours-answering', 'After-Hours Call Center Answering Plan', 'Plan after-hours answering with queue ownership, urgent-call rules, callback capture, and a reliable morning handoff.'],
  ['call-center-appointment-scheduling', 'Call Center Appointment Scheduling Workflow', 'Coordinate appointment calls with approved availability, confirmation steps, reschedule rules, and manager escalation.'],
  ['call-center-bilingual-support-coverage', 'Bilingual Call Center Support Coverage', 'Design bilingual coverage with language routing, approved terminology, quality sampling, and clear fallback ownership.'],
  ['call-center-callback-queue-management', 'Call Center Callback Queue Management', 'Manage callback work with due times, customer impact, priority rules, and visible ownership from request to completion.'],
  ['call-center-call-transfer-rules', 'Call Center Call Transfer Rules', 'Create transfer rules that protect customer context, reduce repeat explanations, and keep specialist decisions with the right owner.'],
  ['call-center-chat-support-sop', 'Call Center Chat Support SOP', 'Write a practical chat support SOP for greetings, parallel conversations, records, escalation, and safe closing.'],
  ['call-center-complaint-handling', 'Call Center Complaint Handling Process', 'Handle complaints with listening, fact capture, approved remedies, manager boundaries, and a documented follow-up path.'],
  ['call-center-crm-data-quality', 'Call Center CRM Data Quality Checklist', 'Keep call center CRM records useful with required fields, disposition rules, duplicate checks, and routine review.'],
  ['call-center-disaster-continuity-plan', 'Call Center Disaster Continuity Plan', 'Prepare continuity for outages and disruptions with alternate channels, contact trees, queue priorities, and recovery ownership.'],
  ['call-center-email-support-workflow', 'Call Center Email Support Workflow', 'Organize email support around intake, categorization, response standards, approvals, and aging-case review.'],
  ['call-center-escalation-matrix', 'Call Center Escalation Matrix', 'Build an escalation matrix that maps issue type, urgency, evidence, decision owner, and expected handoff time.'],
  ['call-center-first-call-resolution', 'First Call Resolution Improvement Plan', 'Improve first call resolution by separating solvable repeat work from cases that need specialist or manager action.'],
  ['call-center-holiday-coverage', 'Holiday Call Center Coverage Plan', 'Prepare holiday coverage with demand assumptions, staffing backups, customer notices, and exception handling.'],
  ['call-center-inbound-call-script', 'Inbound Call Script Writing Guide', 'Write an inbound call script that supports natural conversations while preserving verification, documentation, and escalation steps.'],
  ['call-center-language-quality-review', 'Call Center Language Quality Review', 'Review call language for accuracy, clarity, tone, approved claims, and customer-safe improvements.'],
  ['call-center-live-chat-escalation', 'Live Chat Escalation Workflow', 'Move complex live chats to the right owner without losing customer context, consent, or the next promised action.'],
  ['call-center-omnichannel-routing', 'Omnichannel Call Center Routing Plan', 'Route phone, chat, email, and ticket demand with shared priority rules, ownership, and consistent customer records.'],
  ['call-center-outbound-calling-checklist', 'Outbound Calling Checklist', 'Run outbound calls with a defined purpose, approved script, contact rules, outcome codes, and manager review for exceptions.'],
  ['call-center-performance-scorecard', 'Call Center Performance Scorecard', 'Build a balanced scorecard that pairs volume with quality, timeliness, customer impact, and safe escalation behavior.'],
  ['call-center-phone-system-migration', 'Call Center Phone System Migration Plan', 'Move phone operations to a new system with call flows, permissions, test cases, fallback routing, and sign-off.'],
  ['call-center-retention-calls', 'Customer Retention Call Workflow', 'Support retention calls with approved discovery questions, offer limits, documentation, and manager ownership of exceptions.'],
  ['call-center-shift-handoff', 'Call Center Shift Handoff Process', 'Make shift handoffs reliable with open-case facts, queue status, risks, deadlines, and named next owners.'],
  ['call-center-support-capacity-planning', 'Call Center Support Capacity Planning', 'Plan support capacity from demand patterns, handling time, occupancy assumptions, schedule coverage, and service risks.'],
] as const;

const dailyBlogBatch: BlogPost[] = dailyBlogTopics.map(([slug, title, excerpt], index) => ({
  slug,
  title,
  excerpt,
  minutes: 9 + (index % 5),
  keyword: title,
  published: index < 25 ? '2026-08-07' : '2026-08-10',
  updated: index < 25 ? '2026-08-07' : '2026-08-10',
  intro: `${excerpt} The safest launch starts with one defined workflow, a named reviewer, and an authority boundary that agents can apply during a busy shift.`,
  stats: [
    { value: '1', label: 'written workflow', note: 'Start with one queue or repeatable task before adding volume.', source: 1 },
    { value: '2', label: 'review checkpoints', note: 'Use an early sample review and a recurring manager review.', source: 1 },
    { value: '3', label: 'handoff facts', note: 'Record the case, action taken, and owner for the next decision.', source: 1 },
  ],
  sections: [
    { title: 'Define the work before assigning it', paragraphs: [`${title} works best when the team can see the starting signal, the required action, and the finished result. Write those three points in plain language and include one representative example.`, 'Separate repeatable handling from judgment calls. A remote coverage role can follow an approved process, but a manager should retain policy exceptions, sensitive account decisions, and changes to commercial terms.'], items: ['Name the queue or task', 'Show a good completed example', 'List the required fields and response window', 'Name the reviewer and escalation owner'] },
    { title: 'Set a safe first version', paragraphs: ['Start with the smallest useful scope. One channel, one customer reason, or one shift makes early errors visible and lets the reviewer improve the instructions before more work is added.', 'Use a short checklist rather than relying on memory. If a step is unclear, the right response is to pause and ask the named owner, not invent a new policy.'] },
    { title: 'Keep the decision boundary visible', paragraphs: ['A clear authority line protects customers and the business. Agents can collect facts, use approved language, update permitted fields, and route work. Managers keep final approvals, exceptions, access changes, and sensitive investigations.', 'The National Institute of Standards and Technology describes least privilege as limiting access to the minimum needed for assigned tasks.[1] Apply that principle to both tools and decisions.'], items: ['Agent follows the approved workflow', 'Agent records the evidence needed for review', 'Manager approves exceptions and policy changes', 'Owner reviews repeated uncertainty and updates the SOP'] },
    { title: 'Measure work that a manager can act on', paragraphs: ['Choose a small scorecard. Volume alone can hide rework, unresolved cases, or unsafe shortcuts. Pair throughput with one quality measure, one timeliness measure, and one escalation measure.', 'Review examples alongside numbers. A five-minute sample of records often explains a trend faster than a large dashboard with no owner.'], items: ['Completed items and reopened items', 'First response or callback timeliness', 'Quality sample pass rate', 'Escalations waiting for a decision'] },
    { title: 'Make access and handoffs deliberate', paragraphs: ['Use named accounts and grant only the systems and fields required for the first scope. Keep credentials out of notes and do not use personal tools for customer information.', 'Every handoff should state what happened, what remains, and who owns the next action. Mark unknown facts as unknown so the next reviewer can investigate safely.'] },
    { title: 'Use a short launch script', paragraphs: ['A launch script gives the team shared words for normal work and uncertainty. It should tell the agent how to acknowledge the request, what can be done now, and when a manager must take over.'], items: ['Confirm the request and relevant record', 'State the approved next step', 'Pause when the request exceeds authority', 'Send the case to the named owner with a concise note'] },
    { title: 'Review, improve, and then scale', paragraphs: ['Review the first batch on a fixed schedule. Look for missing inputs, repeated questions, avoidable transfers, and cases where the written process conflicts with the tool. Fix the workflow before adding another queue.', 'A stable routine is easier to scale than an impressive but unclear launch. Document each approved change with its date, owner, and reason.'], items: ['Sample early work daily', 'Discuss exceptions in the weekly review', 'Update the checklist and examples', 'Expand scope only after quality is stable'] },
  ],
  controlTable: [
    { data: 'Routine request', agent: 'Follow the approved script and record the result', manager: 'Review samples and revise instructions' },
    { data: 'Missing information', agent: 'Ask the approved question or pause the case', manager: 'Decide the fallback process' },
    { data: 'Sensitive change', agent: 'Do not complete it without approval', manager: 'Verify evidence and approve or decline' },
    { data: 'Tool or policy conflict', agent: 'Keep the record unchanged and escalate', manager: 'Resolve the conflict and document the rule' },
  ],
  scripts: [
    { situation: 'Routine request', text: '"I have recorded the request and will complete the approved next step now."' },
    { situation: 'Needs manager review', text: '"I have the details I need. This part requires manager review, so I will send it to the named owner."' },
    { situation: 'Missing information', text: '"I do not want to guess. I will record what is known and confirm the next step with the team."' },
  ],
  faqs: [
    { question: 'How much work should an outsourced team start with?', answer: 'Start with one queue or repeatable task, a small sample, and a named reviewer. Expand after the first quality review is consistent.' },
    { question: 'What should remain with a manager?', answer: 'Keep policy exceptions, refunds, sensitive account changes, staffing decisions, and unclear cases with a named manager.' },
    { question: 'What is the first useful report?', answer: 'Report completed work, open items, quality misses, response timing, and escalations waiting for a decision.' },
  ],
  sources: [
    { name: 'Protecting Controlled Unclassified Information in Nonfederal Systems and Organizations', organization: 'NIST', date: '2024', url: 'https://csrc.nist.gov/pubs/sp/800/171/r3/final', note: 'Use least privilege and documented protections as a baseline for access decisions.' },
    { name: 'Remote Work Guidance', organization: 'International Labour Organization', date: '2020', url: 'https://www.ilo.org/global/topics/non-standard-employment/WCMS_534825/lang--en/index.htm', note: 'Clear expectations, communication, and accountable work arrangements support consistent remote operations.' },
  ],
  related: [
    { label: 'Review operations support', href: '/services/operations-support' },
    { label: 'Plan customer support coverage', href: '/services/customer-support' },
    { label: 'Build a reporting and QA lane', href: '/services/reporting-and-qa' },
  ],
  banners: [
    { label: 'Scope', title: 'Turn the workflow into a role brief', body: 'List tasks, tools, hours, quality checks, and approval limits before matching coverage.', href: '/services/operations-support', cta: 'Review operations support' },
    { label: 'Launch', title: 'Start with a controlled queue', body: 'Use sample work, narrow access, and a named reviewer during the first shift.', href: '/blog', cta: 'Explore more guides' },
    { label: 'Handoff', title: 'Keep decisions with the owner', body: 'Document every escalation so the next manager can act without reconstructing the case.', href: '/contact-us', cta: 'Discuss your workflow' },
  ],
}));

const routedBlogPosts = [...baseBlogPosts, ...dailyBlogBatch].reduce((posts, post) => {
  const withoutDuplicate = posts.filter((existing) => existing.slug !== post.slug);
  withoutDuplicate.push(post);
  return withoutDuplicate;
}, [] as BlogPost[]);

export const blogPosts: readonly BlogPost[] = routedBlogPosts.sort((a, b) => {
  const dateOrder = (b.published ?? '').localeCompare(a.published ?? '');
  return dateOrder || a.slug.localeCompare(b.slug);
});

export const staffingOffer = {
  partner: 'the coverage team',
  promise: 'Get a call center coverage plan built around the queues you need handled.',
  included: [
    'a planning call about channels, hours, call reasons, and escalation rules',
    'a service scope based on your schedule, tools, scripts, and queue needs',
    'onboarding guidance for approved answers, QA review, reporting, and safe tool access',
    'a named path for quality, attendance, and coverage questions',
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
