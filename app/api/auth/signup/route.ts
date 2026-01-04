import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import prisma from '../../../../lib/prisma'
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

    const safeTenant = tenant.toLowerCase().replace(/[^a-z0-9]/g, '-')

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        tenant: safeTenant
      }
    })

    const res = NextResponse.json({ success: true })

    res.cookies.set('session', user.id, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/'
    })

    return res
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
