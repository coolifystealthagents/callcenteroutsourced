const canonicalOrigins = new Set([
  'https://callcenteroutsourced.com',
  'https://www.callcenteroutsourced.com',
])

const localHosts = new Set(['127.0.0.1', 'localhost'])

export function isTrustedContactOrigin(origin: string | null, requestUrl: string): boolean {
  if (!origin) return true

  let submittedOrigin: URL
  let internalRequest: URL
  try {
    submittedOrigin = new URL(origin)
    internalRequest = new URL(requestUrl)
  } catch {
    return false
  }

  if (canonicalOrigins.has(submittedOrigin.origin)) return true
  if (!localHosts.has(internalRequest.hostname) || !localHosts.has(submittedOrigin.hostname)) return false
  return submittedOrigin.protocol === internalRequest.protocol && submittedOrigin.port === internalRequest.port
}
