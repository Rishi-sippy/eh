'use client'

import { useEffect, useState } from 'react'

type Lead = {
  id: string
  name: string
  propertyName: string
  city: string
  propertyType: string
  status: string
}

export default function PropertyLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])

  useEffect(() => {
    fetch('/api/property')
      .then((res) => res.json())
      .then(setLeads)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Property Submissions</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Owner</th>
              <th className="p-3">Property</th>
              <th className="p-3">City</th>
              <th className="p-3">Type</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.propertyName}</td>
                <td className="p-3">{lead.city}</td>
                <td className="p-3">{lead.propertyType}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs ${lead.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : lead.status === 'APPROVED' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{lead.status}</span>
                </td>
                <td className="p-3 flex gap-2">
                  <button onClick={() => updateStatus(lead.id, 'APPROVED')} className="px-3 py-1 bg-black text-white rounded text-xs">
                    Approve
                  </button>
                  <button onClick={() => updateStatus(lead.id, 'REJECTED')} className="px-3 py-1 border rounded text-xs">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

async function updateStatus(id: string, status: string) {
  await fetch(`/api/property/${id}/approve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status })
  })

  window.location.reload()
}
