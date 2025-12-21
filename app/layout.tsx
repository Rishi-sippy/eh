import Navbar from './components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ExploreHimachal – Discover Stays, Mountains & Experiences',
  description: 'Explore Himachal Pradesh with curated stays, hotels, treks, paragliding and local experiences.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Navbar />
      <body className="antialiased">{children}</body>
    </html>
  )
}
