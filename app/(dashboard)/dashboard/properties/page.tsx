export default function MyPropertiesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Properties</h1>
        <button className="rounded-lg bg-black px-4 py-2 text-white">+ Add Property</button>
      </div>

      <div className="rounded-xl bg-white p-6 border text-gray-500">No properties yet. Add your first property to start receiving bookings.</div>
    </div>
  )
}
