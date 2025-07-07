import React from 'react'
import Privacy from '@/components/legalComponents/Privacy'

export const metadata = {
  title: 'Privacy Policy | psmedia.co.ke',
  description:
    'Find out how PSMedia.ke collects, uses, and protects your personal information. We are committed to transparency and user data privacy.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Privacy Policy | psmedia.co.ke',
    description:
      'Read the PSMedia.ke Privacy Policy to learn how we handle personal data, cookies, and user information in compliance with data protection laws.',
    url: 'https://www.psmedia.co.ke/privacy-policy',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - PSMedia.ke',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | psmedia.co.ke',
    description:
      'Your privacy matters. Read how PSMedia.ke manages personal information and maintains data security across our platform.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <Privacy />
    </>
  )
}
