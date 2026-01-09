'use client'

import { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ListPropertyModal({ open, onClose }: Props) {
  // ✅ ALL HOOKS AT TOP
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    city: '',
    propertyType: 'Hotel'
  })

  const [images, setImages] = useState<File[]>([])

  // ✅ EARLY RETURN AFTER HOOKS
  if (!open) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setImages(Array.from(e.target.files))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value)
    })

    images.forEach((img) => {
      formData.append('images', img)
    })

    try {
      const res = await fetch('/api/property', {
        method: 'POST',
        body: formData
      })

      if (!res.ok) throw new Error('Failed')

      onClose()
    } catch {
      alert('Something went wrong')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl p-8">
        <button onClick={onClose} className="absolute right-5 top-5 text-gray-400 hover:text-black text-xl">
          ✕
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold">List Your Property</h2>
          <p className="text-gray-500 mt-1">Reach thousands of travelers across Himachal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input name="name" placeholder="Your Name" required className="input" onChange={handleChange} />
            <input name="phone" placeholder="Phone Number" required className="input" onChange={handleChange} />
          </div>

          <input name="email" type="email" placeholder="Email Address" required className="input" onChange={handleChange} />

          <input name="propertyName" placeholder="Property Name" required className="input" onChange={handleChange} />

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Property Images</label>

            <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-8 text-center hover:border-black transition cursor-pointer">
              <input type="file" multiple accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />

              <p className="text-sm text-gray-600">Click to upload or drag & drop</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB each</p>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {images.map((img, i) => (
                  <img key={i} src={URL.createObjectURL(img)} alt="preview" className="h-20 w-full rounded-xl object-cover border" />
                ))}
              </div>
            )}
          </div>

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
