import type {BlogPost} from './data';

type Topic = {
  slug:string; title:string; excerpt:string; image:string; opening:string; signal:string;
  record:string; boundary:string; sample:string; script:string; failure:string;
};

const topics: readonly Topic[] = [
  {
    slug:'outsourced-call-center-warm-transfer-acceptance-check', title:'Outsourced Call Center Warm Transfer Acceptance Check',
    excerpt:'A warm transfer is not finished when the call leaves the first queue. It is finished when the receiving person accepts the customer and the next action.',
    image:'/blog-aug20/outsourced-call-center-escalation-routing-map.png',
    opening:'A customer can hear two introductions and still land in the wrong place. That usually happens when the sender treats a ringing destination as proof of acceptance.',
    signal:'Start the check when a live contact must move to a different skill, client team, or decision owner.',
    record:'Keep the customer purpose, completed verification, action already taken, unresolved question, receiving destination, acceptance time, and fallback in one short transfer note.',
    boundary:'The sending representative may summarize and introduce the customer. The receiver must explicitly accept ownership. Only a client owner may approve a policy exception or restricted account action.',
    sample:'Listen to transfers that returned to the original queue, ended during hold, or produced a repeat contact. Compare the spoken handoff with both case records.',
    script:'"I have Maya from the account team with us. Maya has accepted your case and will take the next step from here."',
    failure:'If nobody accepts, return to the documented fallback instead of leaving the customer parked between queues.'
  },
  {
    slug:'call-center-voicemail-disposition-review', title:'Call Center Voicemail Disposition Review',
    excerpt:'A voicemail disposition should say what the representative safely attempted, what was left unsaid, and who owns the next contact.',
    image:'/blog-aug21/outsourced-call-center-callback-promise-ledger.webp',
    opening:'Voicemail creates an awkward gap: the team reached a device, but it may not have reached the customer. A disposition called "completed" hides that distinction.',
    signal:'Begin the review after an approved outbound attempt reaches voicemail, an automated mailbox, or a recording that cannot be confidently tied to the intended person.',
    record:'Record the permitted number, local attempt time, mailbox result, neutral message category, prohibited details withheld, next attempt window, and current owner. Do not copy the greeting or speculate about who heard it.',
    boundary:'Representatives follow the approved disclosure rule and may leave only the allowed message. Supervisors own ambiguous mailbox cases; client owners set contact policy and attempt limits.',
    sample:'Review a mix of no-message, neutral-message, full-mailbox, and wrong-party outcomes. Check the recording or dialer event against the CRM entry.',
    script:'"I could not confirm who uses this voicemail, so I left only the approved neutral message and scheduled the next permitted attempt."',
    failure:'A voicemail is an attempt outcome, not proof that the customer received or understood the message.'
  },
  {
    slug:'outsourced-call-center-queue-reentry-rule', title:'Outsourced Call Center Queue Reentry Rule',
    excerpt:'Work that returns to a queue needs a new reason, an accountable owner, and a clock that does not erase the original wait.',
    image:'/blog-aug20/outsourced-call-center-queue-priority-calibration.png',
    opening:'A case can look newly arrived after every reassignment even though the customer has been waiting since yesterday. Reset timestamps make the dashboard cleaner and the service history worse.',
    signal:'Use the rule whenever closed, parked, transferred, or rejected work enters an active queue again.',
    record:'Preserve the original arrival, reentry time, reentry reason, prior action, customer promise, current priority basis, assigned owner, and the event that will close the new cycle.',
    boundary:'Queue staff can apply a documented reason and route. A manager decides priority exceptions, service-credit questions, and any rule that changes how age is measured.',
    sample:'Compare oldest-first views based on original arrival and latest reentry. Examine cases that changed queues more than once and those returned by a specialist.',
    script:'"This case reentered because the required decision arrived. Its customer wait still begins at the original request."',
    failure:'Never use reentry to erase age, reopen without a reason, or assign work to a queue with no accepting owner.'
  },
  {
    slug:'call-center-language-support-escalation-note', title:'Call Center Language Support Escalation Note',
    excerpt:'A language-support handoff should preserve the customer’s purpose without pretending that an unverified translation is an established fact.',
    image:'/blog-aug20/outsourced-call-center-channel-switch-continuity.png',
    opening:'The quickest summary is not always the safest one when a customer and representative do not share a fluent language. Guessing at intent can send the next worker down the wrong path.',
    signal:'Open the note when approved language support, an interpreter, or a bilingual queue is required to continue the contact accurately.',
    record:'Identify the requested language, how it was identified, the customer’s own confirmed purpose where available, steps already completed, verification state, urgency source, destination, and callback constraint.',
    boundary:'The first representative can identify the need and preserve confirmed facts. Qualified support handles interpretation. Client management owns which services are approved and how regulated or sensitive contacts proceed.',
    sample:'Pair the original interaction with the receiving record. Look for changed intent, unsupported urgency, repeated sensitive questions, and language needs recorded as customer traits without a service purpose.',
    script:'"I have recorded the part we confirmed and requested approved language support for the remaining questions."',
    failure:'Do not use a machine translation, family member, or improvised summary where the approved workflow requires qualified support.'
  },
  {
    slug:'outsourced-call-center-hold-time-recovery-playbook', title:'Outsourced Call Center Hold-Time Recovery Playbook',
    excerpt:'A long hold needs an owned recovery path before silence turns a solvable delay into an abandoned contact.',
    image:'/blog-aug20/outsourced-call-center-peak-coverage-trigger.png',
    opening:'Most hold problems begin before the threshold alert. The representative needs an answer, nobody owns the internal request, and the customer hears the same music while the clock runs.',
    signal:'Trigger the playbook at the approved warning point or sooner when the dependency has no responding owner.',
    record:'Capture the hold start, stated reason, expected check-back, dependency owner, customer preference, return time, offered alternative, and whether the original contact resumed.',
    boundary:'A representative may check back, offer an approved callback, or restore the conversation. Supervisors decide queue-wide recovery moves. Client owners retain remedy and policy decisions.',
    sample:'Review abandoned contacts around the warning point, completed callbacks offered during holds, and cases where staff repeatedly restarted the hold without new information.',
    script:'"I am still waiting for the account answer. I can check back in two minutes or arrange the approved callback option. Which works better for you?"',
    failure:'Do not promise a short hold when the dependency has no response time or mark a disconnected caller as resolved.'
  },
  {
    slug:'call-center-sensitive-screen-share-stop-rule', title:'Call Center Sensitive Screen-Share Stop Rule',
    excerpt:'Screen sharing should stop before payment, identity, health, or credential data crosses into an unnecessary viewing or recording path.',
    image:'/blog-aug21/outsourced-call-center-customer-identity-check.webp',
    opening:'Screen sharing feels ordinary until a password manager opens or a payment page appears. By then, the recording may already contain information the support task never needed.',
    signal:'Apply the stop rule when the next step may expose a secret, protected record, full payment value, identity evidence, or another person’s information.',
    record:'Record that sharing paused, the workflow step, the approved alternate channel, any exposure observed under policy, the incident owner if required, and the safe point for resuming support.',
    boundary:'The representative tells the customer where to pause and never asks them to reveal a password or authentication secret. Security, privacy, and client owners decide incident handling and permitted tools.',
    sample:'Inspect recordings near checkout, sign-in, document upload, and account recovery. Verify that notes describe the control event without reproducing the sensitive value.',
    script:'"Please stop sharing before you enter that information. I do not need to see it, and we can continue after you finish the secure step."',
    failure:'If exposure occurs, preserve the event through the approved incident path. Do not paste the value into a case note as evidence.'
  },
  {
    slug:'outsourced-call-center-silent-monitoring-disclosure-check', title:'Outsourced Call Center Silent Monitoring Disclosure Check',
    excerpt:'Monitoring controls should connect the approved disclosure, jurisdictional rule, session purpose, reviewer, and resulting record.',
    image:'/blog-aug20/outsourced-call-center-qa-sample-selection.png',
    opening:'Quality teams often focus on what the reviewer scored and skip the earlier question: was this interaction eligible for monitoring under the client’s rule?',
    signal:'Run the check before a live monitor, recording review, coaching session, or third-party quality sample begins.',
    record:'Keep the applicable disclosure version, channel, customer location basis where policy requires it, monitoring purpose, reviewer identity, access period, result, and deletion or retention path.',
    boundary:'Reviewers may access only approved samples for an assigned purpose. Client legal, privacy, and operations owners define disclosure and retention requirements.',
    sample:'Trace selected sessions back to the disclosure and eligibility record. Include contacts excluded from monitoring and sessions accessed but not scored.',
    script:'"This session is eligible under the approved monitoring rule and is being reviewed for the recorded quality purpose."',
    failure:'A quality need does not create permission. Pause the review when eligibility, disclosure, or reviewer access cannot be established.'
  },
  {
    slug:'call-center-customer-name-pronunciation-note', title:'Call Center Customer Name Pronunciation Note',
    excerpt:'A pronunciation note can improve continuity when the customer supplies it, the purpose is clear, and the record avoids labels or guesses.',
    image:'/blog-aug20/outsourced-call-center-supervisor-calibration-huddle.png',
    opening:'Repeatedly mispronouncing a customer’s name is a small failure that can dominate an otherwise competent call. The fix should not turn into a speculative profile of the person.',
    signal:'Offer the field after the customer corrects pronunciation or voluntarily provides a preferred spoken form relevant to future contact.',
    record:'Store the customer-provided phonetic cue or approved audio field, its source, date, permitted purpose, any preferred form of address, and a route for correction or removal.',
    boundary:'Representatives may record what the customer provides in the approved field. They should not infer origin, gender, language, or identity. The data owner sets retention and access.',
    sample:'Check whether later callers used the note accurately, whether the customer corrected it again, and whether free-text notes added unrelated personal assumptions.',
    script:'"Would you like me to add the pronunciation you just gave me for future calls?"',
    failure:'Leave the field blank when the customer does not provide a pronunciation. A guessed phonetic spelling can compound the original mistake.'
  },
  {
    slug:'outsourced-call-center-outage-status-wording-control', title:'Outsourced Call Center Outage Status Wording Control',
    excerpt:'Outage updates should separate confirmed system status, customer impact, estimates, and the time of the next owned update.',
    image:'/blog-aug21/outsourced-call-center-knowledge-change-notice.webp',
    opening:'During an outage, yesterday’s script can survive longer than yesterday’s status. Representatives need current wording without being pushed to invent certainty.',
    signal:'Activate the control when an approved incident source changes state, scope, workaround, estimate, or customer instruction.',
    record:'Link the incident source, wording version, effective time, affected service, confirmed impact, approved workaround, estimate owner, next update time, and superseded message.',
    boundary:'Frontline staff may repeat the current approved facts and log customer-specific impact. Incident owners confirm technical status; client owners approve remedies and public commitments.',
    sample:'Compare calls before and after each wording change. Look for stale estimates, copied workaround steps, unsupported root-cause claims, and missing follow-up promises.',
    script:'"The service issue is confirmed. I do not have an approved restoration time yet; the next status review is scheduled for the time shown here."',
    failure:'Do not turn an internal hypothesis into a customer explanation or keep using an estimate after its review time passes.'
  },
  {
    slug:'call-center-duplicate-callback-cancellation-rule', title:'Call Center Duplicate Callback Cancellation Rule',
    excerpt:'Duplicate callbacks should be cancelled only after the team verifies that one active owner still holds the full customer promise.',
    image:'/blog-aug20/outsourced-call-center-customer-promise-reconciliation.png',
    opening:'Two callback tasks may look like harmless redundancy. In practice, customers get conflicting answers while each caller assumes the other has the current case.',
    signal:'Use the rule when matching customer, case, purpose, and promised window indicate that multiple outbound tasks may represent the same commitment.',
    record:'Compare source cases, requested result, verification needs, due windows, contact permissions, dependencies, assigned owners, and the wording each task expects to deliver.',
    boundary:'Representatives may flag a likely duplicate and pause the later task under an approved rule. A supervisor confirms consolidation; client owners decide conflicting remedies or commitments.',
    sample:'Review cancelled callbacks, contacts made within minutes of each other, and duplicate tasks that later reopened. Confirm the surviving record retained every relevant promise.',
    script:'"These tasks appear to cover the same promise. I have held the later one while the supervisor confirms the single owner and complete callback record."',
    failure:'Matching phone numbers alone are not enough. Shared numbers, separate issues, and different consent states can make apparent duplicates legitimate.'
  },
  {
    slug:'outsourced-call-center-priority-customer-label-review', title:'Outsourced Call Center Priority Customer Label Review',
    excerpt:'A priority label needs a current source, a permitted service effect, and an expiry instead of becoming permanent folklore in the CRM.',
    image:'/blog-aug21/outsourced-call-center-schedule-adherence-exception.webp',
    opening:'Labels such as VIP, vulnerable, executive, or urgent can change handling long after anyone remembers why they were added. A label without scope invites inconsistent treatment.',
    signal:'Review the label when it is created, used to change handling, reaches its review date, conflicts with current facts, or is questioned by the customer.',
    record:'Capture the approved label name, source, purpose, authorized service effect, owner, effective time, expiry, access scope, and correction path. Keep the supporting facts in their proper system.',
    boundary:'Representatives may apply documented handling tied to a valid label. They cannot invent benefits or infer a sensitive characteristic. Client owners define eligibility and service effects.',
    sample:'Test labels with no recent use, labels that changed routing, and records where staff wrote informal synonyms. Confirm that expired labels no longer influence decisions.',
    script:'"This label authorizes the listed routing step only. It does not approve a fee, refund, or policy exception."',
    failure:'Treat an unexplained or expired label as an ownership question, not as permission to improvise special handling.'
  },
  {
    slug:'call-center-shift-start-authentication-check', title:'Call Center Shift-Start Authentication Check',
    excerpt:'A shift should not open until named users can reach the tools they need through approved authentication and a safe failure route.',
    image:'/blog-aug21/outsourced-call-center-vendor-onboarding-control.webp',
    opening:'An access failure at the first customer contact is already late. The useful check happens before queues open, while an owner can still correct the gap or narrow the assignment.',
    signal:'Run the check before each staffed period and after a role, device, location, authentication method, or required application changes.',
    record:'Confirm the named user, assigned device, required systems, expected role, successful authentication event, missing access, support ticket, fallback assignment, and approving owner.',
    boundary:'Team members verify their own access without sharing credentials or bypassing controls. Access administrators correct permissions. Operations managers decide whether the person can work a reduced lane.',
    sample:'Review access failures that delayed queue entry, temporary permissions still active, shared-account attempts, and workers moved to tasks their available role did not support.',
    script:'"My named account cannot reach the approved queue. I have opened the access request and will use only the assigned fallback work until it is resolved."',
    failure:'Urgency does not justify a shared login, copied authentication code, or wider role. Move the work or the schedule, not the credential boundary.'
  },
] as const;

