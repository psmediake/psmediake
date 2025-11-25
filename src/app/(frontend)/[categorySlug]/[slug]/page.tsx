export const dynamic = 'force-dynamic'

import React from 'react'
import config from '@/payload.config'
import { getPayload } from 'payload'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { formatDistanceToNow } from 'date-fns'
import { fetchAllPosts, fetchRelatedPosts } from '@/lib/postsUtil'
import { RichText } from '@/components/RichText'
import { ShareButton } from '@/components/custom/ShareButton'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; categorySlug: string }>
}) {
  const { slug, categorySlug } = await params

  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: { equals: slug },
    },
    depth: 2,
  })

  const post = docs[0]

  if (!post) {
    return {
      title: 'Article Not Found – PSMedia.ke',
      description:
        'The article you’re looking for doesn’t exist. Find the latest breaking news, features, and insights at PSMedia.ke.',
    }
  }

  const postTitle = post.title || 'News Article - PSMedia.ke'
  const postExcerpt =
    post.excerpt || 'Stay informed with breaking news and trusted reporting from PSMedia.ke.'
  const imageUrl =
    typeof post?.thumbnail === 'object' && post.thumbnail?.url
      ? post.thumbnail.url
      : '/official.png'

  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}/${slug}`
  const authorName = post.author
  return {
    title: `${postTitle}`,
    description: postExcerpt,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),

    openGraph: {
      title: `${postTitle} | psmedia.co.ke`,
      description: postExcerpt,
      url: pageUrl,
      siteName: 'PSMedia',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title || 'PSMedia Article',
        },
      ],
      type: 'article',
      locale: 'en_KE',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${postTitle} | psmedia.co.ke`,
      description: postExcerpt,
      images: [imageUrl],
      site: '@PSMedia_ke',
    },

    // ✅ Add fallback metadata used by some crawlers (like WhatsApp and Discord)
    alternates: {
      canonical: pageUrl,
    },
    // 👉 Add base-level fields
    authors: [authorName],
    publisher: 'PSMedia',

    // ✅ Fallback image for older crawlers
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },

    // ✅ Add top-level og:image fallback
    other: {
      'og:title': `${postTitle} | psmedia.co.ke`,
      'og:description': postExcerpt,
      'og:image': imageUrl,
      'og:url': pageUrl,
      'og:type': 'article',
      'twitter:image': imageUrl,
      'twitter:title': `${postTitle} | psmedia.co.ke`,
      'twitter:description': postExcerpt,
      'twitter:card': 'summary_large_image',
    },
  }
}

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'articles',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 3,
  })

  const post = docs[0]
  if (!post) {
    notFound()
  }

  // Format the published date
  const publishedDate = new Date(post.createdAt)
  const publishedDateFormatted = publishedDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Get how long ago the post was published
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true })

  // Fetch related posts
  const data = await fetchRelatedPosts(
    {
      name:
        typeof post.category === 'object' && post.category !== null && 'name' in post.category
          ? post.category.name
          : String(post.category),
    },
    slug,
  )

  const relatedPosts = data.slice(0, 3)

  // Fetch latest posts for sidebar
  const latestPostsData = await fetchAllPosts(1, 5)
  const latestPosts = latestPostsData.posts.filter((p) => p.slug !== slug)

  // Get author info
  const authorName =
    typeof post.author === 'string'
      ? post.author
      : typeof post.author === 'object' && post.author !== null && 'name' in post.author
        ? (post.author as { name?: string }).name || 'Unknown Author'
        : 'Unknown Author'

  const authorInitial = authorName.charAt(0)

  // Current URL for sharing
  const categorySlug =
    typeof post.category === 'object' && post.category !== null && 'slug' in post.category
      ? post.category.slug
      : typeof post.category === 'string' || typeof post.category === 'number'
        ? post.category
        : 'news'
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}/${slug}`

  function getEmbeddedVideoUrl(url: string): string {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be')
        ? url.split('/').pop()
        : new URLSearchParams(new URL(url).search).get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }

    if (url.includes('facebook.com')) {
      // Convert Facebook share URL to embeddable video URL
      const encodedUrl = encodeURIComponent(url)
      return `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=auto`
    }

    return url
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Main Content Container */}
      <div className="container mx-auto md:px-6 py-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-2 order-2 lg:order-1 px-6 md:px-0">
            <div className="sticky top-8 space-y-6">
              {/* Author Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center">
                  <div className="h-20 w-20 rounded-full bg-[#0753fe]/70 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {authorInitial}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{authorName}</h3>
                  <p className="text-sm text-gray-600 mb-4">Author</p>
                  <div className="text-xs text-gray-500">
                    <div>Published {publishedDateFormatted}</div>
                    <div className="mt-1">{timeAgo}</div>
                  </div>
                </div>
              </div>

              {/* Social Share Buttons */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Share Article</h3>
                <div className="space-y-3">
                  <ShareButton platform="facebook" url={currentUrl} title={post.title} />
                  <ShareButton platform="twitter" url={currentUrl} title={post.title} />
                  <ShareButton platform="linkedin" url={currentUrl} title={post.title} />
                  <ShareButton platform="copy" url={currentUrl} title={post.title} />
                </div>
              </div>
            </div>
          </div>

          {/* Center Column (Main Content) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Article Card */}
            <div className="bg-white overflow-hidden">
              {/* Article Header with Title and Excerpt */}
              <div className="px-6 py-2 md:px-10 md:py-0 lg:px-12 lg:py-0">
                {/* Article Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900  mt-4 leading-tight mb-6">
                  {post.title}
                </h1>

                {/* Article Excerpt */}
                {post.excerpt && (
                  <div className="mb-6 md:mb-6">
                    <p className="text-sm md:text-base text-gray-700 font-light border-l-4 border-[#003566]  pl-4 pr-6 bg-gray-50 py-4 rounded-r-lg">
                      {post.excerpt}
                    </p>
                  </div>
                )}
              </div>

              {/* Featured Image/Thumbnail */}
              <div className="relative h-64 md:h-80 lg:h-96 mx-6 md:mx-10 lg:mx-12 mb-0 overflow-hidden">
                {post.video ? (
                  <iframe
                    className="w-full h-full rounded-lg border-2 border-[#0763fe]"
                    src={getEmbeddedVideoUrl(post.video)}
                    title={post.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : post.thumbnail ? (
                  <Image
                    src={
                      typeof post.thumbnail === 'object' && post.thumbnail.url
                        ? post.thumbnail.url
                        : '/bg.jpg'
                    }
                    alt={post.title}
                    width={800}
                    height={600}
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#003566] to-[#0077b6]"></div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 md:px-10 md:py-4 lg:px-12 pt-0">
                <article className="prose prose-lg max-w-none">
                  <RichText data={post.content} className="richtext" />
                </article>
              </div>

              {/* Author Footer */}
              <div className="bg-gray-50 p-6 md:p-10">
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full bg-[#0763fe]/70 flex items-center justify-center text-white font-bold text-xl">
                    {authorInitial}
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{authorName}</div>
                    <div className="text-sm text-gray-500 mb-2">Author</div>
                    <p className="text-sm text-gray-600">
                      Contributing author with expertise in the field. Published{' '}
                      {publishedDateFormatted}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 order-3 px-6 md:px-0">
            <div className="sticky top-8 space-y-6">
              {/* Latest Articles */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Latest Articles</h3>
                <div className="space-y-4">
                  {latestPosts.slice(0, 5).map((latestPost) => (
                    <Link
                      href={`/${
                        typeof latestPost.category === 'object' &&
                        latestPost.category !== null &&
                        'slug' in latestPost.category
                          ? latestPost.category.slug
                          : typeof latestPost.category === 'string' ||
                              typeof latestPost.category === 'number'
                            ? latestPost.category
                            : 'news'
                      }/${latestPost.slug}`}
                      key={latestPost.id}
                      className="group flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg transition"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 group-hover:text-[#003566] transition line-clamp-3">
                          {latestPost.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(latestPost.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* More from Category */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">More Publications</h3>
                <div className="space-y-3">
                  <Link
                    href="/latest-stories"
                    className="block text-sm text-gray-700 hover:text-[#003566] transition"
                  >
                    Browse All Stories
                  </Link>
                  <Link
                    href="/politics"
                    className="block text-sm text-gray-700 hover:text-[#003566] transition"
                  >
                    Politics
                  </Link>
                  <Link
                    href="/news"
                    className="block text-sm text-gray-700 hover:text-[#003566] transition"
                  >
                    News
                  </Link>
                  <Link
                    href="/advertise-with-us"
                    className="block text-sm text-gray-700 hover:text-[#003566] transition"
                  >
                    Advertise With Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Related Posts Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="container mx-auto px-6 pb-4 max-w-7xl">
          <div className="mt-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  href={`/${
                    typeof relatedPost.category === 'object' &&
                    relatedPost.category !== null &&
                    'slug' in relatedPost.category
                      ? relatedPost.category.slug
                      : typeof relatedPost.category === 'string' ||
                          typeof relatedPost.category === 'number'
                        ? relatedPost.category
                        : 'news'
                  }/${relatedPost.slug}`}
                  key={relatedPost.id}
                  className="group"
                >
                  <div className="bg-white shadow-md overflow-hidden h-full transition transform hover:translate-y-1 hover:shadow-lg">
                    <div className="relative h-48 w-full">
                      {relatedPost.thumbnail ? (
                        <Image
                          src={
                            typeof relatedPost.thumbnail === 'object' && relatedPost.thumbnail.url
                              ? relatedPost.thumbnail.url
                              : '/bg.jpg'
                          }
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-r from-[#003566] to-[#0077b6]"></div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {new Date(relatedPost.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#003566] transition">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const allPosts = await fetchAllPosts(1, 100)
    return allPosts.posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}
