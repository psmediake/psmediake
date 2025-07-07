export const dynamic = 'force-dynamic'

import React from 'react'
import Latest from '@/components/latestStoriesPage/Latest'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import { fetchByCategory } from '@/lib/postsUtil'
import Image from 'next/image'

import config from '@/payload.config'
import { getPayload } from 'payload'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string }
}): Promise<Metadata> {
  const { categorySlug } = params

  const payload = await getPayload({ config })

  const { docs: categories } = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: categorySlug,
      },
    },
    limit: 1,
  })

  const category = categories[0]

  if (!category) {
    return {
      title: 'Category Not Found | psmedia.co.ke',
      description:
        'The category you are looking for does not exist. Discover more stories at PSMedia.ke.',
    }
  }

  const categoryName = category.name

  return {
    title: `${categoryName} News | psmedia.co.ke`,
    description: `Latest updates, features, and analysis in ${categoryName} from PSMedia.ke — Kenya's trusted news source.`,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
    openGraph: {
      title: `${categoryName} News | psmedia.co.ke`,
      description: `Explore trending news and analysis in ${categoryName}. Updated hourly from across Kenya and beyond.`,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
      siteName: 'PSMedia',
      images: [
        {
          url: '/official.png',
          width: 1200,
          height: 630,
          alt: `Latest ${categoryName} News - PSMedia.ke`,
        },
      ],
      locale: 'en_KE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} News | psmedia.co.ke`,
      description: `Stay updated with the latest in ${categoryName}. Powered by PSMedia.ke.`,
      images: ['/official.png'],
      site: '@psmedia_ke',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
    },
  }
}

type PageProps = {
  params: { categorySlug: string }
  searchParams?: { page?: string }
}

export default async function Page({ params, searchParams }: PageProps) {
  const currentPage = Number(searchParams?.page) || 1
  const categorySlug = params.categorySlug

  //Pass the slug to fetchByCategory
  const { posts, pagination } = await fetchByCategory(categorySlug, currentPage)

  const categoryName = posts[0]?.category?.name || decodeURIComponent(categorySlug)

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-200/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-200/25 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/15 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 md:py-12">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-8 shadow-lg shadow-blue-500/25"></div>

              <div className="flex justify-center items-center gap-6 mb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm"></div>
                  <Image
                    src="/white.png"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="relative h-8 md:h-12 w-auto object-contain drop-shadow-lg"
                  />
                </div>

                <div className="text-3xl md:text-3xl font-light text-white/60 animate-pulse">×</div>

                <h1 className="text-4xl md:text-6xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text capitalize tracking-tight drop-shadow-2xl">
                  {categoryName}
                </h1>
              </div>
            </div>

            {/* Enhanced accent line with glow */}
            <div className="max-w-lg mx-auto mt-2">
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-lg shadow-white/10"></div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-lg"></div>
      </section>

      <section className="py-12 container mx-auto px-4">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No posts found for this category.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Latest key={post.id} post={post} />
              ))}
            </div>

            <PaginationComponent totalPages={pagination.totalPages} />
          </>
        )}
      </section>
    </>
  )
}
