'use client'

import { Bell } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type Notification = {
  id: string
  title: string
  message: string
  read: boolean
  time: string
}

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Dummy notifications (replace with API later)
  useEffect(() => {
    setNotifications([
      {
        id: '1',
        title: 'New Property Submission',
        message: 'Mountain View Homestay – Manali',
        read: false,
        time: '2 min ago'
      },
      {
        id: '2',
        title: 'Trip Request',
        message: 'Spiti Valley | Adventure Trip',
        read: false,
        time: '10 min ago'
      }
    ])
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  return (
    <div ref={ref} className="relative">
      {/* Bell Button */}
      <button onClick={() => setOpen(!open)} className="relative rounded-full p-2 hover:bg-gray-100 transition">
        <Bell size={20} />

        {unreadCount > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{unreadCount}</span>}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white shadow-xl border z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h4 className="font-semibold">Notifications</h4>
            <button onClick={markAllRead} className="text-xs text-gray-500 hover:underline">
              Mark all read
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="p-4 text-sm text-gray-500 text-center">No notifications</p>
            ) : (
              notifications.map((n) => (
                <div key={n.id} className={clsx('px-4 py-3 border-b last:border-0', !n.read && 'bg-gray-50')}>
                  <p className="text-sm font-medium">{n.title}</p>
                  <p className="text-sm text-gray-600">{n.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
