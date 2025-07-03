// NewsHeroWrapper.tsx (Server Component)
import { fetchAllPosts } from '@/lib/postsUtil'
import NewsHeroSection from '../landingpage/Hero'

export default async function NewsHeroWrapper() {
  const results = await fetchAllPosts()
  return <NewsHeroSection posts={results.posts} />
}
