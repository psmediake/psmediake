import { NextRequest, NextResponse } from 'next/server'
import { searchPosts } from '@/lib/postsUtil'

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('q') || ''
  const posts = await searchPosts(query)

  return NextResponse.json({ posts })
}
