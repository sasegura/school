/** @type {import('next').NextConfig} */


const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
})
