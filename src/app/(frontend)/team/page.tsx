import React from 'react'
import TeamsPage from '@/components/teamSection/OurTeam'

export const metadata = {
  title: 'Meet the Team | psmedia.co.ke',
  description:
    'Get to know the dedicated journalists, editors, and contributors behind PSMedia.ke — delivering trusted news and storytelling from Kenya.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Our Team | psmedia.co.ke',
    description:
      'Learn more about the people powering PSMedia.ke — a diverse team of journalists and editors committed to delivering accurate and ethical news coverage.',
    url: 'https://www.psmedia.co.ke/team',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Our Editorial Team - PSMedia.ke',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet the PSMedia.ke Team',
    description:
      'Behind every story is a committed journalist. Meet the people who bring you reliable and impactful news at PSMedia.ke.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <TeamsPage />
    </>
  )
}
