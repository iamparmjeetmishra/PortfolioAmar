import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar, Footer, Hero } from '@/components'
import Favicon from '../public/Images/favicon.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amar Portfolio',
  description: 'Video Editor - One Stop solution for all your video design/editing needs.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container mx-auto min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full ' >
        <Navbar />
        <Hero />
        {children }
        <Footer />
      </body>
    </html>
  )
}
