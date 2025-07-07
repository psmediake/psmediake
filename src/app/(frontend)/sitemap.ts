import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch data`)
  }

  const postsData = await res.json()

  const posts: { slug: string; category: { slug: string }; updatedAt?: string }[] = postsData.docs

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${post.category.slug}/${post.slug}`,
    lastModified: post.updatedAt || new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const uniqueCategories = Array.from(new Set(posts.map((post) => post.category.slug)))

  const categoryEntries: MetadataRoute.Sitemap = uniqueCategories.map((categorySlug) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'hourly',
    priority: 0.9,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/advertise-with-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/latest-stories`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  return [...staticPages, ...categoryEntries, ...postEntries]
}
