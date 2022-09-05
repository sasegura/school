/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

module.exports = withVideos({
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
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
})
