/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@sodax/sdk',
    '@sodax/types', 
    '@sodax/dapp-kit',
    '@sodax/wallet-sdk-react'
  ],
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
};

export default nextConfig;