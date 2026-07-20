import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://callcenteroutsourced.com'), title: { default: 'Call Center Outsourced | Offshore outsourcing guides', template: '%s | Call Center Outsourced' }, description: 'Stealth Agents-style guides for call center outsourced: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Call Center Outsourced', description: 'Practical outsourcing guides for business teams.', url: 'https://callcenteroutsourced.com', siteName: 'Call Center Outsourced', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
