import React from 'react'
import './styles.css'
import DualNavbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'
import Script from 'next/script'

// app/layout.js or app/layout.tsx
export const metadata = {
  title: 'PSMedia.ke | Breaking News, Analysis & Features from Kenya',
  description:
    'Stay informed with the latest news, politics, sports, business, and more from Kenya and around the world. Powered by PSMedia.ke — your trusted source for credible journalism.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'PSMedia.ke | Trusted News & Journalism from Kenya',
    description:
      'Explore top stories, breaking news, in-depth analysis and multimedia from Kenya’s independent media house - PSMedia.ke.',
    url: 'https://www.psmedia.co.ke',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'PSMedia.ke - Breaking News from Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PSMedia.ke | Kenya’s Source for Breaking News & Analysis',
    description:
      'Get the latest breaking news, features and reports from across Kenya and beyond. Only on PSMedia.ke.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
  other: {
    'google-adsense-account': 'ca-pub-1851725750266121',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1851725750266121"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
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
