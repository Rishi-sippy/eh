'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function PlanTripModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        {/* Close */}
        <button onClick={onClose} className="absolute right-5 top-5 text-gray-500 hover:text-black">
          <X size={22} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">Plan Your Himachal Trip</h2>
        <p className="text-gray-500 mb-6">Tell us your preferences & our local experts will plan it for you</p>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Destination */}
          <div>
            <label className="text-sm font-medium">Destination</label>
            <input placeholder="Manali, Spiti, Dharamshala" className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          {/* Trip Type */}
          <div>
            <label className="text-sm font-medium">Trip Type</label>
            <select className="mt-1 w-full rounded-xl border px-4 py-3">
              <option>Leisure</option>
              <option>Adventure</option>
              <option>Spiritual</option>
              <option>Honeymoon</option>
            </select>
          </div>

          {/* Dates */}
          <div>
            <label className="text-sm font-medium">Start Date</label>
            <input type="date" className="mt-1 w-full rounded-xl border px-4 py-3" />
          </div>

          <div>
            <label className="text-sm font-medium">End Date</label>
            <input type="date" className="mt-1 w-full rounded-xl border px-4 py-3" />
          </div>

          {/* Travellers */}
          <div>
            <label className="text-sm font-medium">Travellers</label>
            <select className="mt-1 w-full rounded-xl border px-4 py-3">
              <option>1 Person</option>
              <option>2 People</option>
              <option>Family</option>
              <option>Group</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-sm font-medium">Budget (₹)</label>
            <select className="mt-1 w-full rounded-xl border px-4 py-3">
              <option>₹10k – ₹20k</option>
              <option>₹20k – ₹40k</option>
              <option>₹40k – ₹70k</option>
              <option>₹70k+</option>
            </select>
          </div>

          {/* Contact */}
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input placeholder="+91 XXXXX XXXXX" className="mt-1 w-full rounded-xl border px-4 py-3" />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" placeholder="you@email.com" className="mt-1 w-full rounded-xl border px-4 py-3" />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 mt-4">
            <button type="submit" className="w-full rounded-full bg-black py-4 text-white font-semibold hover:bg-gray-900 transition">
              Get My Trip Plan
            </button>
          </div>
        </form>

        {/* Trust */}
        <p className="mt-4 text-center text-xs text-gray-500">🏔️ Local experts • No spam • Custom itineraries</p>
      </div>
    </div>
  )
}
