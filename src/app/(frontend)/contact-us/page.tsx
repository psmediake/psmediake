import React from 'react'
import ContactHero from '@/components/contactPage/ContactHero'
import ContactSection from '@/components/contactPage/ContactSection'

export const metadata = {
  title: 'Contact Us | PSMedia.ke',
  description:
    'Get in touch with the PSMedia.ke team for media inquiries, advertising opportunities, story tips, or general feedback. We value your input and partnership.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Contact Us | PSMedia.ke',
    description:
      'Reach out to PSMedia.ke for support, press inquiries, and collaborations. Let’s connect and build impactful media together.',
    url: 'https://www.psmedia.co.ke/contact-us',
    siteName: 'PSMedia.ke',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Contact PSMedia.ke - Trusted News from Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | PSMedia.ke',
    description:
      'Have questions or feedback? Get in touch with the editorial and support team at PSMedia.ke.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

export default function page() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
    </div>
  )
}
