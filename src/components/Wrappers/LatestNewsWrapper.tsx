// NewsHeroWrapper.tsx (Server Component)

import { fetchAllPosts } from '@/lib/postsUtil'
import Latest from '../landingpage/Latest'

export default async function LatestNewsWrapper() {
  const results = await fetchAllPosts()
  return <Latest posts={results.posts} />
}
