import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '../../../../prisma/client'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const { email, password, tenant } = await req.json()

    if (!email || !password || !tenant) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const safeTenant = tenant.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now()

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        tenant: safeTenant
      }
    })

    const res = NextResponse.json({ success: true, tenant: user.tenant })

    res.cookies.set('session', user.id, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax'
    })

    return res
  } catch (err) {
    console.error('SIGNUP ERROR:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
