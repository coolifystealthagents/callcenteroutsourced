import {RefreshHeader,RefreshFooter} from './refresh-experience';
import * as data from './data';
import { fleetServices } from './fleet-data';
import SiteHeader from './SiteHeader';

const site=(data as any).site||{}; const year=new Date().getFullYear();
export function JsonLd({data}:{data:any}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}
export function LogoMark(){return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt={`${site.brand} logo`} width="42" height="42"/><span className="logo-name">{site.brand}</span></span>}
export function Header(_props: any = {}) { return <RefreshHeader/>; }
export function Footer(_props: any = {}) { return <RefreshFooter/>; }
export function CTA(){return <section className="final-cta fleet-final"><p className="eyebrow">Philippines-based staffing</p><h2>Define the work before hiring.</h2><p>Share the positions, systems, hours, and approval points your team needs. A staffing specialist can use that context to discuss fit.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>}
