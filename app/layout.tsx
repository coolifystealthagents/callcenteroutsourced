import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://callcenteroutsourced.com'), title: { default: 'Call Center Outsourced | Offshore outsourcing guides', template: '%s | Call Center Outsourced' }, description: 'our staffing team-style guides for call center outsourced: services, onboarding, role scope, and provider questions.', openGraph: { title: 'Call Center Outsourced', description: 'Practical outsourcing guides for business teams.', url: 'https://callcenteroutsourced.com', siteName: 'Call Center Outsourced', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
