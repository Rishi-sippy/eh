import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''

  // localhost support
  if (host.includes('localhost')) {
    return NextResponse.next()
  }

  // example: himalayaview.explorehimachal.com
  const rootDomain = 'explorehimachal.com'

  let tenant = null

  if (host.endsWith(rootDomain)) {
    const sub = host.replace(`.${rootDomain}`, '')
    if (sub !== rootDomain) {
      tenant = sub
    }
  }

  const res = NextResponse.next()

  if (tenant) {
    res.headers.set('x-tenant', tenant)
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*']
}
