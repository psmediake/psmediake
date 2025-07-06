import { fetchAllPosts } from '@/lib/postsUtil'
import BusinessNewsSection from '../landingpage/BusinessNews'

export default async function BusinessSectionWrapper() {
  const results = await fetchAllPosts()

  return <BusinessNewsSection posts={results.posts} />
}
