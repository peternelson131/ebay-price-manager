/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    BACKEND_URL: process.env.NODE_ENV === 'production' 
      ? 'https://your-site-name.netlify.app'
      : 'http://localhost:3001',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production'
          ? '/.netlify/functions/api/:path*'
          : `http://localhost:3001/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;