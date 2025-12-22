'use client'

import { useState } from 'react'
import { MapPin, Hotel, Car, User, Utensils, Mountain, Compass } from 'lucide-react'

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

export default function ExploreTabs() {
  const [city, setCity] = useState('Dharamshala')
  const [selected, setSelected] = useState<string[]>([])

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Himachal Your Way</h2>
          <p className="mt-3 text-gray-600">Choose a destination & what you want to experience</p>
        </div>

        {/* STEP 1 — CITY TABS */}
        <div className="mb-12">
          <h3 className="mb-4 text-sm font-semibold text-gray-500">STEP 1: SELECT DESTINATION</h3>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {CITIES.map((c) => (
              <button key={c} onClick={() => setCity(c)} className={`flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition ${city === c ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                <MapPin size={16} />
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2 — EXPERIENCE GRID */}
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

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button disabled={selected.length === 0} className="rounded-full bg-black px-14 py-4 text-lg font-semibold text-white disabled:opacity-40 hover:bg-gray-900 transition">
            Continue with {selected.length || ''} Selection
          </button>
        </div>
      </div>
    </section>
  )
}
