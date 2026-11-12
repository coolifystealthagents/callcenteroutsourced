import {Header,Footer} from '../components';
import {RefreshServices} from '../refresh-experience';
export const metadata={title:'Services',description:"From the first inquiry to a useful follow-up, choose the customer contact services that fit your team. We define scripts, escalation paths, system access, and quality review before the queue grows.",alternates:{canonical:'/services'}};
export default function Services(){return <><Header/><main id="main-content"><RefreshServices/></main><Footer/></>;}
