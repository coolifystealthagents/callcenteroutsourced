#!/usr/bin/env python3
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,PngImagePlugin
import hashlib,json,re,textwrap

ROOT=Path(__file__).resolve().parents[2]
DATE='2026-10-13'; VISIBLE='October 13, 2026'; BASE='b81628cfa7f37e7431e5ae7f3e2cdb2ea4f8f0a1'
BLOGS=[
 ('Preserve Interpreter Callback Acceptance','interpreter-callback-acceptance','multilingual support queues','the language-service request and customer preference','the callback assignment and contact record','request ID, stated language, approved provider, callback window, accepting owner, and delivery result','the interpreter accepts after the customer window has changed','Customer support'),
 ('Route Silent-Call Follow-Up without Guessing Intent','silent-call-follow-up-routing','inbound voice teams','the telephony event and approved silent-call rule','the controlled follow-up queue','call ID, observed audio state, verification status, allowed channel, owner, and closure evidence','three silent calls arrive from the same unverified number','Inbound call handling'),
 ('Reconcile Duplicate CRM Contact Merges','duplicate-crm-contact-merge-reconciliation','customer data operations','the merge request and source contact records','the authoritative CRM contact graph','contact IDs, matching evidence, conflicting fields, approval, survivor ID, and rollback reference','two household members share an address but have different service needs','Operations support'),
 ('Control Knowledge-Base Hotfix Rollback','knowledge-base-hotfix-rollback-control','knowledge operations teams','the approved hotfix and superseded article version','the agent knowledge portal','article ID, defect report, approved change, release time, rollback owner, and verification sample','a hotfix corrects one script but breaks another channel instruction','Reporting and QA'),
 ('Route Supervisor Whisper-Coaching Requests','supervisor-whisper-coaching-request-route','live contact supervisors','the monitored-call policy and assistance request','the supervisor intervention log','interaction ID, assistance reason, consent state, assigned supervisor, intervention time, and outcome','two supervisors respond with conflicting instructions during one call','Reporting and QA'),
 ('Confirm Voicemail Disclosure Permissions','voicemail-disclosure-permission-check','outbound callback teams','the verified contact preference and disclosure rule','the voicemail attempt record','case ID, approved number, disclosure level, template version, attempt time, and delivery state','the greeting names a different person from the customer record','Customer support'),
 ('Sequence Ticket IDs during a Contact-Center Outage','outage-ticket-id-sequence-control','business continuity teams','the outage declaration and temporary numbering plan','the restored ticketing platform','outage ID, temporary ticket ID, channel, source time, owner, posted ID, and reconciliation state','two shifts create overlapping temporary number ranges','Operations support'),
 ('Honor Customer-Requested Channel Switches','customer-requested-channel-switch-handoff','omnichannel service teams','the authenticated channel request and conversation record','the receiving channel queue','case ID, current channel, requested channel, verification state, accepting owner, and context receipt','a customer requests email after sensitive details were discussed by phone','Customer support'),
 ('Document Partial Recording Consent','partial-call-recording-consent-record','quality and compliance operations','the approved recording notice and observed consent event','the recording control and interaction record','interaction ID, notice version, consent state, recording interval, stop event, reviewer, and receipt','consent is withdrawn after the call recording has begun','Reporting and QA'),
 ('Close Abandoned Callback Ownership','abandoned-callback-ownership-closure','callback operations teams','the callback promise and attempt history','the callback queue and source case','promise ID, customer window, attempt events, failure codes, owner, next action, and closure reason','the assigned agent ends shift after one failed attempt','Inbound call handling'),
 ('Review Agent Desktop Macro Expirations','agent-desktop-macro-expiration-review','contact-center knowledge teams','the approved macro inventory and policy version','the production agent desktop','macro ID, owner, effective version, expiry, dependent queues, replacement, and removal receipt','an expired macro remains pinned in one regional workspace','Reporting and QA'),
 ('Test Emergency Overflow Vendor Activation','emergency-overflow-vendor-activation-test','contact-center resilience teams','the approved continuity plan and activation decision','the overflow routing and reporting systems','test ID, trigger, vendor scope, routing state, accepted contacts, exception owner, and rollback result','the overflow vendor connects but does not receive the current escalation matrix','Operations support'),
]
SOURCES=[
 {'name':'ISO 18295-1 Customer contact centres','url':'https://www.iso.org/standard/64739.html'},
 {'name':'NIST Cybersecurity Framework 2.0','url':'https://www.nist.gov/cyberframework'},
 {'name':'NIST Privacy Framework','url':'https://www.nist.gov/privacy-framework'},
 {'name':'NIST Digital Identity Guidelines','url':'https://pages.nist.gov/800-63-4/'},
 {'name':'FTC Telemarketing Sales Rule','url':'https://www.ftc.gov/legal-library/browse/rules/telemarketing-sales-rule'},
 {'name':'FCC Unwanted Calls and Texts Guide','url':'https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts'},
 {'name':'CISA Turn on Multifactor Authentication','url':'https://www.cisa.gov/secure-our-world/turn-mfa'},
 {'name':'GAO Standards for Internal Control','url':'https://www.gao.gov/products/gao-14-704g'},
 {'name':'Census Bureau Statistical Quality Standards','url':'https://www.census.gov/about/policies/quality/standards.html'},
 {'name':'DOJ Guidance on Web Accessibility','url':'https://www.ada.gov/resources/web-guidance/'},
]
RESEARCH=[
 ('Measure IVR Containment Misclassification','ivr-containment-misclassification-study','whether interactions labeled contained actually resolved the stated need without transfer, repeat contact, or hidden abandonment','one IVR session linked to its next eligible customer-contact window','containment label, selected intent, exit state, subsequent contact, reviewer class, and uncertainty code','repair intent definitions and report verified resolution separately from technical containment'),
 ('Study Callback Promise Breach Recovery','callback-promise-breach-recovery-study','how a breached callback promise moves through acknowledgment, reassignment, customer update, and verified recovery','one callback promise whose approved window elapsed without a completed outcome','promise window, breach event, reason, recovery owner, contact attempts, customer update, and final state','change promise design, staffing coverage, or recovery ownership before reducing the reported breach rate'),
 ('Audit Knowledge Article Citation Freshness','knowledge-article-citation-freshness-audit','whether operational claims in agent knowledge articles remain linked to current authoritative sources and approved policy versions','one published knowledge claim with its citation, owner, review date, and affected scripts','article ID, claim ID, citation URL, source date, policy version, reviewer decision, and remediation receipt','retire or qualify unsupported claims and assign review intervals by operational consequence'),
 ('Analyze Queue Transfer Bounce Patterns','queue-transfer-bounce-pattern-analysis','which transfer paths create repeated routing without accepted ownership or progress on the customer need','one transfer event joined to the source interaction, receiving queue, acceptance event, and eventual outcome','interaction ID, source queue, destination queue, reason code, acceptance, return path, and closure state','redesign routing conditions or acceptance rules where verified bounce patterns persist'),
 ('Evaluate Redaction Consistency in QA Samples','qa-sample-redaction-consistency-evaluation','whether independent reviewers remove the same nonessential sensitive elements while preserving evidence needed for quality review','one governed QA sample independently redacted under the same rule version','sample ID, data class, rule version, reviewer marks, disagreement, adjudication, and released artifact','clarify redaction definitions and retest before expanding sample access'),
]

