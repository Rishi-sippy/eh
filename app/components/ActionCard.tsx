function ActionCard({ title, desc, href }: any) {
  return (
    <a href={href} className="rounded-xl border p-4 hover:border-black transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
    </a>
  )
}
export default ActionCard
