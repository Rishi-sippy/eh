'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { LayoutDashboard, Home, Mountain, Users, Settings, ShieldCheck } from 'lucide-react'

type Role = 'SUPERADMIN' | 'OWNER' | null

export default function Sidebar() {
  const pathname = usePathname()
  const [role, setRole] = useState<Role>(null)

  // ✅ Safely read cookie on client
  useEffect(() => {
    const cookie = document.cookie.split('; ').find((row) => row.startsWith('role='))

    if (cookie) {
      setRole(cookie.split('=')[1] as Role)
    }
  }, [])

  /* ---------------- OWNER MENU ---------------- */
  const ownerMenu = [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: LayoutDashboard
    },
    {
      name: 'My Properties',
      href: '/dashboard/properties',
      icon: Home
    },
    {
      name: 'Experiences',
      href: '/dashboard/experiences',
      icon: Mountain
    },
    {
      name: 'Trip Leads',
      href: '/dashboard/trips',
      icon: Users
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: Settings
    }
  ]

  /* ---------------- SUPERADMIN MENU ---------------- */
  const adminMenu = [
    {
      name: 'Admin Overview',
      href: '/dashboard/admin',
      icon: ShieldCheck
    },
    {
      name: 'Property Approvals',
      href: '/dashboard/admin/properties',
      icon: Home
    },
    {
      name: 'Trip Requests',
      href: '/dashboard/admin/trips',
      icon: Users
    },
    {
      name: 'Users',
      href: '/dashboard/admin/users',
      icon: Users
    }
  ]

  return (
    <aside className="w-64 min-h-screen bg-black text-white px-6 py-8">
      {/* LOGO */}
      <div className="mb-10 text-xl font-bold tracking-wide">
        Explore
        <span className="text-yellow-400">Himachal</span>
      </div>

      {/* OWNER SECTION */}
      <nav className="space-y-2">
        {ownerMenu.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href

          return (
            <Link key={item.href} href={item.href} className={clsx('flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition', active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white')}>
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* SUPERADMIN SECTION */}
      {role === 'SUPERADMIN' && (
        <>
          <div className="mt-10 mb-3 text-xs uppercase tracking-wider text-white/40">Admin</div>

          <nav className="space-y-2">
            {adminMenu.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href

              return (
                <Link key={item.href} href={item.href} className={clsx('flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition', active ? 'bg-yellow-400/20 text-yellow-300' : 'text-white/70 hover:bg-white/5 hover:text-white')}>
                  <Icon size={18} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </>
      )}
    </aside>
  )
}
