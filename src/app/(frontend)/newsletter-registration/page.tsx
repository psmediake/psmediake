import React from 'react'
import NewsletterSignup from '@/components/landingpage/NewsLetter'

export const metadata = {
  title: 'Subscribe to Our Newsletter | psmedia.co.ke',
  description:
    'Get the top headlines, exclusive stories, and weekly highlights from Kenya delivered straight to your inbox. Sign up for the PSMedia.ke newsletter today.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Newsletter Signup | psmedia.co.ke',
    description:
      'Stay ahead with curated news and insights from PSMedia.ke. Subscribe to our free newsletter for timely updates from across Kenya and beyond.',
    url: 'https://www.psmedia.co.ke/newsletter-registration',
    siteName: 'PSMedia',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Newsletter Registration - PSMedia.ke',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscribe to Our Newsletter | psmedia.co.ke',
    description:
      'Don’t miss out on top stories and breaking news from Kenya. Subscribe to the PSMedia.ke newsletter — it’s free.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <>
      <NewsletterSignup />
    </>
  )
}
