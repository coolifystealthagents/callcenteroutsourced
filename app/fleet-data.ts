export type FleetService = { slug: string; title: string; desc: string; tasks: readonly string[]; controls: readonly string[]; firstWeek: readonly string[] };
export type ResearchPost = { slug: string; title: string; excerpt: string; published: string; sections: readonly { heading: string; body: string }[]; sources?: readonly { name: string; url: string }[] };

export const fleetServices: readonly FleetService[] = [
  {
    slug: 'inbound-call-handling',
    title: 'Inbound Call Handling',
    desc: 'Add Filipino agents to your inbound queue for approved questions, message taking, appointment help, and clean manager handoffs.',
    tasks: [
      'Answer approved billing, order, booking, and account questions',
      'Take complete messages and confirm the best callback time',
      'Book or move appointments inside written scheduling rules',
      'Tag each call and send urgent or unusual cases to a manager',
    ],
    controls: [
      'Give each Filipino agent a named phone and CRM account',
      'Keep refunds, policy exceptions, and sensitive account changes with your manager',
      'Review a daily sample of recordings, call notes, and dispositions',
      'Set one escalation path for safety, legal, payment, or upset-customer calls',
    ],
    firstWeek: [
      'Share ten common call reasons, approved answers, and transfer rules',
      'Run practice calls before the agent enters the live queue',
      'Start with one queue and a limited shift while a manager is available',
      'Review the first twenty calls and fix gaps before adding more hours',
    ],
  },
  { slug: 'omnichannel-customer-support', title: 'Omnichannel Customer Support', desc: 'Build a Philippines-based omnichannel customer support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'outbound-appointment-setting', title: 'Outbound Appointment Setting', desc: 'Build a Philippines-based outbound appointment setting workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'order-management-support', title: 'Order Management Support', desc: 'Build a Philippines-based order management support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'tier-one-technical-support', title: 'Tier-One Technical Support', desc: 'Build a Philippines-based tier-one technical support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'collections-reminder-calls', title: 'Collections Reminder Calls', desc: 'Build a Philippines-based collections reminder calls workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'customer-win-back-support', title: 'Customer Win-Back Support', desc: 'Build a Philippines-based customer win-back support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'dispatch-coordination', title: 'Dispatch Coordination', desc: 'Build a Philippines-based dispatch coordination workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'survey-and-feedback-calls', title: 'Survey and Feedback Calls', desc: 'Build a Philippines-based survey and feedback calls workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] },
  { slug: 'workforce-reporting-support', title: 'Workforce Reporting Support', desc: 'Build a Philippines-based workforce reporting support workflow with documented responsibilities, access limits, and manager review.', tasks: ['Document the recurring customer contact work', 'Complete approved tasks in the client workflow', 'Record exceptions and next actions'], controls: ['Use named accounts and limited permissions', 'Follow written approval and escalation rules', 'Review work with a client-side owner'], firstWeek: ['Confirm scope and working hours', 'Practice with representative examples', 'Review the first completed work together'] }
];

// Add reviewed, source-backed original research here. The templates and sitemap update automatically.
export const researchPosts: readonly ResearchPost[] = [];
export const postsPerPage = 20;
