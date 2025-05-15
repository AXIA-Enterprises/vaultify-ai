/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Only use output: 'export' in production builds
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  // Helpful for GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig