'use client'

import { useEffect, useRef, useState } from 'react'
import { LogOut, Shield, User } from 'lucide-react'

type UserProfile = {
  name: string
  email: string
  role: 'SUPERADMIN' | 'OWNER'
}

export default function ProfileMenu() {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState<UserProfile | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Fetch user info (from cookies or API later)
  useEffect(() => {
    const cookies = document.cookie

    setUser({
      name: cookies.includes('SUPERADMIN') ? 'Super Admin' : 'Property Owner',
      email: cookies.includes('SUPERADMIN') ? 'sippyrishu@gmail.com' : 'owner@email.com',
      role: cookies.includes('SUPERADMIN') ? 'SUPERADMIN' : 'OWNER'
    })
  }, [])

  if (!user) return null

  return (
    <div ref={ref} className="relative">
      {/* Avatar */}
      <button onClick={() => setOpen(!open)} className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white font-semibold">
        {user.name.charAt(0)}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white shadow-xl border z-50">
          <div className="px-4 py-3 border-b">
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>

            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-black/5 px-2 py-1 text-xs font-medium">
              <Shield size={12} />
              {user.role}
            </span>
          </div>

          <button
            onClick={() => {
              document.cookie = 'session=; Max-Age=0; path=/'
              document.cookie = 'role=; Max-Age=0; path=/'
              window.location.href = '/login'
            }}
            className="flex w-full items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-gray-50"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
