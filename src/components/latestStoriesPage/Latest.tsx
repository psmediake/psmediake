import React from 'react'
import { Articles } from '@/types/types'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Latest({ post }: { post: Articles }) {
  return (
    <div>
      <article className="bg-white transition-all duration-300 overflow-hidden">
        {/* Article Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden">
          {post.image ? (
            <Image
              fill
              src={typeof post.image === 'string' ? post.image : post.image?.url}
              alt={post.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-300 opacity-50">
                {post.title.charAt(0)}
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <Link
            href={`/${
              typeof post.category === 'object' && post.category !== null && 'slug' in post.category
                ? post.category.slug
                : typeof post.category === 'string' || typeof post.category === 'number'
                  ? post.category
                  : 'news'
            }/${post.slug}`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#0763fe] hover:underline transition-colors">
              {post.title}
            </h3>
          </Link>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

          {/* post Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <span className="font-medium">
              {typeof post.author === 'number'
                ? post.author
                : post.author && typeof post.author === 'object' && 'name' in post.author
                  ? post.author.name
                  : ''}
            </span>
            <div className="flex items-center gap-4">
              <span>{post.publishedAt}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
