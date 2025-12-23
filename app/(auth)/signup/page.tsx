'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()

  const [business, setBusiness] = useState('')
  const [domain, setDomain] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const tenant =
    domain ||
    business
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!business || !email || !password) {
      setError('Please fill all required fields')
      setLoading(false)
      return
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        tenant
      })
    })

    setLoading(false)

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Something went wrong')
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Create your workspace</h1>
        <p className="text-sm text-gray-500 mb-6">This will be your personal dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input placeholder="Business / Property Name" className="w-full rounded-xl border px-4 py-3" onChange={(e) => setBusiness(e.target.value)} />

          <input placeholder="Email address" type="email" className="w-full rounded-xl border px-4 py-3" onChange={(e) => setEmail(e.target.value)} />

          <input placeholder="Password" type="password" className="w-full rounded-xl border px-4 py-3" onChange={(e) => setPassword(e.target.value)} />

          <input placeholder="Custom domain (optional)" className="w-full rounded-xl border px-4 py-3" onChange={(e) => setDomain(e.target.value)} />

          <p className="text-xs text-gray-500">
            Your workspace URL:
            <br />
            <strong>{tenant || 'yourname'}.explore-himachal.vercel.app</strong>
          </p>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button disabled={loading} className="w-full rounded-full bg-black py-3 text-white font-semibold disabled:opacity-60">
            {loading ? 'Creating workspace...' : 'Create & Continue'}
          </button>
        </form>
      </div>
    </div>
  )
}
