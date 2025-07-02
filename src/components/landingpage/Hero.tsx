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

export default function NewsHeroSection({ posts }: { posts: any[] }) {
  const featured = posts.filter((post) => post.featured)
  const sideStories = posts.slice(0, 6)

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Featured Story */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 6000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {featured.map((post, index) => (
                    <CarouselItem key={post.id}>
                      <article className="group relative">
                        {/* Full Image with Overlay */}
                        <div className="relative h-[500px] sm:h-[550px] overflow-hidden">
                          <Image
                            src={typeof post.image === 'string' ? post.image : '/berlin.jpg'}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            priority={index === 0}
                          />

                          {/* Multi-layer gradient overlay for better text visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />

                          {/* Content overlay */}
                          <div className="absolute inset-0 flex flex-col justify-end p-8">
                            {/* Category badge */}
                            <div className="mb-4">
                              <span className="inline-flex items-center px-4 py-2 bg-[#0763fe] text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm">
                                {typeof post.category === 'object' &&
                                post.category !== null &&
                                'name' in post.category
                                  ? post.category.name
                                  : post.category}
                              </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-xl md:text-3xl xl:text-2xl font-bold mb-4 leading-tight text-white drop-shadow-2xl">
                              <Link
                                href="#"
                                className="hover:text-blue-200 transition-colors duration-300"
                              >
                                {post.title}
                              </Link>
                            </h1>

                            {/* Excerpt */}
                            <p className="text-gray-100 mb-6 text-lg leading-relaxed line-clamp-2 max-w-3xl drop-shadow-lg">
                              {post.excerpt}
                            </p>

                            {/* Meta info and CTA */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                              <div className="flex items-center gap-4">
                                {/* Author */}
                                <div className="flex items-center gap-3">
                                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                                    <span className="text-lg font-bold text-white">
                                      {typeof post.author === 'object' &&
                                      post.author !== null &&
                                      'name' in post.author
                                        ? post.author.name.charAt(0)
                                        : String(post.author).charAt(0)}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-white">
                                      {typeof post.author === 'object' &&
                                      post.author !== null &&
                                      'name' in post.author
                                        ? post.author.name
                                        : post.author}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-gray-200">
                                      <span>{post.publishedAt}</span>
                                      <span>•</span>
                                      <span>{post.readTime} min read</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Read More Button */}
                              <Link
                                href="#"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg group/btn"
                              >
                                <span>Read Full Story</span>
                                <svg
                                  className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
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
                        </div>
                      </article>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Enhanced Carousel Controls */}
                {featured.length > 1 && (
                  <>
                    <CarouselPrevious className="left-6 bg-white/90 backdrop-blur-sm border-white/20 text-gray-700 hover:bg-white hover:scale-110 shadow-xl transition-all duration-300" />
                    <CarouselNext className="right-6 bg-white/90 backdrop-blur-sm border-white/20 text-gray-700 hover:bg-white hover:scale-110 shadow-xl transition-all duration-300" />
                  </>
                )}
              </Carousel>
            </div>
          </div>

          {/* Enhanced Sidebar Stories */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {sideStories.map((post, index) => (
                <article key={post.id} className="group relative">
                  {/* Full Image with Overlay */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={typeof post.image === 'string' ? post.image : '/berlin.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />

                    {/* Multi-layer gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/20" />

                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      {/* Category badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-4 py-2 bg-[#0763fe] text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-sm">
                          {typeof post.category === 'object' &&
                          post.category !== null &&
                          'name' in post.category
                            ? post.category.name
                            : post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-xl md:text-3xl xl:text-2xl font-bold mb-4 leading-tight text-white drop-shadow-2xl">
                        <Link
                          href="#"
                          className="hover:text-blue-200 transition-colors duration-300"
                        >
                          {post.title}
                        </Link>
                      </h1>

                      {/* Excerpt */}
                      <p className="text-gray-100 mb-6 text-lg leading-relaxed line-clamp-2 max-w-3xl drop-shadow-lg">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-4">
d                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                              <span className="text-lg font-bold text-white">
                                {typeof post.author === 'object' &&
                                post.author !== null &&
                                'name' in post.author
                                  ? post.author.name.charAt(0)
                                  : String(post.author).charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {typeof post.author === 'object' &&
                                post.author !== null &&
                                'name' in post.author
                                  ? post.author.name
                                  : post.author}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-gray-200">
                                <span>{post.publishedAt}</span>
                                <span>•</span>
                                <span>{post.readTime} min read</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link
                          href="#"
                          className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg group/btn"
                        >
                          <span>Read Full Story</span>
                          <svg
                            className="w-5 h-5 transition-transform group-hover/btn:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
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
      `}</style>
    </section>
  )
}
