'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaNewspaper,
  FaUsers,
  FaGlobe,
  FaAward,
  FaPlay,
  FaArrowRight,
  FaCheck,
  FaQuoteLeft,
} from 'react-icons/fa'

export default function AboutSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const stats = [
    {
      icon: FaUsers,
      number: '2.5M+',
      label: 'Monthly Readers',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaNewspaper,
      number: '15K+',
      label: 'Stories Published',
      gradient: 'from-purple-500 to-purple-600',
    },
    { icon: FaGlobe, number: '50+', label: 'Countries', gradient: 'from-green-500 to-green-600' },
    { icon: FaAward, number: '25+', label: 'Awards', gradient: 'from-orange-500 to-orange-600' },
  ]

  const features = [
    'Breaking news delivered in real-time',
    'In-depth investigative reporting',
    'Global perspective on local stories',
    'Fact-checked and verified content',
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              <FaNewspaper className="mr-2 text-xs" />
              About Our Newsroom
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Delivering Truth,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}
                One Story at a Time
              </span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed">
              NewsHub is your trusted source for accurate, timely, and comprehensive news coverage.
              We connect communities through powerful storytelling and unwavering commitment to
              journalistic integrity.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <FaCheck className="text-green-600 text-xs" />
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Read Our Latest Stories
                <FaArrowRight className="ml-2 text-sm" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Subscribe to Newsletter
              </button>
            </div>
          </div>

          {/* Right Side - Video/Image Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-700 aspect-video">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <FaPlay className="text-white text-2xl ml-1" />
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <FaNewspaper className="text-6xl mb-4 opacity-50" />
                    <p className="text-lg">Video Content Would Play Here</p>
                  </div>
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/2 right-6 w-6 h-6 bg-white/15 rounded-full"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Verified News</div>
                  <div className="text-xs text-gray-500">Fact-checked content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
