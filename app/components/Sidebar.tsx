'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Home, Mountain, Briefcase, Users, Settings } from 'lucide-react'
import clsx from 'clsx'

const menu = [
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
    name: 'Leads',
    href: '/dashboard/leads',
    icon: Users
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings
  }
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-black text-white min-h-screen px-6 py-8">
      {/* Logo */}
      <div className="text-xl font-bold mb-10">
        Explore<span className="text-yellow-400">Himachal</span>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href

          return (
            <Link key={item.href} href={item.href} className={clsx('flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition', active ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white')}>
              <Icon size={18} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