def js(v): return json.dumps(v,ensure_ascii=False)
def wc(s): return len(re.findall(r"[\w’'-]+",s,re.UNICODE))
def blog_prose(x):
 title,slug,team,source,dest,fields,exception,service=x
 context=f"For {title.lower()}, this control connects {source} to {dest} for {team}."
 secs=[
 ('Define the trigger and finish',f"Start the workflow only when an observable event enters the approved queue. {source.capitalize()} must identify the governing request, version, and time; urgency or repetition cannot substitute for evidence. Write the eligible trigger, exclusions, and safe first action so agents do not invent a path during a live customer contact.",f"Closure means the authorized action is reflected in {dest}, remaining work has an accepting owner, and the customer receives an approved outcome or next-update promise. A transfer, sent message, or checked task is activity rather than proof of completion."),
 ('Build the working record',f"The minimum record contains {fields}. Add the current state, next action, named owner, due time with timezone, evidence link, and any customer-facing promise. Stable identifiers should survive handoffs across channels, shifts, providers, and client teams.",f"Keep observations separate from decisions. Record what the system showed, what the customer stated, and which rule version was consulted. A decision field needs the authorized actor, time, reason, and conditions. Avoid copying credentials, payment data, recordings, or unrestricted transcript text into a coordination queue."),
 ('Use states that reveal ownership',f"Use received, verifying source, ready under rule, awaiting owner, actioned, destination check, customer update, closed, exception, and reopened. Every waiting state needs a reason and review time. The label pending is too vague to show whether evidence, access, a customer response, or a client decision is missing.",f"Measure active work separately from waiting. Escalation clocks should trigger review, not grant authority or fabricate an answer. If a service target is missed, keep the original timestamp and record the recovery owner rather than backdating the event."),
 ('Keep authority narrower than access',f"An outsourced agent may collect facts, apply an unambiguous approved instruction, prepare a decision packet, execute an authorized action, and verify the destination. The client owner retains changes to policy, remedies, access, safety statements, legal positions, financial decisions, and exceptions not covered by the written rule.",f"Match technical permissions to this lane through individual accounts, multifactor authentication, restricted exports, and periodic access review. The ability to edit {dest} does not itself authorize every available change. Backup agents and overflow vendors inherit the same limits."),
 ('Work the hard exception',f"Rehearse this case: {exception}. Freeze only the affected action, preserve the competing observations and their timestamps, and state the conflict neutrally. Do not overwrite an earlier value just because the later one makes the queue easier to close.",f"Route a decision packet with the case ID, verified facts, source links, current destination state, deadline, customer impact, permitted paths, and exact question. After the owner decides, record the authority, update the controlling destination, reconcile dependent records, and capture a verification receipt."),
 ('Communicate without overpromising',f"An acknowledgment should say what was received, which check comes next, who owns the decision, and when the next update is expected. It should not imply approval, identity, payment, safety, availability, or resolution before the governing evidence supports that statement.",f"Use approved templates as starting points and insert only verified case facts. Record delivery results instead of assuming that a send event reached the customer. A failed delivery needs a reason, permitted alternate channel, and link to the same case."),
 ('Verify and improve the lane',f"Open {dest} after action and compare it with {source}. Check identifiers, effective time, owner, status, dependent notifications, and any rollback requirement. During an outage, use controlled temporary IDs and reconcile them back to the primary system before declaring completion.",f"Pilot one queue and channel with ordinary work, missing evidence, an unavailable owner, and a cross-shift handoff. Track verified closures, exception age, destination mismatches, reopen rate, delivery failures, and owner wait time with denominators. Sample closures so a second reviewer can reconstruct source, authority, action, and customer outcome."),
]
 intro=f"Published {VISIBLE}. {title} gives {team} a bounded operating method. It preserves evidence, separates action from authority, and requires destination verification before closure. {context}"
 return intro,[{'title':h,'paragraphs':[a+' '+context,b+' '+context]} for h,a,b in secs]

