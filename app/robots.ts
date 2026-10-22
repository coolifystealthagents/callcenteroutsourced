import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you', '/thanks-whats-next'],
    }],
    sitemap: 'https://callcenteroutsourced.com/sitemap.xml',
    host: 'https://callcenteroutsourced.com',
  }
}
