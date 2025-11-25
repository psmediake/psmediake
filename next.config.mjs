import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'cdn.payloadcms.com',
      'cdn.payloadcms.com',
      'psmedia.co.ke',
      'www.psmedia.co.ke',
      'psmediake.vercel.app',
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
