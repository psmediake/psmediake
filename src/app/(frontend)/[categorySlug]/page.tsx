export const dynamic = 'force-dynamic'

import React from 'react'
import Latest from '@/components/latestStoriesPage/Latest'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import { fetchAllPosts } from '@/lib/postsUtil'
import { notFound } from 'next/navigation'

// ✅ Correct signature with explicit destructuring
export default async function Page({
  params,
  searchParams,
}: {
  params: { categorySlug: string }
  searchParams?: { page?: string }
}) {
  // ✅ No need to await anything here
  const categorySlug = params.categorySlug
  const currentPage = Number(searchParams?.page) || 1

  const { posts, pagination } = await fetchAllPosts(currentPage)

  const filteredPosts = posts.filter((post) => {
    return (
      typeof post.category === 'object' &&
      'slug' in post.category &&
      post.category.slug === categorySlug
    )
  })

  if (filteredPosts.length === 0) return notFound()

  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden flex items-center">
        {/* Floating bubbles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-8 h-8 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-24 w-6 h-6 bg-blue-200 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-24 left-32 w-10 h-10 bg-white rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-16 right-16 w-4 h-4 bg-blue-100 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500 rounded-full text-sm font-medium animate-pulse">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              LIVE UPDATES
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent tracking-tight">
              {filteredPosts[0]?.category?.name ?? 'Category'}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Latest key={post.id} post={post} />
          ))}
        </div>

        <PaginationComponent totalPages={pagination.totalPages} />
      </section>
    </>
  )
}
