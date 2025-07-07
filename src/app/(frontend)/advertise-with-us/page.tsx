import React from 'react'
import AdvertiseWithUsPage from '@/components/advertiseSection/AdvertiseSection'

export const metadata = {
  title: 'Advertise With Us | PSMedia.ke',
  description:
    'Promote your brand with PSMedia.ke — a trusted news platform reaching thousands of engaged readers across Kenya daily. Explore flexible advertising options that work.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Advertise With Us | PSMedia.ke',
    description:
      'Partner with PSMedia.ke to reach a growing audience through display ads, sponsored content, and tailored brand placements on one of Kenya’s leading digital news platforms.',
    url: 'https://www.psmedia.co.ke/advertise-with-us',
    siteName: 'PSMedia.ke',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Advertise with PSMedia.ke - Reach News Readers in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advertise With Us | PSMedia.ke',
    description:
      'Grow your brand with strategic advertising on PSMedia.ke — Kenya’s independent digital newsroom with a wide and loyal readership.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <AdvertiseWithUsPage />
    </>
  )
}