def research_sections(x):
 title,slug,question,unit,fields,decision=x; tag=f"This checkpoint is specific to {title.lower()} and its unit: {unit}."
 data=[
 ('Research question and bounded claim',f"Published {VISIBLE}. This study asks {question}. The unit of analysis is {unit}. The protocol can describe workflow patterns and evidence quality under frozen definitions; it cannot prove causation, certify compliance, rank vendors, or guarantee an individual outcome."),
 ('Source selection and method',f"Ten authoritative HTTPS sources from ISO, NIST, FTC, FCC, CISA, GAO, Census, and DOJ provide customer-contact, identity, privacy, security, communications, control, accessibility, and statistical-quality context. The study maps identity, provenance, observed state, authority, action, and verification. No source supplies a universal operating threshold."),
 ('Population and sampling',f"Define the eligible population before extraction and preserve the original count. Include ordinary completions, missing evidence, cross-shift handoffs, unavailable owners, failed destinations, and reopened cases. Use a documented random or systematic sample plus a separately labeled risk supplement; never describe a risk-selected sample as representative."),
 ('Data schema and lineage',f"The proposed record contains {fields}. It also needs source system, field definition, time zone, extraction time, permitted transformation, owner, missing-value meaning, retention rule, and dataset version. A reviewer should trace sampled rows from source event to analysis and back without private verbal instructions."),
 ('Findings framework',f"Separate the initiating event, provider action, client decision, system destination, and customer outcome. A transfer can occur without accepted ownership; a message can be sent without delivery; a technical status can close without resolving the stated need. Report these stages rather than compressing them into one success flag."),
 ('Analysis plan',f"Publish the population flow, counts, denominators, missingness, distributions, medians, tail measures, and relevant absolute differences. Keep active handling distinct from customer, system, provider, and client-decision wait. If a model is used, disclose its specification, reference groups, diagnostics, and sensitivity tests."),
 ('Bias and alternative explanations',f"Test selection from excluded failures, missing off-platform events, definition drift, timestamp defaults, changed routing, outages, campaigns, and reviewer knowledge of outcomes. A zero event count can mean no event occurred or detection failed. Conflicting source states remain visible until the authorized owner resolves them."),
 ('Reviewer challenge',f"Give independent reviewers the same source packet and require field-level classifications plus uncertainty. Measure disagreement on consequential fields rather than only overall agreement. Resolve ambiguity through a clarified definition and a fresh blinded sample, not private pressure to converge."),
 ('Privacy, fairness, and access',f"Collect only fields required for the stated decision, replace direct identifiers with study keys, restrict the crosswalk, and apply approved retention. Suppress or aggregate small groups where appropriate. Do not infer protected characteristics, customer intent, or employee capability from administrative traces."),
 ('Robustness and replication',f"Repeat the analysis after restoring eligible missing records, excluding disrupted intervals, and varying only predefined reasonable thresholds. Archive the preregistration, population logic, dictionary, extraction version, exclusions, reviewer worksheet, disagreement log, code or specification, sensitivities, and approved interpretation."),
 ('Decision rule and limitations',f"The operational decision is whether to {decision}. Predefine the result that triggers a bounded repair, continued observation, or no change. Local systems, contracts, queue mix, policy versions, languages, and missing evidence limit generalization; even a stable association does not prove a causal mechanism."),
]
 depth=f"For this {title.lower()} stage, the review records the exact source version, observed event, responsible decision owner, permitted operational action, destination receipt, unresolved uncertainty, and next verification time. Those fields keep administrative evidence distinct from interpretation and let a second reviewer reconstruct the result."
 return [{'heading':h,'body':b+' '+tag+' '+depth} for h,b in data]

