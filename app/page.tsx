import ExploreTabs from './components/ExploreTabs'

// app/page.tsx
export const metadata = {
  title: 'ExploreHimachal – Discover Stays, Mountains & Experiences',
  description: 'Explore Himachal Pradesh with curated stays, paragliding, trekking, spiritual retreats and mountain destinations.'
}

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[95vh] w-full">
        <img src="/hpimage.jpeg" alt="Himachal Mountains" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">Explore the Soul of Himachal Pradesh</h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">Mountains • Stays • Paragliding • Trekking • Spiritual Escapes</p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-white px-8 py-3 font-semibold text-black hover:bg-gray-100">Explore Destinations</button>
              <button className="rounded-full border border-white px-8 py-3 font-semibold text-white hover:bg-white hover:text-black transition">View Experiences</button>
            </div>
          </div>
        </div>
      </section>
      <ExploreTabs />
      {/* ================= DESTINATIONS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Top Destinations</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Manali', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
              { name: 'Shimla', img: 'https://images.unsplash.com/photo-1593692557859-6c3f7b7a40b1' },
              { name: 'Dharamshala', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
              { name: 'Spiti Valley', img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b' }
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
      {/* ================= STAYS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Stays With a View</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Hotels',
                desc: 'Premium mountain-view hotels with world-class comfort.'
              },
              {
                title: 'Cozy Homestays',
                desc: 'Live like a local with warmth, food & stories.'
              },
              {
                title: 'Budget Stays',
                desc: 'Clean, affordable stays for backpackers & explorers.'
              }
            ].map((stay) => (
              <div key={stay.title} className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{stay.title}</h3>
                <p className="text-gray-600">{stay.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= EXPERIENCES ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experiences That Define Himachal</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Paragliding', img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1' },
              { name: 'Trekking', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee' },
              { name: 'Snow Adventures', img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66' },
              { name: 'Spiritual Retreats', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92' }
            ].map((exp) => (
              <div key={exp.name} className="group relative overflow-hidden rounded-3xl">
                <img src={exp.img} alt={exp.name} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-semibold">{exp.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= WHY US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Why ExploreHimachal?</h2>
          <p className="mt-6 text-gray-600">Built by locals. Focused only on Himachal. Honest recommendations.</p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            <div className="text-lg">🏔️ Local Expertise</div>
            <div className="text-lg">🏨 Verified Stays</div>
            <div className="text-lg">🪂 Authentic Experiences</div>
          </div>
        </div>
      </section>
      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Your Himachal Journey Starts Here</h2>
          <p className="mt-6 text-white/80">Plan trips. Find stays. Book experiences. All in one place.</p>

          <button className="mt-10 rounded-full bg-white px-10 py-4 font-semibold text-black hover:bg-gray-100">Start Exploring</button>
        </div>
      </section>
    </main>
  )
}
