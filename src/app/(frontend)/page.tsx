export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where:{
      slug:{equals: 'home-page'},
    },
  })


  return (
  
  )
}
