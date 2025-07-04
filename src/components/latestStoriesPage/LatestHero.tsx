import React from 'react'

export default function LatestHero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden  flex items-center">
      {/* Floating news elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-8 h-8 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-24 w-6 h-6 bg-blue-200 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-24 left-32 w-10 h-10 bg-white rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-16 right-16 w-4 h-4 bg-blue-100 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-500 rounded-full text-sm font-medium animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            LIVE UPDATES
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent tracking-tight">
            Latest News
          </h1>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-transparent rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-400 to-transparent rounded-full opacity-20 transform -translate-x-24 translate-y-24"></div>
    </section>
  )
}
