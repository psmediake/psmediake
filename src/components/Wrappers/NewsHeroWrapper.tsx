// NewsHeroWrapper.tsx (Server Component)
import { fetchAllPosts } from '@/lib/postsUtil'
import NewsHeroSection from '../landingpage/Hero'

export default async function NewsHeroWrapper() {
  const results = await fetchAllPosts(1, 6)
  return <NewsHeroSection posts={results.posts} />
}
