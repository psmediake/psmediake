import React from 'react'
import EditorialGuidelines from '@/components/legalComponents/Editorial'

export const metadata = {
  title: 'Editorial Guidelines | PSMedia.ke',
  description:
    'At PSMedia.ke, we adhere to strict editorial standards to ensure accuracy, fairness, and independence in our journalism. Read our full editorial policies.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Editorial Guidelines | PSMedia.ke',
    description:
      'Explore how PSMedia.ke maintains editorial integrity through rigorous fact-checking, ethical sourcing, and commitment to impartial reporting.',
    url: 'https://www.psmedia.co.ke/editorial-guidelines',
    siteName: 'PSMedia.ke',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Editorial Guidelines - PSMedia.ke',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Guidelines | PSMedia.ke',
    description:
      'Learn about PSMedia.ke’s editorial standards and how we ensure trust and credibility in every story we publish.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <EditorialGuidelines />
    </>
  )
}
