import React from 'react'
import { Calendar, Clock, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Articles } from '@/types/types'
import EmptyState from './EmptyState'

export default function EntertainmentNewsSection({ posts }: { posts: Articles[] }) {
  const entertainmentNews = posts.filter((post) => {
    if (typeof post.category === 'object' && 'name' in post.category) {
      return post.category.name === 'Entertainment'
    }
    return false
  })

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-start mb-12 flex items-center justify-between border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 shadow-lg border border-purple-100/50 bg-white/80 backdrop-blur-sm">
            <div className="w-3 h-5 bg-gradient-to-b from-blue-900 to-orange-400 rounded-full animate-pulse"></div>
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
              Entertainment
            </h2>
          </div>
          <div>
            <Link
              href="#"
              className="text-blue-900 inline-flex items-center gap-2 font-medium hover:scale-105 transition-all duration-300 group"
            >
              <span>View All</span>
              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <svg
                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* News Grid */}
        {entertainmentNews.length === 0 ? (
          <EmptyState category={'entertainment'} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entertainmentNews.slice(0, 6).map((article, index) => (
              <article
                key={article.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-blue-100/60 hover:border-blue-200/80 hover:-translate-y-2 hover:bg-white group relative">
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
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
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                    />

                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20`}
                      >
                        {typeof article.category === 'object' &&
                        article.category !== null &&
                        'name' in article.category
                          ? article.category.name
                          : ''}
                      </span>
                    </div>

                    {/* Enhanced Trending Badge */}
                    {article.trending && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                          <Zap className="w-3 h-3" />
                          HOT
                        </span>
                      </div>
                    )}

                    {/* Enhanced Views Counter */}
                    <div className="absolute bottom-4 right-4"></div>

                    {/* Read time indicator */}
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full border border-white/40">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{article.publishedAt}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-3 leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/80">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-orange-400 rounded-full flex items-center justify-center shadow-md ring-1 ring-white">
                          <span className="text-xs font-bold text-white">
                            {typeof article.author === 'object' &&
                            article.author !== null &&
                            'name' in article.author
                              ? article.author.name.charAt(0)
                              : String(article.author).charAt(0)}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-700 block">
                            {typeof article.author === 'object' &&
                            article.author !== null &&
                            'name' in article.author
                              ? article.author.name
                              : String(article.author)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        <span>Read</span>
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
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
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
