"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building, MapPin, Clock, Phone, Mail, Users, Star } from "lucide-react"
import Image from "next/image"

// [cursor-edit] - Componente Hero reutilizável para parcerias
interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  onPrimaryClick: () => void
  onSecondaryClick: () => void
  cityInfo: {
    name: string
    address: string
    schedule: string
    phone: string
    email: string
  }
  heroImageSrc?: string
  heroImageAlt?: string
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  cityInfo,
  heroImageSrc = "/dr.png",
  heroImageAlt = "Especialista em Direito Tributário"
}: HeroSectionProps) {
  
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/fundo/01.webp')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile: Imagem primeiro, Desktop: lado a lado */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Imagem Principal - Aparece PRIMEIRO no mobile - BEM GRANDE */}
          <div className="order-1 lg:order-2 w-full scroll-reveal-right animate-fadeInRight">
            <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
              {/* // [cursor-edit] - Removido fundo branco e margens excessivas */}
              <div className="relative">
                <div className="w-full h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={heroImageSrc}
                    alt={heroImageAlt}
                    width={500}
                    height={600}
                    className="w-full h-full object-cover object-center"
                    priority
                    onError={(e) => {
                      // Fallback para quando a imagem não existir
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <div class="text-center text-white">
                              <div class="h-16 w-16 mx-auto mb-4 flex items-center justify-center">
                                <svg class="h-16 w-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                              </div>
                              <p class="text-gray-300 font-medium text-sm">Imagem dr.png será inserida aqui</p>
                              <p class="text-xs text-gray-400">${heroImageAlt}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                {/* // [cursor-edit] - Badge de excelência melhorado */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 rounded-b-2xl">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-[#e2ba4b] text-[#e2ba4b]" />
                    ))}
                    <span className="ml-2 text-white font-bold text-sm lg:text-base">Excelência Comprovada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo Textual - Aparece DEPOIS no mobile */}
          <div className="order-2 lg:order-1 text-white scroll-reveal animate-fadeInLeft text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block bg-[#e2ba4b] text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {subtitle}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Informações da Cidade */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8 border border-gray-700">
              <h3 className="text-lg lg:text-xl font-bold text-[#e2ba4b] mb-4 flex items-center justify-center lg:justify-start">
                <Building className="h-5 w-5 lg:h-6 lg:w-6 mr-2" />
                {cityInfo.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 text-sm">
                <div className="flex items-center justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 text-[#e2ba4b] mr-2 flex-shrink-0" />
                  <span className="text-center lg:text-left">{cityInfo.address}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Clock className="h-4 w-4 text-[#e2ba4b] mr-2 flex-shrink-0" />
                  <span>{cityInfo.schedule}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Phone className="h-4 w-4 text-[#e2ba4b] mr-2 flex-shrink-0" />
                  <span>{cityInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <Mail className="h-4 w-4 text-[#e2ba4b] mr-2 flex-shrink-0" />
                  <span className="truncate text-center lg:text-left">{cityInfo.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onPrimaryClick}
                className="bg-[#e2ba4b] hover:bg-[#d4a93a] text-black px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold btn-hover-scale w-full sm:w-auto"
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
              <Button 
                onClick={onSecondaryClick}
                variant="outline"
                className="border-[#e2ba4b] text-[#e2ba4b] hover:bg-[#e2ba4b] hover:text-black px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold btn-hover-scale w-full sm:w-auto"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
