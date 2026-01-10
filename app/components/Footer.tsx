'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20">
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">
            Explore<span className="text-yellow-400">Himachal</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-md">ExploreHimachal is the operating system for Himachal tourism — connecting travelers with verified stays, authentic experiences and trusted local experts.</p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-yellow-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* DESTINATIONS */}
        <div>
          <h3 className="font-semibold mb-4">Destinations</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/destinations/manali">Manali</Link>
            </li>
            <li>
              <Link href="/destinations/shimla">Shimla</Link>
            </li>
            <li>
              <Link href="/destinations/dharamshala">Dharamshala</Link>
            </li>
            <li>
              <Link href="/destinations/spiti">Spiti Valley</Link>
            </li>
            <li>
              <Link href="/destinations/kasol">Kasol</Link>
            </li>
          </ul>
        </div>

        {/* EXPERIENCES */}
        <div>
          <h3 className="font-semibold mb-4">Experiences</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/experiences/paragliding">Paragliding</Link>
            </li>
            <li>
              <Link href="/experiences/trekking">Trekking</Link>
            </li>
            <li>
              <Link href="/experiences/spiritual">Spiritual Retreats</Link>
            </li>
            <li>
              <Link href="/experiences/snow">Snow Adventures</Link>
            </li>
            <li>
              <Link href="/experiences/camping">Camping</Link>
            </li>
          </ul>
        </div>

        {/* HOSTS / COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">For Hosts</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/list-property">List Your Property</Link>
            </li>
            <li>
              <Link href="/dashboard">Host Dashboard</Link>
            </li>
            <li>
              <Link href="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-16"></div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* CONTACT */}
        <div className="space-y-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={14} /> support@explorehimachal.com
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} /> +91 9XXXXXXXXX
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> Himachal Pradesh, India
          </div>
        </div>

        {/* LEGAL */}
        <div className="flex flex-wrap gap-4 justify-center text-gray-400 text-sm">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-500 text-sm text-right">© {new Date().getFullYear()} ExploreHimachal. All rights reserved.</div>
      </div>
    </footer>
  )
}
