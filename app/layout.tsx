import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { NavBar, Footer } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scooby',
  description: 'Dog?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
