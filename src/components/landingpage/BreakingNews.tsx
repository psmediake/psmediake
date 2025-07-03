'use client'
import React, { useState, useEffect } from 'react'

export default function BreakingNews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  // Breaking news ticker items with timestamps and categories
  const breakingNews = [
    {
      text: 'Parliament approves new infrastructure budget',
      category: 'Politics',
      time: '2 min ago',
      urgent: true,
    },
    {
      text: 'Kenyan athletes prepare for upcoming international games',
      category: 'Sports',
      time: '15 min ago',
      urgent: false,
    },
    {
      text: 'New renewable energy project launched in Turkana',
      category: 'Environment',
      time: '32 min ago',
      urgent: false,
    },
    {
      text: 'Digital payment adoption reaches 85% nationwide',
      category: 'Technology',
      time: '1 hr ago',
      urgent: false,
    },
  ]

  // Auto-rotate news items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [breakingNews.length])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <section className="relative">
      {/* Main breaking news bar */}
      <div className="bg-gradient-to-r from-[#0763fe] via-blue-600 to-[#0763fe] text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
        </div>

        <div className="relative z-10 flex items-center justify-between py-3 px-4 max-w-7xl mx-auto ">
          {/* Left side - Breaking badge and content */}
          <div className="flex items-center flex-1 min-w-0">
            {/* Enhanced breaking badge */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="relative">
                <div className="px-4 py-2 font-bold text-xs uppercase tracking-wider bg-white text-[#0763fe] rounded-full shadow-lg transform transition-transform hover:scale-105">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Breaking
                  </div>
                </div>
                {/* Glow effect for urgent news */}
                {breakingNews[currentIndex].urgent && (
                  <div className="absolute inset-0 bg-red-500/30 rounded-full blur-md animate-ping"></div>
                )}
              </div>
            </div>

            {/* News content */}
            <div className="ml-6 flex-1 min-w-0">
              <div className="flex items-center gap-4">
                {/* Category badge */}
                <span className="px-2 py-1 text-xs font-medium bg-white/20 rounded-full whitespace-nowrap">
                  {breakingNews[currentIndex].category}
                </span>

                {/* News text with smooth transition */}
                <div className="flex-1 min-w-0 relative">
                  <p className="text-sm sm:text-base font-medium truncate transition-all duration-500 ease-in-out">
                    {breakingNews[currentIndex].text}
                  </p>
                </div>

                {/* Timestamp */}
                <span className="text-xs text-white/80 whitespace-nowrap hidden sm:block">
                  {breakingNews[currentIndex].time}
                </span>
              </div>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3 ml-4">
            {/* Navigation arrows */}
            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === 0 ? breakingNews.length - 1 : prev - 1))
                }
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
              >
                <svg
                  className="w-3 h-3 text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % breakingNews.length)}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
              >
                <svg
                  className="w-3 h-3 text-white group-hover:scale-110 transition-transform"
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
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 group ml-2"
            >
              <svg
                className="w-3 h-3 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-white/30 w-full">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / breakingNews.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
