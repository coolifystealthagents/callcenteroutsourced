import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site } from '../../data';

const baseUrl = 'https://callcenteroutsourced.com';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service?.title || 'Service',
    description: service?.desc,
    alternates: service ? { canonical: `/services/${service.slug}` } : undefined,
  };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  const url = `${baseUrl}/services/${service.slug}`;
  const faqId = `${url}#faq`;
  const howToId = `${url}#first-week-launch`;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: service.title,
        description: service.desc,
        inLanguage: 'en-US',
        mainEntity: { '@id': `${url}#service` },
        hasPart: [
          { '@id': howToId },
          { '@id': faqId },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: `${service.title} staffing support`,
        provider: { '@type': 'Organization', name: site.brand, url: baseUrl },
        areaServed: 'United States',
        description: service.desc,
      },
      {
        '@type': 'HowTo',
        '@id': howToId,
        name: `${service.title} first-week launch plan`,
        step: service.launchPlan.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.title,
          text: step.body,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/#services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <JsonLd data={schema} />
      <main>
        <section className="service-hero">
          <div className="container two">
            <div>
              <p className="eyebrow">{site.brand} service</p>
              <h1>{service.title}</h1>
              <p className="lead">{service.desc}</p>
              <a className="btn" href="/contact">Plan this service</a>
            </div>
            <div className="hero-card">
              <img src={site.serviceImage} alt={`${service.title} call center team`} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two">
            <div>
              <p className="eyebrow">Best fit</p>
              <h2>{service.buyerProblem}</h2>
              <p>{service.fit}</p>
            </div>
            <div className="card">
              <h3>Keep in-house</h3>
              <ul>
                {service.guardrails.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section band">
          <div className="container">
            <p className="eyebrow">Scope map</p>
            <h2>Start with work that can be checked.</h2>
            <div className="cards">
              <div className="card">
                <h3>Best tasks</h3>
                <ul>{service.bestTasks.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="card">
                <h3>Quality checks</h3>
                <ul>{service.qualityChecks.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="card">
                <h3>First report</h3>
                <p>{service.report}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="first-week-launch">
          <div className="container">
            <p className="eyebrow">First week launch</p>
            <h2>Use a small pilot before you add volume.</h2>
            <div className="cards">
              {service.launchPlan.map((step) => (
                <div className="card" key={step.title}>
                  <span className="pill">Day {step.day}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <p className="eyebrow">Buyer questions</p>
            <h2>Questions to settle before hiring.</h2>
            <div className="cards">
              {service.faqs.map((faq) => (
                <div className="card" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