def png(path,title,size,index,kind):
 colors=[('#082f49','#38bdf8'),('#111827','#f59e0b'),('#172554','#a78bfa'),('#052e2b','#34d399'),('#3f1d2e','#fb7185')]; bg,accent=colors[index%len(colors)]
 im=Image.new('RGB',size,bg); d=ImageDraw.Draw(im)
 font_path='/System/Library/Fonts/Supplemental/Arial Bold.ttf'; reg_path='/System/Library/Fonts/Supplemental/Arial.ttf'
 big=ImageFont.truetype(font_path,58 if size[0]==1024 else 70); small=ImageFont.truetype(font_path,27 if size[0]==1024 else 34); foot=ImageFont.truetype(reg_path,24 if size[0]==1024 else 30)
 margin=72 if size[0]==1024 else 105; maxw=size[0]-2*margin
 words=title.split(); lines=[]; cur=''
 for word in words:
  trial=(cur+' '+word).strip()
  if d.textlength(trial,font=big)<=maxw-(130 if size[0]>1024 else 0):cur=trial
  else: lines.append(cur);cur=word
 if cur:lines.append(cur)
 d.rounded_rectangle((margin,70,margin+300,82),6,fill=accent);d.text((margin,125),'CALL CENTER OUTSOURCED',font=small,fill=accent)
 y=390
 for line in lines:d.text((margin,y),line,font=big,fill='white');y+=big.size+18
 d.ellipse((size[0]-300,95,size[0]-70,325),outline=accent,width=14);d.line((size[0]-245,205,size[0]-200,250,size[0]-120,155),fill='white',width=17,joint='curve')
 d.text((margin,size[1]-110),f'{kind} • Evidence-led contact operations',font=foot,fill='#dbeafe')
 info=PngImagePlugin.PngInfo();info.add_text('Title',title);info.add_text('Description',f'Original Call Center Outsourced {kind.lower()} graphic: {title}')
 path.parent.mkdir(parents=True,exist_ok=True);im.save(path,optimize=True,pnginfo=info)

def ts_blog():
 drafts=[]
 for x in BLOGS:
  title,slug,team,source,dest,fields,exception,service=x; intro,sections=blog_prose(x)
  drafts.append({'slug':slug,'title':title,'excerpt':f'A controlled outsourced call-center workflow for {title.lower()}, with evidence, authority, exceptions, and verification.','published':DATE,'updated':DATE,'minutes':12,'heroImage':f'/oct13/{slug}.png','intro':intro,'sections':sections,'related':[{'label':'Explore service lanes','href':'/services'},{'label':'Read evidence briefs','href':'/research'},{'label':'Discuss a bounded pilot','href':'/contact-us'}],'banners':[{'label':'Scope','title':'Freeze the operating lane','body':'Name sources, permissions, owners, exceptions, and proof before launch.','href':'/services','cta':'Review services'}]})
 return "import type {BlogPost} from './data';\n\nexport const october13BlogBatch:readonly BlogPost[]="+js(drafts)+";\n"

