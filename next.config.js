/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT - Remove these lines if present
  // basePath: '/vaultify-ai',
  // assetPrefix: '/vaultify-ai',
  trailingSlash: true,
}

module.exports = nextConfig