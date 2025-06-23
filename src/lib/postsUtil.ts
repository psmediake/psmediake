import config from '@/payload.config'
import { getPayload } from 'payload'

export async function fetchAllPosts(page = 1, limit = 9) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const res = await payload.find({
    collection: 'articles',
    depth: 2,
    limit,
    page,
  })

  return {
    posts: res.docs.map((posts) => ({
      id: posts.id,
      slug: posts.slug,
      title: posts.title,
      publishedDate: posts.createdAt,
      excerpt: posts.excerpt,
      image: posts.thumbnail,
      category: posts.category,
      content: posts.content,
      subcategory: posts.subcategory,
      tags: posts.tags,
      author: posts.author,
      featured: posts.featured,
      readTime: posts.readTime,
      publishedAt: new Date(posts.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    })),
    pagination: {
      hasNextPage: res.hasNextPage,
      hasPrevPage: res.hasPrevPage,
      totalPages: res.totalPages,
      page: res.page,
    },
  }
}

export async function fetchRelatedPosts(currentCategory: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { docs: allBlogs } = await payload.find({
    collection: 'articles',
    depth: 1,
    limit: 4,
    where: {
      category: {
        equals: {
          category: currentCategory,
        },
      },
    },
  })

  return allBlogs
}
