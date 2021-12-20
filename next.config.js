/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  experimental: { nftTracing: true },
  staticPageGenerationTimeout: 120,
  images: { domains: ['avatars.githubusercontent.com'] },
}

module.exports = nextConfig
