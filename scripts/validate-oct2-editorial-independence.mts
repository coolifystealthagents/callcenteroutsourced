import {october2BlogBatch} from '../app/blog-oct2.ts';
import {october2Cala106ResearchBatch} from '../app/research-oct2-cala106.ts';

type Article={slug:string;sections:readonly {title?:string;heading?:string;paragraphs?:readonly string[];body?:string}[];intro?:string};
const normalize=(value:string)=>value.toLowerCase().replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();
const paragraphs=(article:Article)=>[
  ...(article.intro?[article.intro]:[]),
  ...article.sections.flatMap(section=>section.paragraphs??(section.body?[section.body]:[])),
].map(normalize).filter(Boolean);
const headings=(article:Article)=>article.sections.map(section=>normalize(section.title??section.heading??''));
const words=(article:Article)=>paragraphs(article).join(' ').split(' ').filter(Boolean);
const shingles=(article:Article)=>{const tokens=words(article);const result=new Set<string>();for(let i=0;i+4<tokens.length;i++)result.add(tokens.slice(i,i+5).join(' '));return result};

function audit(family:string,articles:readonly Article[],minimumWords:number){
  const counts=Object.fromEntries(articles.map(article=>[article.slug,words(article).length]));
  const exact=new Map<string,string[]>();
  for(const article of articles)for(const paragraph of paragraphs(article)){
    if(paragraph.split(' ').length<40)continue;
    exact.set(paragraph,[...(exact.get(paragraph)??[]),article.slug]);
  }
  const repeatedParagraphs=[...exact.entries()].filter(([,slugs])=>new Set(slugs).size>1).map(([text,slugs])=>({slugs:[...new Set(slugs)],words:text.split(' ').length,start:text.slice(0,120)}));
  const sequences=new Map<string,string[]>();
  for(const article of articles){const sequence=headings(article).join(' > ');sequences.set(sequence,[...(sequences.get(sequence)??[]),article.slug])}
  const repeatedHeadingSequences=[...sequences.entries()].filter(([,slugs])=>slugs.length>1).map(([sequence,slugs])=>({slugs,sequence}));
  const sets=articles.map(shingles);let maximum=0;let maximumPair:string[]=[];
  for(let i=0;i<sets.length;i++)for(let j=i+1;j<sets.length;j++){
    let intersection=0;for(const value of sets[i])if(sets[j].has(value))intersection++;
    const score=intersection/(sets[i].size+sets[j].size-intersection);
    if(score>maximum){maximum=score;maximumPair=[articles[i].slug,articles[j].slug]}
  }
  const result={family,count:articles.length,wordCounts:counts,repeatedSubstantiveParagraphs:repeatedParagraphs,repeatedHeadingSequences,maximumFiveWordShingleJaccard:Number((maximum*100).toFixed(2)),maximumPair};
  console.log(JSON.stringify(result,null,2));
  if(Object.values(counts).some(count=>count<minimumWords))throw new Error(`${family}: article below ${minimumWords} words`);
  if(repeatedParagraphs.length)throw new Error(`${family}: exact repeated substantive paragraphs found`);
  if(repeatedHeadingSequences.length)throw new Error(`${family}: repeated full heading sequence found`);
  if(maximum>=0.5)throw new Error(`${family}: five-word-shingle overlap is at or above 50%`);
}

audit('blog',october2BlogBatch as readonly Article[],900);
audit('research',october2Cala106ResearchBatch as readonly Article[],1200);
