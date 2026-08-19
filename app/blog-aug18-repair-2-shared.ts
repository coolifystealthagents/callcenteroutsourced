import type { BlogPost } from './data';

type RepairInput = {
  slug: string; title: string; excerpt: string; intro: string;
  published: '2026-08-18';
  parts: readonly [string,string,string,string,string,string,string];
};

const sectionTitles = [
  'The operating decision',
  'Where the frontline boundary sits',
  'The example that exposes the risk',
  'The record an owner can review',
  'Measures that explain the work',
  'A test before wider use',
  'The operating conclusion',
] as const;

export function makeAugust18RepairPost(input: RepairInput): BlogPost {
  const [decision,boundary,example,record,measure,test,conclusion] = input.parts;
  const parts = [decision,boundary,example,record,measure,test,conclusion];
  return {
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    minutes: 10,
    keyword: input.title,
    published: input.published,
    updated: input.published,
    intro: input.intro,
    sections: parts.map((part, index) => ({
      title: sectionTitles[index],
      paragraphs: [
        part,
        `For an outsourced call center, this point becomes usable only when the queue can apply it during a real customer contact. Name the evidence, the permitted action, the stop condition, and the person who owns the next decision. Keep an observed fact separate from an assumption, and mark an unknown rather than filling the gap with a confident answer.`,
        `Review the point at the level where work changes hands. A supervisor should be able to see what happened, why the route was chosen, what remains unresolved, and whether the customer-facing expectation is still supported. The frontline role can document and use approved guidance; the manager retains policy, exception, commitment, access, and scope decisions.`,
      ],
    })),
    faqs: [
      { question: `What is the first step in ${input.title.toLowerCase()}?`, answer: decision },
      { question: `What boundary matters for ${input.title.toLowerCase()}?`, answer: boundary },
      { question: `How should a manager review ${input.title.toLowerCase()}?`, answer: measure },
    ],
  };
}
