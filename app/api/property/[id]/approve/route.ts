import { NextResponse, NextRequest } from 'next/server'
import prisma from '../../../../../lib/prisma'
export async function POST(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params
  const { status } = await req.json()

  await prisma.propertyLead.update({
    where: { id },
    data: { status }
  })

  return NextResponse.json({ success: true })
}
