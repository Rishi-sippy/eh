'use client'

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl">
        <button onClick={onClose} className="absolute right-6 top-6 text-gray-500 hover:text-black">
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
