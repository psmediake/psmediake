'use client'
import { AlertCircle } from 'lucide-react'
import React, { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setSubscribed] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    // Reset notification states
    setSubscribed(false)
    setAlreadySubscribed(false)

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.status === 409) {
        // Show already subscribed notification instead of alert
        setAlreadySubscribed(true)
        setTimeout(() => setAlreadySubscribed(false), 5000)
      } else if (res.ok) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        alert(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (error) {
      alert('Failed to subscribe. Please try again later.')
      console.error(error)
    }
  }

  const resetForm = () => {
    setSubscribed(false)
    setEmail('')
  }

  return (
    <section className="flex items-center justify-center py-8 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="w-full max-w-6xl 2xl:max-w-full">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl shadow-gray-200/30 overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[500px]">
            {/* Left Column - Form */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              {!isSubscribed ? (
                <div className="space-y-8 max-w-md mx-auto w-full">
                  {/* Enhanced Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0763fe] via-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                      <svg
                        className="w-7 h-7 text-white"
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
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#0763fe]/30 to-blue-600/30 rounded-2xl blur-xl -z-10"></div>
                  </div>

                  {/* Form Header */}
                  <div className="space-y-4 text-left">
                    <h2 className="text-3xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                      Stay Informed
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Join thousands of subscribers and never miss our latest updates
                    </p>
                  </div>

                  {/* Form */}
                  <div className="space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="relative group">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full px-6 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-[#0763fe] focus:outline-none transition-all duration-300 bg-white/90 backdrop-blur-sm placeholder-gray-400 group-hover:border-gray-300 focus:ring-4 focus:ring-[#0763fe]/10"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0763fe]/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full px-8 py-4 bg-gradient-to-r from-[#0763fe] via-blue-500 to-blue-600 text-white text-base font-semibold rounded-xl hover:shadow-xl hover:shadow-[#0763fe]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-[#0763fe]/20 focus:outline-none"
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Subscribing...</span>
                          </div>
                        ) : (
                          <>
                            <span>Subscribe Now</span>
                            <svg
                              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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

                      {/* Already subscribed notification */}
                      {alreadySubscribed && (
                        <div className="mt-4 px-4 py-3 bg-[#0763fe] bg-opacity-20 rounded-md border-l-4 border-[#0763fe] animate-fade-in flex items-start">
                          <AlertCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-white text-sm font-medium">Already Subscribed</p>
                            <p className="text-white/80 text-sm">
                              This email is already in our subscriber list. Thank you for your
                              continued interest!
                            </p>
                          </div>
                        </div>
                      )}
                    </form>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pt-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>100% Secure</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>No Spam Promise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <span>Unsubscribe Anytime</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 max-w-md mx-auto w-full text-center">
                  {/* Success animation */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl animate-pulse">
                      <svg
                        className="w-9 h-9 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-green-400/40 to-green-600/40 rounded-full mx-auto blur-xl -z-10"></div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900">Welcome aboard!</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Check your inbox for a confirmation email and get ready for amazing content
                    </p>

                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-3 text-[#0763fe] text-base font-semibold hover:text-blue-700 transition-colors duration-200 mt-8 px-6 py-3 rounded-xl hover:bg-[#0763fe]/5"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Subscribe another email
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Content */}
            <div className="bg-gradient-to-br from-[#0763fe]/5 via-blue-50/50 to-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 right-10 w-32 h-32 bg-[#0763fe] rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    Why join our newsletter?
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0763fe] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Latest Updates First</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Get breaking news and important updates delivered directly to your inbox
                          before anyone else.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0763fe] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expert Insights</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Access exclusive content, expert analysis, and insider tips you won{"'"}t
                          find anywhere else.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0763fe] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Weekly Digest</h4>
                        <p className="text-gray-600 leading-relaxed">
                          Receive a curated weekly summary of the most important news and trends in
                          your industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0763fe] mb-1">50K+</div>
                    <div className="text-sm text-gray-600">Active Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#0763fe] mb-1">4.9★</div>
                    <div className="text-sm text-gray-600">Average Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
