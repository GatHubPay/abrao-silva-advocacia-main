/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Otimizações de bundle simplificadas
  webpack: (config, { dev, isServer }) => {
    // Otimizações apenas para produção
    if (!dev && !isServer) {
      // Configuração mais conservadora para evitar problemas de build
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Chunk específico para Google Maps
          maps: {
            test: /[\\/]node_modules[\\/]@react-google-maps[\\/]/,
            name: 'google-maps',
            chunks: 'all',
            priority: 20,
          },
        },
      };
    }
    
    return config;
  },

  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        // Assets estáticos - cache longo
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Imagens de performance - cache otimizado
        source: '/performance/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
        ],
      },
    ]
  },
}

export default nextConfig
