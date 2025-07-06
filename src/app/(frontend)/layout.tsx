import React from 'react'
import './styles.css'
import DualNavbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

// app/layout.js or app/layout.tsx
export const metadata = {
  title: 'PSMedia ke',
  description: 'PSMedia ke Official Website',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
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
