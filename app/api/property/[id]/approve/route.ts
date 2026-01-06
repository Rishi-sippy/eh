// app/api/property/[id]/approve/route.ts
import { NextResponse } from 'next/server'
import prisma from '../../../../../lib/prisma'

export async function POST(_: Request, { params }: { params: { id: string } }) {
  await prisma.propertyLead.update({
    where: { id: params.id },
    data: { status: 'APPROVED' }
  })

  return NextResponse.redirect('/dashboard/properties')
}
