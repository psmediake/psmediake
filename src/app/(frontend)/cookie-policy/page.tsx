import React from 'react'
import Cookie from '@/components/legalComponents/Cookie'

export const metadata = {
  title: 'Cookie Policy | psmedia.co.ke',
  description:
    'Learn how PSMedia.ke uses cookies and similar technologies to improve your browsing experience, personalize content, and analyze traffic.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Cookie Policy | psmedia.co.ke',
    description:
      'Understand how cookies are used on PSMedia.ke to enhance functionality, analyze engagement, and support personalized services.',
    url: 'https://www.psmedia.co.ke/cookie-policy',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Cookie Policy - PSMedia.ke',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | psmedia.co.ke',
    description:
      'Find out how PSMedia.ke uses cookies to ensure a better user experience and analyze website traffic.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <Cookie />
    </>
  )
}
