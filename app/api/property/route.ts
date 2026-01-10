import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import prisma from '../../../lib/prisma'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const files = formData.getAll('images') as File[]

    const imageUrls: string[] = []

    for (const file of files) {
      const blob = await put(`properties/${Date.now()}-${file.name}`, file, { access: 'public' })
      imageUrls.push(blob.url)
    }

    const lead = await prisma.propertyLead.create({
      data: {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        propertyName: formData.get('propertyName') as string,
        city: formData.get('city') as string,
        propertyType: formData.get('propertyType') as string,
        images: imageUrls
      }
    })

    return NextResponse.json({ success: true, lead })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
export async function GET() {
  try {
    const leads = await prisma.propertyLead.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(leads)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

