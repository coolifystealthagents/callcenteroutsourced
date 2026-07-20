import './globals.css';
import './redesign.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://callcenteroutsourced.com'), title: { default: 'Call Center Outsourced | Coverage planning guides', template: '%s | Call Center Outsourced' }, description: 'Independent guides for outsourced call center coverage, scripts, onboarding, quality assurance, reporting, and provider questions.', openGraph: { title: 'Call Center Outsourced', description: 'Practical outsourced call center planning guides for business teams.', url: 'https://callcenteroutsourced.com', siteName: 'Call Center Outsourced', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
