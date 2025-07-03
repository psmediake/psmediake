'use client'
import React from 'react'
import Image from 'next/image'
import { Articles } from '@/types/types'
import EmptyState from './EmptyState'

export default function SportsSection({ posts }: { posts: Articles[] }) {
  const sportsPosts = posts.filter((post) => {
    if (typeof post.category === 'object' && 'name' in post.category) {
      return post.category.name === 'Sports'
    }
    return false
  })

  const colors = {
    Athletics: 'from-green-500 to-emerald-600',
    Football: 'from-blue-500 to-cyan-600',
    Rugby: 'from-red-500 to-rose-600',
    Basketball: 'from-orange-500 to-amber-600',
    Swimming: 'from-teal-500 to-cyan-600',
    Tennis: 'from-purple-500 to-violet-600',
  }

  const getCategoryColor = (subcategory: keyof typeof colors | string) => {
    return colors[subcategory as keyof typeof colors] || 'from-gray-500 to-slate-600'
  }

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-start mb-12 flex items-center justify-between border-b border-gray-700 pb-4">
          <div className="inline-flex items-center gap-3 rounded-2xl px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
            <div className="w-2 h-4 bg-gradient-to-b from-orange-500 to-red-600 rounded-full animate-pulse"></div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Sports
            </h2>
            {sportsPosts.length > 0 && (
              <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">
                {sportsPosts.length}
              </span>
            )}
          </div>

          {sportsPosts.length > 0 && (
            <div>
              <a
                href="#"
                className="text-orange-400 mt-2 inline-block hover:scale-105 transition-transform duration-300 hover:text-orange-300"
              >
                View All
                <span>
                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          )}
        </div>

        {/* Conditional Rendering: Empty State or Sports Grid */}
        {sportsPosts.length === 0 ? (
          <EmptyState category={'sports'} />
        ) : (
          <>
            {/* Sports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsPosts.slice(0, 6).map((article, index) => (
                <article
                  key={article.id}
                  className="group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <a href="#" className="block">
                    <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:border-[#0763fe]/80 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-gray-700/90 hover:to-gray-800/90">
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
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Dramatic Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${getCategoryColor(
                              String(article.subcategory),
                            )} text-white text-xs font-bold rounded-lg shadow-lg border border-white/20`}
                          >
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            {typeof article.subcategory === 'object' &&
                            article.subcategory !== null &&
                            'name' in article.subcategory
                              ? article.subcategory
                              : String(article.subcategory)}
                          </span>
                        </div>

                        {/* Bottom overlay with score/time */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <div className="flex items-center gap-2 text-xs text-white/80">
                            <div className="bg-black/40 rounded-full px-2 py-1 backdrop-blur-sm">
                              <span className="font-medium">{article.publishedAt}</span>
                            </div>
                            <div className="bg-black/40 rounded-full px-2 py-1 backdrop-blur-sm">
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2.5 leading-snug line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-7 h-7 bg-gradient-to-r ${getCategoryColor(
                                typeof article.subcategory === 'object' &&
                                  article.subcategory !== null &&
                                  'name' in article.subcategory
                                  ? article.subcategory
                                  : '',
                              )} rounded-full flex items-center justify-center shadow-sm`}
                            >
                              <span className="text-xs font-bold text-white">
                                {typeof article.author === 'object' &&
                                article.author !== null &&
                                'name' in article.author
                                  ? String(article.author.name).charAt(0)
                                  : String(article.author).charAt(0)}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-300">
                              {' '}
                              {typeof article.author === 'object' &&
                              article.author !== null &&
                              'name' in article.author
                                ? String(article.author.name)
                                : String(article.author)}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-orange-400 text-sm font-medium group-hover:gap-2 transition-all duration-300">
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
                  </a>
                </article>
              ))}
            </div>

            {/* Show More Button for additional posts */}
            {sportsPosts.length > 6 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Load More Sports News
                  <span className="ml-2">({sportsPosts.length - 6} more)</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        article {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
