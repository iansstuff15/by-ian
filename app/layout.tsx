import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CoreProvider from '@/util/provider/core-provider.util'
import Header from '@/components/header/header.component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} w-screen overflow-x-hidden`}>
        <Header />
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  )
}
