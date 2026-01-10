'use client'

import { useEffect, useState } from 'react'

type Trip = {
  id: string
  destination: string
  tripType: string
  budget: string
  phone: string
  status: string
}

export default function TripRequestsPage() {
  const [trips, setTrips] = useState<Trip[]>([])

  useEffect(() => {
    fetch('/api/trip')
      .then((res) => res.json())
      .then(setTrips)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trip Requests</h1>

      <table className="w-full bg-white rounded-xl shadow text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Destination</th>
            <th className="p-3">Type</th>
            <th className="p-3">Budget</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((t) => (
            <tr key={t.id} className="border-t">
              <td className="p-3">{t.destination}</td>
              <td className="p-3">{t.tripType}</td>
              <td className="p-3">{t.budget}</td>
              <td className="p-3">{t.phone}</td>
              <td className="p-3">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
