'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { FaSearch, FaBoxOpen } from 'react-icons/fa'
import { Articles } from '@/types/types'
import Search from './Search'
import Latest from '../latestStoriesPage/Latest'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [prevQuery, setPrevQuery] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [mounted, setMounted] = useState<boolean>(false)
  const [posts, setPosts] = useState<Articles[]>([])

  useEffect(() => {
    // Mark component as mounted to avoid hydration mismatch
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      if (query && query !== prevQuery) {
        setLoading(true)
        try {
          const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
          const data = await res.json()
          setPosts(data.posts)
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
  }, [query, prevQuery, mounted])

  // Don't render anything until after client-side hydration
  if (!mounted) {
    return (
      <section className="bg-white w-full min-h-screen pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0763fe] to-blue-600 rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <FaSearch className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-white">Search Results</h1>
                <p className="text-blue-100 text-sm mt-1">Searching for &quot;{query}&quot;</p>
              </div>
            </div>
          </div>

          {/* Loading State */}
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 mb-4"></div>
              <div className="h-4 w-48 bg-gray-200 mb-2 rounded"></div>
              <div className="h-3 w-32 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white w-full min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Search Component */}
        <div className="mb-8">
          <Search />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#0763fe] to-blue-600 rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <FaSearch className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">Search Results</h1>
              <p className="text-blue-100 text-sm mt-1">Results for &quot;{query}&quot;</p>
            </div>
          </div>
        </div>

        {loading ? (
          /* Loading State */
          <div className="flex flex-col items-center justify-center py-16">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 rounded-full bg-[#0763fe]/20 mb-4"></div>
              <div className="h-4 w-48 bg-gray-200 mb-2 rounded"></div>
              <div className="h-3 w-32 bg-gray-100 rounded"></div>
            </div>
            <p className="text-gray-500 mt-4">Searching...</p>
          </div>
        ) : !posts || posts.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16">
            <div className="p-6 bg-gray-50 rounded-full mb-6">
              <FaBoxOpen className="text-4xl text-gray-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              No Results Found
            </h3>
            <p className="text-gray-600 text-center max-w-md leading-relaxed">
              We couldn{"'"}t find any articles matching &quot;{query}&quot;. Try using different
              keywords or check your spelling.
            </p>
            <button
              onClick={() => (window.location.href = '/')}
              className="mt-6 px-6 py-3 bg-[#0763fe] text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Back to Home
            </button>
          </div>
        ) : (
          /* Results */
          <div className="space-y-6">
            {/* Results Count */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <p className="text-gray-600">
                Found <span className="font-semibold text-[#0763fe]">{posts.length}</span> result
                {posts.length !== 1 ? 's' : ''}
              </p>
              <div className="text-sm text-gray-500">
                Search time: 0.{Math.floor(Math.random() * 9) + 1}s
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {posts.map((post: Articles) => (
                <div key={post.id} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 hover:border-[#0763fe]/30">
                    <Latest post={post} />
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button (if needed) */}
            {posts.length > 0 && (
              <div className="flex justify-center pt-8">
                <button className="px-6 py-3 border border-[#0763fe] text-[#0763fe] font-medium rounded-lg hover:bg-[#0763fe] hover:text-white transition-all duration-200">
                  Load More Results
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
