'use client'

import { useEffect, useState } from 'react'
import { Home, Map, Clock, CheckCircle } from 'lucide-react'
import NeonCard from '../../components/NeonCard'
import StatusRow from '../../components/StatusCard'
import ActionCard from '../../components/ActionCard'
export default function DashboardPage() {
  const [stats, setStats] = useState({
    properties: 0,
    pendingLeads: 0,
    approved: 0,
    trips: 0
  })

  useEffect(() => {
    async function load() {
      const [propsRes, tripsRes] = await Promise.all([fetch('/api/property'), fetch('/api/trip')])

      const properties = await propsRes.json()
      const trips = await tripsRes.json()

      setStats({
        properties: properties.length,
        pendingLeads: properties.filter((p: any) => p.status === 'PENDING').length,
        approved: properties.filter((p: any) => p.status === 'APPROVED').length,
        trips: trips.length
      })
    }

    load()
  }, [])

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview of platform activity</p>
      </div>

      {/* NEON KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <NeonCard title="Total Properties" value={stats.properties} icon={<Home />} glow="from-indigo-500 to-purple-500" />
        <NeonCard title="Pending Leads" value={stats.pendingLeads} icon={<Clock />} glow="from-yellow-400 to-orange-500" />
        <NeonCard title="Approved Listings" value={stats.approved} icon={<CheckCircle />} glow="from-green-400 to-emerald-600" />
        <NeonCard title="Trip Requests" value={stats.trips} icon={<Map />} glow="from-cyan-400 to-blue-500" />
      </div>

      {/* ACTIVITY SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PROPERTY STATUS */}
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="font-semibold mb-4">Property Status</h3>

          <div className="space-y-3">
            <StatusRow label="Pending Approval" value={stats.pendingLeads} color="bg-yellow-500" />
            <StatusRow label="Approved" value={stats.approved} color="bg-green-500" />
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3 className="font-semibold mb-4">Quick Actions</h3>

          <div className="grid grid-cols-2 gap-4">
            <ActionCard title="Review Properties" desc="Approve or reject property listings" href="/dashboard/leads" />
            <ActionCard title="Trip Requests" desc="View & respond to trip plans" href="/dashboard/trips" />
          </div>
        </div>
      </div>
    </div>
  )
}
