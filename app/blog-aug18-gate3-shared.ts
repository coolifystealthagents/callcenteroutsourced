import type { BlogPost } from './data';

type Gate3Input = { slug: string; title: string; excerpt: string; intro: string; context?: string; published: '2026-08-18'; sections: readonly { title: string; body: string }[] };

export function makeAugust18Gate3Post(input: Gate3Input): BlogPost {
  return {
    slug: input.slug, title: input.title, excerpt: input.excerpt, minutes: 12, keyword: input.title,
    published: input.published, updated: input.published, intro: input.intro + (input.context ? ' ' + input.context : ''),
    sections: input.sections.map((section) => ({ title: section.title, paragraphs: [section.body, 'Apply this at the point where an outsourced call center representative must decide what to say or do. Keep observable facts separate from assumptions, identify the approved source, and make the stop condition explicit. If the available evidence is incomplete, the safe response is to record the gap and route it to the named owner rather than filling it with a guess.', 'Managers can review the record without replaying the whole contact when it states the customer need, current state, permitted action, unresolved risk, and next review time. That separation protects the frontline role while giving the operation a practical way to learn from exceptions and improve the next version of the guidance.'] })),
    faqs: [
      { question: 'What should an outsourced call center representative do first?', answer: 'Confirm the approved source, record the observable condition, and follow the narrowest permitted next step.' },
      { question: 'What belongs with the manager?', answer: 'Policy exceptions, sensitive access, commercial or customer commitments, and decisions where the evidence conflicts belong with the accountable manager.' },
      { question: 'What should the review record contain?', answer: 'It should identify the contact or queue, source checked, action taken, unresolved risk, owner, and time for the next review.' },
    ],
  };
}
