/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para múltiplos domínios
  async rewrites() {
    return [
      // Redirecionar subdomínios para a página principal com parâmetro de cidade
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'goiania-centro.(.*)',
          },
        ],
        destination: '/?city=goianiaCentro',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sao-miguel.(.*)',
          },
        ],
        destination: '/?city=saoMiguelAraguaia',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'setor-sul.(.*)',
          },
        ],
        destination: '/?city=setorSul',
      },
      // Suporte para domínios completos
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'goiania-centro.adv.br',
          },
        ],
        destination: '/?city=goianiaCentro',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'sao-miguel.adv.br',
          },
        ],
        destination: '/?city=saoMiguelAraguaia',
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'setor-sul.adv.br',
          },
        ],
        destination: '/?city=setorSul',
      },
    ];
  },

  // Configuração de imagens
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },

  // Otimizações de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Configuração de compressão
  compress: true,

  // Configuração de headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
