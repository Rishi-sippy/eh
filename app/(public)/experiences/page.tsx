export const metadata = {
  title: 'Experiences in Himachal Pradesh | Adventure, Spiritual & Local',
  description: 'Discover authentic experiences in Himachal Pradesh — paragliding, trekking, spiritual retreats, cafés, snow adventures and more.'
}

const EXPERIENCES = [
  {
    id: 1,
    name: 'Paragliding in Bir Billing',
    location: 'Bir Billing',
    tag: 'Adventure',
    price: 'From ₹3,500',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1'
  },
  {
    id: 2,
    name: 'Triund Trek',
    location: 'Dharamshala',
    tag: 'Trekking',
    price: 'From ₹1,200',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
  },
  {
    id: 3,
    name: 'Spiritual Retreat & Meditation',
    location: 'McLeod Ganj',
    tag: 'Spiritual',
    price: 'From ₹2,000',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92'
  },
  {
    id: 4,
    name: 'Snow Adventures',
    location: 'Manali',
    tag: 'Snow',
    price: 'From ₹2,500',
    image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66'
  },
  {
    id: 5,
    name: 'Café & Local Food Trail',
    location: 'Kasol',
    tag: 'Food',
    price: 'From ₹999',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
  },
  {
    id: 6,
    name: 'High Altitude Village Walk',
    location: 'Spiti Valley',
    tag: 'Culture',
    price: 'From ₹1,500',
    image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b'
  }
]

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] w-full">
        <img src="/hpimage.jpeg" alt="Himachal experiences" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold">Experiences That Define Himachal</h1>
            <p className="mt-4 text-lg text-white/90">Adventure • Culture • Spirituality • Nature</p>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE LIST ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Experiences</h2>
            <span className="text-sm text-gray-500">{EXPERIENCES.length} experiences</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img src={exp.image} alt={exp.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">{exp.tag}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">{exp.name}</h3>

                  <p className="text-sm text-gray-500 mb-4">📍 {exp.location}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{exp.price}</span>

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
          <h2 className="text-3xl font-bold">Offer Experiences in Himachal?</h2>
          <p className="mt-4 text-white/80">Guides, instructors, locals — list your experience and reach the right travelers.</p>

          <button className="mt-8 rounded-full bg-white px-8 py-4 font-semibold text-black hover:bg-gray-100">List Your Experience</button>
        </div>
      </section>
    </main>
  )
}
