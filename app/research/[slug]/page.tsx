import {notFound} from 'next/navigation';
import {Header,Footer} from '../../components';
import {researchPosts,ResearchPost} from '../../fleet-data';
import {site} from '../../data';
import {EditorialShell,type EditorialSidebarLink,type EditorialTocItem} from '../../EditorialShell';

const base=`https://${site.domain.toLowerCase()}`;
const defaultResearchLinks:readonly EditorialSidebarLink[]=[
  {href:'/services/inbound-call-handling',label:'Inbound call handling'},
  {href:'/services/reporting-and-qa',label:'Reporting and QA'},
  {href:'/contact-us',label:'Discuss your support plan'},
];
function displayDate(value:string){return new Intl.DateTimeFormat('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(`${value}T00:00:00Z`))}
export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=researchPosts.find(p=>p.slug===slug);
  if(!post)return {};
  const url=`${base}/research/${post.slug}`;
  const publishedDate=post.sourceDate ?? post.published;
  const updatedDate=post.updated ?? publishedDate;
  const image=post.image??'/index-heroes/research-evidence-map.svg';
  return {title:post.title,description:post.excerpt,alternates:{canonical:url},openGraph:{title:post.title,description:post.excerpt,url,type:'article',publishedTime:publishedDate,modifiedTime:updatedDate,images:[image]},twitter:{card:'summary_large_image',title:post.title,description:post.excerpt,images:[image]}};
}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post:ResearchPost|undefined=researchPosts.find(p=>p.slug===slug);
  if(!post)notFound();
  const related=(post.related||[]).map(s=>researchPosts.find(p=>p.slug===s)).filter(Boolean) as ResearchPost[];
  const url=`${base}/research/${post.slug}`;
  const publishedDate=post.sourceDate ?? post.published;
  const updatedDate=post.updated ?? publishedDate;
  const organization={'@type':'Organization',name:site.brand,url:base};
  const schema={'@context':'https://schema.org','@type':'Article',name:post.title,headline:post.title,description:post.excerpt,datePublished:post.published,dateModified:updatedDate,url,author:organization,publisher:organization,citation:post.sources?.map(s=>s.url)};
  const tableOfContents:EditorialTocItem[]=[
    ...(post.keyStats?.length?[{id:'key-stats',label:'Key stats'}]:[]),
    ...(post.takeaways?.length?[{id:'key-takeaways',label:'Key takeaways'}]:[]),
    ...post.sections.map((section,index)=>({id:`research-section-${index+1}`,label:section.heading})),
    ...(post.serviceHandoff?[{id:'support-lane',label:'Put this into a support lane'}]:[]),
    ...(post.internalLinks?.length?[{id:'related-operating-guides',label:'Related operating guides'}]:[]),
    ...(post.faqs?.length?[{id:'research-faqs',label:'FAQs'}]:[]),
    ...(post.sources?.length?[{id:'research-sources',label:'Sources'}]:[]),
    ...(related.length===3?[{id:'related-evidence-briefs',label:'Related evidence briefs'}]:[]),
  ];
  const contextualLinks:EditorialSidebarLink[]=[
    ...(post.serviceHandoff?[{href:post.serviceHandoff.href,label:post.serviceHandoff.label}]:[]),
    ...(post.internalLinks??[]).map(link=>({href:link,label:link.split('/').pop()?.replaceAll('-',' ')??link})),
  ];
  const sidebarLinks=contextualLinks.length?contextualLinks:defaultResearchLinks;
  return <><Header/><main><article className="section"><div className="container article-shell editorial-container">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...schema,datePublished:publishedDate})}}/>
    <meta property="article:published_time" content={publishedDate}/>
    <p className="eyebrow">{site.brand} evidence brief · Desk review · Published <time dateTime={publishedDate}>{displayDate(publishedDate)}</time>{updatedDate!==publishedDate?<> · Updated <time dateTime={updatedDate}>{displayDate(updatedDate)}</time></>:null}</p>
    <h1>{post.title}</h1><p className="lead">{post.excerpt}</p>
    {post.image?<img src={post.image} alt={`${post.title} editorial illustration`} width="1536" height="1024" style={{width:'100%',height:'auto',borderRadius:'18px'}}/>:null}
    <EditorialShell tableOfContents={tableOfContents} sidebarLinks={sidebarLinks} sidebarHeading="Related services">
      <div>
        {post.keyStats?.length?<section className="card"><h2 id="key-stats">Key stats</h2><ul>{post.keyStats.map(x=><li key={x}>{x}</li>)}</ul></section>:null}
        {post.takeaways?.length?<section className="card"><h2 id="key-takeaways">Key takeaways</h2><ul>{post.takeaways.map(x=><li key={x}>{x}</li>)}</ul></section>:null}
        {post.sections.map((s,index)=><section className="card" key={s.heading}><h2 id={`research-section-${index+1}`}>{s.heading}</h2><p>{s.body}</p></section>)}
        {post.serviceHandoff?<section className="card"><h2 id="support-lane">Put this into a support lane</h2><p>{post.serviceHandoff.body}</p><a href={post.serviceHandoff.href}>{post.serviceHandoff.label}</a></section>:null}
        {post.internalLinks?.length?<section className="card"><h2 id="related-operating-guides">Related operating guides</h2><ul>{post.internalLinks.map(link=><li key={link}><a href={link}>{link.split('/').pop()?.replaceAll('-',' ')}</a></li>)}</ul></section>:null}
        {post.faqs?.length?<section className="card"><h2 id="research-faqs">FAQs</h2>{post.faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}</section>:null}
        {post.sources?.length?<section className="card"><h2 id="research-sources">Sources</h2><ol>{post.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>)}</ol></section>:null}
        {related.length===3?<section className="card"><h2 id="related-evidence-briefs">Related evidence briefs</h2><div className="research-card-grid">{related.map(r=><a className="research-library-card" href={`/research/${r.slug}`} key={r.slug}><h3>{r.title}</h3><p>{r.excerpt}</p></a>)}</div></section>:null}
      </div>
    </EditorialShell>
  </div></article></main><Footer/></>;
}