const sources = [
  {name:'Cybersecurity Framework 2.0',organization:'NIST',date:'February 2024',url:'https://www.nist.gov/cyberframework',note:'Governance, access, and accountable improvement context.'},
  {name:'Privacy Framework',organization:'NIST',date:'January 2020',url:'https://www.nist.gov/privacy-framework',note:'Purpose, data processing, and privacy risk context.'},
  {name:'ISO 18295-1:2017 Customer contact centres',organization:'International Organization for Standardization',date:'July 2017',url:'https://www.iso.org/standard/64739.html',note:'Customer-contact process and responsibility context.'},
] as const;

function makePost(topic:Topic,index:number):BlogPost {
  return {
    slug:topic.slug,title:topic.title,excerpt:topic.excerpt,keyword:topic.title,
    published:'2026-09-04',updated:'2026-09-04',minutes:8+(index%4),heroImage:topic.image,
    intro:`${topic.opening} This guide turns that specific failure point into a routine a client and outsourced team can inspect together.`,
    stats:[
      {value:'1',label:'observable trigger',note:'The routine starts from a recorded event, not an assumption.',source:3},
      {value:'1',label:'accepting owner',note:'Open work always has a person or queue accountable for the next action.',source:3},
      {value:'2',label:'records compared',note:'Review the source interaction beside the finished operating record.',source:1},
    ],
    sections:[
      {title:'Know exactly when the check starts',paragraphs:[topic.signal,`${topic.failure} Write that condition into the working guide so a busy shift does not quietly replace it.`],items:['Point to the source event','Name the person running the check','State the safe fallback','Define what closes the record']},
      {title:'Build a record the next person can use',paragraphs:[topic.record,'Use links and identifiers where possible. Copy only the customer information needed for this purpose, and keep unknown facts visibly unknown.']},
      {title:'Keep the authority line visible',paragraphs:[topic.boundary,'If the next step changes policy, money, access, identity status, customer rights, or another irreversible outcome, stop with the evidence intact and route the decision.']},
      {title:'Handle the awkward case, not just the normal one',paragraphs:[topic.failure,'The fallback needs a named destination and a response expectation. A generic escalation flag does not tell the customer or the next shift what will happen.']},
      {title:'Review what happened in the live queue',paragraphs:[topic.sample,'Counts can show frequency. The paired records reveal whether ownership, wording, and customer outcome stayed connected.'],items:['Read the source interaction','Check the operating record','Trace the next owner','Confirm the eventual outcome']},
      {title:'Use plain wording with the customer',paragraphs:[`A useful line is: ${topic.script}`,'Adapt the wording to the approved script and the facts of the contact. Never imply that a pending review is already a decision.']},
      {title:'Change the routine through its owner',paragraphs:['Bring repeated exceptions to the process owner with representative records. Update the rule, examples, access, and review method together; then test the next live case.','Keep the old version and effective time so quality reviewers do not grade earlier work against a rule that did not exist.'],items:['Group repeated exceptions','Approve one written change','Brief the affected shift','Sample the first live uses']},
    ],
    controlTable:[
      {data:'Complete approved input',agent:'Run the documented check and record the result',manager:'Review the agreed sample'},
      {data:'Missing or conflicting input',agent:'Preserve the facts and use the safe fallback',manager:'Resolve the ownership or source conflict'},
      {data:'Sensitive or irreversible step',agent:'Stop at the stated boundary',manager:'Verify authority and decide'},
      {data:'Repeated exception',agent:'Link examples without copying extra customer data',manager:'Own the controlled change'},
    ],
    scripts:[
      {situation:'Customer update',text:topic.script},
      {situation:'Owner required',text:'"I have preserved the current facts and routed the remaining decision to the named owner."'},
      {situation:'Source conflict',text:'"The approved sources do not agree, so I am holding the current state for review."'},
    ],
    faqs:[
      {question:`Who owns the ${topic.title.toLowerCase()}?`,answer:'Assign a client-side process owner who can approve the rule, resolve exceptions, and name a backup.'},
      {question:'What should the first review include?',answer:'Use a normal case, a failed or incomplete case, and the source records that were available when each action occurred.'},
      {question:'When should the scope expand?',answer:'Expand after the trigger, access, owner, fallback, and review result remain stable through representative live work.'},
    ],
    sources,
    related:[{label:'Review operations support',href:'/services/operations-support'},{label:'Plan customer support coverage',href:'/services/customer-support'},{label:'Browse the research library',href:'/research'}],
    banners:[
      {label:'Scope',title:'Write the narrow operating lane',body:'Set the trigger, evidence, limit, and owner before volume arrives.',href:'/contact-us',cta:'Discuss the workflow'},
      {label:'Pilot',title:'Test the uncomfortable example',body:'Use one normal case and one exception while a reviewer is available.',href:'/services/operations-support',cta:'Review operations support'},
      {label:'Review',title:'Repair the source of repeat gaps',body:'Change approved guidance and sampling together.',href:'/blog',cta:'Read more guides'},
    ],
  };
}

export const september4BlogBatch: readonly BlogPost[] = topics.map(makePost);
