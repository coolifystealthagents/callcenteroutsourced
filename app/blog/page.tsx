import { Footer, Header } from '../components';
import { blogPosts, site } from '../data';

export const metadata = {
  title: 'Outsourced call center guides',
  description: 'Guides to call center coverage, provider questions, first-queue scope, and first-week setup.',
};

export default function Blog() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <p className="eyebrow">{site.brand} guides</p>
          <h1>Outsourced call center guides</h1>
          <p className="lead">Plan the queue, compare providers, and set clear rules before agents start answering customers.</p>
          <div className="cards">
            {blogPosts.map((post) => (
              <a className="card" href={`/blog/${post.slug}`} key={post.slug}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="pill">{post.minutes} min read</span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
