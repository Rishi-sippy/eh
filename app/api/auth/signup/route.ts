import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client/extension'

export async function POST(req: NextRequest) {
  const { email, password, tenant } = await req.json()

  if (!email || !password || !tenant) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const existing = await PrismaClient.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ error: 'User already exists' }, { status: 409 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await PrismaClient.user.create({
    data: {
      email,
      password: hashedPassword,
      tenant
    }
  })

  const res = NextResponse.json({ success: true })

  // Simple session cookie
  res.cookies.set('session', user.id, {
    httpOnly: true,
    path: '/'
  })

  return res
}
