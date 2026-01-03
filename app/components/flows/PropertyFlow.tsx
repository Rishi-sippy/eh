'use client'

import { useRouter } from 'next/navigation'
import Modal from '../ui/Modal'

export default function PropertyFlow({ onClose }: { onClose: () => void }) {
  const router = useRouter()

  function submit() {
    router.push('/signup')
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4">List your property</h2>

      <p className="text-gray-600 mb-8">Create your workspace, manage leads, and reach genuine Himachal travelers.</p>

      <button onClick={submit} className="w-full rounded-full bg-black py-3 text-white font-semibold">
        Create Workspace →
      </button>
    </Modal>
  )
}
