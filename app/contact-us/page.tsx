import {ContactExperience} from '../inner-pages';
import {Header,Footer} from '../components';
import StandardContactForm from './StandardContactForm';
export const metadata={title:'Contact Call Center Outsourced',description:'Book a free consultation with Call Center Outsourced. Tell us about your team and the support you need.',alternates:{canonical:'https://callcenteroutsourced.com/contact-us'}};
export default function Contact(){return <><Header/><main id="main-content"><ContactExperience><StandardContactForm endpoint="/api/contact" encoding="form" /></ContactExperience></main><Footer/></>}
