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
  Gauge
} from "lucide-react"
import Image from "next/image"

export default function ComparativoPage() {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop')

  const metricsComparison = {
    desktop: {
      before: {
        performance: 68,
        accessibility: 92,
        bestPractices: 96,
        seo: 100,
        fcp: "1,8s",
        lcp: "9,8s",
        tbt: "10ms",
        cls: "0"
      },
      after: {
        performance: 99,
        accessibility: 96,
        bestPractices: 96,
        seo: 100,
        fcp: "0,9s",
        lcp: "1,7s",
        tbt: "0ms",
        cls: "0.012"
      }
    },
    mobile: {
      before: {
        performance: 68,
        accessibility: 92,
        bestPractices: 96,
        seo: 100,
        fcp: "1,8s",
        lcp: "9,8s",
        tbt: "10ms",
        cls: "0"
      },
      after: {
        performance: 99,
        accessibility: 96,
        bestPractices: 96,
        seo: 100,
        fcp: "0,3s",
        lcp: "0,5s",
        tbt: "10ms",
        cls: "0.01"
      }
    }
  }

  const improvements = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Otimizada",
      description: "Score aumentou de 68 para 99 pontos",
      improvement: "+45%",
      color: "text-green-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Carregamento Mais Rápido",
      description: "LCP reduzido de 9.8s para 1.7s no desktop",
      improvement: "-82%",
      color: "text-blue-600"
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "Imagens Otimizadas",
      description: "Conversão para WebP com 93% de redução",
      improvement: "-1.2MB",
      color: "text-purple-600"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Otimizado",
      description: "Experiência mobile drasticamente melhorada",
      improvement: "+31 pontos",
      color: "text-orange-600"
    }
  ]

  const technicalImprovements = [
    "Conversão de imagens PNG para WebP (93% redução)",
    "Lazy loading implementado para componentes pesados",
    "Critical CSS inline para renderização mais rápida",
    "Otimização do Google Maps com memoização",
    "Font-display: swap para carregamento de fontes",
    "Cache headers otimizados (30 dias para assets)",
    "JavaScript moderno sem polyfills desnecessários",
    "Scroll listeners passivos para melhor performance"
  ]

  const currentMetrics = metricsComparison[activeTab]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Comparativo de Performance
              </h1>
              <p className="text-gray-600 mt-1">
                Abrão & Silva Advocacia - Otimizações Aplicadas
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Globe className="h-4 w-4" />
              <span>Lighthouse Report - Agosto 2025</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Resumo Executivo */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-green-800">
              <TrendingUp className="h-7 w-7 mr-3" />
              Resultados Alcançados
            </CardTitle>
            <CardDescription className="text-lg text-green-700">
              Performance do site melhorou significativamente em todas as métricas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {improvements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`${item.color} mb-2 flex justify-center`}>
                    {item.icon}
                  </div>
                  <div className={`text-2xl font-bold ${item.color} mb-1`}>
                    {item.improvement}
                  </div>
                  <div className="font-semibold text-gray-800 mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Seletor Desktop/Mobile */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-md border">
            <button
              onClick={() => setActiveTab('desktop')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'desktop'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Desktop
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'mobile'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Mobile
            </button>
          </div>
        </div>

        {/* Comparação de Métricas com Imagens */}
        <div className="space-y-12 mb-8">
          {/* Comparação Desktop */}
          <Card className="border-gray-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center">
                <Globe className="h-6 w-6 mr-2" />
                Comparação {activeTab === 'desktop' ? 'Desktop' : 'Mobile'}
              </CardTitle>
              <CardDescription className="text-center">
                Relatórios oficiais do Google Lighthouse - {activeTab === 'desktop' ? 'Desktop' : 'Mobile'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Site Original */}
                <div className="border-red-200 bg-red-50 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-red-800 flex items-center justify-center mb-2">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Site Original
                    </h3>
                    <div className="text-sm text-gray-600 mb-4">abraoesilvaadvogados.com.br</div>
                  </div>
                  
                  {/* Imagem do relatório original */}
                  <div className="bg-white rounded-lg p-3 mb-4 shadow-inner">
                    <Image 
                      src={activeTab === 'desktop' ? '/performance/siteantigo1.png' : '/performance/siteantigo2.png'}
                      alt={`Performance site original ${activeTab} - ${currentMetrics.before.performance} pontos`}
                      width={400}
                      height={240}
                      className="w-full h-auto rounded-lg border shadow-sm"
                    />
                  </div>

                  {/* Métricas */}
                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                        {currentMetrics.before.performance}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center">
                        <div className="text-gray-600">FCP</div>
                        <div className="font-semibold text-orange-600">{currentMetrics.before.fcp}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-600">LCP</div>
                        <div className="font-semibold text-red-600">{currentMetrics.before.lcp}</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-red-200">
                      <div>Acessibilidade: <span className="font-semibold">{currentMetrics.before.accessibility}</span></div>
                      <div>SEO: <span className="font-semibold">{currentMetrics.before.seo}</span></div>
                    </div>
                  </div>
                </div>

                {/* Site Otimizado */}
                <div className="border-green-200 bg-green-50 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-green-800 flex items-center justify-center mb-2">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Site Otimizado
                    </h3>
                    <div className="text-sm text-gray-600 mb-4">abraoesilva.gathub.com.br</div>
                  </div>
                  
                  {/* Imagem do relatório otimizado */}
                  <div className="bg-white rounded-lg p-3 mb-4 shadow-inner">
                    <Image 
                      src={activeTab === 'desktop' ? '/performance/siteotm1.png' : '/performance/siteotm2.png'}
                      alt={`Performance site otimizado ${activeTab} - ${currentMetrics.after.performance} pontos`}
                      width={400}
                      height={240}
                      className="w-full h-auto rounded-lg border shadow-sm"
                    />
                  </div>

                  {/* Métricas */}
                  <div className="space-y-3">
                    <div className="flex justify-center items-center">
                      <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg mr-3">
                        {currentMetrics.after.performance}
                      </div>
                      <div className="text-green-600 font-bold text-sm bg-green-100 px-2 py-1 rounded">
                        +{currentMetrics.after.performance - currentMetrics.before.performance} pontos
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-center">
                        <div className="text-gray-600">FCP</div>
                        <div className="font-semibold text-green-600">{currentMetrics.after.fcp}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-600">LCP</div>
                        <div className="font-semibold text-green-600">{currentMetrics.after.lcp}</div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs pt-2 border-t border-green-200">
                      <div>Acessibilidade: <span className="font-semibold">{currentMetrics.after.accessibility}</span></div>
                      <div>SEO: <span className="font-semibold">{currentMetrics.after.seo}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow de melhoria */}
              <div className="flex justify-center my-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  +{currentMetrics.after.performance - currentMetrics.before.performance} pontos de melhoria
                  <ArrowRight className="h-5 w-5 ml-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Melhorias Técnicas */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-6 w-6 mr-3" />
              Otimizações Técnicas Implementadas
            </CardTitle>
            <CardDescription>
              Lista completa das melhorias aplicadas para alcançar estes resultados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalImprovements.map((improvement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{improvement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Transforme a Performance do Seu Site
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Estes resultados mostram o impacto real de otimizações bem aplicadas. 
              Seu site também pode alcançar estes números.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open('https://abraoesilva.gathub.com.br', '_blank')}
              >
                Testar Site Otimizado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://abraoesilvaadvogados.com.br', '_blank')}
              >
                Testar Site Original
                <Globe className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Relatórios gerados via Google Lighthouse • Agosto 2025
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8 pb-8">
          <p>Otimizações realizadas por especialista em performance web</p>
          <p className="mt-2">
            Métricas verificáveis via Google PageSpeed Insights e Lighthouse
          </p>
        </div>
      </div>
    </div>
  )
}