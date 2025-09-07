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
      ? process.env.URL || 'https://your-site-name.netlify.app'
      : 'http://localhost:3001',
  },
  // Remove rewrites for static export
  ...(process.env.NODE_ENV !== 'production' && {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `http://localhost:3001/api/:path*`,
        },
      ];
    },
  }),
};

module.exports = nextConfig;