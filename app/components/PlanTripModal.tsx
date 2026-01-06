'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export default function PlanTripModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [form, setForm] = useState({
    destination: '',
    tripType: 'Leisure',
    startDate: '',
    endDate: '',
    travellers: '1 Person',
    budget: '₹10k – ₹20k',
    phone: '',
    email: ''
  })

  if (!open) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/trip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) throw new Error('Failed')

      setSuccess(true)

      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 3000)
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        <button onClick={onClose} className="absolute right-5 top-5 text-gray-500 hover:text-black">
          <X size={22} />
        </button>

        <h2 className="text-2xl font-bold mb-2">Plan Your Himachal Trip</h2>
        <p className="text-gray-500 mb-6">Tell us your preferences & our local experts will plan it for you</p>

        {success ? (
          <div className="py-16 text-center">
            <h3 className="text-2xl font-bold mb-3">🎉 Trip Request Submitted</h3>
            <p className="text-gray-600">Our team will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="destination" placeholder="Manali, Spiti, Dharamshala" className="input" required onChange={handleChange} />

            <select name="tripType" className="input" onChange={handleChange}>
              <option>Leisure</option>
              <option>Adventure</option>
              <option>Spiritual</option>
              <option>Honeymoon</option>
            </select>

            <input type="date" name="startDate" className="input" required onChange={handleChange} />
            <input type="date" name="endDate" className="input" required onChange={handleChange} />

            <select name="travellers" className="input" onChange={handleChange}>
              <option>1 Person</option>
              <option>2 People</option>
              <option>Family</option>
              <option>Group</option>
            </select>

            <select name="budget" className="input" onChange={handleChange}>
              <option>₹10k – ₹20k</option>
              <option>₹20k – ₹40k</option>
              <option>₹40k – ₹70k</option>
              <option>₹70k+</option>
            </select>

            <input name="phone" placeholder="+91 XXXXX XXXXX" className="input" required onChange={handleChange} />

            <input name="email" type="email" placeholder="you@email.com" className="input" required onChange={handleChange} />

            <button type="submit" disabled={loading} className="md:col-span-2 mt-4 rounded-full bg-black py-4 text-white font-semibold hover:bg-gray-900 transition">
              {loading ? 'Submitting...' : 'Get My Trip Plan'}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-xs text-gray-500">🏔️ Local experts • No spam • Custom itineraries</p>
      </div>
    </div>
  )
}
