import React from 'react'
import { Play, Star, Calendar, Clock, Users, Zap, Award, Camera } from 'lucide-react'
import Image from 'next/image'

export default function EntertainmentNewsSection() {
  const entertainmentNews = [
    {
      id: 1,
      title: 'Marvel Announces Phase 6 Slate with Unexpected Twists',
      excerpt:
        'Kevin Feige reveals surprising character returns and brand new storylines that will reshape the MCU forever.',
      author: 'Emma Johnson',
      publishedAt: '1 hour ago',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Movies',
      trending: true,
      featured: true,
      views: '12.5K',
    },
    {
      id: 2,
      title: 'Grammy Awards 2025: Complete Winners List',
      excerpt:
        'Billie Eilish dominates the night with 4 wins while newcomers shake up traditional categories.',
      author: 'Marcus Rodriguez',
      publishedAt: '2 hours ago',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Music',
      trending: true,
      featured: false,
      views: '8.9K',
    },
    {
      id: 3,
      title: 'Netflix Cancels Three Major Series Despite Fan Campaigns',
      excerpt:
        'Streaming giant makes controversial decisions affecting millions of viewers and beloved characters.',
      author: 'Sofia Chen',
      publishedAt: '3 hours ago',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'TV Shows',
      trending: false,
      featured: true,
      views: '15.2K',
    },
    {
      id: 4,
      title: 'Celebrity Chef Opens Revolutionary Plant-Based Restaurant',
      excerpt:
        'Gordon Ramsay surprises food world with sustainable cuisine venture in downtown Los Angeles.',
      author: 'Alex Thompson',
      publishedAt: '4 hours ago',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Celebrity',
      trending: false,
      featured: false,
      views: '6.7K',
    },
    {
      id: 5,
      title: 'Gaming Industry Reaches $200B Milestone',
      excerpt:
        'Mobile gaming drives unprecedented growth as virtual reality finally finds mainstream appeal.',
      author: 'Jordan Kim',
      publishedAt: '5 hours ago',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Gaming',
      trending: true,
      featured: false,
      views: '9.3K',
    },
    {
      id: 6,
      title: 'Broadway Revival Season Sets New Attendance Records',
      excerpt:
        'Classic musicals return with modern twists, drawing diverse audiences back to theater district.',
      author: 'Isabella Davis',
      publishedAt: '6 hours ago',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Theater',
      trending: false,
      featured: false,
      views: '4.1K',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-start mb-12 flex items-center justify-between border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-3 rounded-2xl px-6 py-3 shadow-lg border border-purple-100/50 bg-white/80 backdrop-blur-sm">
            <div className="w-3 h-5 bg-gradient-to-b from-blue-900 to-orange-400 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">
              Entertainment
            </h2>
            <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-900 to-orange-400 rounded-full">
              <Star className="w-3 h-3 text-white" />
              <span className="text-xs font-bold text-white">HOT</span>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="text-blue-900 inline-flex items-center gap-2 font-medium hover:scale-105 transition-all duration-300 group"
            >
              <span>View All Entertainment</span>
              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <svg
                  className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entertainmentNews.slice(0, 6).map((article, index) => (
            <article
              key={article.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/90 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-blue-100/60 hover:border-blue-200/80 hover:-translate-y-2 hover:bg-white group relative">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    fill
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />

                  {/* Enhanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r text-white text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20`}
                    >
                      {article.category}
                    </span>
                  </div>

                  {/* Enhanced Trending Badge */}
                  {article.trending && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                        <Zap className="w-3 h-3" />
                        HOT
                      </span>
                    </div>
                  )}

                  {/* Enhanced Views Counter */}
                  <div className="absolute bottom-4 right-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20">
                      <Users className="w-3 h-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>

                  {/* Read time indicator */}
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium rounded-full border border-white/40">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <Calendar className="w-3 h-3" />
                    <span className="font-medium">{article.publishedAt}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-3 leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100/80">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-orange-400 rounded-full flex items-center justify-center shadow-md ring-1 ring-white">
                        <span className="text-xs font-bold text-white">
                          {article.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-700 block">
                          {article.author}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      <span>Read</span>
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
