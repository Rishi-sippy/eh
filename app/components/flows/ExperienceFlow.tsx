'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '../ui/Modal'

const CITIES = ['Manali', 'Bir', 'Dharamshala', 'Spiti', 'Kasol']
const EXPERIENCES = ['Paragliding', 'Trekking', 'Guided Tour', 'Spiritual Retreat']
const TIMES = ['This Week', 'This Month', 'Flexible']

export default function ExperienceFlow({ onClose }: { onClose: () => void }) {
  const router = useRouter()

  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [city, setCity] = useState('')
  const [exp, setExp] = useState('')
  const [time, setTime] = useState('')

  function submit() {
    router.push(`/experiences/results?city=${city}&type=${exp}&time=${time}`)
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <div className="mb-6 text-sm text-gray-500">Step {step} of 3</div>

      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Where?</h2>
          <Grid>
            {CITIES.map((c) => (
              <SelectButton
                key={c}
                onClick={() => {
                  setCity(c)
                  setStep(2)
                }}
              >
                {c}
              </SelectButton>
            ))}
          </Grid>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-6">What experience?</h2>
          <Grid>
            {EXPERIENCES.map((e) => (
              <SelectButton
                key={e}
                onClick={() => {
                  setExp(e)
                  setStep(3)
                }}
              >
                {e}
              </SelectButton>
            ))}
          </Grid>
          <Back onClick={() => setStep(1)} />
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-6">When?</h2>
          <Grid>
            {TIMES.map((t) => (
              <SelectButton key={t} onClick={() => setTime(t)}>
                {t}
              </SelectButton>
            ))}
          </Grid>

          <button disabled={!time} onClick={submit} className="mt-8 w-full rounded-full bg-black py-3 text-white font-semibold disabled:opacity-40">
            View Experiences →
          </button>

          <Back onClick={() => setStep(2)} />
        </>
      )}
    </Modal>
  )
}

/* Reuse helpers */
function Grid({ children }: any) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>
}
function SelectButton({ children, onClick }: any) {
  return (
    <button onClick={onClick} className="rounded-xl border p-4 hover:bg-black hover:text-white">
      {children}
    </button>
  )
}
function Back({ onClick }: any) {
  return (
    <button onClick={onClick} className="mt-4 text-sm underline text-gray-500">
      ← Back
    </button>
  )
}
