export default function SettingsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-6 rounded-xl bg-white p-6 border">
        <div>
          <label className="block text-sm font-medium mb-1">Workspace Name</label>
          <input type="text" placeholder="ExploreHimachal" className="w-full rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Contact Email</label>
          <input type="email" placeholder="admin@explorehimachal.com" className="w-full rounded-lg border px-3 py-2" />
        </div>

        <button className="rounded-lg bg-black px-4 py-2 text-white">Save Changes</button>
      </div>
    </div>
  )
}
