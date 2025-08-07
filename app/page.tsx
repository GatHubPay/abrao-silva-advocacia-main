"use client"

import { useState, useEffect } from "react"
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
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
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gray-300 transition-colors font-medium text-sm"
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
                     className="p-3 border border-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-800 transition-colors flex items-center justify-center"
                     aria-label={social.name}
                   >
                     <IconComponent className="h-6 w-6 text-white" />
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
                        className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                        aria-label={social.name}
                      >
                        <IconComponent className="h-7 w-7 text-white" />
                      </a>
                    );
                  })}
                </div>
                
                {/* Mobile Menu Items */}
                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors font-medium"
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
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                Nossa{" "}
                <span className="text-[#e2ba4b]">Localização</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Encontre-nos em Anicuns/GO. Atendemos em todo território nacional com excelência e dedicação.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Mapa */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center">
                    Localização no Mapa
                  </h3>
                  <GoogleMapComponent />
                  <div className="mt-6 text-center">
                    <p className="font-bold text-black text-lg">Anicuns - GO</p>
                    <p className="text-gray-500 mt-2">Atendimento em todo território nacional</p>
                    <Button 
                      onClick={() => scrollToSection("contato")}
                      className="mt-4 btn-golden text-black py-3 px-6 text-lg font-semibold"
                    >
                      FALE CONOSCO »
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-12 md:py-16 lg:py-24 contact-bg relative overflow-hidden">
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Fale diretamente com um de{" "}
                <span className="text-[#e2ba4b]">nossos Advogados</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
                Preencha o formulário abaixo e aguarde o nosso retorno com um atendimento focado nas suas necessidades.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Formulário */}
               <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">Fale diretamente com um de <span className="text-[#e2ba4b]">nossos Advogados</span></h3>
                    <p className="text-base md:text-lg text-gray-600">
                      Preencha o formulário abaixo e aguarde o nosso retorno com um atendimento focado nas suas necessidades
                    </p>
                  </div>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Nome</label>
                        <Input placeholder="Seu nome completo" className="border-gray-300 h-12 form-input-focus" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">E-mail</label>
                        <Input
                          type="email"
                          placeholder="seu@email.com"
                          className="border-gray-300 h-12 form-input-focus"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Telefone</label>
                        <Input placeholder="(62) 99999-9999" className="border-gray-300 h-12 form-input-focus" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Assunto</label>
                        <Input
                          placeholder="Ex: Direito Previdenciário"
                          className="border-gray-300 h-12 form-input-focus"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mensagem</label>
                      <Textarea
                        placeholder="Descreva sua situação jurídica com detalhes..."
                        className="border-gray-300 min-h-[120px] form-input-focus resize-none"
                      />
                    </div>
                    <Button className="w-full btn-golden text-black py-3 text-lg font-semibold h-12 shadow-lg">
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
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">Informações de <span className="text-[#e2ba4b]">Contato</span></h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Todas as informações para entrar em contato conosco.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Dados de Contato */}
              <div className="bg-[#e2ba4b] rounded-2xl shadow-2xl overflow-hidden border border-[#e2ba4b] hover:shadow-3xl transition-all duration-300">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Informações de Contato</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coluna Esquerda */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1 mb-4">
                          <p className="font-semibold text-black text-base">Telefone SAC</p>
                          <p className="text-gray-600 text-base break-all">(62) 3412-2893</p>
                          <p className="text-sm text-gray-500 break-words"></p>

                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base">E-mail Oficial</p>
                          <p className="text-gray-600 text-base break-all">contato@abraoesilva.adv.br</p>
                        </div>
                      </div>
                    </div>
                    {/* Coluna Direita */}
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base">Localização</p>
                          <p className="text-gray-600 text-base">Anicuns - GO</p>
                          <p className="text-sm text-gray-500 break-words">Av. Bandeirantes, 2216, Setor Leste - Anicuns, GO, 76170-000</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="bg-black p-3 rounded-full flex-shrink-0">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-black text-base">Horário de Atendimento</p>
                          <p className="text-gray-600 text-base">Seg - Sex: 07:00 às 17:00</p>
                          <p className="text-sm text-gray-500">Pausa para almoço: 11:00 às 13:00</p>
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
               {socialLinks.map((social) => {
                 const IconComponent = social.icon;
                 return (
                   <a
                     key={social.name}
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-2 lg:p-3 border border-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-800 transition-colors flex items-center justify-center"
                     aria-label={social.name}
                   >
                     <IconComponent className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
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
                  <div key={item.key} className="flex items-center">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-[#e2ba4b] hover:text-white transition-colors text-sm font-medium"
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
              <button className="bg-[#e2ba4b] hover:bg-[#d4a93a] text-black px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 text-center">
                <BookOpen className="h-5 w-5" />
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
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center space-x-2 shadow-lg">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Como posso te ajudar?</span>
          </button>
        </div>
      </div>
    </div>
  )
}
