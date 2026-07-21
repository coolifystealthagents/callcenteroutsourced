import { Footer, Header } from '../components';

export const metadata = {
  title: 'Coverage request received',
  description: 'Your call center coverage request has been received.',
};

export default function Thanks() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">Request received</p>
          <h1>Thanks. Your coverage details are on the way.</h1>
          <p className="lead">The team can now review your queues, hours, tools, and quality needs before following up.</p>
          <a className="btn" href="/blog">Read the planning guides</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
