/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = {
  experimental: {
      images: {
          unoptimized: true
      }
  }
}