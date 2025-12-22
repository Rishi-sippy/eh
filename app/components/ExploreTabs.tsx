'use client'

import { useState } from 'react'
import { MapPin, Hotel, Car, User, Utensils, Mountain, Compass } from 'lucide-react'

/* ===================== DATA ===================== */

const CITIES = ['Dharamshala', 'Shimla', 'Manali', 'Kullu', 'Mandi', 'Spiti', 'Kasol', 'Bir']

const EXPERIENCES = [
  {
    id: 'guide',
    title: 'Local Guide',
    desc: 'Explore with verified local experts',
    icon: User
  },
  {
    id: 'paragliding',
    title: 'Paragliding',
    desc: 'Fly over valleys & mountains',
    icon: Compass
  },
  {
    id: 'hotel',
    title: 'Hotels & Stays',
    desc: 'Hotels, homestays & hostels',
    icon: Hotel
  },
  {
    id: 'taxi',
    title: 'Taxi',
    desc: 'Local & intercity cabs',
    icon: Car
  },
  {
    id: 'food',
    title: 'Restaurants',
    desc: 'Best cafés & local food',
    icon: Utensils
  },
  {
    id: 'trek',
    title: 'Treks',
    desc: 'Himalayan treks & trails',
    icon: Mountain
  }
]

const MOCK_RESULTS = [
  {
    id: 1,
    city: 'Dharamshala',
    type: 'guide',
    title: 'Local Tibetan Guide',
    price: '₹1,500 / day',
    desc: 'Explore monasteries & Tibetan culture with certified guide'
  },
  {
    id: 2,
    city: 'Bir',
    type: 'paragliding',
    title: 'Bir Billing Paragliding',
    price: '₹3,500 / flight',
    desc: 'World famous paragliding experience'
  },
  {
    id: 3,
    city: 'Manali',
    type: 'hotel',
    title: 'Mountain View Homestay',
    price: '₹2,000 / night',
    desc: 'Cozy stay with snow-capped views'
  },
  {
    id: 4,
    city: 'Shimla',
    type: 'taxi',
    title: 'Shimla Local Taxi',
    price: '₹2,800 / day',
    desc: 'Local sightseeing & Kufri trip'
  },
  {
    id: 5,
    city: 'Kullu',
    type: 'trek',
    title: 'Great Himalayan Trek',
    price: '₹6,000 / person',
    desc: 'Guided high-altitude trek'
  },
  {
    id: 6,
    city: 'Dharamshala',
    type: 'food',
    title: 'Best Cafés Tour',
    price: '₹999',
    desc: 'Handpicked cafés & local food'
  },
  {
    id: 7,
    city: 'Manali',
    type: 'taxi',
    title: 'Manali Sightseeing Cab',
    price: '₹3,200 / day',
    desc: 'Rohtang, Solang & local sightseeing'
  },
  {
    id: 8,
    city: 'Kasol',
    type: 'hotel',
    title: 'Riverside Stay',
    price: '₹1,800 / night',
    desc: 'Peaceful riverside accommodation'
  }
]

/* ===================== COMPONENT ===================== */

export default function ExploreTabs() {
  const [city, setCity] = useState('Dharamshala')
  const [selected, setSelected] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const results = MOCK_RESULTS.filter((item) => item.city === city && selected.includes(item.type))

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADING ================= */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Himachal Your Way</h2>
          <p className="mt-3 text-gray-600">Choose a destination & what you want to experience</p>
        </div>

        {/* ================= STEP 1 ================= */}
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-semibold text-gray-500">STEP 1: SELECT DESTINATION</h3>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {CITIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCity(c)
                  setShowResults(false)
                }}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition whitespace-nowrap ${city === c ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                <MapPin size={16} />
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ================= STEP 2 ================= */}
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-500">STEP 2: WHAT ARE YOU LOOKING FOR IN {city.toUpperCase()}?</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCES.map((item) => {
              const Icon = item.icon
              const active = selected.includes(item.id)

              return (
                <button key={item.id} onClick={() => toggle(item.id)} className={`relative rounded-3xl border p-6 text-left transition-all ${active ? 'border-black bg-black text-white shadow-xl' : 'bg-white hover:shadow-lg'}`}>
                  <Icon size={28} className={`mb-4 ${active ? 'text-[#d6b36a]' : 'text-black'}`} />

                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>

                  <p className={`text-sm ${active ? 'text-white/80' : 'text-gray-600'}`}>{item.desc}</p>

                  {active && <span className="absolute top-4 right-4 text-xs rounded-full bg-[#d6b36a] px-3 py-1 text-black font-semibold">Selected</span>}
                </button>
              )
            })}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="mt-14 flex justify-center">
          <button disabled={selected.length === 0} onClick={() => setShowResults(true)} className="rounded-full bg-black px-14 py-4 text-lg font-semibold text-white disabled:opacity-40 hover:bg-gray-900 transition">
            Show Results ({selected.length})
          </button>
        </div>

        {/* ================= RESULTS ================= */}
        {showResults && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6">Results in {city}</h3>

            {results.length === 0 ? (
              <p className="text-gray-500">No results found for selected options.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((item) => (
                  <div key={item.id} className="rounded-2xl border bg-white p-6 hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>

                    <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-black">{item.price}</span>

                      <button className="rounded-full bg-black px-4 py-2 text-sm text-white hover:bg-gray-900">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
