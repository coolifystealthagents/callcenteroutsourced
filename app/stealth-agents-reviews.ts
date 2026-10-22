export type StealthAgentsReview = {
  name: string
  role: string
  quote: string
  sourceUrl: 'https://stealthagents.com/'
  rating: 5
}

const sourceUrl = 'https://stealthagents.com/' as const
const rating = 5 as const

/** Approved first-party client testimonials, transcribed without promotional rewrites. */
export const stealthAgentsReviews: readonly StealthAgentsReview[] = [
  { name: 'Chad Sublet', role: 'Business Owner', quote: 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.', sourceUrl, rating },
  { name: 'Erika Giron', role: 'CEO, Horizon Pacific Staffing', quote: 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.', sourceUrl, rating },
  { name: 'Alex Behrens', role: 'Client since Oct 2024', quote: 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.', sourceUrl, rating },
  { name: 'Aisha Wonderfull', role: 'CEO, Publishing Startup', quote: 'Gained time for sales and closed 3 clients within two days. Exceptional service.', sourceUrl, rating },
  { name: 'Owen Hone', role: 'Multiple Hire Client', quote: 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.', sourceUrl, rating },
  { name: 'Sarah Jacoby', role: 'Client', quote: 'Great communication, efficient and proactive assistant, visible business growth.', sourceUrl, rating },
  { name: 'Martine Cadet', role: 'Client', quote: 'The team learned my brand and goals and transformed my business. My dream team.', sourceUrl, rating },
  { name: 'Rich Cochran', role: 'Client', quote: 'We especially appreciate how diligent and pleasant Evy is. True pros.', sourceUrl, rating },
  { name: 'George Assi', role: '2-Year Partner', quote: 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.', sourceUrl, rating },
  { name: 'Lee Maasen', role: 'Business Owner', quote: 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.', sourceUrl, rating },
  { name: 'Kevin Carabajal', role: 'Client', quote: 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.', sourceUrl, rating },
  { name: 'Lynda Sunshine West', role: 'Client', quote: 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.', sourceUrl, rating },
  { name: 'McKay Jaeckel', role: 'First-Time Hire', quote: 'The easiest VA onboarding process. Communicative and helpful throughout.', sourceUrl, rating },
  { name: 'Evan', role: 'Long-Term Client', quote: 'Continuously impressed by professionalism, punctuality, attention to detail, and the kind family approach.', sourceUrl, rating },
]
