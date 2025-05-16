/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use relative asset paths for GitHub Pages
  assetPrefix: './',
  trailingSlash: true,
}

module.exports = nextConfig