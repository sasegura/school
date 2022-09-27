/** @type {import('next').NextConfig} */


const withVideos = require('next-videos')

module.exports = withVideos({
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/menu": { page: "/menu" },
      "/about": { page: "/about" }
    };
  }
})
