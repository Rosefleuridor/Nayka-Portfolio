/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
