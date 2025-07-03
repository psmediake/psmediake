import { fetchAllPosts } from '@/lib/postsUtil'
import SportsSection from '../landingpage/Sports'

export default async function SportsSectionWrapper() {
  const results = await fetchAllPosts()

  return <SportsSection posts={results.posts} />
}
