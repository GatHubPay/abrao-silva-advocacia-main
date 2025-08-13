"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  TrendingUp,
  Zap,
  Globe,
  Smartphone,
  CheckCircle,
  AlertCircle,
  BarChart3,
  Clock,
  Image as ImageIcon,
  Gauge,
  Download,
  ExternalLink,
  Target,
  Award,
  Rocket
} from "lucide-react"
import Image from "next/image"

export default function PerformanceReportPage() {
  const [activeView, setActiveView] = useState<'overview' | 'detailed'>('overview')

  const performanceData = {
    original: {
      url: "abraoesilvaadvogados.com.br",
      desktop: { performance: 68, accessibility: 92, bestPractices: 96, seo: 100 },
      mobile: { performance: 68, accessibility: 92, bestPractices: 96, seo: 100 },
      metrics: {
        fcp: { desktop: "1.8s", mobile: "1.8s" },
        lcp: { desktop: "9.8s", mobile: "9.8s" },
        tbt: { desktop: "10ms", mobile: "10ms" },
        cls: { desktop: "0", mobile: "0" }
      }
    },
    optimized: {
      url: "abraoesilva.gathub.com.br", 
      desktop: { performance: 99, accessibility: 96, bestPractices: 96, seo: 100 },
      mobile: { performance: 99, accessibility: 96, bestPractices: 96, seo: 100 },
      metrics: {
        fcp: { desktop: "0.9s", mobile: "0.3s" },
        lcp: { desktop: "1.7s", mobile: "0.5s" },
        tbt: { desktop: "0ms", mobile: "10ms" },
        cls: { desktop: "0.012", mobile: "0.01" }
      }
    }
  }

  const improvements = [
    {
      metric: "Performance Score",
      before: 68,
      after: 99,
      improvement: "+31 pontos",
      icon: <Gauge className="h-6 w-6" />,
      color: "text-green-600",
      description: "Score geral de performance"
    },
    {
      metric: "Largest Contentful Paint",
      before: "9.8s",
      after: "1.7s",
      improvement: "-82%",
      icon: <Clock className="h-6 w-6" />,
      color: "text-blue-600", 
      description: "Tempo para carregar conteúdo principal"
    },
    {
      metric: "First Contentful Paint",
      before: "1.8s",
      after: "0.9s",
      improvement: "-50%",
      icon: <Zap className="h-6 w-6" />,
      color: "text-purple-600",
      description: "Primeiro elemento visível na tela"
    },
    {
      metric: "Tamanho de Imagens",
      before: "1.4MB",
      after: "97KB",
      improvement: "-93%",
      icon: <ImageIcon className="h-6 w-6" />,
      color: "text-orange-600",
      description: "Otimização de imagens para WebP"
    }
  ]

  const businessImpact = [
    {
      title: "Experiência do Usuário",
      description: "Site carrega 82% mais rápido, reduzindo abandono de página",
      impact: "Maior retenção de visitantes",
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      title: "SEO e Ranking",
      description: "Performance é fator de ranking no Google desde 2021",
      impact: "Melhor posicionamento orgânico",
      icon: <TrendingUp className="h-8 w-8 text-green-600" />
    },
    {
      title: "Conversão",
      description: "Sites mais rápidos têm taxa de conversão até 74% maior",
      impact: "Mais clientes em potencial",
      icon: <Award className="h-8 w-8 text-purple-600" />
    },
    {
      title: "Mobile Experience",
      description: "90% dos acessos jurídicos vêm de dispositivos móveis",
      impact: "Experiência mobile otimizada",
      icon: <Smartphone className="h-8 w-8 text-orange-600" />
    }
  ]

  const technicalDetails = [
    { category: "Imagens", improvement: "Conversão PNG → WebP (93% redução)", savings: "1.2MB" },
    { category: "JavaScript", improvement: "Remoção de polyfills legados", savings: "11.5KB" },
    { category: "CSS", improvement: "Critical CSS inline", savings: "300ms" },
    { category: "Fontes", improvement: "Font-display: swap + preload", savings: "10ms" },
    { category: "Cache", improvement: "Headers otimizados (30 dias)", savings: "3KB" },
    { category: "Maps", improvement: "Lazy loading + memoização", savings: "30ms" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <Rocket className="h-12 w-12 text-blue-200" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Relatório de Performance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Abrão & Silva Advocacia - Transformação Digital Completa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => window.open('https://abraoesilva.gathub.com.br', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ver Site Otimizado
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => window.open('https://abraoesilvaadvogados.com.br', '_blank')}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Ver Site Original
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Performance Scores Comparison */}
        <Card className="mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
              Relatórios Oficiais do Google Lighthouse
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Capturas de tela reais dos testes de performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Comparison */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                <Globe className="h-6 w-6 mr-2" />
                Performance Desktop
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Site Original Desktop */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-red-700 mb-4 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Site Original - Desktop
                  </h4>
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
                    <div className="bg-white rounded-lg p-2 mb-4 shadow-inner">
                      <Image 
                        src="/performance/siteantigo1.png"
                        alt="Performance site original desktop - 68 pontos"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg border shadow-sm"
                      />
                    </div>
                    <div className="text-sm text-gray-600">abraoesilvaadvogados.com.br</div>
                  </div>
                </div>

                {/* Site Otimizado Desktop */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-green-700 mb-4 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Site Otimizado - Desktop
                  </h4>
                  <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                    <div className="bg-white rounded-lg p-2 mb-4 shadow-inner">
                      <Image 
                        src="/performance/siteotm1.png"
                        alt="Performance site otimizado desktop - 99 pontos"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg border shadow-sm"
                      />
                    </div>
                    <div className="text-sm text-gray-600">abraoesilva.gathub.com.br</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Comparison */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center">
                <Smartphone className="h-6 w-6 mr-2" />
                Performance Mobile
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Site Original Mobile */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-red-700 mb-4 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Site Original - Mobile
                  </h4>
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-200">
                    <div className="bg-white rounded-lg p-2 mb-4 shadow-inner">
                      <Image 
                        src="/performance/siteantigo2.png"
                        alt="Performance site original mobile - 68 pontos"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg border shadow-sm"
                      />
                    </div>
                    <div className="text-sm text-gray-600">abraoesilvaadvogados.com.br</div>
                  </div>
                </div>

                {/* Site Otimizado Mobile */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-green-700 mb-4 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Site Otimizado - Mobile
                  </h4>
                  <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
                    <div className="bg-white rounded-lg p-2 mb-4 shadow-inner">
                      <Image 
                        src="/performance/siteotm2.png"
                        alt="Performance site otimizado mobile - 99 pontos"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg border shadow-sm"
                      />
                    </div>
                    <div className="text-sm text-gray-600">abraoesilva.gathub.com.br</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Improvement Arrow */}
            <div className="flex justify-center my-8">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-bold text-lg flex items-center">
                <TrendingUp className="h-6 w-6 mr-2" />
                +31 pontos de melhoria
                <ArrowRight className="h-6 w-6 ml-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Improvements */}
        <Card className="mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Zap className="h-7 w-7 mr-3 text-yellow-500" />
              Principais Melhorias Alcançadas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {improvements.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`${item.color} bg-gray-50 rounded-lg p-3`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.metric}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-red-600 font-medium">{item.before}</span>
                          <span className="mx-2">→</span>
                          <span className="text-green-600 font-medium">{item.after}</span>
                        </div>
                        <div className={`${item.color} font-bold text-lg`}>
                          {item.improvement}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Business Impact */}
        <Card className="mb-12 shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <Award className="h-7 w-7 mr-3 text-blue-600" />
              Impacto nos Negócios
            </CardTitle>
            <CardDescription className="text-lg">
              Como essas melhorias técnicas se traduzem em resultados reais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessImpact.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm px-3 py-1 rounded-full inline-block">
                        {item.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <Card className="mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <BarChart3 className="h-7 w-7 mr-3 text-purple-600" />
              Detalhes Técnicos das Otimizações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {technicalDetails.map((detail, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{detail.category}</div>
                    <div className="text-sm text-gray-600">{detail.improvement}</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {detail.savings} economizados
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seu Site Também Pode Ter Estes Resultados
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Este case study demonstra o poder de otimizações bem aplicadas. 
                Performance não é luxo, é necessidade para competir online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                onClick={() => window.open('https://abraoesilva.gathub.com.br', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Testar Site Otimizado
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
                onClick={() => window.open('https://abraoesilvaadvogados.com.br', '_blank')}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                Testar Site Original
              </Button>
              </div>
              <div className="text-center text-blue-200">
                <p className="mb-2">📊 Dados verificáveis via Google PageSpeed Insights</p>
                <p>⚡ Resultados medidos com Lighthouse em Agosto de 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 mt-12 pb-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-medium text-gray-700 mb-2">
              Especialista em Otimização de Performance Web
            </p>
            <p className="text-sm">
              Transformando sites lentos em experiências digitais de alta performance
            </p>
            <p className="text-xs mt-4 text-gray-400">
              Relatório gerado em 13 de Agosto de 2025 • Dados coletados via Google Lighthouse
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}