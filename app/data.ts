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

export const blogPosts: readonly BlogPost[] = [
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
