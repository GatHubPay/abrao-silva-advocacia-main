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
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
    optimizeCss: true, // Otimizar CSS para reduzir parsing
    turbo: {
      rules: {
        '*.js': ['babel-loader'],
        '*.ts': ['babel-loader'],
        '*.tsx': ['babel-loader'],
      }
    }
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Otimizações de bundle
  webpack: (config, { dev, isServer }) => {
    // Otimizações apenas para produção
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Separar vendor chunks para melhor cache
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            // Chunk específico para Google Maps
            maps: {
              test: /[\\/]node_modules[\\/]@react-google-maps[\\/]/,
              name: 'google-maps',
              chunks: 'all',
              priority: 20,
            },
            // Chunk para Radix UI components
            radix: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              name: 'radix-ui',
              chunks: 'all',
              priority: 15,
            },
          },
        },
      };
      
      // Otimizações adicionais para reduzir parsing time
      config.optimization.providedExports = true;
      config.optimization.mangleExports = true;
      
      // Minimizar o tamanho dos chunks
      config.optimization.splitChunks.maxSize = 250000; // 250kb max per chunk
      config.optimization.splitChunks.minSize = 20000;  // 20kb min per chunk
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
