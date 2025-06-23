export interface Media {
  id: number
  url: string
  alt?: string | null
}

export interface Category {
  id: number
  name: string
  slug: string
}

export interface User {
  id: number
  name: string
  role: string
  avatar: number | Media | null
  bio?: string | null
  role: string
  socialLinks?: { platform: string; url: string }[]
}

export interface Articles {
  id: number
  slug: string
  title: string
  content: string
  publishedDate: string
  excerpt?: string | null
  thumbnail?: number | Media | null
  category: number | Category
  subcategory?: string | null
  tags?: { tag: string }[]
  author: number | User
  breakingNews?: boolean
  featured?: boolean
  trending?: boolean
  readTime: string
}
