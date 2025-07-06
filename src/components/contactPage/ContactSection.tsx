'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaClock,
  FaGlobe,
} from 'react-icons/fa'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      info: 'hello@newshub.com',
      subInfo: 'We reply within 24 hours',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      info: '+254 700 123 456',
      subInfo: 'Mon-Fri, 9AM-6PM EAT',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      info: 'Nairobi, Kenya',
      subInfo: 'CBD, Anniversary Towers',
    },
    {
      icon: FaClock,
      title: 'Response Time',
      info: '< 24 Hours',
      subInfo: 'Average response time',
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-blue-500"></div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-red-500"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-1/4 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-blue-500"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-red-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/20 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-r from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0">
                  <FaPaperPlane className="text-white text-base sm:text-lg" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Send us a message</h3>
              </div>

              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 group-focus-within:text-blue-600 transition-colors">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 text-sm sm:text-base"
                        placeholder="Your full name"
                        required
                      />
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 group-focus-within:text-blue-600 transition-colors">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 text-sm sm:text-base"
                        placeholder="your@email.com"
                        required
                      />
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 group-focus-within:text-blue-600 transition-colors">
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 text-sm sm:text-base"
                      placeholder="What's this about?"
                      required
                    />
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3 group-focus-within:text-blue-600 transition-colors">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm hover:border-gray-300 text-sm sm:text-base"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300"></div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-red-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden text-sm sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-3">
                    <FaPaperPlane className="text-base sm:text-lg group-hover:rotate-12 transition-transform duration-300" />
                    <span>Send Message</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20 hover:shadow-3xl transition-all duration-500 h-fit">
              <div className="flex items-center space-x-3 mb-6 sm:mb-8">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-r from-red-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-base sm:text-lg" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Contact Info</h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={index}
                      className="group p-4 rounded-xl hover:bg-blue-50/50 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-white text-sm" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-900 font-medium text-sm sm:text-base mb-1 break-words">
                            {item.info}
                          </p>
                          <p className="text-gray-500 text-xs sm:text-sm">{item.subInfo}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-white/20 hover:shadow-3xl transition-all duration-500">
          <div className="flex items-center justify-center space-x-3 mb-8 sm:mb-10">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-r from-red-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <FaGlobe className="text-white text-base sm:text-lg" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Connect With Us</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link
              href="/social/twitter"
              className="group relative overflow-hidden p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-blue-50/30 to-white hover:from-blue-50 hover:to-white"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="relative">
                  <FaTwitter className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block text-sm sm:text-base lg:text-lg">
                    Twitter
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">@newshub</span>
                </div>
              </div>
            </Link>

            <Link
              href="/social/facebook"
              className="group relative overflow-hidden p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-red-50/30 to-white hover:from-red-50 hover:to-white"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="relative">
                  <FaFacebook className="text-2xl sm:text-3xl lg:text-4xl text-red-500 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-red-500/20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block text-sm sm:text-base lg:text-lg">
                    Facebook
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">NewsHub</span>
                </div>
              </div>
            </Link>

            <Link
              href="/social/linkedin"
              className="group relative overflow-hidden p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-blue-50/30 to-white hover:from-blue-50 hover:to-white"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="relative">
                  <FaLinkedin className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block text-sm sm:text-base lg:text-lg">
                    LinkedIn
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                    NewsHub Media
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 sm:hidden">NewsHub</span>
                </div>
              </div>
            </Link>

            <Link
              href="/social/instagram"
              className="group relative overflow-hidden p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-red-50/30 to-white hover:from-red-50 hover:to-white"
            >
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="relative">
                  <FaInstagram className="text-2xl sm:text-3xl lg:text-4xl text-red-500 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300" />
                  <div className="absolute inset-0 rounded-full bg-red-500/20 scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                <div className="text-center">
                  <span className="font-bold text-gray-800 block text-sm sm:text-base lg:text-lg">
                    Instagram
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                    @newshub_media
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 sm:hidden">@newshub</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
