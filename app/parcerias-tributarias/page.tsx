"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
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

// [cursor-edit] Hook para efeito de scroll das cartas
function useScrollEffect() {
  const [scrollY, setScrollY] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        setIsInView(rect.top < windowHeight && rect.bottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar estado inicial
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, isInView, containerRef }
}

// [cursor-edit] Componente de contagem animada ao entrar em view
function CountUpOnView({
  start = 0,
  end,
  duration = 1200,
  prefix = "",
  suffix = "",
  formatLocale = "pt-BR",
  className = ""
}: {
  start?: number
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  formatLocale?: string
  className?: string
}) {
  const [value, setValue] = useState<number>(start)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    )

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return
    const startTime = performance.now()

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      const current = Math.round(start + (end - start) * eased)
      setValue(current)
      if (progress < 1) requestAnimationFrame(animate)
    }

    const r = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(r)
  }, [hasAnimated, start, end, duration])

  const formatted = new Intl.NumberFormat(formatLocale).format(value)

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}

// [cursor-edit] - Componente otimizado da página de parcerias tributárias
export default function ParceriasTributarias() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [timelineProgress, setTimelineProgress] = useState(0)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const cardsContainerRef = useRef<HTMLDivElement | null>(null)
  
  // [cursor-edit] Hook para efeito de scroll das cartas
  const { scrollY, isInView, containerRef } = useScrollEffect()

  // [cursor-edit] Framer Motion scroll para cards empilhados
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start 0.9", "end 0.1"]
  })

  // [cursor-edit] Debug do scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log('Framer Motion scroll progress:', latest)
    })
    return unsubscribe
  }, [scrollYProgress])

  // [cursor-edit] Dados dos cards
  const cardsData = [
    {
      id: 1,
      icon: Search,
      title: "Diagnóstico Personalizado",
      description: "Analisamos detalhadamente a situação fiscal da sua empresa e identificamos oportunidades de economia imediata."
    },
    {
      id: 2,
      icon: MessageSquare,
      title: "Comunicação Transparente e Objetiva",
      description: "Você tem acesso direto à nossa equipe, com explicações claras e suporte contínuo."
    },
    {
      id: 3,
      icon: Shield,
      title: "Atuação 100% Legal e Segura",
      description: "Todas as estratégias aplicadas seguem rigorosamente a legislação e jurisprudência atualizada."
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Economia Real e Imediata",
      description: "Geramos impacto direto no caixa da sua empresa, seja com recuperação de tributos ou redução da carga futura."
    },
    {
      id: 5,
      icon: Award,
      title: "Capacitação do Parceiro",
      description: "Orientamos sua equipe para compreender e dar andamento às ações junto aos seus clientes, promovendo autonomia e confiança."
    }
  ]

  useEffect(() => {
    const setupScrollAnimations = () => {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
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
      
      const elementsInView = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
      elementsInView.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('revealed')
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

          {/* // [cursor-edit] container: padding mobile maior */}
          <div className=" mx-auto px-10 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
              
              {/* Coluna Esquerda - Texto */}
              <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
                {/* Logo */}
              



                {/* Título Principal */}
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Sua empresa pode estar <span className="text-[#e2ba4b]">pagando mais impostos</span> do que deveria. 
                    Descubra como <span className="text-[#e2ba4b]">reverter isso</span> com segurança e agilidade.
                  </h2>
                  
                  <p className="text-base text-gray-300 leading-relaxed">
                    Parcerias inteligentes para regularidade fiscal, recuperação de créditos tributários e redução real da carga tributária. 
                    <span className="text-[#e2ba4b] font-semibold">Mais de R$ 113 milhões já economizados</span> para empresas em todo o Brasil.
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Button 
                    size="lg"
                    className="bg-[#2bee3597] hover:bg-[#24a92c] text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                    onClick={() => scrollToSection("contato")}
                  >
                    QUERO UMA ANÁLISE GRATUITA
                  </Button>
                </div>
              </div>

              {/* Coluna Direita - Imagem */}
              <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                {/* // [cursor-edit] */}
                {/* Imagem integrada ao fundo da página */}
                <div className="relative w-full max-w-lg lg:max-w-xl">
                  {/* Título impactante sobreposto - mobile */}
                  {/* // [cursor-edit] padding mobile do título sobreposto */}
                  <div className="absolute top-4 left-0 right-0 z-20 block lg:hidden px-10">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight drop-shadow-2xl tracking-tight" style={{fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji'}}>
                        SUA EMPRESA PODE ESTAR <span className="text-[#e2ba4b] font-black">PERDENDO DINHEIRO</span>
                      </h3>
                      
                    </div>
                  </div>

                  {/* Gradientes suaves nas laterais - versão mais clara */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 via-black/20 to-transparent opacity-80 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 via-black/20 to-transparent opacity-80 z-10"></div>
                  
                  <Image 
                    src="/dr/leaodr.png"
                    alt="Abrão & Silva Advocacia"
                    width={600}
                    height={700}
                    className="w-full h-auto object-contain opacity-100"
                   
                    priority={true}
                  />
                  
                  {/* Efeito suave nas bordas laterais */}
                  <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black to-transparent opacity-60 z-15"></div>
                  <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-black to-transparent opacity-60 z-15"></div>
                </div>
              </div>
            </div>


          </div>

          {/* WhatsApp Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              size="lg"
              className="bg-[#2bee3597] hover:bg-[#24a92c] text-black rounded-full w-16 h-16 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection("contato")}
            >
              <MessageSquare className="h-8 w-8" />
            </Button>
          </div>
        </section>

        {/* Statistics Section - Cards Escuros */}
        <section className="py-16 bg-black;">
          {/* // [cursor-edit] container: padding mobile maior */}
          <div className=" mx-auto px-10 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {/* // [cursor-edit] contador animado */}
                  <CountUpOnView end={10} prefix="+" />
                </div>
                <p className="text-gray-300 text-base md:text-lg">Anos de Experiência</p>
              </div>
              
             
              
              <div className="bg-gray-800 rounded-2xl p-8 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {/* // [cursor-edit] contador animado */}
                  <CountUpOnView end={3000} prefix="+" />
                </div>
                <p className="text-gray-300 text-base md:text-lg"> Contatos Efetivos</p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {/* // [cursor-edit] contador animado */}
                  <CountUpOnView end={2} prefix="+" suffix=" BI" />
                </div>
                <p className="text-gray-300 text-base md:text-lg">De Créditos Recuperados</p>
              </div>

            </div>
          </div>
        </section>

        {/* Como Funciona Nossa Atuação / Vantagens */}
        <section className="py-16 bg-black">
          {/* // [cursor-edit] container: padding mobile maior */}
          <div className="container mx-auto px-10 md:px-6">
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

            {/* Cards empilhados com Framer Motion */}
            <div ref={cardsContainerRef} className="relative h-[45rem] md:h-auto">
              {/* Grid responsivo para desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-12">
                {cardsData.map((card, index) => {
                  const IconComponent = card.icon
                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        delay: index * 0.15, 
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className={`bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 md:p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                        index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                      }`}
                    >
                      <motion.div 
                        className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </motion.div>
                      <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center">{card.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-center text-sm md:text-base">
                        {card.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Cards empilhados para mobile */}
              <div className="md:hidden relative">
                {cardsData.map((card, index) => {
                  const IconComponent = card.icon
                  
                  // Animação com melhor separação dos cards
                  const y = useTransform(
                    scrollYProgress,
                    [0, 0.3, 0.7, 1],
                    [0, 0, index * 100, index * 160]
                  )
                  
                  const rotate = useTransform(
                    scrollYProgress,
                    [0, 0.6, 1],
                    [0, index * 1.5, 0]
                  )
                  
                  const scale = useTransform(
                    scrollYProgress,
                    [0, 0.3, 1],
                    [1, 0.95, 1]
                  )
                  
                  return (
                    <motion.div
                      key={card.id}
                      className="absolute left-1/2 w-[90%] max-w-sm bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white shadow-xl border border-slate-600/30"
                      initial={{ x: "-50%" }}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        y,
                        rotate,
                        scale,
                        x: "-50%",
                        zIndex: 50 - index
                      }}
                    >
                      <motion.div 
                        className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto shadow-lg"
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold mb-3 text-center">{card.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-center text-sm">
                        {card.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* CTA Button que acompanha a animação */}
              <motion.div 
                className="text-center absolute left-1/2 w-full md:relative md:left-auto md:w-auto"
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [0, cardsData.length * 160 + 50]),
                  x: "-50%",
                  zIndex: 60
                }}
              >
                <Button 
                  size="lg"
                  className="bg-[#2bee3597] hover:bg-[#24a92c] text-black px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-[90%] max-w-sm md:w-auto"
                  onClick={() => scrollToSection("contato")}
                >
                  <MessageSquare className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-lg leading-tight font-bold">Aumente seu fluxo de caixa</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quem irá trabalhar ao seu favor */}
        <section className="relative bg-black overflow-hidden">
          {/* Imagem de fundo */}
          <div className="absolute -top-72 inset-x-0 bottom-0 z-0">
            <Image 
              src="/dr.png"
              alt="Abrão e Silva Advogados Associados"
              fill
              className="object-cover object-top opacity-60 grayscale"
              priority={true}
            />
            {/* Overlay escuro para melhorar legibilidade do texto */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Conteúdo sobreposto */}
          <div className="relative z-10 mx-auto px-10 md:px-6 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quem irá trabalhar ao seu favor
              </h2>
              <div className="w-24 h-1 bg-[#e2ba4b] mx-auto mt-4"></div>
              <p className="text-lg text-gray-300 mt-4 uppercase tracking-wider">
                CONHEÇA O ADVOGADO
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Abrão e Silva Advogados Associados
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Somos um time de especialistas em direito tributário com atuação 
                nacional, focado em gerar economia real para empresas dos mais 
                diversos setores. Nosso diferencial está na comunicação transparente, 
                agilidade nas entregas e parcerias duradouras, sempre com foco em 
                segurança jurídica e impacto positivo no caixa da empresa. Com 
                centenas de empresas atendidas e mais de R$ 113 milhões em economia 
                efetiva, nos orgulhamos de entregar resultados consistentes e duradouros.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-[#2bee3597] hover:bg-[#24a92c] text-black px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => scrollToSection("contato")}
                >
                  <MessageSquare className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-lg leading-tight font-bold">Aumente seu fluxo de caixa</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nossas áreas de atuação */}
        <section className="py-16 bg-black">
          {/* // [cursor-edit] container: padding mobile maior */}
          <div className=" mx-auto px-10 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
               Áreas de Atuação
              </h2>
              <p className="text-sm text-gray-300 max-w-3xl mx-auto">
                Especialistas nas principais frentes de economia tributária
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Card 1 */}
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
                <h3 className="text-white font-bold text-lg mb-4">
                  Recuperação de Tributos
                </h3>
                <p className="text-gray-300 text-sm">
                  PIS, COFINS, INSS, IRPJ e CSLL pagos indevidamente
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
                <h3 className="text-white font-bold text-lg mb-4">
                  Renegociação Fiscal
                </h3>
                <p className="text-gray-300 text-sm">
                  Com a Receita Federal e PGFN
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
                <h3 className="text-white font-bold text-lg mb-4">
                  Transações Tributárias
                </h3>
                <p className="text-gray-300 text-sm">
                  Programas especiais de parcelamento
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
                <h3 className="text-white font-bold text-lg mb-4">
                  Planejamento Estratégico
                </h3>
                <p className="text-gray-300 text-sm">
                  Tributário personalizado
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
                <h3 className="text-white font-bold text-lg mb-4">
                  Regularidade Fiscal
                </h3>
                <p className="text-gray-300 text-sm">
                  Certidões negativas e compliance
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700">
                <h3 className="text-white font-bold text-lg mb-4">
                  Atendimento Completo
                </h3>
                <p className="text-gray-300 text-sm">
                  Empresas de todos os portes e segmentos
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button 
                size="lg"
                  className="bg-[#2bee3597] hover:bg-[#24a92c] text-black px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection("contato")}
              >
                <MessageSquare className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-lg leading-tight font-bold">Faça um diagnóstico gratuito</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Nossos Depoimentos */}
      

        {/* Galeria de Vídeos */}
        <section className="py-16 bg-black">
          {/* // [cursor-edit] container: padding mobile maior */}
          <div className=" mx-auto px-10 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Galeria de Vídeos
              </h2>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg"
                  className="bg-[#2bee3597] hover:bg-[#24a92c] text-black px-4 md:px-8 py-3 md:py-4 text-sm md:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                onClick={() => scrollToSection("contato")}
              >
                <MessageSquare className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-lg leading-tight font-bold">Faça um diagnóstico gratuito</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Como Funciona Nosso Programa ? */}
        <section className="py-16 bg-black">
          <div className=" mx-auto px-10 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como Funciona Nossa Análise ?
              </h2>
            </div>

            {/* Timeline do Processo - Responsivo */}
            <div className="max-w-4xl mx-auto">
              {/* Mobile: Layout vertical simples */}
              <div className="block md:hidden space-y-8">
                {/* Step 1 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 ">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">1</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">CONTATO NO WHATSAPP</h3>
                  <p className="text-gray-300 text-sm">
                    Você entra em contato conosco através de um dos botões disponíveis no site
                  </p>
                </div>

                {/* Step 2 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 ">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">2</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">DIAGNÓSTICO</h3>
                  <p className="text-gray-300 text-sm">
                    Nossos especialistas fazem análise minuciosa da sua empresa, em busca de 
                    melhores práticas de mercado.
                  </p>
                </div>

                {/* Step 3 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 ">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">3</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">ESTRUTURAÇÃO</h3>
                  <p className="text-gray-300 text-sm">
                    Será estruturado um programa personalizado para sua empresa.
                  </p>
                </div>

                {/* Step 4 - Mobile */}
                <div className="bg-gray-800 rounded-2xl p-6 ">
                  <div className="flex items-center mb-4">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-black">4</span>
                    </div>
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
                      <h3 className="text-xl font-bold text-white mb-2">CONTATO NO WHATSAPP</h3>
                      <p className="text-gray-300">
                        Você entra em contato conosco através de um dos botões disponíveis no site
                      </p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.15 ? 'bg-white scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.15 ? 'text-black' : 'text-gray-400'}`}>1</span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 2 - Desktop */}
                <div className="relative flex items-center mb-12">
                  <div className="w-1/2 pr-8"></div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.4 ? 'bg-white scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.4 ? 'text-black' : 'text-gray-400'}`}>2</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
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
                      <h3 className="text-xl font-bold text-white mb-2">ESTRUTURAÇÃO</h3>
                      <p className="text-gray-300">
                        Será estruturado um programa personalizado para sua empresa.
                      </p>
                    </div>
                  </div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.65 ? 'bg-white scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.65 ? 'text-black' : 'text-gray-400'}`}>3</span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* Step 4 - Desktop */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-600 rounded-full flex items-center justify-center transition-all duration-700 ${timelineProgress >= 0.9 ? 'bg-white scale-110' : 'bg-gray-600'}`}>
                    <span className={`text-sm font-bold transition-colors duration-700 ${timelineProgress >= 0.9 ? 'text-black' : 'text-gray-400'}`}>4</span>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
                      <h3 className="text-xl font-bold text-white mb-2">EXECUÇÃO</h3>
                      <p className="text-gray-300">
                        Implantação do programa na empresa de forma estruturada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* // [cursor-edit] Botão mobile na última seção */}
            <div className="block md:hidden mt-10">
              <Button 
                size="lg"
                className="bg-[#2bee3597] hover:bg-[#24a92c] text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full"
                onClick={() => scrollToSection("contato")}
              >
                FALE COM ESPECIALISTA AGORA
              </Button>
            </div>
          </div>
        </section>
        {/* Contato */}
       

        {/* Perguntas realizadas com frequência */}
   
        {/* Footer */}
       
      </main>
    </div>
  )
}
