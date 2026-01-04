export default function ExperiencesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Experiences</h1>
        <button className="rounded-lg bg-black px-4 py-2 text-white">+ Add Experience</button>
      </div>

      <div className="rounded-xl bg-white p-6 border text-gray-500">You haven’t listed any experiences yet.</div>
    </div>
  )
}
