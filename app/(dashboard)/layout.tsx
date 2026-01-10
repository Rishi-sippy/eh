import ProfileMenu from '../components/ProfileMenu'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <ProfileMenu />
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
