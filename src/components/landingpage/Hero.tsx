'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Articles } from '@/types/types'

export default function NewsHeroSection({ posts }: { posts: Articles[] }) {
  const featured = posts.filter((post) => post.featured)
  const leftStories = posts.slice(0, 2)
  const rightStories = posts.slice(3, 5)

  return (
    <section className="bg-gray-50 pb-8">
      {/* Latest News Navigation Link */}
      <div className="max-w-7xl 2xl:max-w-max mx-auto px-4 sm:px-6 lg:px-8 2xl:px-40 pt-4 mb-2">
        <div className="flex justify-end items-center">
          <Link
            href="/latest-stories"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Show More Latest News
          </Link>
        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-max mx-auto px-4 sm:px-6 lg:px-8 2xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Left Column - Side Stories */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {leftStories.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden hidden md:block">
                    <Image
                      src={
                        typeof post.image === 'object' && post.image !== null && 'url' in post.image
                          ? post.image.url
                          : typeof post.image === 'string'
                            ? post.image
                            : '/berlin.jpg'
                      }
                      alt={post.title}
                      fill
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2">
                    {/* Category */}
                    <span className="inline-block px-2 py-1 bg-navy-100 text-navy-800 text-xs font-medium rounded">
                      {typeof post.category === 'object' &&
                      post.category !== null &&
                      'name' in post.category
                        ? post.category.name
                        : typeof post.category === 'string' || typeof post.category === 'number'
                          ? post.category
                          : ''}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-2">
                      <Link
                        href={`/${
                          typeof post.category === 'object' &&
                          post.category !== null &&
                          'slug' in post.category
                            ? post.category.slug
                            : typeof post.category === 'string' || typeof post.category === 'number'
                              ? post.category
                              : 'news'
                        }/${post.slug}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-medium">
                        {typeof post.author === 'object' &&
                        post.author !== null &&
                        'name' in post.author
                          ? post.author.name
                          : post.author}
                      </span>
                      <span>•</span>
                      <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Center Column - Featured Carousel */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 overflow-hidden">
              <Carousel
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
              >
                <CarouselContent>
                  {featured.map((post, index) => (
                    <CarouselItem key={post.id}>
                      <article className="group">
                        {/* Featured Image */}
                        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                          <Image
                            src={
                              typeof post.image === 'object' &&
                              post.image !== null &&
                              'url' in post.image
                                ? post.image.url
                                : typeof post.image === 'string'
                                  ? post.image
                                  : '/berlin.jpg'
                            }
                            alt={post.title}
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            priority={index === 0}
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          {/* Category */}
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded">
                            {typeof post.category === 'object' &&
                            post.category !== null &&
                            'name' in post.category
                              ? post.category.name
                              : typeof post.category === 'string' ||
                                  typeof post.category === 'number'
                                ? post.category
                                : ''}
                          </span>

                          {/* Title */}
                          <h1 className="text-lg sm:text-xl font-bold leading-tight text-gray-900">
                            <Link
                              href={`/${
                                typeof post.category === 'object' &&
                                post.category !== null &&
                                'slug' in post.category
                                  ? post.category.slug
                                  : typeof post.category === 'string' ||
                                      typeof post.category === 'number'
                                    ? post.category
                                    : 'news'
                              }/${post.slug}`}
                              className="hover:text-blue-600 transition-colors duration-200"
                            >
                              {post.title}
                            </Link>
                          </h1>

                          {/* Excerpt */}
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Meta and CTA */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-xs font-semibold text-gray-700">
                                  {typeof post.author === 'object' &&
                                  post.author !== null &&
                                  'name' in post.author
                                    ? post.author.name.charAt(0)
                                    : String(post.author).charAt(0)}
                                </span>
                              </div>
                              <span className="font-medium">
                                {typeof post.author === 'object' &&
                                post.author !== null &&
                                'name' in post.author
                                  ? post.author.name
                                  : post.author}
                              </span>
                              <span>•</span>
                              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                              <span>•</span>
                              <span>{post.readTime} min</span>
                            </div>

                            <Link
                              href={`/news/${post.slug}`}
                              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                            >
                              Read more
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Carousel Controls */}
                {featured.length > 1 && (
                  <>
                    <CarouselPrevious className="left-3 bg-white/90 border-gray-300 text-gray-700 hover:bg-white shadow-md" />
                    <CarouselNext className="right-3 bg-white/90 border-gray-300 text-gray-700 hover:bg-white shadow-md" />
                  </>
                )}
              </Carousel>
            </div>
          </div>

          {/* Right Column - Side Stories */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {rightStories.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  {/* Image */}
                  <div className="relative h-32 overflow-hidden hidden md:block">
                    <Image
                      src={
                        typeof post.image === 'object' && post.image !== null && 'url' in post.image
                          ? post.image.url
                          : typeof post.image === 'string'
                            ? post.image
                            : '/berlin.jpg'
                      }
                      alt={post.title}
                      fill
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2">
                    {/* Category */}
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                      {typeof post.category === 'object' &&
                      post.category !== null &&
                      'name' in post.category
                        ? post.category.name
                        : typeof post.category === 'string' || typeof post.category === 'number'
                          ? post.category
                          : ''}
                    </span>

                    {/* Title */}
                    <h3 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-2">
                      <Link
                        href={`/${
                          typeof post.category === 'object' &&
                          post.category !== null &&
                          'slug' in post.category
                            ? post.category.slug
                            : typeof post.category === 'string' || typeof post.category === 'number'
                              ? post.category
                              : 'news'
                        }/${post.slug}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-medium">
                        {typeof post.author === 'object' &&
                        post.author !== null &&
                        'name' in post.author
                          ? post.author.name
                          : post.author}
                      </span>
                      <span>•</span>
                      <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .bg-navy-100 {
          background-color: #e0e7ff;
        }
        .text-navy-800 {
          color: #1e40af;
        }
      `}</style>
    </section>
  )
}
