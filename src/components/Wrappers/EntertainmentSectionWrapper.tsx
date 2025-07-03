import { fetchAllPosts } from '@/lib/postsUtil'
import EntertainmentNewsSection from '../landingpage/Entertainment'

export default async function EntertainmentSectionWrapper() {
  const results = await fetchAllPosts()

  return <EntertainmentNewsSection posts={results.posts} />
}
