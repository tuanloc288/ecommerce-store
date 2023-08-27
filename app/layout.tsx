import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ModalProvider from '@/providers/ModalProvider'
import ToastProvider from '@/providers/ToastProvider'

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
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>  
      </body>
    </html>
  )
}
