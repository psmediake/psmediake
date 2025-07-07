import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articlesRes, categoriesRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?limit=1000`, {
      next: { revalidate: 3600 },
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?limit=1000`),
  ])

  if (!articlesRes.ok || !categoriesRes.ok) {
    throw new Error('Failed to fetch articles or categories')
  }

  const articlesData = await articlesRes.json()
  const categoriesData = await categoriesRes.json()

  const posts = articlesData.docs
  const categories = categoriesData.docs

  // Map category ID to slug
  const categoryMap = new Map(
    categories.map((cat: { id: string | number; slug: string }) => [String(cat.id), cat.slug]),
  )

  const postEntries: MetadataRoute.Sitemap = posts
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((post: any) => {
      let categorySlug: string | undefined

      if (typeof post.category === 'object' && post.category?.slug) {
        categorySlug = post.category.slug
      } else if (typeof post.category === 'string' || typeof post.category === 'number') {
        categorySlug = categoryMap.get(String(post.category)) as string | undefined
      }

      if (!categorySlug) return null

      return {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}/${post.slug}`,
        lastModified: post.updatedAt || new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    })
    .filter(Boolean) as MetadataRoute.Sitemap

  const uniqueCategories = new Set(
    postEntries.map((entry) => entry.url.split('/')[3]).filter(Boolean),
  )

  const categoryEntries: MetadataRoute.Sitemap = Array.from(uniqueCategories).map(
    (categorySlug) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${categorySlug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'hourly',
      priority: 0.9,
    }),
  )

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
