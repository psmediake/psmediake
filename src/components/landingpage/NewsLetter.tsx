'use client'
import React, { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  const resetForm = () => {
    setIsSubscribed(false)
    setEmail('')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-md mx-auto px-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 overflow-hidden">
          <div className="p-8 text-center">
            {!isSubscribed ? (
              <div>
                {/* Minimal Icon */}
                <div className="w-8 h-8 bg-gradient-to-r from-[#0763fe] to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Smaller Heading */}
                <h2 className="text-lg font-medium text-gray-900 mb-2">Stay Informed</h2>

                <p className="text-sm text-gray-500 mb-6">Get updates delivered to your inbox</p>

                {/* Compact Input and Button */}
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:border-[#0763fe] focus:outline-none transition-colors duration-200 bg-white"
                  />
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !email}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-[#0763fe] to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <svg
                          className="w-3 h-3"
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
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">You{"'"}re subscribed</h3>
                <p className="text-sm text-gray-500 mb-4">Check your inbox for confirmation</p>
                <button
                  onClick={resetForm}
                  className="text-[#0763fe] text-sm font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
