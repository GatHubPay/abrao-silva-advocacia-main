"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  Users,
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

// [cursor-edit] - Componente da página de parcerias tributárias
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Header Simplificado */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png" 
                alt="Abrão & Silva Advocacia" 
                className="h-8 w-auto md:h-12"
                width={100}
                height={100}
                priority
                quality={85}
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection("contato")}
                className="bg-[#e2ba4b] hover:bg-[#d4a93a] text-black px-6 py-2 font-semibold"
              >
                FALE CONOSCO
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 pt-16 md:pt-20">
        
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

        {/* Seção de Estatísticas */}
        <section className="py-16 md:py-24 bg-[#e2ba4b]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Resultados que <span className="text-white">Impressionam</span>
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Nossa expertise em parcerias tributárias gera resultados excepcionais para nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center scroll-reveal">
                <div className="bg-black rounded-2xl p-8 shadow-lg">
                  <TrendingUp className="h-12 w-12 text-[#e2ba4b] mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">R$ 2Bi+</div>
                  <p className="text-gray-300 text-lg">Em créditos recuperados</p>
                </div>
              </div>
              
              <div className="text-center scroll-reveal">
                <div className="bg-black rounded-2xl p-8 shadow-lg">
                  <Handshake className="h-12 w-12 text-[#e2ba4b] mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
                  <p className="text-gray-300 text-lg">Transparência nas parcerias</p>
                </div>
              </div>
              
              <div className="text-center scroll-reveal">
                <div className="bg-black rounded-2xl p-8 shadow-lg">
                  <Award className="h-12 w-12 text-[#e2ba4b] mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
                  <p className="text-gray-300 text-lg">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Parcerias */}
        <section id="parcerias" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Parcerias com <span className="gradient-text">Foco na Transparência</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Parcerias com foco na transparência e agilidade para assegurar os direitos tributários das empresas, 
                atendendo com um atendimento humanizado e focado na capacitação dos parceiros para atendimento dos clientes.
                Onde o principal objetivo da parceria é ter uma comunicação fluída e objetiva sobre as demandas de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              
              {/* Card 1 - Transparência */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-reveal card-hover-effect">
                <div className="bg-[#e2ba4b] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Transparência Total</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comunicação clara e objetiva em todas as etapas do processo, garantindo que nossos parceiros 
                  tenham total visibilidade dos resultados.
                </p>
              </div>

              {/* Card 2 - Agilidade */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-reveal card-hover-effect">
                <div className="bg-[#e2ba4b] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Agilidade Comprovada</h3>
                <p className="text-gray-600 leading-relaxed">
                  Processos otimizados e equipe especializada garantem respostas rápidas e eficientes 
                  para todas as demandas tributárias.
                </p>
              </div>

              {/* Card 3 - Capacitação */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 scroll-reveal card-hover-effect">
                <div className="bg-[#e2ba4b] rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Capacitação Contínua</h3>
                <p className="text-gray-600 leading-relaxed">
                  Investimos na capacitação constante de nossos parceiros, garantindo atendimento 
                  de excelência aos clientes finais.
                </p>
              </div>
            </div>

            {/* Benefícios da Parceria */}
            <div className="bg-black rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Por que escolher nossa <span className="text-[#e2ba4b]">Parceria?</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Atendimento Humanizado</h4>
                      <p className="text-gray-300">Cada cliente recebe atenção personalizada e cuidado individual.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Comunicação Fluída</h4>
                      <p className="text-gray-300">Canais diretos de comunicação para agilizar processos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Resultados Comprovados</h4>
                      <p className="text-gray-300">Histórico de sucesso com mais de R$ 2 bilhões recuperados.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Suporte Técnico Especializado</h4>
                      <p className="text-gray-300">Equipe técnica sempre disponível para orientações.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Tecnologia Avançada</h4>
                      <p className="text-gray-300">Ferramentas modernas para otimizar processos tributários.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Crescimento Conjunto</h4>
                      <p className="text-gray-300">Parcerias que crescem junto com o sucesso dos clientes.</p>
                    </div>
                  </div>
                </div>
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

        {/* Seção de Contato */}
        <section id="contato" className="py-16 md:py-24 bg-gradient-to-br from-[#e2ba4b] to-[#d4a93a]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Seja Nosso <span className="text-white">Parceiro</span>
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como nossa parceria pode impulsionar seus resultados
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Formulário */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-black mb-6">Solicite uma Proposta de Parceria</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Nome Completo" 
                      className="border-gray-300 bg-white h-12 text-black placeholder-gray-500" 
                    />
                    <Input 
                      type="email" 
                      placeholder="E-mail Profissional" 
                      className="border-gray-300 bg-white h-12 text-black placeholder-gray-500" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      placeholder="Telefone/WhatsApp" 
                      className="border-gray-300 bg-white h-12 text-black placeholder-gray-500" 
                    />
                    <Input 
                      placeholder="Empresa/Escritório" 
                      className="border-gray-300 bg-white h-12 text-black placeholder-gray-500" 
                    />
                  </div>
                  
                  <Textarea 
                    placeholder="Conte-nos sobre seu interesse em nossa parceria tributária..." 
                    className="border-gray-300 bg-white min-h-[120px] text-black placeholder-gray-500 resize-none" 
                  />
                  
                  <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg font-semibold h-14 shadow-lg btn-hover-scale">
                    SOLICITAR PROPOSTA DE PARCERIA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Informações de Contato */}
              <div className="space-y-8">
                <div className="bg-black rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold text-[#e2ba4b] mb-6">Contato Direto - Setor Sul</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Telefone Especializado</p>
                        <p className="text-gray-300">(62) 99912-8796</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">E-mail Parcerias</p>
                        <p className="text-gray-300">setorsul@abraoesilva.adv.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Endereço</p>
                        <p className="text-gray-300">Rua 100, Nº 35, Qd. F-17, Lt. 12</p>
                        <p className="text-gray-300">Setor Sul - Goiânia/GO</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-[#e2ba4b] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Horário de Atendimento</p>
                        <p className="text-gray-300">Segunda a Sexta: 08:00 às 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action Adicional */}
                <div className="bg-white rounded-2xl p-8 border-2 border-black">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-[#e2ba4b] mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-black mb-4">Agende uma Reunião</h4>
                    <p className="text-gray-600 mb-6">
                      Converse diretamente com nossos especialistas e entenda como podemos 
                      construir uma parceria de sucesso.
                    </p>
                    <Button className="bg-[#e2ba4b] hover:bg-[#d4a93a] text-black px-8 py-3 font-semibold btn-hover-scale">
                      AGENDAR REUNIÃO
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Simplificado */}
      <footer className="bg-black text-white py-8">
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
