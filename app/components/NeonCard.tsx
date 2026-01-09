function NeonCard({ title, value, icon, glow }: any) {
  return (
    <div className="relative rounded-2xl bg-white p-6 shadow overflow-hidden">
      <div className={`absolute inset-0 opacity-20 blur-2xl bg-gradient-to-r ${glow}`} />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <div className="h-12 w-12 rounded-xl bg-black text-white flex items-center justify-center">{icon}</div>
      </div>
    </div>
  )
}
export default NeonCard
