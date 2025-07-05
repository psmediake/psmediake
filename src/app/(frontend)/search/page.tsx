import React from 'react'
import SearchResults from '@/components/searchComponent/SearchResults'
import { Suspense } from 'react'
import Loading from '../loading'

function page() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchResults />
    </Suspense>
  )
}

export default page
