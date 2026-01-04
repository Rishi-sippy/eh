import Sidebar from '../components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