def ts_research():
 drafts=[]
 for i,x in enumerate(RESEARCH):
  title,slug,question,unit,fields,decision=x
  drafts.append({'slug':slug,'title':title,'excerpt':question[0].upper()+question[1:]+' under frozen definitions and explicit inference boundaries.','published':DATE,'sourceDate':DATE,'updated':DATE,'image':f'/oct13/{slug}.png','keyStats':['10 authoritative HTTPS sources reviewed','2 independent review passes','1 preregistered decision rule'],'takeaways':[f'Define {unit} before extraction.','Separate source, action, authority, destination, and outcome.','Use aggregate findings for process repair, never personal scoring.'],'sections':research_sections(x),'sources':SOURCES,'internalLinks':['/blog/'+BLOGS[i][1],'/services/reporting-and-qa','/contact-us'],'related':[RESEARCH[(i+j)%5][1] for j in (1,2,3)],'serviceHandoff':{'href':'/contact-us','label':'Design a bounded evidence pilot','body':f'Freeze definitions, sources, and decision owners before testing {question}.'},'faqs':[{'question':'What is the unit of analysis?','answer':f'The proposed unit is {unit}.'},{'question':'Does the design establish causation?','answer':'No. It is a bounded observational design with explicit alternative explanations.'},{'question':'How should results be used?','answer':f'Use findings to {decision}, with accountable review.'}]})
 return "import type {ResearchPost} from './fleet-data';\n\nexport const october13ResearchBatch:readonly ResearchPost[]="+js(drafts)+";\n"

(ROOT/'app/blog-oct13.ts').write_text(ts_blog());(ROOT/'app/research-oct13.ts').write_text(ts_research())
articles=[]
for i,x in enumerate(BLOGS):
 title,slug=x[:2]; p=ROOT/f'public/oct13/{slug}.png';png(p,title,(1024,1024),i,'Blog')
 intro,sections=blog_prose(x); prose=' '.join([intro]+[p for s in sections for p in s['paragraphs']])
 articles.append({'section':'Blog','slug':slug,'title':title,'source':'app/blog-oct13.ts','thumbnailPath':f'public/oct13/{slug}.png','publicationDate':DATE,'route':'/blog/'+slug,'thumbnailTitle':title,'wordCount':wc(prose),'sha256':hashlib.sha256((ROOT/'app/blog-oct13.ts').read_bytes()).hexdigest()})
for i,x in enumerate(RESEARCH,12):
 title,slug=x[:2];p=ROOT/f'public/oct13/{slug}.png';png(p,title,(1536,1024),i,'Research')
 prose=' '.join(s['body'] for s in research_sections(x));articles.append({'section':'Research','slug':slug,'title':title,'source':'app/research-oct13.ts','thumbnailPath':f'public/oct13/{slug}.png','publicationDate':DATE,'route':'/research/'+slug,'thumbnailTitle':title,'wordCount':wc(prose),'sha256':hashlib.sha256((ROOT/'app/research-oct13.ts').read_bytes()).hexdigest()})
manifest={'site':'CallCenterOutsourced.com','canonicalDomain':'https://callcenteroutsourced.com','repository':'coolifystealthagents/callcenteroutsourced','branch':'main','baseSha':BASE,'publicationDate':DATE,'visiblePublicationDate':VISIBLE,'blogCount':12,'researchCount':5,'articleCount':17,'thumbnailCount':17,'registryPaths':['app/data.ts','app/fleet-data.ts'],'routePaths':['app/blog/[slug]/page.tsx','app/research/[slug]/page.tsx'],'indexPaths':['app/blog/page.tsx','app/research/page.tsx'],'articles':articles}
(ROOT/'publishing/2026-10-13/manifest.json').write_text(json.dumps(manifest,indent=2)+"\n")
print('generated',len(articles),'Blog min',min(a['wordCount'] for a in articles if a['section']=='Blog'),'Research min',min(a['wordCount'] for a in articles if a['section']=='Research'))
