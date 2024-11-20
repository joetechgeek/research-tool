import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL 
      ? process.env.NEXT_PUBLIC_API_URL.startsWith('http') 
        ? process.env.NEXT_PUBLIC_API_URL 
        : `https://${process.env.NEXT_PUBLIC_API_URL}`
      : 'http://localhost:8000';

    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
