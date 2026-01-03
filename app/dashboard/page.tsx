import { getTenant } from '../../lib/getTenant'

export default async function DashboardPage() {
  const tenant = getTenant()

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          {tenant ? (
            <p className="mt-2 text-gray-600">
              Workspace: <strong>{tenant}.explorehimachal.com</strong>
            </p>
          ) : (
            <p className="mt-2 text-gray-600">Default workspace</p>
          )}
        </div>
      </section>
    </main>
  )
}
