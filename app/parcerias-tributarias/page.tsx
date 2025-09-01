"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Award,
  CheckCircle,
  Handshake,
  Target,
  Zap,
  Search,
  MessageSquare,
  FileText,
  Phone,
  MapPin,
  Clock,
  Mail
} from "lucide-react"
import Image from "next/image"

import "@/styles/parcerias.css"

// [cursor-edit] - Componente otimizado da página de parcerias tributárias
export default function ParceriasTributarias() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [timelineProgress, setTimelineProgress] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Função para animar cards sequencialmente
    const animateCardsSequentially = (cardsContainer: Element) => {
      const cards = cardsContainer.querySelectorAll('.scroll-reveal-card')
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('revealed')
        }, index * 400) // 400ms de delay entre cada card
      })
    }

    const setupScrollAnimations = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Se for um container de cards, animar sequencialmente
              if (entry.target.classList.contains('cards-container')) {
                animateCardsSequentially(entry.target)
              } else if (entry.target.classList.contains('scroll-reveal-card')) {
                // Cards individuais já são tratados pelo container
                return
              } else {
                entry.target.classList.add('revealed')
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .cards-container'
      )
      scrollElements.forEach((el) => {
        observerRef.current?.observe(el)
      })
    }

    // Função para animar a linha da timeline
    const handleTimelineScroll = () => {
      if (!timelineRef.current) return

      const timelineSection = timelineRef.current.closest('section')
      if (!timelineSection) return

      const rect = timelineSection.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionTop = rect.top
      const sectionHeight = timelineSection.offsetHeight
      
      let progress = 0
      
      // Começar animação quando a seção está 60% visível na tela
      const triggerPoint = windowHeight * 0.6
      
      if (sectionTop <= triggerPoint) {
        // Calcular progresso baseado em quanto a seção já passou do ponto de trigger
        const scrolledDistance = triggerPoint - sectionTop
        const maxScrollDistance = sectionHeight * 0.8 // 80% da altura da seção
        
        progress = Math.min(scrolledDistance / maxScrollDistance, 1)
        
        // Suavizar o início da animação
        if (progress < 0.1) {
          progress = 0
        } else {
          // Mapear de 0.1-1.0 para 0-1.0 para suavizar
          progress = (progress - 0.1) / 0.9
        }
      }
      
      setTimelineProgress(Math.max(0, Math.min(progress, 1)))
    }

    const loadTimer = setTimeout(() => {
      setIsLoaded(true)
      setupScrollAnimations()
      
      const elementsInView = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .cards-container')
      elementsInView.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          if (el.classList.contains('cards-container')) {
            animateCardsSequentially(el)
          } else {
            el.classList.add('revealed')
          }
        }
      })

      // Adicionar listener para scroll da timeline
      window.addEventListener('scroll', handleTimelineScroll)
      handleTimelineScroll() // Executar uma vez para estado inicial
    }, 100)

    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener('scroll', handleTimelineScroll)
      clearTimeout(loadTimer)
    }
  }, [])

  // [cursor-edit] - Função otimizada para navegação
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  // Memoizar dados estáticos para otimização
  const statisticsData = useMemo(() => [
    {
      icon: TrendingUp,
      value: "R$ 2Bi+",
      label: "Em créditos recuperados"
    },
    {
      icon: Handshake,
      value: "100%",
      label: "Transparência nas parcerias"
    },
    {
      icon: Award,
      value: "15+",
      label: "Anos de experiência"
    }
  ], [])

  const benefitsData = useMemo(() => [
    {
      title: "Atendimento Humanizado",
      description: "Cada cliente recebe atenção personalizada e cuidado individual."
    },
    {
      title: "Comunicação Fluída",
      description: "Canais diretos de comunicação para agilizar processos."
    },
    {
      title: "Resultados Comprovados",
      description: "Histórico de sucesso com mais de R$ 2 bilhões recuperados."
    },
    {
      title: "Suporte Técnico Especializado",
      description: "Equipe técnica sempre disponível para orientações."
    },
    {
      title: "Tecnologia Avançada",
      description: "Ferramentas modernas para otimizar processos tributários."
    },
    {
      title: "Crescimento Conjunto",
      description: "Parcerias que crescem junto com o sucesso dos clientes."
    }
  ], [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <main className="relative z-10">
        {/* Hero Section - Método AS Style */}
        <section className="bg-black min-h-screen flex items-center text-white relative overflow-hidden">

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-12">
              
              {/* Coluna Esquerda - Texto */}
              <div className="space-y-6 order-2 lg:order-1">
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#e2ba4b] rounded p-1">
                      <div className="w-full h-full bg-white rounded flex items-center justify-center">
                        <span className="text-[#e2ba4b] font-bold text-lg">AS</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-[#e2ba4b] uppercase tracking-wider">
                      ABRÃO & SILVA
                    </h1>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">
                      A FREQUÊNCIA DO RESULTADO
                    </p>
                  </div>
                </div>

                {/* Badge/Tag */}
                <div className="inline-block">
                  <div className="border border-[#e2ba4b] rounded-full px-4 py-2">
                    <span className="text-[#e2ba4b] text-sm font-medium">
                      Método AS | 30 e 01 de Outubro
                    </span>
                  </div>
                </div>

                {/* Título Principal */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    São 2 dias para <span className="text-[#e2ba4b]">ativar sua identidade</span>, 
                    <span className="text-[#e2ba4b]"> clarificar o seu propósito</span> e descobrir como 
                    <span className="text-[#e2ba4b]"> prosperar em todas as áreas da sua vida</span>
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Uma metodologia única desenvolvida para quem quer prosperar de verdade em todas as áreas da vida. 
                    Mais de 150 turmas e <span className="text-[#e2ba4b] font-semibold">milhares de pessoas impactadas</span> que 
                    estão mudando suas vidas, famílias e negócios
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button 
                    size="lg"
                    className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                    onClick={() => scrollToSection("contato")}
                  >
                    QUERO ENTRAR NO MÉTODO AS
                  </Button>
                </div>
              </div>

              {/* Coluna Direita - Imagem */}
              <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                {/* // [cursor-edit] */}
                {/* Imagem bem destacada e grande */}
                <div className="relative w-full max-w-lg lg:max-w-xl">
                  <Image 
                    src="/leao/leao.png"
                    alt="Abrão & Silva Advocacia"
                    width={600}
                    height={700}
                    className="w-full h-auto object-contain filter brightness-110 contrast-110"
                    priority={true}
                  />
                </div>
              </div>
            </div>

            {/* Seção inferior - "O Método que você precisa fazer para prosperar" */}
            <div className="text-center pb-16">
              <h3 className="text-2xl md:text-3xl font-bold">
                O Método que <span className="text-[#e2ba4b]">você precisa fazer</span>
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span className="text-[#e2ba4b]">para prosperar</span>
              </h3>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              size="lg"
              className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("contato")}
            >
              <MessageSquare className="h-8 w-8" />
            </Button>
          </div>
        </section>

        {/* Statistics Section - Cards Escuros */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  +10
                </div>
                <p className="text-gray-300 text-base md:text-lg">Anos de experiência</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  +15
                </div>
                <p className="text-gray-300 text-base md:text-lg">Estados Atendidos</p>
              </div>
              
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  +2.000
                </div>
                <p className="text-gray-300 text-base md:text-lg">Clientes Atendidos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Cards Inspirados - Método AS */}
        <section className="py-16 bg-black relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Transforme Sua Realidade Financeira
              </h2>
            </div>

            {/* Cards Container - Empilhados */}
            <div className="max-w-4xl mx-auto relative cards-container">
              {/* Card 1 - Liberdade Financeira */}
              <div className="scroll-reveal-card mb-8 relative z-30">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden card-glow mx-auto max-w-2xl">
                  {/* Logo/Brand */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#e2ba4b] rounded-full p-1">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <span className="text-[#e2ba4b] font-bold text-xl">AS</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-[#e2ba4b] uppercase tracking-wider">
                        ABRÃO & SILVA
                      </h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        MÉTODO AS
                      </p>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Quer garantir sua liberdade financeira
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-8">
                      (e da sua família)
                    </h4>
                    
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                      Você não quer só ganhar mais. Você quer construir um{' '}
                      <span className="text-[#e2ba4b] font-semibold">CELEIRO FINANCEIRO</span>. 
                      Quer blindar sua casa e terminar o ciclo de escassez da sua família.
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#e2ba4b]/10 to-transparent rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-[#e2ba4b]/10 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Card 2 - Propósito */}
              <div className="scroll-reveal-card mb-8 relative z-20">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden card-glow mx-auto max-w-2xl">
                  {/* Logo/Brand */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#e2ba4b] rounded-full p-1">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <span className="text-[#e2ba4b] font-bold text-xl">AS</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-[#e2ba4b] uppercase tracking-wider">
                        ABRÃO & SILVA
                      </h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        MÉTODO AS
                      </p>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                      Saiba por quem foi chamado.
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                      Você sente isso. Lá no fundo. Que nasceu pra algo maior. Que sua história ainda não chegou 
                      onde deveria — mas que agora, o tempo da espera acabou.
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-24 h-24 bg-gradient-to-br from-[#e2ba4b]/10 to-transparent rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-tl from-[#e2ba4b]/10 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Card 3 - Transformação */}
              <div className="scroll-reveal-card mb-8 relative z-10">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden card-glow mx-auto max-w-2xl">
                  {/* Logo/Brand */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 bg-[#e2ba4b] rounded-full p-1">
                        <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                          <span className="text-[#e2ba4b] font-bold text-xl">AS</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-[#e2ba4b] uppercase tracking-wider">
                        ABRÃO & SILVA
                      </h3>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        MÉTODO AS
                      </p>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                      É hora de ativar sua verdadeira identidade
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                      Você não quer só ganhar mais. Você quer construir um{' '}
                      <span className="text-[#e2ba4b] font-semibold">CELEIRO FINANCEIRO</span>. 
                      Quer blindar sua casa e terminar o ciclo de escassez da sua família.
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-28 h-28 bg-gradient-to-bl from-[#e2ba4b]/10 to-transparent rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-[#e2ba4b]/10 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center mt-16">
              <Button 
                size="lg"
                className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("contato")}
              >
                QUERO PARTICIPAR DO MÉTODO AS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Como Funciona Nossa Atuação / Vantagens */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="w-24 h-1 bg-[#e2ba4b] mx-auto mb-4"></div>
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                ÁREAS DE ATUAÇÃO DO ESCRITÓRIO
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como Funciona Nossa Atuação / Vantagens
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Por que confiar em nossa atuação tributária?
              </p>
            </div>

            {/* Grid responsivo de cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Card 1 - Diagnóstico Personalizado */}
              <div className="bg-slate-700 rounded-2xl p-6 md:p-8 text-white hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                <div className="bg-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <Search className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Diagnóstico Personalizado</h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                  Analisamos detalhadamente a situação fiscal da sua empresa e 
                  identificamos oportunidades de economia imediata.
                </p>
              </div>

              {/* Card 2 - Comunicação Transparente */}
              <div className="bg-slate-700 rounded-2xl p-6 md:p-8 text-white hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                <div className="bg-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Comunicação Transparente e Objetiva</h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                  Você tem acesso direto à nossa equipe, com explicações claras e 
                  suporte contínuo.
                </p>
              </div>

              {/* Card 3 - Atuação 100% Legal */}
              <div className="bg-slate-700 rounded-2xl p-6 md:p-8 text-white hover:bg-slate-600 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="bg-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Atuação 100% Legal e Segura</h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                  Todas as estratégias aplicadas seguem rigorosamente a legislação 
                  e jurisprudência atualizada.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Card 4 - Economia Real */}
              <div className="bg-slate-700 rounded-2xl p-6 md:p-8 text-white hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                <div className="bg-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Economia Real e Imediata</h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                  Geramos impacto direto no caixa da sua empresa, seja com recuperação de 
                  tributos ou redução da carga futura.
                </p>
              </div>

              {/* Card 5 - Capacitação do Parceiro */}
              <div className="bg-slate-700 rounded-2xl p-6 md:p-8 text-white hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                <div className="bg-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">Capacitação do Parceiro</h3>
                <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                  Orientamos sua equipe para compreender e dar andamento às ações 
                  junto aos seus clientes, promovendo autonomia e confiança.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection("contato")}
              >
                <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                CLIQUE AQUI E FALE COM UM ADVOGADO ESPECIALISTA
              </Button>
            </div>
          </div>
        </section>

        {/* Quem irá trabalhar ao seu favor */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quem irá trabalhar ao seu favor
              </h2>
              <div className="w-24 h-1 bg-[#e2ba4b] mx-auto mt-4"></div>
              <p className="text-lg text-gray-300 mt-4 uppercase tracking-wider">
                CONHEÇA O ADVOGADO
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Imagem do Advogado */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <Image 
                    src="/dr.png"
                    alt="Abrão e Silva Advogados Associados"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Informações do Escritório */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Abrão e Silva Advogados Associados
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Somos um time de especialistas em direito tributário com atuação 
                  nacional, focado em gerar economia real para empresas dos mais 
                  diversos setores. Nosso diferencial está na comunicação transparente, 
                  agilidade nas entregas e parcerias duradouras, sempre com foco em 
                  segurança jurídica e impacto positivo no caixa da empresa. Com 
                  centenas de empresas atendidas e mais de R$ 113 milhões em economia 
                  efetiva, nos orgulhamos de entregar resultados consistentes e duradouros.
                </p>
                <Button 
                  size="lg"
                  className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("contato")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  CLIQUE AQUI E FALE COM UM ADVOGADO ESPECIALISTA
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nossas áreas de atuação */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nossas áreas de atuação
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Especialistas nas principais frentes de economia tributária
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Coluna Esquerda */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e2ba4b] rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Recuperação de tributos pagos indevidamente:
                    </h3>
                    <p className="text-gray-300">
                      PIS, COFINS, INSS, IRPJ e CSLL
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e2ba4b] rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Renegociação fiscal com a Receita Federal e PGFN
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e2ba4b] rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Transações tributárias e programas especiais de parcelamento
                    </h3>
                  </div>
                </div>
              </div>

              {/* Coluna Direita */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#e2ba4b] rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Planejamento tributário estratégico
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e2ba4b] rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Regularidade fiscal e certidões negativas
                    </h3>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#e2ba4b] rounded-full w-3 h-3 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      Atendimento a empresas de todos os portes e segmentos
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contato")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Quero conversar com uma advogada especializada
              </Button>
            </div>
          </div>
        </section>

        {/* Nossos Depoimentos */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nossos Depoimentos
              </h2>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contato")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Quero conversar com uma advogada especializada
              </Button>
            </div>
          </div>
        </section>

        {/* Galeria de Vídeos */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Galeria de Vídeos
              </h2>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contato")}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Quero conversar com uma advogada especializada
              </Button>
            </div>
          </div>
        </section>

        {/* Como Funciona Nosso Programa ? */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como Funciona Nosso Programa ?
              </h2>
            </div>

            {/* Timeline do Processo - Responsivo */}
            <div className="max-w-4xl mx-auto">
              {/* Mobile: Layout vertical simples */}
              <div className="block md:hidden space-y-8">
                {/* Step 1 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-[#e2ba4b]">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#e2ba4b] rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">1</span>
                    </div>
                    <MessageSquare className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">CONTATO NO WHATSAPP</h3>
                  <p className="text-gray-300 text-sm">
                    Você entra em contato conosco através de um dos botões disponíveis no site
                  </p>
                </div>

                {/* Step 2 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-[#e2ba4b]">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#e2ba4b] rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">2</span>
                    </div>
                    <Search className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">DIAGNÓSTICO</h3>
                  <p className="text-gray-300 text-sm">
                    Nossos especialistas fazem análise minuciosa da sua empresa, em busca de 
                    melhores práticas de mercado.
                  </p>
                </div>

                {/* Step 3 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-[#e2ba4b]">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#e2ba4b] rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">3</span>
                    </div>
                    <FileText className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">ESTRUTURAÇÃO</h3>
                  <p className="text-gray-300 text-sm">
                    Será estruturado um programa personalizado para sua empresa.
                  </p>
                </div>

                {/* Step 4 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-[#e2ba4b]">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#e2ba4b] rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">4</span>
                    </div>
                    <MessageSquare className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">EXECUÇÃO</h3>
                  <p className="text-gray-300 text-sm">
                    Implantação do programa na empresa de forma estruturada.
                  </p>
                </div>
              </div>

              {/* Desktop: Layout timeline tradicional */}
              <div className="hidden md:block relative" ref={timelineRef}>
                {/* Linha vertical central - fundo */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-600"></div>
                {/* Linha vertical central - animada */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#e2ba4b] transition-all duration-500 ease-out"
                  style={{
                    height: `${timelineProgress * 100}%`,
                    boxShadow: timelineProgress > 0 ? '0 0 15px rgba(226, 186, 75, 0.6)' : 'none',
                    background: timelineProgress > 0 ? 'linear-gradient(to bottom, #e2ba4b, #d4a942)' : '#e2ba4b'
                  }}
                ></div>

                {/* Step 1 - Desktop */}
                <div className="relative flex items-center mb-12">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                      <div className="flex justify-end mb-4">
                        <MessageSquare className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">CONTATO NO WHATSAPP</h3>
                      <p className="text-gray-300">
                        Você entra em contato conosco através de um dos botões disponíveis no site
                      </p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.15 ? 'bg-[#e2ba4b] scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.15 ? 'text-black' : 'text-gray-400'}`}>1</span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 2 - Desktop */}
                <div className="relative flex items-center mb-12">
                  <div className="w-1/2 pr-8"></div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.4 ? 'bg-[#e2ba4b] scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.4 ? 'text-black' : 'text-gray-400'}`}>2</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                      <div className="flex justify-start mb-4">
                        <Search className="h-8 w-8 text-blue-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">DIAGNÓSTICO</h3>
                      <p className="text-gray-300">
                        Nossos especialistas fazem análise minuciosa da sua empresa, em busca de 
                        melhores práticas de mercado.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 - Desktop */}
                <div className="relative flex items-center mb-12">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                      <div className="flex justify-end mb-4">
                        <FileText className="h-8 w-8 text-purple-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">ESTRUTURAÇÃO</h3>
                      <p className="text-gray-300">
                        Será estruturado um programa personalizado para sua empresa.
                      </p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.65 ? 'bg-[#e2ba4b] scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.65 ? 'text-black' : 'text-gray-400'}`}>3</span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 4 - Desktop */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.9 ? 'bg-[#e2ba4b] scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.9 ? 'text-black' : 'text-gray-400'}`}>4</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                      <div className="flex justify-start mb-4">
                        <MessageSquare className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">EXECUÇÃO</h3>
                      <p className="text-gray-300">
                        Implantação do programa na empresa de forma estruturada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contato */}
        <section id="contato" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contato
              </h2>
              <div className="w-24 h-1 bg-[#e2ba4b] mx-auto mb-4"></div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                REDES SOCIAIS
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Grid responsivo de contatos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Telefone */}
                <div className="bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-600 text-center hover:bg-gray-600 transition-all duration-300 hover:scale-105">
                  <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <a 
                    href="tel:+5562999128796" 
                    className="text-lg md:text-xl font-semibold text-white hover:text-[#e2ba4b] transition-colors block"
                  >
                    (62) 9912-8796
                  </a>
                </div>

                {/* Instagram */}
                <div className="bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-600 text-center hover:bg-gray-600 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-lg font-bold">@</span>
                  </div>
                  <span className="text-lg md:text-xl font-semibold text-white block">
                    @abraoesilva_tributario
                  </span>
                </div>

                {/* Horário */}
                <div className="bg-gray-700 rounded-2xl p-6 shadow-lg border border-gray-600 text-center hover:bg-gray-600 transition-all duration-300 hover:scale-105 md:col-span-3 lg:col-span-1">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-white block">
                    Segunda a Sexta
                  </span>
                  <span className="text-sm text-gray-300">
                    das 9h às 18h
                  </span>
                </div>
              </div>

              {/* CTA Final */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/5562999128796', '_blank')}
                >
                  <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  FALAR NO WHATSAPP AGORA
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas realizadas com frequência */}
        <section className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perguntas realizadas com frequência
              </h2>
              <div className="w-24 h-1 bg-[#e2ba4b] mx-auto mb-4"></div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                F.A.Q
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-gray-700 rounded-2xl p-4 md:p-6 hover:bg-gray-600 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-start">
                  <span className="mr-3 text-[#e2ba4b] flex-shrink-0">—</span>
                  <span className="leading-tight">Quais empresas podem recuperar tributos ?</span>
                </h3>
                <div className="pl-6">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Empresas do regime de lucro real ou presumido que tenham recolhido impostos indevidamente ou com base em 
                    cálculo equivocado.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-gray-700 rounded-2xl p-4 md:p-6 hover:bg-gray-600 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-start">
                  <span className="mr-3 text-[#e2ba4b] flex-shrink-0">—</span>
                  <span className="leading-tight">O que é necessário para iniciar o processo ?</span>
                </h3>
                <div className="pl-6">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Documentação fiscal da empresa dos últimos 5 anos, incluindo declarações, guias de recolhimento e 
                    demonstrativos contábeis para análise detalhada.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-gray-700 rounded-2xl p-4 md:p-6 hover:bg-gray-600 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 flex items-start">
                  <span className="mr-3 text-[#e2ba4b] flex-shrink-0">—</span>
                  <span className="leading-tight">Essa recuperação é legal ?</span>
                </h3>
                <div className="pl-6">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Sim, totalmente legal. Utilizamos apenas estratégias previstas em lei e jurisprudência consolidada, 
                    garantindo segurança jurídica total para sua empresa.
                  </p>
                </div>
              </div>

              {/* CTA FAQ */}
              <div className="text-center pt-8">
                <Button 
                  size="lg"
                  className="bg-[#e2ba4b] hover:bg-[#d4a942] text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/5562999128796', '_blank')}
                >
                  <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  TIRE SUAS DÚVIDAS NO WHATSAPP
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 text-center">
          <div className="container mx-auto px-4">
            <p className="text-gray-600">
              Copyright 2025. Todos os Direitos Reservados. Desenvolvido por <strong>MRG Digital</strong>
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
