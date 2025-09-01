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
  Zap
} from "lucide-react"
import Image from "next/image"
import HeroSection from "@/components/sections/HeroSection"
import VideoSection from "@/components/sections/VideoSection"
import ContactSection from "@/components/sections/ContactSection"

import "@/styles/parcerias.css"

// [cursor-edit] - Componente otimizado da página de parcerias tributárias
export default function ParceriasTributarias() {
  const [isLoaded, setIsLoaded] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

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
    }, 100)

    return () => {
      observerRef.current?.disconnect()
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
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col min-h-screen relative overflow-hidden">
      {/* [cursor-edit] - Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#e2ba4b]/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e2ba4b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e2ba4b]/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523e2ba4b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>


      {/* [cursor-edit] - Main Content com melhor estrutura semântica */}
      <main className="flex-1 relative z-10" role="main">
        
        {/* Hero Section */}
        <HeroSection
          title="Parcerias que Transformam Resultados"
          subtitle="ESPECIALISTAS EM DIREITO TRIBUTÁRIO"
          description="Mais de 2 bilhões em créditos recuperados através de parcerias estratégicas no ramo tributário"
          primaryButtonText="CONHEÇA NOSSAS PARCERIAS"
          secondaryButtonText="SEJA NOSSO PARCEIRO"
          onPrimaryClick={() => scrollToSection("parcerias")}
          onSecondaryClick={() => scrollToSection("contato")}
          cityInfo={{
            name: "UNIDADE SETOR SUL - GOIÂNIA",
            address: "Rua 100, Nº 35, Qd. F-17, Lt. 12",
            schedule: "08:00 às 17:00",
            phone: "(62) 99912-8796",
            email: "setorsul@abraoesilva.adv.br"
          }}
          heroImageSrc="/dr.png"
          heroImageAlt="Especialista em Direito Tributário"
        />

        {/* [cursor-edit] - Seção de Estatísticas otimizada */}
        <section 
          className="py-16 md:py-24 bg-gradient-to-r from-[#e2ba4b] via-[#f4c430] to-[#e2ba4b] relative overflow-hidden"
          aria-labelledby="statistics-title"
        >
          {/* Elementos decorativos */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="statistics-title" className="text-3xl md:text-4xl font-bold text-black mb-4">
                Resultados que <span className="text-white">Impressionam</span>
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Nossa expertise em parcerias tributárias gera resultados excepcionais para nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {statisticsData.map((stat, index) => (
                <div key={index} className="text-center scroll-reveal">
                  <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-[#e2ba4b]/20 hover:border-[#e2ba4b]/40">
                    <stat.icon 
                      className="h-12 w-12 text-[#e2ba4b] mx-auto mb-4" 
                      aria-hidden="true"
                    />
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2" aria-label={`${stat.value} ${stat.label}`}>
                      {stat.value}
                    </div>
                    <p className="text-gray-300 text-lg">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* [cursor-edit] - Seção de Parcerias com fundo moderno */}
        <section id="parcerias" className="py-16 md:py-24 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2ba4b%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M50%2050c13.8%200%2025-11.2%2025-25S63.8%200%2050%200%2025%2011.2%2025%2025s11.2%2025%2025%2025zm25%2025c13.8%200%2025-11.2%2025-25S88.8%2025%2075%2025%2050%2036.2%2050%2050s11.2%2025%2025%2025zM25%2075c13.8%200%2025-11.2%2025-25S38.8%2025%2025%2025%200%2036.2%200%2050s11.2%2025%2025%2025z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#e2ba4b]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#e2ba4b]/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Parcerias com <span className="gradient-text">Foco na Transparência</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Parcerias com foco na transparência e agilidade para assegurar os direitos tributários das empresas, 
                atendendo com um atendimento humanizado e focado na capacitação dos parceiros para atendimento dos clientes.
                Onde o principal objetivo da parceria é ter uma comunicação fluída e objetiva sobre as demandas de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Card 1 - Transparência */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 scroll-reveal card-hover-effect border border-white/20 hover:border-[#e2ba4b]/50">
                <div className="bg-[#e2ba4b] rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Transparência Total</h3>
                <p className="text-gray-300 leading-relaxed">
                  Comunicação clara e objetiva em todas as etapas do processo, garantindo que nossos parceiros 
                  tenham total visibilidade dos resultados.
                </p>
              </div>

              {/* Card 2 - Agilidade */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 scroll-reveal card-hover-effect border border-white/20 hover:border-[#e2ba4b]/50">
                <div className="bg-[#e2ba4b] rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Agilidade Comprovada</h3>
                <p className="text-gray-300 leading-relaxed">
                  Processos otimizados e equipe especializada garantem respostas rápidas e eficientes 
                  para todas as demandas tributárias.
                </p>
              </div>

              {/* Card 3 - Capacitação */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 scroll-reveal card-hover-effect border border-white/20 hover:border-[#e2ba4b]/50">
                <div className="bg-[#e2ba4b] rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Capacitação Contínua</h3>
                <p className="text-gray-300 leading-relaxed">
                  Investimos na capacitação constante de nossos parceiros, garantindo atendimento 
                  de excelência aos clientes finais.
                </p>
              </div>
            </div>

            {/* [cursor-edit] - Benefícios da Parceria otimizados */}
            <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#e2ba4b]/20 shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Por que escolher nossa <span className="text-[#e2ba4b]">Parceria?</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefitsData.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <CheckCircle 
                      className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1 transition-transform group-hover:scale-110" 
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-[#e2ba4b] transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Vídeo */}
        <VideoSection
          title="Conheça Nossa Abordagem"
          subtitle="Assista ao vídeo e entenda como nossas parcerias podem transformar seus resultados"
          className="bg-black"
          // videoId="SEU_VIDEO_ID_AQUI" // Descomente e adicione o ID do YouTube quando disponível
          // videoUrl="/videos/parcerias.mp4" // Ou use um vídeo local
        />

        {/* [cursor-edit] - Nova seção de contato com mapa integrado */}
        <ContactSection
          cityConfig={{
            coordinates: { lat: -16.6869, lng: -49.2648 }, // Coordenadas de Goiânia - Setor Sul
            address: {
              street: "Rua 100, Nº 35, Qd. F-17, Lt. 12",
              neighborhood: "Setor Sul",
              city: "Goiânia",
              state: "GO",
              zipCode: "74080-000"
            },
            whatsapp: "5562985851251", // [cursor-edit] - WhatsApp Setor Sul
            description: "Escritório especializado em parcerias tributárias"
          }}
          contactInfo={{
            name: "Contato Direto - Setor Sul",
            phone: "(62) 99912-8796",
            email: "setorsul@abraoesilva.adv.br",
            address: "Rua 100, Nº 35, Qd. F-17, Lt. 12 - Setor Sul, Goiânia/GO",
            schedule: "Segunda a Sexta: 08:00 às 17:00"
          }}
        />
      </main>

      {/* [cursor-edit] - Footer moderno */}
      <footer className="bg-black/95 backdrop-blur-sm text-white py-8 border-t border-[#e2ba4b]/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <Image 
                src="/logo.png" 
                alt="Abrão & Silva Advocacia" 
                width={150} 
                height={75} 
                className="h-12 w-auto" 
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Abrão & Silva Advocacia - Parcerias Tributárias
              </p>
              <p className="text-gray-400 text-sm">
                Especialistas em Direito Tributário - Setor Sul, Goiânia/GO
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
