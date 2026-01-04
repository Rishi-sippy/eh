import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, phone, email, propertyName, city, propertyType } = body

    // Basic validation
    if (!name || !phone || !email || !propertyName || !city || !propertyType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await prisma.propertyLead.create({
      data: {
        name,
        phone,
        email,
        propertyName,
        city,
        propertyType
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('PROPERTY SUBMIT ERROR:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
