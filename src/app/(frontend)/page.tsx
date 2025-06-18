export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

import HeroSection from '@/components/landingpage/Hero'
import Latest from '@/components/landingpage/Latest'
import NewsCategoriesSection from '@/components/landingpage/News'
import SportsSection from '@/components/landingpage/Sports'
import EntertainmentNewsSection from '@/components/landingpage/Entertainment'
import NewsletterSignup from '@/components/landingpage/NewsLetter'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'homepage' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div>
      <div className="page">
        <HeroSection />
        <Latest />
        <NewsCategoriesSection />
        <SportsSection />
        <EntertainmentNewsSection />
        <NewsletterSignup />
        {page.layout?.map((block, index) => renderBlock(block, index))}
      </div>
    </div>
  )
}

function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    // case 'hero':
    //   return <HeroBlock key={index} block={block} />

    default:
      return null
  }
}
