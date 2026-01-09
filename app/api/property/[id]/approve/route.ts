import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../../lib/prisma'

export async function POST(req: NextRequest, context: { params: { id: string } }) {
  try {
    const { status } = await req.json()
    const { id } = context.params

    await prisma.propertyLead.update({
      where: { id },
      data: { status }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Update failed' }, { status: 500 })
  }
}
