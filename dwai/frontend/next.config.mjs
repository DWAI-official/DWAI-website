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

    ],
    
  },
}

export default nextConfig;
