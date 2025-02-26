import React from 'react'
import './styles/globals.css'
import { Metadata } from 'next'
import { Poppins, Hepta_Slab } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const heptaSlab = Hepta_Slab({
  subsets: ['latin'],
  variable: '--font-hepta-slab',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Property Revive' as string,
  description:
    'Property Revive is a property management company that helps you manage your property.' as string,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${heptaSlab.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
