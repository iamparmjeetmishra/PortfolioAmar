import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Header, Footer} from '../components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amar Editz',
  description: 'Amar Editz | One Stop Solution for all Your Video/Reel Editing need!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mx-auto w-full h-svh `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
