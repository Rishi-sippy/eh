export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="font-semibold">Total Properties</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="font-semibold">Leads</h3>
          <p className="text-2xl mt-2">0</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="font-semibold">Experiences</h3>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>
    </div>
  )
}
