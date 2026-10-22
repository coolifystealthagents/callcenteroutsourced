import type { MetadataRoute } from 'next'
import aug19Meta from './aug19-meta.json'
import { blogPosts } from './data'
import { fleetServices, postsPerPage, researchPosts, researchPostsPerPage } from './fleet-data'

const base = 'https://callcenteroutsourced.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/research', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/blog/call-center-provider-evaluation-checklist', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact-us', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cancellation-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]
  const pageCount = Math.ceil(blogPosts.length / postsPerPage)
  const researchPageCount = Math.ceil(researchPosts.length / researchPostsPerPage)
  const governedAugustRoutes = Object.entries(aug19Meta).map(([slug, value]) => ({
    url: `${base}/${value.family}/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))
  const entries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({ url: `${base}${route.path}`, priority: route.priority, changeFrequency: route.changeFrequency })),
    ...Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => ({ url: `${base}/blog/page/${index + 2}`, priority: 0.6, changeFrequency: 'daily' as const })),
    ...Array.from({ length: Math.max(0, researchPageCount - 1) }, (_, index) => ({ url: `${base}/research/page/${index + 2}`, priority: 0.6, changeFrequency: 'weekly' as const })),
    ...fleetServices.map((service) => ({ url: `${base}/services/${service.slug}`, priority: 0.8, changeFrequency: 'monthly' as const })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: post.updated ?? post.published, priority: 0.7, changeFrequency: 'monthly' as const })),
    ...researchPosts.map((post) => ({ url: `${base}/research/${post.slug}`, lastModified: post.updated ?? post.sourceDate ?? post.published, priority: 0.7, changeFrequency: 'monthly' as const })),
    ...governedAugustRoutes,
  ]
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()]
}
