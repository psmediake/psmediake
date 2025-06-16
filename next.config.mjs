import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: ['images.unsplash.com', 'cdn.payloadcms.com', 'cdn.payloadcms.com'],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
