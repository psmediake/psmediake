'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'

export default function DualNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Politics', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden shadow-sm">
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="#" className="flex-shrink-0">
            <Image
              src="/logoblue.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Toggle search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="px-4 pb-4 border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0763fe] focus:border-transparent transition-all duration-200"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logoblue.png"
                  alt="Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium text-xs px-4 py-2 rounded-lg transition-all duration-200 uppercase ${
                      index === 0
                        ? 'bg-[#0763fe] text-white hover:bg-blue-700 shadow-sm'
                        : 'text-gray-700 hover:text-[#0763fe] hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Search, Social Links, Subscribe */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0763fe] focus:border-transparent focus:bg-white transition-all duration-200"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <Link
                  href="#"
                  className="p-2 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="#"
                  className="p-2 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="p-2 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <FaInstagram />
                </Link>
              </div>

              {/* Subscribe Button */}
              <button className="px-6 py-2 bg-[#0763fe] text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                  index === 0
                    ? 'bg-[#0763fe] text-white shadow-sm'
                    : 'text-gray-700 hover:text-[#0763fe] hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Link
                  href="#"
                  className="p-3 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="#"
                  className="p-3 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  className="p-3 text-gray-600 hover:text-[#0763fe] hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>

            {/* Mobile Subscribe Button */}
            <div>
              <button className="w-full px-4 py-3 bg-[#0763fe] text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}
