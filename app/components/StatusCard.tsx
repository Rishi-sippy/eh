function StatusRow({ label, value, color }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">{label}</span>
      <span className={`px-3 py-1 rounded-full text-white text-xs ${color}`}>{value}</span>
    </div>
  )
}
export default StatusRow
