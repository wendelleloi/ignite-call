/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig
