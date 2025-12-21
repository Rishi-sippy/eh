'use client'

import { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ListPropertyModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    city: '',
    propertyType: 'Hotel'
  })

  if (!open) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl p-8 animate-fadeIn">
        {/* Close */}
        <button onClick={onClose} className="absolute right-5 top-5 text-gray-400 hover:text-black text-xl">
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold">List Your Property</h2>
          <p className="text-gray-500 mt-1">Reach thousands of travelers across Himachal</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="name" placeholder="Your Name" required className="input" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" required className="input" onChange={handleChange} />
          </div>

          <input name="email" type="email" placeholder="Email Address" required className="input" onChange={handleChange} />

          <input name="propertyName" placeholder="Property Name" required className="input" onChange={handleChange} />

          <div className="grid grid-cols-2 gap-4">
            <input name="city" placeholder="City (Manali, Shimla...)" required className="input" onChange={handleChange} />

            <select name="propertyType" className="input" onChange={handleChange}>
              <option>Hotel</option>
              <option>Homestay</option>
              <option>Resort</option>
              <option>Hostel</option>
              <option>Villa</option>
            </select>
          </div>

          <button type="submit" className="mt-6 w-full rounded-full bg-black py-4 text-white text-lg font-semibold hover:bg-gray-900 transition">
            Submit Property
          </button>

          <p className="text-xs text-gray-400 text-center mt-3">Our team will contact you within 24 hours</p>
        </form>
      </div>
    </div>
  )
}
