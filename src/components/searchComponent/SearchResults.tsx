'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { FaSearch, FaBoxOpen } from 'react-icons/fa'
import { Articles } from '@/types/types'
import PaginationComponent from '../navigation/PaginationComponent'
import Link from 'next/link'
import { Clock, ArrowRight, FileText } from 'lucide-react'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const currentPage = Number(searchParams.get('page')) || 1

  const [prevQuery, setPrevQuery] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [mounted, setMounted] = useState<boolean>(false)
  const [posts, setPosts] = useState<Articles[]>([])
  const [pagination, setPagination] = useState({
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    page: currentPage,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      if (query && (query !== prevQuery || pagination.page !== currentPage)) {
        setLoading(true)
        try {
          const res = await fetch(
            `/api/search?q=${encodeURIComponent(query)}&page=${currentPage}&limit=18`,
          )
          const { posts, pagination } = await res.json()
          setPosts(posts)
          setPagination(pagination)
        } catch (_) {
          setPosts([])
        } finally {
          setLoading(false)
          setPrevQuery(query)
        }
      } else if (mounted) {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [query, currentPage, prevQuery, mounted, pagination.page])

  if (!mounted) {
    return (
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 w-full min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-[#0763fe] to-blue-600 rounded-xl shadow-md">
                <FaSearch className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Search Results
                </h1>
                <p className="text-gray-600 mt-1">Searching for &quot;{query}&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-r from-[#0763fe] to-blue-600 rounded-xl shadow-md">
              <FaSearch className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Search Results
              </h1>
              <p className="text-gray-600 mt-1">Results for &quot;{query}&quot;</p>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-[#0763fe] rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-300 rounded-full animate-spin animate-reverse"></div>
            </div>
            <p className="text-gray-600 mt-6 text-lg font-medium">Searching...</p>
          </div>
        ) : !posts || posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="p-8 bg-white/60 backdrop-blur-sm rounded-2xl mb-6 border border-gray-200">
              <FaBoxOpen className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">No Results Found</h3>
            <p className="text-gray-600 text-center max-w-md leading-relaxed text-lg">
              We couldn&apos;t find any articles matching &quot;{query}&quot;. Try using different
              keywords or check your spelling.
            </p>
            <button
              onClick={() => (window.location.href = '/')}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-[#0763fe] to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Back to Home
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Results */}
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-2">
              {posts.map((post: Articles) => (
                <article
                  key={post.id}
                  className="group md:h-[45vh] bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
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
                          className="flex-1"
                        >
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-[#0763fe] transition-colors duration-300 leading-tight">
                            {post.title}
                          </h3>
                        </Link>

                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowRight className="w-5 h-5 text-[#0763fe]" />
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4 text-gray-500">
                          <span className="font-medium flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {typeof post.author === 'number'
                              ? post.author
                              : post.author &&
                                  typeof post.author === 'object' &&
                                  'name' in post.author
                                ? post.author.name
                                : 'Unknown'}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min read
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">{post.publishedAt}</span>
                          <div className="w-2 h-2 bg-[#0763fe] rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="pt-4">
              <PaginationComponent totalPages={pagination.totalPages} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
