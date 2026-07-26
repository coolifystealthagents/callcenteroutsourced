import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {Header,Footer,JsonLd} from '../../components';
import {blogPosts,site,type BlogPost} from '../../data';

const base=`https://${site.domain.toLowerCase()}`;

export function generateStaticParams(){return blogPosts.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const post=blogPosts.find(item=>item.slug===slug);
  if(!post)return {};
  const url=`${base}/blog/${post.slug}`;
  return {
    title:post.title,
    description:post.excerpt,
    alternates:{canonical:url},
    openGraph:{title:post.title,description:post.excerpt,url,type:'article',publishedTime:post.published},
  };
}

function Chart({items}:{items:NonNullable<BlogPost['chart']>}){
  const max=Math.max(...items.map(item=>item.value));
  return <figure className="article-figure article-chart" data-visual="complaint-chart">
    <svg viewBox="0 0 760 330" role="img" aria-labelledby="complaint-chart-title complaint-chart-desc">
      <title id="complaint-chart-title">Selected 2024 FBI IC3 complaint categories</title>
      <desc id="complaint-chart-desc">Horizontal bars compare phishing or spoofing, personal data breach, and tech support complaint counts.</desc>
      {items.map((item,index)=>{
        const y=42+index*92;
        const width=Math.round(item.value/max*430);
        return <g key={item.label}>
          <text x="20" y={y} className="chart-label">{item.label}</text>
          <rect x="20" y={y+16} width="430" height="28" rx="8" className="chart-track"/>
          <rect x="20" y={y+16} width={width} height="28" rx="8" className="chart-bar"/>
          <text x="470" y={y+38} className="chart-value">{item.display}</text>
        </g>;
      })}
    </svg>
    <figcaption><strong>Complaint counts, not confirmed events.</strong> Source: FBI 2024 IC3 Annual Report.[2]</figcaption>
    <p className="methods-note"><strong>Methods note:</strong> Values were copied from the report's Crime Types by Complaint Count table. They cover US complaints received in 2024 and do not measure incidents in the Philippines.</p>
  </figure>;
}

function AccessGraphic(){
  return <figure className="article-figure access-graphic" data-visual="access-path-graphic">
    <svg viewBox="0 0 760 300" role="img" aria-labelledby="access-graphic-title access-graphic-desc">
      <title id="access-graphic-title">Safe access path for a Philippines call center agent</title>
      <desc id="access-graphic-desc">A four-step path moves from a named account to a narrow role, an approved action, and a manager handoff.</desc>
      {[
        ['1','Named account','One person, one sign-in'],
        ['2','Narrow role','Only the first queue'],
        ['3','Approved action','Follow the written check'],
        ['4','Manager handoff','Stop at the authority line'],
      ].map((step,index)=>{
        const x=18+index*185;
        return <g key={step[0]}>
          <rect x={x} y="56" width="164" height="170" rx="18" className="access-box"/>
          <circle cx={x+28} cy="84" r="17" className="access-step"/>
          <text x={x+28} y="90" textAnchor="middle" className="access-step-text">{step[0]}</text>
          <text x={x+16} y="136" className="access-title">{step[1]}</text>
          <text x={x+16} y="169" className="access-copy">{step[2]}</text>
          {index<3&&<path d={`M ${x+164} 141 L ${x+183} 141`} className="access-arrow"/>}
        </g>;
      })}
    </svg>
    <figcaption>Every request follows the same path. The agent does not gain extra authority because a caller is urgent.</figcaption>
  </figure>;
}

function RotatingBanners({items}:{items:NonNullable<BlogPost['banners']>}){
  return <div className="article-banner-rail" aria-label="Planning links">
    {items.map((item,index)=><aside className={`article-rotating-banner banner-${index+1}`} data-rotation={index+1} key={item.title}>
      <span>{item.label}</span><h2>{item.title}</h2><div>{item.body}</div><a href={item.href}>{item.cta} →</a>
    </aside>)}
  </div>;
}

