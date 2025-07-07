'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md'
import { AlertCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
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

  const footerSections = {
    content: {
      title: 'Content',
      links: [
        { name: 'Latest News', href: '/latest-stories' },
        { name: 'Entertainment', href: '/entertainment' },
        { name: 'Politics', href: '/politics' },
        { name: 'Sports', href: '/sports' },
        { name: 'Business', href: '/business' },
        { name: 'Technology', href: '/technology' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about-us' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '/contact-us' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-service' },
        { name: 'Cookie Policy', href: '/cookie-policy' },
        { name: 'Editorial Guidelines', href: '/editorial-guidelines' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Advertise With Us', href: '/advertise-with-us' },
        { name: 'Newsletter', href: '/newsletter-registration' },
      ],
    },
  }

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://x.com/PSMedia_ke?s=09',
      icon: <FaXTwitter />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/photosniper.media.ke.2025?mibextid=JRoKGi',
      icon: <FaFacebookF />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/photosniper_ke?igsh=dGp1bjRyYmxvcG5n',
      icon: <FaInstagram />,
    },
    {
      name: 'Tiktok',
      href: 'https://www.tiktok.com/@psmedia.ke',
      icon: <FaTiktok />,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@photosnipermediake?si=MYMR4LhDFA3zMtLt',
      icon: <FaYoutube />,
    },
    {
      name: 'WhatsApp',
      href: 'https://whatsapp.com/channel/0029VbBAQIQEVccH7VB5qB2y',
      icon: <FaWhatsapp />,
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Logo, Description, Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="#" className="inline-block">
                  <Image
                    src="/logoblue.png"
                    alt="PSMedia.ke"
                    width={160}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                PSMedia.ke is Kenya{"'"}s leading digital media platform, delivering breaking news,
                entertainment, politics, and more to keep you informed and engaged with what matters
                most.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Get the latest news and updates delivered straight to your inbox. Join thousands
                  of readers who trust PSMedia.ke.
                </p>
                <form onSubmit={handleSubscribe}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0763fe] focus:border-transparent transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#0763fe] text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                    >
                      Subscribe Now
                    </button>
                  </div>

                  {/* Success notification */}
                  {subscribed && (
                    <div className="mt-4 px-4 py-3 bg-[#0763fe] bg-opacity-20 rounded-md border-l-4 border-[#0763fe]/50 animate-fade-in">
                      <p className="text-white text-sm">
                        Thank you for subscribing! We{"'"}ll be in touch soon.
                      </p>
                    </div>
                  )}

                  {/* Already subscribed notification */}
                  {alreadySubscribed && (
                    <div className="mt-4 px-4 py-3 bg-[#fb113f] bg-opacity-20 rounded-md border-l-4 border-[#fb113f] animate-fade-in flex items-start">
                      <AlertCircle className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white text-sm font-medium">Already Subscribed</p>
                        <p className="text-white/80 text-sm">
                          This email is already in our subscriber list. Thank you for your continued
                          interest!
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-300 text-sm hover:text-[#0763fe] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Media & Contact Info */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* Social Media Links */}
              <div>
                <p className="text-gray-400 text-sm mb-4 sm:mb-0 text-center sm:text-left">
                  Follow us on social media
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="p-2 text-gray-400 hover:text-[#0763fe] hover:bg-gray-800 rounded-lg transition-all duration-200"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center sm:text-right">
                <div className="flex flex-col sm:items-end space-y-2">
                  <div className="flex items-center justify-center sm:justify-end space-x-2 text-sm text-gray-400">
                    <MdOutlineEmail className="w-4 h-4" />
                    <Link
                      href="mailto:info@psmedia.ke"
                      className="hover:text-[#0763fe] transition-colors duration-200"
                    >
                      psmediake@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Legal */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center sm:text-left">
                <p>&copy; {currentYear} PSMedia.ke. All rights reserved.</p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-6 text-sm">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#0763fe] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#0763fe] transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#0763fe] transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
