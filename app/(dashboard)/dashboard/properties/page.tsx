import prisma from '../../../../lib/prisma'

export default async function PropertyLeadsPage() {
  const leads = await prisma.propertyLead.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Property Submissions</h1>

      <table className="w-full bg-white rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Property</th>
            <th>Name</th>
            <th>City</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-t">
              <td className="p-3">{lead.propertyName}</td>
              <td>{lead.name}</td>
              <td>{lead.city}</td>
              {/* <td>{lead}</td> */}
              <td className="space-x-2">
                <form action={`/api/property/${lead.id}/approve`} method="POST">
                  <button className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                </form>
                <form action={`/api/property/${lead.id}/reject`} method="POST">
                  <button className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
