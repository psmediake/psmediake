export const dynamic = 'force-dynamic'

import React from 'react'
import LatestHero from '@/components/latestStoriesPage/LatestHero'
import Latest from '@/components/latestStoriesPage/Latest'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import { fetchAllPosts } from '@/lib/postsUtil'

type Props = {
  searchParams?: Promise<{
    page?: string
  }>
}

export default async function page({ searchParams }: Props) {
  const resolvedParams = await searchParams

  const currentPage = Number(resolvedParams?.page) || 1
  const { posts, pagination } = await fetchAllPosts(currentPage)

  return (
    <>
      <LatestHero />
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Latest key={post.id} post={post} />
          ))}
        </div>

        <PaginationComponent totalPages={pagination.totalPages} />
      </section>
    </>
  )
}
