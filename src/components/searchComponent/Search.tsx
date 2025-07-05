'use client'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

function Search() {
  const [query, setQuery] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Redirect to search results page with query parameter
    router.push(`/search?q=${encodeURIComponent(query)}`)
    setIsExpanded(false) // Close search on mobile after search
  }

  const handleFocus = () => {
    setIsExpanded(true)
  }

  const handleBlur = () => {
    // Only close if there's no query
    if (!query.trim()) {
      setIsExpanded(false)
    }
  }

  return (
    <>
      {/* Desktop Search */}
      <div className="hidden md:block">
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0763fe] focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0763fe] transition-colors duration-200"
            >
              <BsSearch size={16} />
            </button>
          </div>
        </form>
      </div>

      {/* Mobile Search Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
          aria-label="Toggle search"
        >
          <BsSearch size={20} />
        </button>
      </div>

      {/* Mobile Search Dropdown */}
      {isExpanded && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search books, stationery, lab equipment..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0763fe] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0763fe] transition-colors duration-200"
                >
                  <BsSearch size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
