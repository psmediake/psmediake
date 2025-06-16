export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

import HeroSection from '@/components/landingpage/Hero'
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
