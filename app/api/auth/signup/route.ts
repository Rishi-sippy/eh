import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '../../../../prisma/client'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password, tenant } = body

    if (!email || !password || !tenant) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({
      where: { email }
    })

    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        tenant
      }
    })

    const res = NextResponse.json({ success: true })

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
