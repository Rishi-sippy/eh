'use client'
import { useState } from 'react'
import ExploreTabs from './components/ExploreTabs'
import TripPlannerFlow from './components/flows/TripPlannerFlow'
import StayFinderFlow from './components/flows/StayFinderFlow'
import ExperienceFlow from './components/flows/ExperienceFlow'
import PropertyFlow from './components/flows/PropertyFlow'

// export const metadata = {
//   title: 'ExploreHimachal – The Operating System for Himachal Tourism',
//   description: 'Plan trips, discover stays, book local experiences and build your Himachal journey with verified locals.'
// }

export default function HomePage() {
  const [flow, setFlow] = useState<null | 'trip' | 'stay' | 'experience' | 'property'>(null)

  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= HERO (DECISION FIRST) ================= */}
      <section className="relative min-h-[100vh] w-full">
        <img src="/hpimage.jpeg" alt="Himachal Mountains" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex min-h-[100vh] items-center justify-center px-6 text-center text-white">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Journey Through Himachal <br className="hidden md:block" />
              Starts With One Choice
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90">Trips • Stays • Experiences • Local Experts</p>

            {/* Decision Buttons */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button onClick={() => setFlow('trip')} className="rounded-2xl bg-white/95 px-6 py-4 font-semibold text-black hover:bg-white transition">
                Plan My Trip
              </button>

              <button onClick={() => setFlow('stay')} className="rounded-2xl bg-white/95 px-6 py-4 font-semibold text-black hover:bg-white transition">
                Find Stays
              </button>

              <button onClick={() => setFlow('experience')} className="rounded-2xl bg-white/95 px-6 py-4 font-semibold text-black hover:bg-white transition">
                Explore Experiences
              </button>

              <button onClick={() => setFlow('property')} className="rounded-2xl bg-white/95 px-6 py-4 font-semibold text-black hover:bg-white transition">
                List My Property
              </button>
            </div>

            <p className="mt-10 text-sm text-white/70">Built by locals • Focused only on Himachal</p>
          </div>
        </div>
      </section>

      {/* ================= CORE ENGINE ================= */}
      <ExploreTabs />

      {/* ================= TRUST / AUTHORITY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Not Just Another Travel Website</h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">ExploreHimachal is built ground-up for Himachal Pradesh — combining local knowledge, verified partners, and smart planning.</p>

          <div className="mt-14 grid md:grid-cols-3 gap-8 text-left">
            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-semibold mb-3">🏔️ Local First</h3>
              <p className="text-gray-600">Every recommendation is curated with local insight — not paid listings.</p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-semibold mb-3">🛡️ Verified Partners</h3>
              <p className="text-gray-600">Stays, guides, and experiences go through verification before appearing on the platform.</p>
            </div>

            <div className="rounded-3xl border p-8">
              <h3 className="text-xl font-semibold mb-3">🧭 Smart Planning</h3>
              <p className="text-gray-600">Build itineraries, compare options, and explore what’s actually available — season by season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS (FOCUSED) ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Explore By Destination</h2>
            <button className="text-sm font-semibold underline">View all →</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Manali', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
              { name: 'Shimla', img: 'https://images.unsplash.com/photo-1593692557859-6c3f7b7a40b1' },
              { name: 'Dharamshala', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
              { name: 'Spiti', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b' }
            ].map((place) => (
              <div key={place.name} className="group relative overflow-hidden rounded-3xl cursor-pointer">
                <img src={place.img} alt={place.name} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY OWNER CTA ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Own a Property or Run Experiences in Himachal?</h2>

          <p className="mt-6 text-white/80">Create your workspace, manage leads, and reach genuine travelers — without middlemen.</p>

          <button className="mt-10 rounded-full bg-white px-10 py-4 font-semibold text-black hover:bg-gray-100">List Your Property</button>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Himachal Is More Than a Destination</h2>
          <p className="mt-6 text-white/80">Plan smarter. Travel deeper. Experience Himachal the right way.</p>

          <button className="mt-10 rounded-full bg-white px-10 py-4 font-semibold text-black hover:bg-gray-100">Start Planning</button>
        </div>
      </section>

      {/* ================= FLOWS ================= */}
      {flow === 'trip' && <TripPlannerFlow onClose={() => setFlow(null)} />}
      {flow === 'stay' && <StayFinderFlow onClose={() => setFlow(null)} />}
      {flow === 'experience' && <ExperienceFlow onClose={() => setFlow(null)} />}
      {flow === 'property' && <PropertyFlow onClose={() => setFlow(null)} />}
    </main>
  )
}
