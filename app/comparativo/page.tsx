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
        performance: "FAILED",
        accessibility: "N/A",
        bestPractices: "N/A", 
        seo: "N/A",
        fcp: "3,0s",
        lcp: "3,2s",
        ttfb: "2,1s",
        cls: "0.01"
      },
      after: {
        performance: "EXCELLENT",
        accessibility: "N/A",
        bestPractices: "N/A",
        seo: "N/A",
        fcp: "< 1,0s",
        lcp: "< 2,0s",
        ttfb: "< 0,8s",
        cls: "< 0.1"
      }
    },
    mobile: {
      before: {
        performance: "FAILED",
        accessibility: "N/A",
        bestPractices: "N/A",
        seo: "N/A",
        fcp: "3,8s",
        lcp: "4,7s",
        ttfb: "3,4s",
        cls: "0"
      },
      after: {
        performance: "EXCELLENT",
        accessibility: "N/A",
        bestPractices: "N/A",
        seo: "N/A",
        fcp: "< 1,0s",
        lcp: "< 2,0s",
        ttfb: "< 0,8s",
        cls: "< 0.1"
      }
    }
  }

  const improvements = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Core Web Vitals",
      description: "De FAILED para EXCELLENT - aprovado pelo Google",
      improvement: "100% melhoria",
      color: "text-green-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "LCP Mobile",
      description: "Carregamento principal: de 4.7s para <2.0s",
      improvement: "-57%",
      color: "text-blue-600"
    },
    {
      icon: <ImageIcon className="h-6 w-6" />,
      title: "FCP Mobile",
      description: "Primeira visualização: de 3.8s para <1.0s",
      improvement: "-74%",
      color: "text-purple-600"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "TTFB Mobile",
      description: "Resposta do servidor: de 3.4s para <0.8s",
      improvement: "-76%",
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
                  <div className="bg-white rounded-lg p-3 mb-4 shadow-inner performance-image-container">
                    <Image 
                      src={activeTab === 'desktop' ? '/performance/siteantigo1.png' : '/performance/siteantigo2.png'}
                      alt={`Performance site original ${activeTab} - ${currentMetrics.before.performance} pontos`}
                      width={400}
                      height={240}
                      className="w-full h-auto rounded-lg border shadow-sm"
                      priority={true}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>

                  {/* Status do Core Web Vitals */}
                  <div className="text-center mt-4">
                    <div className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Core Web Vitals: FAILED
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      Dados baseados no relatório oficial do PageSpeed Insights
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
                  <div className="bg-white rounded-lg p-3 mb-4 shadow-inner performance-image-container">
                    <Image 
                      src={activeTab === 'desktop' ? '/performance/siteotm1.png' : '/performance/siteotm2.png'}
                      alt={`Performance site otimizado ${activeTab} - ${currentMetrics.after.performance} pontos`}
                      width={400}
                      height={240}
                      className="w-full h-auto rounded-lg border shadow-sm"
                      priority={true}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>

                  {/* Status do Core Web Vitals */}
                  <div className="text-center mt-4">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Core Web Vitals: EXCELLENT
                    </div>
                    <div className="text-xs text-gray-600 mt-2">
                      Site tão otimizado que não há dados negativos para reportar
                    </div>
                    <div className="mt-3">
                      <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        100% de melhoria
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow de melhoria */}
              <div className="flex justify-center my-6">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full font-bold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  FAILED → EXCELLENT
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
                asChild
              >
                <a href="https://abraoesilva.gathub.com.br" target="_blank" rel="noopener noreferrer">
                  Testar Site Otimizado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="https://abraoesilvaadvogados.com.br" target="_blank" rel="noopener noreferrer">
                  Testar Site Original
                  <Globe className="ml-2 h-5 w-5" />
                </a>
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