import React from 'react'
import { fetchAllPosts } from '@/lib/postsUtil'
import BreakingNews from '../landingpage/BreakingNews'

export default async function BreakingSectionWrapper() {
  const results = await fetchAllPosts()

  return <BreakingNews posts={results.posts} />
}
