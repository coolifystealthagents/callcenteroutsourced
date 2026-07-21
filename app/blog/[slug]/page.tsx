import { CTA, Footer, Header, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

const baseUrl = 'https://callcenteroutsourced.com';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return {
    title: post?.title || 'Guide',
    description: post?.excerpt,
    alternates: post ? { canonical: `/blog/${post.slug}` } : undefined,
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const url = `${baseUrl}/blog/${post.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        url,
        author: { '@type': 'Organization', name: site.brand },
        publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${baseUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.intro}</p>
          <div className="card">
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                <ul>
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
