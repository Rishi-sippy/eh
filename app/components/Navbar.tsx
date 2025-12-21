'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Explore
            <span className="text-[#d6b36a]">Himachal</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            {/* Mega Menu Trigger */}
            <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className="flex items-center gap-1 hover:text-white">
                Destinations <ChevronDown size={16} />
              </button>

              {/* Mega Menu */}
              {megaOpen && (
                <div className="absolute left-0 top-10 w-[520px] rounded-2xl bg-black/95 border border-white/10 shadow-2xl p-6">
                  <h4 className="text-xs uppercase tracking-wider text-[#d6b36a] mb-4">Explore Himachal</h4>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {[
                      { name: 'Manali', desc: 'Snow • Adventure • Cafés' },
                      { name: 'Shimla', desc: 'Colonial • Hills • Shopping' },
                      { name: 'Dharamshala', desc: 'Monasteries • Peace' },
                      { name: 'Spiti Valley', desc: 'High Altitude • Raw Beauty' }
                    ].map((d) => (
                      <Link key={d.name} href={`/destinations/${d.name.toLowerCase().replace(' ', '-')}`} className="group rounded-xl p-4 hover:bg-white/5 transition">
                        <p className="font-semibold text-white group-hover:text-[#d6b36a]">{d.name}</p>
                        <p className="text-xs text-white/60">{d.desc}</p>
                      </Link>
                    ))}
                  </div>

                  <Link href="/destinations" className="mt-5 inline-block text-xs text-[#d6b36a] hover:underline">
                    View all destinations →
                  </Link>
                </div>
              )}
            </div>

            <Link href="/stays" className="hover:text-white">
              Stays
            </Link>
            <Link href="/experiences" className="hover:text-white">
              Experiences
            </Link>
            <Link href="/treks" className="hover:text-white">
              Treks
            </Link>
            <Link href="/guides" className="hover:text-white">
              Travel Guides
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/partner" className="text-sm text-white/70 hover:text-white">
              List Your Property
            </Link>
            <Link href="/plan-trip" className="rounded-full bg-[#d6b36a] px-6 py-2 text-sm font-semibold text-black hover:bg-[#c9a85f] transition">
              Plan a Trip
            </Link>
          </div>

          {/* Mobile */}
          <button onClick={() => setOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex justify-between items-center px-6 h-20">
            <span className="text-2xl font-bold text-white">
              Explore<span className="text-[#d6b36a]">Himachal</span>
            </span>
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>

          <nav className="px-6 py-8 space-y-6 text-lg text-white">
            <Link href="/destinations" onClick={() => setOpen(false)}>
              Destinations
            </Link>
            <Link href="/stays" onClick={() => setOpen(false)}>
              Stays
            </Link>
            <Link href="/experiences" onClick={() => setOpen(false)}>
              Experiences
            </Link>
            <Link href="/treks" onClick={() => setOpen(false)}>
              Treks
            </Link>
            <Link href="/guides" onClick={() => setOpen(false)}>
              Travel Guides
            </Link>

            <div className="pt-6 border-t border-white/20 space-y-4">
              <Link href="/partner" onClick={() => setOpen(false)}>
                List Your Property
              </Link>
              <Link href="/plan-trip" onClick={() => setOpen(false)} className="block rounded-full bg-[#d6b36a] px-6 py-3 text-center font-semibold text-black">
                Plan a Trip
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
