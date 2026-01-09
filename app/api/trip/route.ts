import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { destination, tripType, startDate, endDate, travellers, budget, phone, email } = await req.json()

    if (!destination || !tripType || !startDate || !endDate || !travellers || !budget || !phone || !email) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    await prisma.tripRequest.create({
      data: {
        destination,
        tripType,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        travellers,
        budget,
        phone,
        email
      }
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('TRIP REQUEST ERROR:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

/* ✅ THIS WAS MISSING */
export async function GET() {
  try {
    const trips = await prisma.tripRequest.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(trips)
  } catch (err) {
    console.error('GET TRIPS ERROR:', err)
    return NextResponse.json([], { status: 500 })
  }
}
