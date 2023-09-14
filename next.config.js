/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.edigitalagency.com.au',
        },
        {
          protocol: 'https',
          hostname: 'clipart-library.com',
        },
      ],
    },
  }
  
  module.exports = nextConfig
  