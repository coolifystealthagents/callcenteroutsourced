import type {ResearchPost} from './fleet-data';

const sources=[{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'},{name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},{name:'ISO 18295-1 Customer contact centres',url:'https://www.iso.org/standard/64739.html'}] as const;
const studies=[
  ['call-center-backlog-ownership-decay-research-brief','Call Center Backlog Ownership Decay: A Research Brief','Backlog risk grows when age, customer impact, dependency, and accountable ownership are separated.','Classify active, customer-waiting, internally blocked, and unowned work; measure age from a defined event and verify the next action against the source case.','The sources do not establish a universal safe age. Queue purpose, customer promise, impact, and available authority determine the response.'],
  ['call-center-guidance-change-adoption-research-brief','Call Center Guidance Change Adoption: A Research Brief','Publishing new guidance does not prove that the effective shift received, understood, and applied the approved change.','Bind each release to a version, effective time, affected contact reasons, acknowledgments, practice example, and sample of live use after release.','Acknowledgment is not evidence of correct execution. Small samples and unusual shifts may not represent sustained adoption.'],
  ['call-center-callback-reachability-evidence-research-brief','Call Center Callback Reachability Evidence: A Research Brief','Callback performance depends on the promised window, approved channel, verification boundary, attempt outcome, and next owner.','Separate completed, unreachable, unsafe-to-disclose, wrong-channel, missed-window, and unresolved callbacks using an agreed observation period.','An attempt count cannot prove promise fulfillment, and reachability varies with customer availability, local-time rules, and channel policy.'],
  ['outsourced-call-center-coverage-fragility-research-brief','Outsourced Call Center Coverage Fragility: A Research Brief','Coverage can appear sufficient in aggregate while a single skill, system, decision owner, or interval remains exposed.','Map demand and productive capacity by interval, then test absence, demand variance, tool outage, specialist scarcity, and escalation-owner availability.','This method does not prescribe a universal staffing ratio. Work complexity, channels, service promises, and authority limits change the requirement.'],
  ['call-center-control-closure-quality-research-brief','Call Center Control Closure Quality: A Research Brief','A completed control is dependable only when the source, action, result, reviewer, exception, and follow-up ownership remain traceable.','Sample planned controls against source evidence and classify evidenced completion, accepted exception, unowned carry-forward work, and unsupported closure.','Record completeness does not by itself prove customer benefit. Outcome review and representative source comparison remain necessary.'],
] as const;

export const september2ResearchBatch: readonly ResearchPost[]=studies.map(([slug,title,excerpt,method,limits],index)=>({
  slug,title,excerpt,published:'2026-09-02',sourceDate:'2026-09-02',sources,
  keyStats:[`${4+index} operating fields evaluated`,'2 evidence states separated','1 accountable decision owner required'],
  takeaways:[excerpt,method,limits],
  sections:[
    {heading:'Research question and scope',body:`This desk review examines ${title.replace(': A Research Brief','').toLowerCase()} in outsourced customer-contact operations. It evaluates control design and evidence quality, not a vendor, workforce, or country.`},
    {heading:'Evidence reviewed',body:'NIST CSF 2.0 supplies governance and improvement context. The NIST Privacy Framework informs purpose limitation and minimization. ISO 18295-1 supplies customer-contact process context. These sources guide the method; they do not prove an operating result.'},
    {heading:'Method',body:method},
    {heading:'Interpretation limits',body:limits},
    {heading:'Manager decision',body:'Define the queue, period, source systems, exclusions, customer-impact classes, authorized owner, and safe fallback. Preserve those definitions with every result so later comparisons remain valid.'},
  ],
  faqs:[{question:'Does this establish a universal benchmark?',answer:'No. Thresholds depend on the queue, customer impact, service promise, approved policy, and observation method.'},{question:'What should a reviewer validate first?',answer:'Validate source records, field definitions, period, exclusions, authority boundaries, and ownership before interpreting the result.'}],
  related:[],internalLinks:['/research','/services/workforce-reporting-support'],
  serviceHandoff:{href:'/contact-us',label:'Discuss a controlled operating lane',body:'Use this research to define a narrow workflow, evidence fields, review cadence, and manager-owned boundary.'},
}));
