'use client'
import React from 'react'
import Link from 'next/link'
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaEye,
  FaDesktop,
  FaNewspaper,
  FaBullseye,
  FaCheck,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaPlay,
  FaAward,
  FaThumbsUp,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { HiCursorClick } from 'react-icons/hi'

export default function AdvertiseWithUsPage() {
  const audienceStats = [
    {
      icon: FaUsers,
      number: '2.5M+',
      label: 'Monthly Visitors',
      color: 'from-blue-500 to-blue-600',
    },
    { icon: FaEye, number: '8.2M+', label: 'Page Views', color: 'from-purple-500 to-purple-600' },
    {
      icon: HiCursorClick,
      number: '4.8%',
      label: 'CTR Average',
      color: 'from-green-500 to-green-600',
    },
    { icon: FaGlobe, number: '85+', label: 'Countries', color: 'from-orange-500 to-orange-600' },
  ]

  const demographics = [
    {
      category: 'Age Groups',
      data: [
        { label: '18-24', percentage: 15, color: 'bg-blue-400' },
        { label: '25-34', percentage: 35, color: 'bg-blue-500' },
        { label: '35-44', percentage: 28, color: 'bg-blue-600' },
        { label: '45-54', percentage: 22, color: 'bg-blue-700' },
      ],
    },
    {
      category: 'Device Usage',
      data: [
        { label: 'Mobile', percentage: 65, color: 'bg-green-400' },
        { label: 'Desktop', percentage: 30, color: 'bg-green-500' },
        { label: 'Tablet', percentage: 5, color: 'bg-green-600' },
      ],
    },
  ]

  const adFormats = [
    {
      id: 'banner',
      name: 'Banner Ads',
      description: 'High-visibility banner placements across our site',
      sizes: ['728x90', '300x250', '320x50'],
      ctr: '3.2%',
      price: 'From $50/day',
      features: ['Above fold placement', 'Responsive design', 'Analytics included'],
      icon: FaDesktop,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 'sponsored',
      name: 'Sponsored Content',
      description: 'Native advertising that blends with our editorial content',
      sizes: ['Article format', 'Custom design'],
      ctr: '5.8%',
      price: 'From $200/article',
      features: ['Editorial integration', 'Social promotion', 'Extended reach'],
      icon: FaNewspaper,
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 'newsletter',
      name: 'Newsletter Ads',
      description: 'Direct reach to our engaged subscriber base',
      sizes: ['Header', 'Inline', 'Footer'],
      ctr: '7.1%',
      price: 'From $150/send',
      features: ['150K+ subscribers', 'Weekly delivery', 'Premium placement'],
      icon: FaEnvelope,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 'video',
      name: 'Video Ads',
      description: 'Engaging video content for maximum impact',
      sizes: ['Pre-roll', 'Mid-roll', 'In-article'],
      ctr: '6.4%',
      price: 'From $300/campaign',
      features: ['HD quality', 'Skip controls', 'Viewability tracking'],
      icon: FaPlay,
      gradient: 'from-pink-500 to-rose-600',
    },
  ]

  const packages = [
    {
      id: 'starter',
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their journey',
      features: [
        '50K impressions/month',
        'Banner ads only',
        'Basic analytics',
        'Email support',
        '1 ad creative included',
      ],
      popular: false,
      color: 'border-gray-200',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$799',
      period: '/month',
      description: 'Most popular choice for growing businesses',
      features: [
        '200K impressions/month',
        'All ad formats',
        'Advanced analytics',
        'Priority support',
        '3 ad creatives included',
        'A/B testing',
        'Newsletter inclusion',
      ],
      popular: true,
      color: 'border-blue-500',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited impressions',
        'Custom ad formats',
        'Dedicated account manager',
        '24/7 support',
        'Unlimited creatives',
        'White-label options',
        'Custom reporting',
        'Brand partnership opportunities',
      ],
      popular: false,
      color: 'border-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <FaRocket className="mr-2 text-xs" />
                Grow Your Business with Us
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Reach{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  2.5M+ Engaged
                </span>{' '}
                Readers
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with our highly engaged audience of news enthusiasts, professionals, and
                decision-makers. Our premium advertising solutions deliver results that matter to
                your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Packages
                  <FaArrowRight className="ml-2 text-sm" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FaAward className="text-yellow-500 mr-2" />
                  Award-winning platform
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FaThumbsUp className="text-green-500 mr-2" />
                  98% client satisfaction
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Live Campaign Performance
                  </h3>
                  <p className="text-gray-600 text-sm">Real-time metrics from our platform</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {audienceStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div
                        className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2`}
                      ></div>
                      <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-1">+45%</div>
                  <div className="text-sm opacity-90">Average CTR Increase</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaBullseye className="text-white text-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Insights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Know Your Audience
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our readers are engaged professionals who value quality content and trust our
              recommendations.
            </p>
          </div>

          {/* Demographics */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {demographics.map((demo, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{demo.category}</h3>
                <div className="space-y-3">
                  {demo.data.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-700 text-sm">{item.label}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${item.color}`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-8">
                          {item.percentage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <FaUsers className="text-blue-600 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Highly Educated</h4>
              <p className="text-gray-600 text-sm">78% have college degrees or higher education</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <FaChartLine className="text-green-600 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">High Income</h4>
              <p className="text-gray-600 text-sm">Average household income of $85K+ annually</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <FaClock className="text-purple-600 text-2xl mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Engaged Readers</h4>
              <p className="text-gray-600 text-sm">Average session duration of 4.2 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advertising Formats
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of high-performing ad formats designed to maximize your reach
              and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adFormats.map((format) => (
              <div
                key={format.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`h-16 bg-gradient-to-r ${format.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute bottom-0 left-4 transform translate-y-1/2">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${format.gradient} flex items-center justify-center shadow-lg border-2 border-white`}
                    >
                      <format.icon className="text-white text-lg" />
                    </div>
                  </div>
                </div>

                <div className="pt-8 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{format.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{format.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">CTR:</span>
                      <span className="font-medium text-green-600">{format.ctr}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Starting at:</span>
                      <span className="font-medium text-gray-900">{format.price}</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    {format.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <FaCheck className="text-green-500 mr-2 text-xs" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to fit businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${pkg.color} ${pkg.popular ? 'scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-500 ml-1">{pkg.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <FaCheck className="text-green-500 mr-3 text-xs" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of successful businesses that trust us with their advertising needs. Let
            {"'"}s create a campaign that delivers real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaEnvelope className="mr-2" />
              Contact Sales Team
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              +1 (555) 123-4567
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              advertise@newshub.com
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              New York, NY
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
