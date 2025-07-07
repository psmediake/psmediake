import React from 'react'
import Terms from '@/components/legalComponents/Terms'

export const metadata = {
  title: 'Terms of Service | psmedia.co.ke',
  description:
    'Review the terms and conditions that govern your use of PSMedia.ke. Understand your rights, responsibilities, and our legal commitments.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Terms of Service | psmedia.co.ke',
    description:
      'Read the full Terms of Service for PSMedia.ke. These terms outline the rules for using our website, content, and services.',
    url: 'https://www.psmedia.co.ke/terms-of-service',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - PSMedia.ke',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | psmedia.co.ke',
    description:
      'Understand the terms and conditions for using the PSMedia.ke platform and accessing our journalism.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <Terms />
    </>
  )
}
