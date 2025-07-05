'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import Search from '../searchComponent/Search'

export default function DualNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Politics', href: '/politics' },
    { name: 'Entertainment', href: '/entertainment' },
    { name: 'Sports', href: '/sports' },
    { name: 'Business', href: '/business' },
    { name: 'Tech', href: '/tech' },
  ]

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden shadow-sm">
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="/" className="flex-shrink-0">
            <Image src="/blue.png" alt="Logo" width={120} height={40} className="h-6 w-auto" />
          </Link>

          <div className="flex items-center space-x-2">
            <Search />

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
      </nav>

      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#0763fe] hidden md:block shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center mx-auto">
            {/* Left Side - Logo and Navigation */}
            <div className="flex justify-center items-center space-x-8">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image src="/blue.png" alt="Logo" width={140} height={40} className="h-6 w-auto" />
              </Link>
            </div>
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

            {/* Right Side - Search, Social Links, Subscribe */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <Search />
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
      <div className="h-16 md:h-16"></div>
    </>
  )
}
