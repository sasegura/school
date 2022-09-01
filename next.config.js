/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
  },
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()

