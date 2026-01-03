export const metadata = {
  title: 'Stays in Himachal Pradesh | Hotels, Homestays & Mountain Views',
  description: 'Discover verified hotels, homestays and scenic stays across Himachal Pradesh. Mountain views, river-side retreats and cozy escapes.'
}

const STAYS = [
  {
    id: 1,
    name: 'Himachal View Retreat',
    location: 'Manali',
    price: '₹2,500 / night',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9'
  },
  {
    id: 2,
    name: 'Snowline Mountain Stay',
    location: 'Shimla',
    price: '₹3,200 / night',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945'
  },
  {
    id: 3,
    name: 'River View Homestay',
    location: 'Kasol',
    price: '₹1,800 / night',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba'
  },
  {
    id: 4,
    name: 'Dhauladhar Peaks Hotel',
    location: 'Dharamshala',
    price: '₹2,900 / night',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb'
  },
  {
    id: 5,
    name: 'Spiti Valley Eco Lodge',
    location: 'Spiti',
    price: '₹3,800 / night',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764ce7'
  },
  {
    id: 6,
    name: 'Bir Valley Stay',
    location: 'Bir Billing',
    price: '₹2,000 / night',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
  }
]

export default function StaysPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full">
        <img src="/hpimage.jpeg" alt="Himachal stays" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold">Stays in Himachal Pradesh</h1>
            <p className="mt-4 text-lg text-white/90">Handpicked hotels & homestays with mountain, river & valley views</p>
          </div>
        </div>
      </section>

      {/* ================= LISTINGS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Stays</h2>
            <span className="text-sm text-gray-500">{STAYS.length} stays found</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {STAYS.map((stay) => (
              <div key={stay.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition">
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img src={stay.image} alt={stay.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">⭐ {stay.rating}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{stay.name}</h3>

                  <p className="text-sm text-gray-500 mb-4">📍 {stay.location}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{stay.price}</span>

                    <button className="rounded-full border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Own a Stay in Himachal?</h2>
          <p className="mt-4 text-white/80">List your property and reach genuine travelers directly.</p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-black hover:bg-gray-100">List Your Property</button>
        </div>
      </section>
    </main>
  )
}
