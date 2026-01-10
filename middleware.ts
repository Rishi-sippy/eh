import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const role = req.cookies.get('role')?.value
  const path = req.nextUrl.pathname

  if (path.startsWith('/dashboard')) {
    if (!role) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    if (path.startsWith('/dashboard/admin') && role !== 'SUPERADMIN') {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }
}
