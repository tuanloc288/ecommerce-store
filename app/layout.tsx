import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const urbanFont = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Modernism',
  description: 'Modernism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanFont.className}>
        <Navbar/>
        {children}
        <Footer/>  
      </body>
    </html>
  )
}
