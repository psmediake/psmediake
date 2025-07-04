export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

import BreakingSectionWrapper from '@/components/Wrappers/BreakingSectionWrapper'
import NewsHeroWrapper from '@/components/Wrappers/NewsHeroWrapper'
import LatestNewsWrapper from '@/components/Wrappers/LatestNewsWrapper'
import NewsSectionWrapper from '@/components/Wrappers/NewsSectionWrapper'
import SportsSectionWrapper from '@/components/Wrappers/SportsSectionWrapper'
import EntertainmentSectionWrapper from '@/components/Wrappers/EntertainmentSectionWrapper'
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
        <BreakingSectionWrapper />
        <NewsHeroWrapper />
        <LatestNewsWrapper />
        <NewsSectionWrapper />
        <SportsSectionWrapper />
        <EntertainmentSectionWrapper />
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