function RichPost({post}:{post:BlogPost}){
  const stats=post.stats??[];
  const table=post.controlTable??[];
  const scripts=post.scripts??[];
  const faqs=post.faqs??[];
  const sources=post.sources??[];
  const related=post.related??[];
  const banners=post.banners??[];
  return <>
    <section className="article-hero">
      <div className="container article-hero-inner">
        <p className="eyebrow">Philippines call center guide</p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <div className="article-meta"><span>Published {post.published}</span><span>{post.minutes} minute read</span><span>Evidence checked</span></div>
      </div>
    </section>
    <article className="article-page" data-article-marker={post.slug}>
      <div className="container article-layout">
        <div className="article-main">
          <p className="article-intro">{post.intro}</p>
          <section aria-labelledby="evidence-snapshot"><h2 id="evidence-snapshot">Evidence snapshot</h2><div className="article-stats">{stats.map(stat=><div className="article-stat" key={stat.value+stat.label}><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note} [{stat.source}]</small></div>)}</div></section>

          <section className="article-copy"><h2>{post.sections[0].title}</h2>{post.sections[0].paragraphs?.map(text=><p key={text}>{text}</p>)}{post.sections[0].items&&<ul className="check-list">{post.sections[0].items.map(item=><li key={item}>{item}</li>)}</ul>}</section>
          <section className="article-copy"><h2>{post.sections[1].title}</h2>{post.sections[1].paragraphs?.map(text=><p key={text}>{text}</p>)}</section>

          <section className="article-table-section"><h2>Data and decision boundary</h2><p className="module-intro">Use this table as a starting point, then match each row to the client's tools and call guide. The manager column stays outside the agent's normal authority.</p><div className="table-scroll-cue">Swipe the table sideways to see the manager column →</div><div className="article-table-wrap" tabIndex={0} aria-label="Scrollable data and decision boundary table"><table><thead><tr><th>Data or request</th><th>Filipino agent can</th><th>Manager keeps</th></tr></thead><tbody>{table.map(row=><tr key={row.data}><th scope="row">{row.data}</th><td>{row.agent}</td><td>{row.manager}</td></tr>)}</tbody></table></div></section>

          <section className="article-copy"><h2>{post.sections[2].title}</h2>{post.sections[2].paragraphs?.map(text=><p key={text}>{text}</p>)}</section>
          {post.chart&&<Chart items={post.chart}/>}
          <section className="article-copy"><h2>{post.sections[3].title}</h2>{post.sections[3].paragraphs?.map(text=><p key={text}>{text}</p>)}</section>
          {post.expertQuote&&<blockquote className="expert-quote"><p>"{post.expertQuote.text}"</p><cite>{post.expertQuote.attribution} [{post.expertQuote.source}]</cite></blockquote>}

          <section className="article-copy"><h2>{post.sections[4].title}</h2>{post.sections[4].paragraphs?.map(text=><p key={text}>{text}</p>)}{post.sections[4].items&&<ol className="number-list">{post.sections[4].items.map(item=><li key={item}>{item}</li>)}</ol>}</section>
          <AccessGraphic/>
          <section className="article-copy"><h2>{post.sections[5].title}</h2>{post.sections[5].paragraphs?.map(text=><p key={text}>{text}</p>)}</section>

          <section className="script-section"><h2>Copy-ready call and handoff lines</h2><div className="script-grid">{scripts.map(script=><div className="script-card" key={script.situation}><h3>{script.situation}</h3><blockquote>{script.text}</blockquote></div>)}</div></section>

          <section className="article-copy"><h2>{post.sections[6].title}</h2>{post.sections[6].paragraphs?.map(text=><p key={text}>{text}</p>)}{post.sections[6].items&&<ul className="check-list">{post.sections[6].items.map(item=><li key={item}>{item}</li>)}</ul>}</section>

          {banners.length===3&&<RotatingBanners items={banners}/>}

          <section className="faq-section"><h2>Questions managers ask</h2>{faqs.map(faq=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          <section className="related-section"><h2>Keep planning</h2><div className="related-grid">{related.map(link=><a href={link.href} key={link.href}>{link.label} →</a>)}</div></section>
          <section className="sources-section"><h2>Sources</h2><ol>{sources.map((source,index)=><li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.name}</a><span>{source.organization}, {source.date}. {source.note}</span><b>Source {index+1}</b></li>)}</ol></section>
        </div>
      </div>
    </article>
  </>;
}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const post=blogPosts.find(item=>item.slug===slug);
  if(!post)notFound();
  const rich=(post.sources?.length??0)>0;
  const url=`${base}/blog/${post.slug}`;
  const schemas=rich?[
    {'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,description:post.excerpt,datePublished:post.published,dateModified:post.updated,mainEntityOfPage:url,author:{'@type':'Organization',name:site.brand},publisher:{'@type':'Organization',name:site.brand,url:base},citation:post.sources?.map(source=>source.url)},
    {'@context':'https://schema.org','@type':'FAQPage',mainEntity:post.faqs?.map(faq=>({'@type':'Question',name:faq.question,acceptedAnswer:{'@type':'Answer',text:faq.answer}}))},
    {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:'Blog',item:`${base}/blog`},{'@type':'ListItem',position:3,name:post.title,item:url}]},
  ]:[];
  return <><Header hideCommercial={rich}/><main>{schemas.map((schema,index)=><JsonLd data={schema} key={index}/>)}{rich?<RichPost post={post}/>:<article className="section"><div className="container article-shell"><p className="eyebrow">{site.brand} blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><section className="card"><h2>Start with a defined workflow</h2><p>For Philippines-based staffing, document the work, tools, schedule, and desired outcome before candidate matching. Keep business judgment and final approvals with a named manager.</p><h2>Prepare representative examples</h2><p>Use real, appropriately redacted examples to explain quality. Review early work together and update the written process when an exception appears.</p><h2>Plan access and handoffs</h2><p>Provide only the access needed for the position and use named accounts where possible. Write down which questions must be escalated and who receives them.</p></section></div></article>}</main><Footer hideCommercial={rich}/></>;
}
