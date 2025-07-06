'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Articles } from '@/types/types'

export default function NewsCategoriesSection({ posts }: { posts: Articles[] }) {
  const newsPosts = posts.filter((post) => {
    if (typeof post.category === 'object' && 'name' in post.category) {
      return post.category.name === 'Politics'
    }
    return false
  })

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-max 2xl:px-40">
        {/* Section Header */}
        <div className="text-start mb-12 flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="inline-flex items-center gap-3 rounded-2xl px-4 py-2 shadow-lg border border-blue-100/50">
            <div className="w-2 h-4 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Politics
            </h2>
          </div>
          <div>
            <Link
              href="/politics"
              className="text-blue-600 mt-2 inline-block hover:scale-105 transition-transform duration-300"
            >
              View All{' '}
              <span>
                <svg className="inline-block w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.slice(0, 6).map((article, index) => (
            <article
              key={article.id}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link
                href={`/${
                  typeof article.category === 'object' &&
                  article.category !== null &&
                  'slug' in article.category
                    ? article.category.slug
                    : typeof article.category === 'string' || typeof article.category === 'number'
                      ? article.category
                      : 'news'
                }/${article.slug}`}
                className="block"
              >
                <div className="bg-white/80 md:h-[80vh] 2xl:h-[60vh] backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#0763fe]/50 hover:border-blue-200/50 hover:-translate-y-2 hover:bg-white">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      fill
                      src={
                        typeof article.image === 'object' &&
                        article.image !== null &&
                        'url' in article.image
                          ? article.image.url
                          : typeof article.image === 'string'
                            ? article.image
                            : '/berlin.jpg'
                      }
                      alt={article.title}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                    {/* News Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full border border-white/20">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        News
                      </span>
                    </div>

                    {/* Trending Badge */}
                    {article.trending && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full shadow-lg">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            />
                          </svg>
                          Trending
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <span className="font-medium">{article.publishedAt}</span>
                      <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-2.5 leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs font-bold text-white">
                            {typeof article.author === 'object' &&
                            article.author !== null &&
                            'name' in article.author
                              ? String(article.author.name).charAt(0)
                              : String(article.author).charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {typeof article.author === 'object' &&
                          article.author !== null &&
                          'name' in article.author
                            ? String(article.author.name)
                            : String(article.author)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all duration-300">
                        <span>Read</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
