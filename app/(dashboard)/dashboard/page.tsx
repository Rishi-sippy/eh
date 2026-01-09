'use client'

import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    properties: 0,
    leads: 0,
    trips: 0
  })

  useEffect(() => {
    async function loadStats() {
      try {
        const [propertiesRes, tripsRes] = await Promise.all([fetch('/api/property'), fetch('/api/trip')])

        const properties = await propertiesRes.json()
        const trips = await tripsRes.json()

        setStats({
          properties: properties.length,
          leads: properties.filter((p: any) => p.status === 'PENDING').length,
          trips: trips.length
        })
      } catch (err) {
        console.error('Dashboard stats error', err)
      }
    }

    loadStats()
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Properties */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-600">Total Properties</h3>
          <p className="text-3xl font-bold mt-2">{stats.properties}</p>
        </div>

        {/* Leads */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-600">Pending Leads</h3>
          <p className="text-3xl font-bold mt-2">{stats.leads}</p>
        </div>

        {/* Trips */}
        <div className="rounded-xl bg-white p-6 shadow">
          <h3 className="font-semibold text-gray-600">Trip Requests</h3>
          <p className="text-3xl font-bold mt-2">{stats.trips}</p>
        </div>
      </div>
    </div>
  )
}
