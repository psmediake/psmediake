import React from 'react'
import AboutSection from '@/components/aboutSection/AboutSection'
export const metadata = {
  title: 'About Us | psmedia.co.ke',
  description:
    'Learn more about PSMedia.ke — Kenya’s independent digital newsroom dedicated to delivering reliable, fact-based journalism across politics, business, sports, and more.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'About PSMedia.ke | Independent Newsroom in Kenya',
    description:
      'Discover the mission, values, and team behind PSMedia.ke — your trusted source for impactful and ethical journalism in Kenya and beyond.',
    url: 'https://www.psmedia.co.ke/about-us',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'About PSMedia.ke - Trusted News from Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | psmedia.co.ke',
    description:
      'Learn about the mission and editorial team powering PSMedia.ke — a digital-first platform for credible journalism in Kenya.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <AboutSection />
    </>
  )
}
