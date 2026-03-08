/** @type {import('next').NextConfig} */
const nextConfig = {
  // No static export - using Vercel serverless for hybrid with Framer
  images: {
    unoptimized: true
  }
};

export default nextConfig;
