export const metadata = {
  title: 'Himachal Travel Guide | Seasons, Routes, Tips & Local Advice',
  description: 'Complete travel guide for Himachal Pradesh — best time to visit, routes, seasons, safety tips, packing lists and local advice.'
}

const GUIDES = [
  {
    id: 1,
    title: 'Best Time to Visit Himachal Pradesh',
    desc: 'Understand seasons, snowfall, crowds and ideal months for different regions.',
    tag: 'Seasonal',
    read: '5 min read'
  },
  {
    id: 2,
    title: 'Manali vs Shimla — Which One Is Right for You?',
    desc: 'A clear comparison based on crowd, vibe, budget and experiences.',
    tag: 'Comparison',
    read: '6 min read'
  },
  {
    id: 3,
    title: 'Himachal Packing Checklist (Season-wise)',
    desc: 'What to pack for snow, monsoon, treks and long road trips.',
    tag: 'Planning',
    read: '4 min read'
  },
  {
    id: 4,
    title: 'How to Reach Himachal — Routes & Transport Guide',
    desc: 'Roads, buses, taxis, trains and airports explained clearly.',
    tag: 'Transport',
    read: '7 min read'
  },
  {
    id: 5,
    title: 'Solo Travel in Himachal — Safety & Tips',
    desc: 'Local insights for solo travelers, especially first-timers.',
    tag: 'Safety',
    read: '6 min read'
  },
  {
    id: 6,
    title: 'Spiti Valley Travel Guide (First Time)',
    desc: 'Altitude, permits, routes, best season and mistakes to avoid.',
    tag: 'High Altitude',
    read: '8 min read'
  }
]

export default function TravelGuidePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[55vh] w-full">
        <img src="/hpimage.jpeg" alt="Himachal travel guide" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold">Himachal Travel Guide</h1>
            <p className="mt-4 text-lg text-white/90">Plan smarter. Travel safer. Explore deeper.</p>
          </div>
        </div>
      </section>

      {/* ================= GUIDE LIST ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Essential Guides</h2>
            <span className="text-sm text-gray-500">{GUIDES.length} articles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDES.map((guide) => (
              <article key={guide.id} className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition">
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold mb-4">{guide.tag}</span>

                <h3 className="text-lg font-semibold mb-3">{guide.title}</h3>

                <p className="text-gray-600 text-sm mb-6">{guide.desc}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{guide.read}</span>

                  <button className="font-semibold hover:underline">Read Guide →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRUST BLOCK ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Written for Real Travelers</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">These guides are created using on-ground experience, local inputs, and practical travel knowledge — not AI-generated fluff or paid promotions.</p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold mb-2">🧭 Local Insight</h3>
              <p className="text-sm text-gray-600">Written with real Himachal conditions in mind.</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold mb-2">📅 Updated Seasonally</h3>
              <p className="text-sm text-gray-600">Roads, weather, permits & availability change — we track it.</p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="font-semibold mb-2">🚫 No Paid Bias</h3>
              <p className="text-sm text-gray-600">No sponsored rankings or fake recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ready to Plan Your Himachal Trip?</h2>

          <p className="mt-4 text-white/80">Use our guided planner and build a trip that actually works.</p>

          <button className="mt-8 rounded-full bg-white px-10 py-4 font-semibold text-black hover:bg-gray-100">Plan My Trip</button>
        </div>
      </section>
    </main>
  )
}
