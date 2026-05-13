import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://cdn-icons-png.flaticon.com/512/4144/4144728.png'),
      {
        protocol: "http",
        hostname: "decisive-confidence-d7cd061097.strapiapp.com",
        pathname: "/uploads/**",
      },
      {
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: 'https',
        hostname:'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname:'deafwomenaloudinitiative.org',
        pathname: '/images/**',
      }

    ],
    
  },
}

export default nextConfig;
