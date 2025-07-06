import Link from 'next/link'
import React from 'react'

export default function EmptyState({ category }: { category: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-8">
      <div className="relative mb-8">
        {/* Animated Sports Icons */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/10 to-red-500/10 animate-pulse"></div>

          {/* Sports Icon */}
          <div className="relative z-10 text-orange-400">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-bounce"></div>
          <div
            className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-orange-400 to-red-400 rounded-full animate-bounce"
            style={{ animationDelay: '0.5s' }}
          ></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        No <span className="capitalize">{category}</span> News Yet
      </h3>
      <p className="text-gray-400 text-center mb-8 max-w-md leading-relaxed">
        We{"'"}re working on bringing you the latest {category} updates. Check back soon for
        exciting news from the world of athletics, football, basketball, and more!
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/newsletter-registration"
          className="px-6 py-3 bg-[#0763fe] text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
        >
          Subscribe for Updates
        </Link>
      </div>
    </div>
  )
}
