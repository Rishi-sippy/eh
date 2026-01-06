export default function PlanResults({ searchParams }: any) {
  const { city, style, days } = searchParams

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">
        {days}-Day {style} Trip to {city}
      </h1>

      <p className="mt-4 text-gray-600">Curated itinerary, stays & experiences based on your preferences.</p>

      {/* Static results for now */}
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border p-6">🏨 Recommended Stays</div>
        <div className="rounded-2xl border p-6">🪂 Experiences</div>
        <div className="rounded-2xl border p-6">🚕 Transport</div>
      </div>
    </main>
  )
}
