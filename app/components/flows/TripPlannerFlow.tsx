'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '../ui/Modal'

const CITIES = ['Manali', 'Shimla', 'Dharamshala', 'Spiti', 'Bir', 'Kasol']
const STYLES = ['Solo', 'Couple', 'Family', 'Adventure', 'Spiritual']

export default function TripPlannerFlow({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [city, setCity] = useState('')
  const [style, setStyle] = useState('')
  const [days, setDays] = useState(5)

  function submit() {
    router.push(`/plan/results?city=${city}&style=${style}&days=${days}`)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Choose destination</h2>
          <div className="grid grid-cols-2 gap-4">
            {CITIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setCity(c)
                  setStep(2)
                }}
                className="rounded-xl border p-4 hover:bg-black hover:text-white"
              >
                {c}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Trip style</h2>
          <div className="grid grid-cols-2 gap-4">
            {STYLES.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setStyle(s)
                  setStep(3)
                }}
                className="rounded-xl border p-4 hover:bg-black hover:text-white"
              >
                {s}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Trip duration</h2>
          <input type="range" min={3} max={12} value={days} onChange={(e) => setDays(+e.target.value)} className="w-full" />
          <p className="mt-4 text-center font-semibold">{days} days</p>

          <button onClick={submit} className="mt-8 w-full rounded-full bg-black py-3 text-white font-semibold">
            Show My Plan
          </button>
        </>
      )}
    </Modal>
  )
}
