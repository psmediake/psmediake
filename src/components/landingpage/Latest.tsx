'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Latest() {
  const latestNews = [
    {
      id: 1,
      title: 'Digital Banking Revolution Transforms Rural Kenya',
      excerpt:
        'Mobile money services reach unprecedented adoption rates in remote areas, bringing financial inclusion to millions.',
      category: 'Technology',
      author: 'James Mwangi',
      publishedAt: '1 hour ago',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Sustainable Farming Practices Boost Crop Yields',
      excerpt:
        'Local farmers adopt innovative techniques leading to 40% increase in agricultural productivity across the region.',
      category: 'Agriculture',
      author: 'Mary Wanjiku',
      publishedAt: '2 hours ago',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Youth Entrepreneurship Program Launches Nationwide',
      excerpt:
        'Government initiative aims to support young entrepreneurs with funding and mentorship opportunities.',
      category: 'Business',
      author: 'Peter Kimani',
      publishedAt: '3 hours ago',
      readTime: '2 min read',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Green Energy Initiative Powers 200 Schools',
      excerpt:
        'Solar panel installations bring reliable electricity to educational institutions in underserved communities.',
      category: 'Environment',
      author: 'Sarah Ochieng',
      publishedAt: '4 hours ago',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Healthcare Mobile Clinics Reach Remote Areas',
      excerpt:
        'Innovative healthcare delivery system brings medical services to communities previously without access.',
      category: 'Health',
      author: "Dr. Grace Nyong'o",
      publishedAt: '5 hours ago',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Cultural Heritage Sites Receive UNESCO Recognition',
      excerpt:
        'Three additional Kenyan sites added to World Heritage List, boosting tourism and conservation efforts.',
      category: 'Culture',
      author: 'Michael Kamau',
      publishedAt: '6 hours ago',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Tech Hub Expansion Creates 5,000 New Jobs',
      excerpt:
        'Major technology companies establish regional headquarters, spurring economic growth and innovation.',
      category: 'Technology',
      author: 'David Omondi',
      publishedAt: '7 hours ago',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      title: 'Wildlife Conservation Efforts Show Remarkable Success',
      excerpt:
        'Endangered species populations recover thanks to community-based conservation initiatives.',
      category: 'Environment',
      author: 'Jane Akinyi',
      publishedAt: '8 hours ago',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      title: 'Education Technology Transforms Learning Experience',
      excerpt:
        'Interactive digital platforms improve student engagement and learning outcomes across the country.',
      category: 'Education',
      author: 'Robert Wafula',
      publishedAt: '9 hours ago',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {latestNews.slice(0, 4).map((article) => (
            <article key={article.id} className="group">
              <Link href="#" className="block">
                <div className="bg-white hover:bg-gray-50 transition-all duration-300 overflow-hidden border-2 border-white hover:border-[#0763fe]/30">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      fill
                      src={article.image}
                      alt={article.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-block px-2 py-1 bg-[#0763fe] text-white text-xs font-semibold uppercase tracking-wide rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{article.publishedAt}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0763fe] transition-colors duration-200 mb-2 leading-tight line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#0763fe]/10 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-[#0763fe]">
                            {article.author.charAt(0)}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-700 truncate">
                          {article.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-[#0763fe] text-xs font-semibold group-hover:gap-1.5 transition-all duration-200">
                        <span>Read</span>
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
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
