'use client'

import { useEffect, useState } from 'react'

export default function PropertyLeadsPage() {
  const [leads, setLeads] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/property')
      .then((res) => res.json())
      .then(setLeads)
  }, [])

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/property/${id}/approve`, {
      method: 'POST',
      body: JSON.stringify({ status })
    })

    setLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Property Requests</h1>

      <table className="w-full bg-white rounded-xl shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Property</th>
            <th className="p-3">City</th>
            <th className="p-3">Owner</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t">
              <td className="p-3">{lead.propertyName}</td>
              <td className="p-3">{lead.city}</td>
              <td className="p-3">{lead.email}</td>
              <td className="p-3">{lead.status}</td>
              <td className="p-3 space-x-2">
                <button onClick={() => updateStatus(lead.id, 'APPROVED')} className="px-3 py-1 bg-green-600 text-white rounded">
                  Approve
                </button>
                <button onClick={() => updateStatus(lead.id, 'REJECTED')} className="px-3 py-1 bg-red-600 text-white rounded">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
