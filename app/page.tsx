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

  const areasAtuacao = [
    {
      icon: Scale,
      title: "Direito Previdenciário",
      description: "Aposentadorias, pensões e benefícios previdenciários com máxima eficiência e dedicação",
      color: "from-gray-900 to-gray-700",
    },
    {
      icon: FileText,
      title: "Direito Tributário",
      description: "Planejamento tributário estratégico e defesa fiscal especializada para empresas",
      color: "from-gray-800 to-gray-600",
    },
    {
      icon: Users,
      title: "Restituição para Professores",
      description: "Recuperação de valores pagos indevidamente ao INSS por profissionais da educação",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: Heart,
      title: "Direito Médico",
      description: "Defesa especializada de profissionais da área da saúde em processos éticos",
      color: "from-gray-900 to-gray-700",
    },
    {
      icon: Briefcase,
      title: "Processo de Execução",
      description: "Cobrança judicial e extrajudicial com estratégias eficazes e resultados comprovados",
      color: "from-gray-800 to-gray-600",
    },
    {
      icon: Building,
      title: "Direito Cível",
      description: "Contratos, responsabilidade civil, direito de família e questões patrimoniais",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: UserCheck,
      title: "Direito Trabalhista",
      description: "Defesa completa dos direitos trabalhistas para empregados e empregadores",
      color: "from-gray-900 to-gray-700",
    },
  ]

  const diferenciais = [
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Estratégias personalizadas para cada caso com foco em resultados efetivos",
    },
    {
      icon: Zap,
      title: "Agilidade",
      description: "Resposta rápida e acompanhamento processual em tempo real",
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Mais de 7 anos de experiência e centenas de casos resolvidos",
    },
    {
      icon: Globe,
      title: "Atuação Nacional",
      description: "Atendimento em todo território nacional com excelência",
    },
  ]

  const depoimentos = [
    {
      nome: "Maria Silva",
      cargo: "Empresária",
      texto: "Profissionais excepcionais que resolveram meu caso previdenciário com total dedicação e competência.",
      rating: 5,
    },
    {
      nome: "João Santos",
      cargo: "Professor",
      texto: "Conseguiram minha restituição em tempo record. Atendimento personalizado e resultados surpreendentes.",
      rating: 5,
    },
    {
      nome: "Ana Costa",
      cargo: "Médica",
      texto: "Excelente defesa no meu processo ético. Equipe preparada e estratégia jurídica impecável.",
      rating: 5,
    },
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
        {/* Hero Section */}
       

        {/* Diferenciais Section */}
       

        {/* Sobre Section */}
      

        {/* Serviços Section */}
    

        {/* Depoimentos Section */}
       
        <div className="container mx-auto px-4 pt-8">
                 <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-xl p-6 mb-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2"> UNIDADE ANICUNS/GO</h3>
                  </div>
                  </div>
        {/* Localização Section */}
        <section id="localizacao" className="py-12 md:py-16 lg:py-24 bg-gray-50">
          
          <div className="container mx-auto px-4">
            
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">Nossa Localização</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Encontre-nos em Anicuns/GO. Atendemos em todo território nacional.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Mapa */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
                <div className="p-6 md:p-8">
                  {/* Destaque da Unidade */}
             
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-6">Unidade de Anicuns/GO</h3>
                  <GoogleMapComponent />
                  <div className="mt-4 text-center">
                    <p className="font-bold text-black text-base md:text-lg">Anicuns - GO</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-2">Atendimento em todo território nacional</p>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
                Fale diretamente com um de{" "}
                <span className="text-[#e2ba4b]">nossos Advogados</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">Informações de Contato</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Todas as informações para entrar em contato conosco.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Dados de Contato */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
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
      <footer className="bg-gradient-to-b from-black via-[#333333] to-[#333333] text-white mt-auto">
        {/* Main Footer Content - Menu Horizontal */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Abrão & Silva Advocacia" 
                width={180} 
                height={45} 
                className="h-9 w-auto" 
              />
            </div>

            {/* Contact Information Section */}
            <div className="flex flex-col items-center">
              <span className="text-white text-xs font-medium mb-2">SAC geral</span>
              <div className="flex items-center space-x-2 mb-3">
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Phone className="h-3 w-3 text-white" />
                </div>
                <a 
                  href="tel:6234122893" 
                  className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
                >
                  (62) 3412-2893
                </a>
              </div>
              {/* Social Media Icons Section */}
              <div className="flex space-x-1.5">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-3.5 w-3.5 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links Section */}
            <div className="flex items-center space-x-8">
              {/* First Row */}
              <div className="flex space-x-6">
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                >
                  HOME
                </button>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                >
                  SOBRE NÓS
                </button>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                >
                  ÁREAS DE ATUAÇÃO
                </button>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                >
                  EQUIPE
                </button>
              </div>
              
              {/* Separator */}
              <div className="h-4 w-px bg-gray-600"></div>
              
              {/* Second Row */}
              <div className="flex space-x-6">
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                >
                  DÚVIDAS
                </button>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                >
                  BLOG
                </button>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => scrollToSection("localizacao")}
                    className="text-white hover:text-gray-300 transition-colors text-xs font-medium uppercase"
                  >
                    UNIDADES
                  </button>
                  <ChevronDown className="h-3 w-3 text-white" />
                </div>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors text-xs font-medium uppercase"
                >
                  CONTATO
                </button>
              </div>
            </div>

            {/* Call-to-Action Button Section */}
            <div className="flex items-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-l-lg transition-colors flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs font-medium leading-tight">Encontre um escritório</div>
                  <div className="text-xs font-medium leading-tight">mais próximo!</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="bg-[#e9e9e9] px-4 py-2">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-between">
              <span className="text-black text-sm text-center sm:text-left">
                Copyright © {new Date().getFullYear()} ABRAO E SILVA | ADVOGADOS ASSOCIADOS. Todos os Direitos reservados.
              </span>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-sm hover:text-white transition-colors"
              >
                Gat Hub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
