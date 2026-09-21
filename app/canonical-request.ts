const canonicalHost = 'callcenteroutsourced.com'
const acceptedHosts = new Set([canonicalHost, `www.${canonicalHost}`])

const firstHeaderValue = (value: string | null) => value?.split(',')[0]?.trim().toLowerCase() || ''

const cloudflareProtocol = (value: string | null) => {
  if (!value) return ''
  try {
    const scheme = String(JSON.parse(value)?.scheme || '').toLowerCase()
    return scheme === 'http' || scheme === 'https' ? scheme : ''
  } catch {
    return ''
  }
}

export function canonicalRedirectUrl(requestUrl: string, headers: Headers): string | null {
  const url = new URL(requestUrl)
  const forwardedHost = firstHeaderValue(headers.get('x-forwarded-host'))
  const directHost = firstHeaderValue(headers.get('host'))
  const incomingHost = (forwardedHost || directHost || url.host).split(':')[0]

  // Never construct a redirect for an unknown host. This prevents Host-header open redirects.
  if (!acceptedHosts.has(incomingHost)) return null

  const visitorProtocol = cloudflareProtocol(headers.get('cf-visitor'))
  const forwardedProtocol = firstHeaderValue(headers.get('x-forwarded-proto'))
  const incomingProtocol = visitorProtocol || forwardedProtocol || url.protocol.replace(':', '')
  if (incomingHost === canonicalHost && incomingProtocol === 'https') return null

  return `https://${canonicalHost}${url.pathname}${url.search}`
}
