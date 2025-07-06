'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Articles } from '@/types/types'

export default function Latest({ posts }: { posts: Articles[] }) {
  const breakingNews = posts.filter((post) => post.breakingNews === true).slice(0, 8)

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-max 2xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {breakingNews.map((post) => (
            <article key={post.id} className="group">
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
                className="block"
              >
                <div className="bg-white hover:bg-gray-50 transition-all duration-300 overflow-hidden border-2 border-white hover:border-[#0763fe]/30">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      fill
                      src={
                        typeof post.image === 'object' && post.image !== null && 'url' in post.image
                          ? post.image.url
                          : typeof post.image === 'string'
                            ? post.image
                            : '/berlin.jpg'
                      }
                      alt={post.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-block px-2 py-1 bg-[#0763fe] text-white text-xs font-semibold uppercase tracking-wide rounded">
                        {typeof post.category === 'object' &&
                        post.category !== null &&
                        'name' in post.category
                          ? String(post.category.name)
                          : String(post.category)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0763fe] transition-colors duration-200 mb-2 leading-tight line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0763fe]/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-[#0763fe]">
                            {typeof post.author === 'object' &&
                            post.author !== null &&
                            'name' in post.author
                              ? String(post.author.name).charAt(0)
                              : String(post.author).charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-700 truncate">
                          {typeof post.author === 'object' &&
                          post.author !== null &&
                          'name' in post.author
                            ? String(post.author.name)
                            : String(post.author)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[#0763fe] text-xs font-semibold group-hover:gap-1.5 transition-all duration-200">
                        <span>Read</span>
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
