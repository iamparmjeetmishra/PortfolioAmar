import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer} from '../components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Amar's Portfolio`,
  description: 'Amar Editz - One Stop Solution for all your Video Editing Needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='container px-4 mx-auto w-full h-svh'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
