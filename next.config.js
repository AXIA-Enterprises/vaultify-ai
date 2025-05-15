/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/vaultify-ai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/vaultify-ai/' : '',
  images: {
    unoptimized: true,
  },
  output: 'export', // Required for static HTML export
}

module.exports = nextConfig