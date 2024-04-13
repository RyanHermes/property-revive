import './global.css'
import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: "Property Revive" as string,
    description: "Property Revive is a property management company that helps you manage your property." as string,
    icons : {
        icon: "/favicon.ico",
    }

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body>
                <main>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}