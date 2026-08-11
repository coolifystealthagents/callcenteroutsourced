import {notFound} from 'next/navigation';
import {Header,Footer} from '../../components';
import {researchPosts,ResearchPost} from '../../fleet-data';
import {site} from '../../data';

const base=`https://${site.domain.toLowerCase()}`;
export function generateStaticParams(){return researchPosts.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=researchPosts.find(p=>p.slug===slug);
  if(!post)return {};
  const url=`${base}/research/${post.slug}`;
  const publishedDate=post.sourceDate ?? post.published;
  return {title:`${post.title} | ${site.brand}`,description:post.excerpt,alternates:{canonical:url},openGraph:{title:post.title,description:post.excerpt,url,type:'article',publishedTime:publishedDate}};
}
export default async function ResearchArticle({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post:ResearchPost|undefined=researchPosts.find(p=>p.slug===slug);
  if(!post)notFound();
  const related=(post.related||[]).map(s=>researchPosts.find(p=>p.slug===s)).filter(Boolean) as ResearchPost[];
  const url=`${base}/research/${post.slug}`;
  const publishedDate=post.sourceDate ?? post.published;
  const schema={'@context':'https://schema.org','@type':'ResearchProject',name:post.title,description:post.excerpt,datePublished:post.published,url,author:{'@type':'Organization',name:site.brand},citation:post.sources?.map(s=>s.url)};
  return <><Header/><main><article className="section"><div className="container article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({...schema,datePublished:publishedDate})}}/>
    <meta property="article:published_time" content={publishedDate}/>
    <p className="eyebrow">{site.brand} research · Published <time dateTime={publishedDate}>{publishedDate}</time></p>
    <h1>{post.title}</h1><p className="lead">{post.excerpt}</p>
    {post.keyStats?.length?<section className="card"><h2>Key stats</h2><ul>{post.keyStats.map(x=><li key={x}>{x}</li>)}</ul></section>:null}
    {post.takeaways?.length?<section className="card"><h2>Key takeaways</h2><ul>{post.takeaways.map(x=><li key={x}>{x}</li>)}</ul></section>:null}
    {post.sections.map(s=><section className="card" key={s.heading}><h2>{s.heading}</h2><p>{s.body}</p></section>)}
    {post.internalLinks?.length?<section className="card"><h2>Related operating guides</h2><ul>{post.internalLinks.map(link=><li key={link}><a href={link}>{link.split('/').pop()?.replaceAll('-',' ')}</a></li>)}</ul></section>:null}
    {post.faqs?.length?<section className="card"><h2>FAQs</h2>{post.faqs.map(f=><div key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></div>)}</section>:null}
    {post.sources?.length?<section className="card"><h2>Sources</h2><ol>{post.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>)}</ol></section>:null}
    {related.length===3?<section className="card"><h2>Related Research</h2><div className="research-card-grid">{related.map(r=><a className="research-library-card" href={`/research/${r.slug}`} key={r.slug}><h3>{r.title}</h3><p>{r.excerpt}</p></a>)}</div></section>:null}
  </div></article></main><Footer/></>;
}
