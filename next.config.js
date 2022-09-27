/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/apply': { page: '/apply' },
      '/contact': { page: '/contact' },
      '/courses': { page: '/courses' },
      '/service': { page: '/service' },
    }
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()
