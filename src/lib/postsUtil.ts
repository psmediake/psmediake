import config from '@/payload.config'
import { getPayload } from 'payload'

export async function fetchAllPosts(page = 1, limit = 9) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const res = await payload.find({
    collection: 'articles',
    depth: 3,
    limit,
    page,
  })

  return {
    posts: res.docs.map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt ?? '',
      image:
        typeof post.thumbnail === 'object' &&
        post.thumbnail !== null &&
        'url' in post.thumbnail &&
        typeof post.thumbnail.url === 'string'
          ? { url: post.thumbnail.url }
          : { url: '/placeholder.jpg' },

      category:
        typeof post.category === 'object' && post.category !== null && 'name' in post.category
          ? { name: post.category.name }
          : { name: String(post.category) },

      subcategory: post.subcategory,
      tags: post.tags,
      author:
        typeof post.author === 'object' && post.author !== null && 'name' in post.author
          ? { name: post.author.name }
          : { name: String(post.author) },

      featured: post.featured ?? false,
      readTime: post.readTime ?? '1 min',
      publishedAt: new Date(post.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),

      content: JSON.stringify(post.content ?? {}), // Normalize content to string or handle rich editors later
    })),
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}

export async function fetchRelatedPosts(currentCategory: { name: string }, currentSlug: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: allBlogs } = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 4,
    where: {
      and: [
        {
          'category.name': {
            equals: currentCategory.name,
          },
        },
        {
          slug: {
            not_equals: currentSlug, // Exclude the current article
          },
        },
      ],
    },
  })

  return allBlogs
}
