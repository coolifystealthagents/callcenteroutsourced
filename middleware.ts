import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { canonicalRedirectUrl } from './app/canonical-request'

export function middleware(request: NextRequest) {
  const target = canonicalRedirectUrl(request.url, request.headers)
  return target ? NextResponse.redirect(target, 308) : NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
