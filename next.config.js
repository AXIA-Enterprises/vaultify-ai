/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // The following are needed for custom domains
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig