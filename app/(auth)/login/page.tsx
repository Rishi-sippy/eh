'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white text-black">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <input placeholder="Email" className="w-full border p-3 mb-4 rounded" onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password" className="w-full border p-3 mb-6 rounded" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin} className="w-full bg-black text-white py-3 rounded-full">
          Login
        </button>
      </div>
    </div>
  )
}
