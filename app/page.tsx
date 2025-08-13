"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Menu,
  X,
  Scale,
  Users,
  FileText,
  Heart,
  Briefcase,
  Building,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  ChevronDown,
  Clock,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Target,
  Zap,
  TrendingUp,
  Globe,
  BookOpen,
} from "lucide-react"
import Image from "next/image"
import GoogleMapComponent from "@/components/GoogleMap"

export default function AbraoSilvaAdvocacia() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [showCookiePopup, setShowCookiePopup] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["localizacao", "contato", "informacoes"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Configurar Intersection Observer para animações de scroll
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

      // Observar todos os elementos com classes de scroll reveal
      const scrollElements = document.querySelectorAll(
        '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
      )
      scrollElements.forEach((el) => {
        observerRef.current?.observe(el)
      })
    }

    // Verificar se o usuário já aceitou/rejeitou cookies
    const cookiePreference = localStorage.getItem('cookiePreference')
    if (!cookiePreference) {
      // Mostrar popup após 2 segundos se não há preferência salva
      const timer = setTimeout(() => {
        setShowCookiePopup(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }

    // Configurar animações após o componente carregar
    const loadTimer = setTimeout(() => {
      setIsLoaded(true)
      setupScrollAnimations()
      
      // Revelar elementos que já estão na tela imediatamente
      const elementsInView = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right')
      elementsInView.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('revealed')
        }
      })
    }, 100)

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observerRef.current?.disconnect()
      clearTimeout(loadTimer)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiePreference', 'accepted')
    setShowCookiePopup(false)
  }

  const handleRejectCookies = () => {
    localStorage.setItem('cookiePreference', 'rejected')
    setShowCookiePopup(false)
  }

  const menuItems = [
    { label: "Localização", id: "localizacao", key: "localizacao" },
    { label: "Entre em Contato", id: "contato", key: "contato" },
    { label: "Informações", id: "informacoes", key: "informacoes" }
  ]

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://www.instagram.com/abraoesilvaadvogados/" 
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://www.facebook.com/p/Abrão-e-Silva-AdvogadosAssociados-100065542987803/" 
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "https://www.youtube.com/@abraoesilvaadvogados" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://br.linkedin.com/company/abrao-e-silva-advogados-associados" 
    }
  ]

  return (
    <div className="bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white backdrop-blur-sm border-b border-gray-100 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Image
                src="/logo.png" 
                alt="Abrão & Silva Advocacia" 
                className="h-8 w-auto md:h-12"
                width={100}
                height={100}
              />
            </div>

            {/* Center - Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
                              {menuItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-[#e2ba4b] transition-all duration-300 font-medium text-sm btn-hover-scale animate-slideInDown"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
            </nav>

            {/* Right Side - Social Icons */}
             <div className="hidden md:flex items-center space-x-3 ">
               {socialLinks.map((social) => {
                 const IconComponent = social.icon;
                 return (
                   <a
                     key={social.name}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 border border-gray-600 rounded-lg hover:border-[#e2ba4b] hover:bg-[#e2ba4b] transition-all duration-300 flex items-center justify-center btn-hover-scale group animate-float"
                     aria-label={social.name}
                     style={{ animationDelay: `${socialLinks.indexOf(social) * 0.2}s` }}
                   >
                     <IconComponent className="h-6 w-6 text-white group-hover:text-black transition-colors duration-300" />
                   </a>
                 );
               })}
             </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-3 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-white" />
              ) : (
                <Menu className="h-7 w-7 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800">
              <div className="py-4 space-y-4">
                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-6 pb-6 ">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-4 rounded-lg hover:bg-[#e2ba4b] transition-all duration-300 flex items-center justify-center btn-hover-scale group animate-bounce-gentle"
                        aria-label={social.name}
                        style={{ animationDelay: `${socialLinks.indexOf(social) * 0.1}s` }}
                      >
                        <IconComponent className="h-7 w-7 text-white group-hover:text-black transition-colors duration-300" />
                      </a>
                    );
                  })}
                </div>
                
                {/* Mobile Menu Items */}
                {menuItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#e2ba4b] hover:text-black transition-all duration-300 font-medium btn-hover-scale animate-fadeInLeft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 pt-16 md:pt-20">
        {/* Localização Section */}
        <section id="localizacao" className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 md:mb-16 scroll-reveal ${isLoaded ? 'animate-fadeInUp' : ''}`}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                Nossa localização em <span className="gradient-text">ANICUNS - GOIÁS</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
                Estamos localizados em Anicuns (GOIÁS) e atendemos em todo território nacional.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Mapa */}
              <div className={`relative group scroll-reveal-left golden-particles ${isLoaded ? 'animate-scaleIn delay-200' : ''}`}>
                {/* Borda animada principal */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#e2ba4b] via-[#f4d366] to-[#e2ba4b] rounded-2xl blur-sm opacity-75 group-hover:opacity-100 animate-[golden-glow_3s_ease-in-out_infinite] transition-all duration-300"></div>
                
                {/* Efeito shimmer */}
                <div className="absolute -inset-1 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                </div>
                
                {/* Card principal */}
                <div className="location-bg rounded-2xl shadow-2xl overflow-hidden relative border-2 border-[#e2ba4b] card-hover-effect">
                <div className="relative p-6 md:p-8 z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center animate-float">
                    Localização no Mapa
                  </h3>
                  <GoogleMapComponent />
                  <div className="mt-6 text-center">
                    <p className="font-bold text-black text-lg animate-bounce-gentle">Anicuns - GO</p>
                    <p className="text-gray-500 mt-2">Atendimento em todo território nacional</p>
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="mt-4 btn-golden btn-hover-scale text-black py-3 px-6 text-lg font-semibold animate-pulse-golden"
                    >
                      FALE CONOSCO »
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-12 md:py-16 lg:py-24 contact-bg relative overflow-hidden">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Fale diretamente com um de{" "}
                <span className="gradient-text">nossos Advogados</span>
              </h2>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto px-4">
                Preencha o formulário abaixo e aguarde o nosso retorno com um atendimento focado nas suas necessidades.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Formulário */}
               <div className="rounded-2xl shadow-2xl overflow-hidden card-hover-effect scroll-reveal-right golden-particles">
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Fale diretamente com um de <span className="gradient-text">nossos Advogados</span></h3>
                    <p className="text-base md:text-lg text-white">
                      Preencha o formulário abaixo e aguarde o nosso retorno com um atendimento focado nas suas necessidades
                    </p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="scroll-reveal delay-100">
                        <label className="block text-sm font-semibold text-white mb-1.5 animate-fadeInLeft">Nome</label>
                        <Input placeholder="Seu nome completo" className="border-gray-300 h-12 form-input-focus" />
                      </div>
                      <div className="scroll-reveal delay-200">
                        <label className="block text-sm font-semibold text-white mb-1.5 animate-fadeInRight">E-mail</label>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className="border-gray-300 h-12 form-input-focus"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="scroll-reveal delay-300">
                        <label className="block text-sm font-semibold text-white mb-1.5 animate-fadeInLeft">Telefone</label>
                        <Input placeholder="(62) 99999-9999" className="border-gray-300 h-12 form-input-focus" />
                      </div>
                      <div className="scroll-reveal delay-400">
                        <label className="block text-sm font-semibold text-white mb-1.5 animate-fadeInRight">Assunto</label>
                        <Input
                          placeholder="Ex: Direito Previdenciário"
                          className="border-gray-300 h-12 form-input-focus text-white"
                        />
                      </div>
                    </div>
                    <div className="scroll-reveal delay-500">
                        <label className="block text-sm font-semibold text-white mb-1.5 animate-fadeInUp">Mensagem</label>
                      <Textarea
                        placeholder="Descreva sua situação jurídica com detalhes..."
                        className="border-gray-300 min-h-[120px] form-input-focus resize-none text-white"
                      />
                    </div>
                    <Button className="w-full btn-golden btn-hover-scale text-black py-3 text-lg font-semibold h-12 shadow-lg animate-pulse-golden">
                      SOLICITAR UM ESPECIALISTA »
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informações Section */}
        <section id="informacoes" className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">Informações de <span className="gradient-text">Contato</span></h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Todas as informações para entrar em contato conosco.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Dados de Contato */}
              <div className="bg-[#e2ba4b] rounded-2xl shadow-2xl overflow-hidden border border-[#e2ba4b] card-hover-effect scroll-reveal-left golden-particles">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6 animate-float">Informações de Contato</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coluna Esquerda */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 scroll-reveal delay-100">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 animate-pulse-golden btn-hover-scale">
                          <Phone className="h-6 w-6 text-white animate-float" />
                        </div>
                        <div className="min-w-0 flex-1 mb-4">
                          <p className="font-semibold text-black text-base animate-fadeInLeft">Telefone SAC</p>
                          <p className="text-gray-600 text-base break-all animate-fadeInLeft delay-100">(62) 3412-2893</p>
                          <p className="text-sm text-gray-500 break-words"></p>

                        </div>
                      </div>
                      <div className="flex items-start space-x-4 scroll-reveal delay-200">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 animate-pulse-golden btn-hover-scale">
                          <Mail className="h-6 w-6 text-white animate-float" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base animate-fadeInLeft">E-mail Oficial</p>
                          <p className="text-gray-600 text-base break-all animate-fadeInLeft delay-100">contato@abraoesilva.adv.br</p>
                        </div>
                      </div>
                    </div>
                    {/* Coluna Direita */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 scroll-reveal delay-300">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 animate-pulse-golden btn-hover-scale">
                          <MapPin className="h-6 w-6 text-white animate-bounce-gentle" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base animate-fadeInRight">Localização</p>
                          <p className="text-gray-600 text-base animate-fadeInRight delay-100">Anicuns - GO</p>
                          <p className="text-sm text-gray-500 break-words animate-fadeInRight delay-200">Av. Bandeirantes, 2216, Setor Leste - Anicuns, GO, 76170-000</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 scroll-reveal delay-400">
                        <div className="bg-black p-3 rounded-full flex-shrink-0 animate-pulse-golden btn-hover-scale">
                          <Clock className="h-6 w-6 text-white animate-float" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base animate-fadeInRight">Horário de Atendimento</p>
                          <p className="text-gray-600 text-base animate-fadeInRight delay-100">Seg - Sex: 07:00 às 17:00</p>
                          <p className="text-sm text-gray-500 animate-fadeInRight delay-200">Pausa para almoço: 11:00 às 13:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-auto">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
            
            {/* Left Side - Logo */}
            <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
              <div className="flex items-center">
                <div className="text-white">
                  <Image src="/logo.png" alt="Abrão & Silva Advocacia" width={200} height={100} className="h-16 w-auto lg:h-20" />
                </div>
              </div>
            </div>

            {/* Middle Left - Contact Information & Social Media */}
            <div className="flex flex-col items-center space-y-4 w-full lg:w-auto">
              <span className="text-white text-xl lg:text-2xl font-bold text-center">SAC geral</span>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                <a 
                  href="tel:6234122893" 
                  className="text-white hover:text-gray-300 transition-colors text-xl lg:text-2xl font-bold"
                >
                  (62) 3412-2893
                </a>
              </div>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3">
               {socialLinks.map((social, index) => {
                 const IconComponent = social.icon;
                 return (
                   <a
                     key={social.name}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-2 lg:p-3 border border-gray-600 rounded-lg hover:border-[#e2ba4b] hover:bg-[#e2ba4b] transition-all duration-300 flex items-center justify-center btn-hover-scale group animate-float"
                     aria-label={social.name}
                     style={{ animationDelay: `${index * 0.2}s` }}
                   >
                     <IconComponent className="h-5 w-5 lg:h-6 lg:w-6 text-white group-hover:text-black transition-colors duration-300" />
                   </a>
                 );
               })}
             </div>
            </div>

            {/* Middle Right - Navigation Links */}
            <div className="flex flex-col items-center space-y-2 w-full lg:w-auto">
              {/* Navigation Links */}
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
                {menuItems.map((item, index) => (
                  <div key={item.key} className="flex items-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-[#e2ba4b] hover:text-white transition-all duration-300 text-sm font-medium btn-hover-scale"
                    >
                      {item.label}
                    </button>
                    {index < menuItems.length - 1 && (
                      <div className="hidden lg:block w-px h-4 bg-white ml-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Call to Action Button */}
            <div className="flex items-center justify-center lg:justify-end w-full lg:w-auto">
              <button className="btn-golden btn-hover-scale text-black px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 text-center animate-pulse-golden">
                <BookOpen className="h-5 w-5 animate-float" />
                <span className="text-sm font-medium">Encontre um escritório mais próximo!</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="bg-gray-200 px-4 py-3">
          <div className="container mx-auto">
            <div className="text-center">
              <span className="text-black text-xs lg:text-sm">
                Copyright © {new Date().getFullYear()} ABRAO E SILVA | ADVOGADOS ASSOCIADOS. Todos os Direitos reservados.
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="flex flex-col items-end space-y-1">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg btn-hover-scale animate-bounce-gentle hover:shadow-2xl">
            <MessageCircle className="h-5 w-5 animate-float" />
            <span className="text-sm font-medium">Como posso te ajudar?</span>
          </button>
        </div>
      </div>

      {/* Cookie Popup */}
      {showCookiePopup && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#e2ba4b] p-2 rounded-full flex-shrink-0">
                    <Shield className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-black mb-1">
                      Utilizamos cookies
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Este site utiliza cookies para melhorar sua experiência de navegação e fornecer funcionalidades personalizadas. 
                      Ao continuar navegando, você concorda com nossa política de cookies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3 flex-shrink-0">
                <button
                  onClick={handleRejectCookies}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Rejeitar
                </button>
                <button
                  onClick={handleAcceptCookies}
                  className="px-4 py-2 text-sm font-medium bg-[#e2ba4b] hover:bg-[#d4a93a] text-black rounded-lg transition-colors shadow-sm"
                >
                  Aceitar Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
