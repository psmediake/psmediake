import React from 'react'
import './styles.css'
import DualNavbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'PSMedia ke',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <DualNavbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
