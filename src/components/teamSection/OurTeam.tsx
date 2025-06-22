'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import {
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaQuoteLeft,
  FaAward,
  FaNewspaper,
  FaUsers,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaStar,
  FaHeart,
  FaEye,
  FaFilter,
} from 'react-icons/fa'

export default function TeamsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const departments = [
    { id: 'all', name: 'All Team', count: 12, color: 'bg-blue-500' },
    { id: 'editorial', name: 'Editorial', count: 6, color: 'bg-purple-500' },
    { id: 'reporting', name: 'Reporting', count: 4, color: 'bg-green-500' },
    { id: 'digital', name: 'Digital', count: 2, color: 'bg-orange-500' },
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Editor-in-Chief',
      department: 'editorial',
      location: 'New York, NY',
      experience: '15+ years',
      specialties: ['Politics', 'International Affairs'],
      bio: 'Award-winning journalist with expertise in investigative reporting and digital media strategy.',
      achievements: ['Pulitzer Prize Finalist', 'Edward R. Murrow Award'],
      articles: 450,
      social: {
        twitter: '#',
        linkedin: '#',
        email: 'sarah@newshub.com',
      },
      avatar: 'SC',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Senior Reporter',
      department: 'reporting',
      location: 'Los Angeles, CA',
      experience: '12+ years',
      specialties: ['Climate', 'Technology'],
      bio: 'Environmental journalist covering climate change and sustainable technology innovations.',
      achievements: ['Climate Journalism Award', 'Society of Professional Journalists Award'],
      articles: 320,
      social: {
        twitter: '#',
        linkedin: '#',
        email: 'marcus@newshub.com',
      },
      avatar: 'MR',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Digital Content Manager',
      department: 'digital',
      location: 'Austin, TX',
      experience: '8+ years',
      specialties: ['Social Media', 'SEO'],
      bio: 'Digital strategist focused on audience engagement and content optimization.',
      achievements: ['Digital Innovation Award', 'Content Marketing Excellence'],
      articles: 180,
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        email: 'emily@newshub.com',
      },
      avatar: 'EW',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Investigative Reporter',
      department: 'reporting',
      location: 'Chicago, IL',
      experience: '10+ years',
      specialties: ['Corporate', 'Government'],
      bio: 'Investigative journalist specializing in corporate accountability and government transparency.',
      achievements: ['Investigative Reporters Award', 'Press Freedom Award'],
      articles: 280,
      social: {
        twitter: '#',
        linkedin: '#',
        email: 'david@newshub.com',
      },
      avatar: 'DK',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      id: 5,
      name: 'Rachel Thompson',
      role: 'Deputy Editor',
      department: 'editorial',
      location: 'Boston, MA',
      experience: '11+ years',
      specialties: ['Health', 'Science'],
      bio: 'Science and health reporter with a background in medical research.',
      achievements: ['Health Journalism Award', 'Science Writing Excellence'],
      articles: 380,
      social: {
        twitter: '#',
        linkedin: '#',
        email: 'rachel@newshub.com',
      },
      avatar: 'RT',
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      id: 6,
      name: 'Alex Johnson',
      role: 'Video Producer',
      department: 'digital',
      location: 'San Francisco, CA',
      experience: '6+ years',
      specialties: ['Video', 'Multimedia'],
      bio: 'Creative producer specializing in documentary-style news content and live streaming.',
      achievements: ['Emmy Nomination', 'Video Excellence Award'],
      articles: 120,
      social: {
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        email: 'alex@newshub.com',
      },
      avatar: 'AJ',
      gradient: 'from-orange-500 to-red-600',
    },
  ]

  const filteredMembers =
    selectedDepartment === 'all'
      ? teamMembers
      : teamMembers.filter((member) => member.department === selectedDepartment)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600">
            <FaUsers className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Newsroom
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team of journalists, editors, and digital creators work tirelessly to
            bring you accurate, timely, and compelling news coverage from around the world.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`inline-flex items-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                selectedDepartment === dept.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${dept.color}`}></div>
              {dept.name}
              <span className="ml-2 text-xs opacity-75">({dept.count})</span>
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card Header */}
              <div className={`h-24 bg-gradient-to-r relative`}>
                <div className="absolute inset-0">
                  <Image
                    src="/berlin.jpg"
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute -bottom-8 left-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-orange-400 flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-white font-bold text-lg">{member.avatar}</span>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white text-[#0763fe]/40 backdrop-blur-sm border border-orange-400">
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-12 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{member.role}</p>

                  {/* Location & Experience */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      {member.location}
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {member.experience}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-700 mb-2">Specialties:</div>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {member.social.twitter && (
                      <a
                        href="#"
                        className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <FaTwitter className="text-blue-600 text-sm" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href="#"
                        className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <FaLinkedin className="text-blue-600 text-sm" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href="#"
                        className="w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <FaInstagram className="text-pink-600 text-sm" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FaEnvelope className="text-gray-600 text-sm" />
                    </a>
                  </div>

                  <Link href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
