import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/** @type {import("next").NextConfig} */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com",
  "connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "frame-src https://go.oncehub.com https://*.oncehub.com https://*.scheduleonce.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ")

const nextConfig = {
  outputFileTracingRoot: dirname(fileURLToPath(import.meta.url)),
  async redirects() {
    return [
      { source: '/contact', destination: '/contact-us', permanent: true },
    ]
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: csp },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }]
  },
}

export default nextConfig
