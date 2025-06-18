'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsHeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Featured news stories for hero carousel
  const heroStories = [
    {
      id: 1,
      title: "Kenya's Economic Growth Reaches New Heights in 2025",
      excerpt:
        'The latest economic indicators show promising signs of recovery and expansion across key sectors, with technology and agriculture leading the charge.',
      category: 'Business',
      author: 'Sarah Wanjiku',
      publishedAt: '2 hours ago',
      readTime: '4 min read',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80',
    },
    {
      id: 2,
      title: 'Revolutionary Tech Startup from Nairobi Goes Global',
      excerpt:
        'Local innovation meets international markets as Kenyan entrepreneurs showcase their cutting-edge solutions on the world stage.',
      category: 'Technology',
      author: 'David Kimani',
      publishedAt: '4 hours ago',
      readTime: '3 min read',
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
    {
      id: 3,
      title: "Cultural Festival Celebrates Kenya's Rich Heritage",
      excerpt:
        'Communities across the country come together to showcase traditional arts, music, and crafts in a spectacular celebration of diversity.',
      category: 'Culture',
      author: "Grace Nyong'o",
      publishedAt: '6 hours ago',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    },
  ]

  // Breaking news ticker items
  const breakingNews = [
    'Parliament approves new infrastructure budget',
    'Kenyan athletes prepare for upcoming international games',
    'New renewable energy project launched in Turkana',
    'Digital payment adoption reaches 85% nationwide',
  ]

  // Side stories for the hero section
  const sideStories = [
    {
      id: 4,
      title: 'Climate Change Impact on East African Agriculture',
      category: 'Environment',
      author: 'Michael Ochieng',
      publishedAt: '8 hours ago',
      image:
        'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Healthcare Innovation in Rural Kenya',
      category: 'Health',
      author: 'Dr. Janet Mwangi',
      publishedAt: '10 hours ago',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Education Reform Shows Promising Results',
      category: 'Education',
      author: 'Peter Kamau',
      publishedAt: '12 hours ago',
      image:
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      title: 'Tourism Sector Shows Strong Recovery',
      category: 'Tourism',
      author: 'Mary Akinyi',
      publishedAt: '14 hours ago',
      image:
        'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroStories.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroStories.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroStories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroStories.length) % heroStories.length)
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Breaking News Ticker */}
      <div className="bg-[#0763fe] text-white py-3 overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 px-4 py-1.5 font-bold text-xs uppercase tracking-wide bg-white text-[#0763fe] rounded-full ml-4 z-10">
            Breaking
          </div>
          <div className="flex animate-scroll ml-6">
            {breakingNews.map((news, index) => (
              <span key={index} className="flex-shrink-0 text-sm mr-12 font-medium">
                {news}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Hero Story */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden shadow-2xl group bg-white">
              <div className="aspect-[16/10] relative">
                <Image
                  fill
                  src={heroStories[currentSlide].image}
                  alt={heroStories[currentSlide].title}
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Story Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1.5 bg-[#0763fe] text-xs font-bold uppercase tracking-wide rounded-md">
                    {heroStories[currentSlide].category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-200">
                    <span>{heroStories[currentSlide].publishedAt}</span>
                    <span>•</span>
                    <span>{heroStories[currentSlide].readTime}</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                  <a href="#" className="hover:text-blue-300 transition-colors duration-200">
                    {heroStories[currentSlide].title}
                  </a>
                </h1>

                <p className="text-gray-200 mb-4 text-base lg:text-lg leading-relaxed line-clamp-2 max-w-2xl">
                  {heroStories[currentSlide].excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-sm font-bold">
                        {heroStories[currentSlide].author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium">
                      By {heroStories[currentSlide].author}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-blue-300 transition-colors duration-200 group"
                  >
                    <span>Read Full Story</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                  </a>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Stories */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-[#0763fe] shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Latest Stories</h2>
                <Link href="#" className="text-[#0763fe] text-sm font-semibold hover:underline">
                  View All →
                </Link>
              </div>

              <div className="space-y-5">
                {sideStories.slice(0, 3).map((story, index) => (
                  <article key={story.id} className="group cursor-pointer">
                    <Link href="#" className="block">
                      <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            fill
                            src={story.image}
                            alt={story.title}
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="inline-block px-2 py-1 bg-[#0763fe]/10 text-[#0763fe] text-xs font-semibold rounded mb-2">
                            {story.category}
                          </span>

                          <h3 className="font-semibold text-gray-900 group-hover:text-[#0763fe] transition-colors duration-200 text-sm leading-snug line-clamp-2 mb-2">
                            {story.title}
                          </h3>

                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{story.author}</span>
                            <span>•</span>
                            <span>{story.publishedAt}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  )
}
