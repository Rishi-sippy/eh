'use client'

import { useEffect, useState } from 'react'
import NeonCard from '../../components/NeonCard'

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState({
    properties: 0,
    pending: 0,
    trips: 0,
    users: 0
  })

  useEffect(() => {
    Promise.all([fetch('/api/property').then((r) => r.json()), fetch('/api/trip').then((r) => r.json()), fetch('/api/users').then((r) => r.json())]).then(([properties, trips, users]) => {
      setStats({
        properties: properties.length,
        pending: properties.filter((p: any) => p.status === 'PENDING').length,
        trips: trips.length,
        users: users.length
      })
    })
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold">Superadmin Dashboard</h1>
      <p className="text-gray-500 mt-1">Platform control & moderation</p>

      <div className="grid grid-cols-4 gap-6 mt-8">
        <NeonCard title="Total Properties" value={stats.properties} />
        <NeonCard title="Pending Approvals" value={stats.pending} />
        <NeonCard title="Trip Requests" value={stats.trips} />
        <NeonCard title="Users" value={stats.users} />
      </div>
    </div>
  )
}
