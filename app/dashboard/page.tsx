import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '../../prisma/client'

export default async function DashboardPage() {
  const session = (await cookies()).get('session')?.value

  if (!session) {
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: { id: session }
  })

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>

      <div className="rounded-xl bg-white p-6 shadow">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Tenant:</strong> {user.tenant}
        </p>
      </div>
    </div>
  )
}
