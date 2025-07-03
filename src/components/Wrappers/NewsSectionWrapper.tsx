import { fetchAllPosts } from '@/lib/postsUtil'
import NewsCategoriesSection from '../landingpage/News'

export default async function NewsSectionWrapper() {
  const results = await fetchAllPosts()

  return <NewsCategoriesSection posts={results.posts} />
}
