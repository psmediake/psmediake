export const dynamic = 'force-dynamic'

import React from 'react'
import LatestHero from '@/components/latestStoriesPage/LatestHero'
import Latest from '@/components/latestStoriesPage/Latest'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import { fetchAllPosts } from '@/lib/postsUtil'

export const metadata = {
  title: 'Latest Stories | PSMedia.ke',
  description:
    'Catch up with the most recent news stories, features, and breaking updates across Kenya and beyond — only on PSMedia.ke.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  openGraph: {
    title: 'Latest Stories | PSMedia.ke',
    description:
      'Stay informed with the latest updates from politics, business, sports, and more. Explore breaking news and trending topics, updated every hour.',
    url: 'https://www.psmedia.co.ke/latest-stories',
    siteName: 'PSMedia.ke',
    images: [
      {
        url: '/official.png',
        width: 1200,
        height: 630,
        alt: 'Latest Stories - PSMedia.ke News from Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Latest Stories | PSMedia.ke',
    description:
      'Discover the most recent stories across Kenya — updated regularly to keep you ahead of the headlines.',
    images: ['/official.png'],
    site: '@PSMedia_ke',
  },
}

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
