"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  Building
} from "lucide-react"
import dynamic from "next/dynamic"
import { useToast } from "@/hooks/use-toast"

// [cursor-edit] - Lazy load do GoogleMap para melhor performance
const GoogleMapComponent = dynamic(() => import("@/components/GoogleMap"), {
  loading: () => (
    <div className="h-[400px] bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
      <span className="text-gray-500">Carregando mapa...</span>
    </div>
  ),
  ssr: false
})

interface ContactSectionProps {
  cityConfig?: {
    coordinates: { lat: number; lng: number }
    address: {
      street: string
      neighborhood: string
      city: string
      state: string
      zipCode: string
    }
    description?: string
  }
  contactInfo: {
    name: string
    phone: string
    email: string
    address: string
    schedule: string
  }
}

export default function ContactSection({ cityConfig, contactInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {}
    
    if (!formData.nome.trim()) errors.nome = 'Nome é obrigatório'
    if (!formData.email.trim()) {
      errors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'E-mail inválido'
    }
    if (!formData.telefone.trim()) errors.telefone = 'Telefone é obrigatório'
    if (!formData.empresa.trim()) errors.empresa = 'Empresa é obrigatória'
    if (!formData.mensagem.trim()) errors.mensagem = 'Mensagem é obrigatória'
    
    return errors
  }, [formData])

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }, [formErrors])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      })
      
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
      })
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm, toast])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e2ba4b]/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e2ba4b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e2ba4b]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-[#e2ba4b]">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Converse com nossos especialistas e descubra como podemos ajudar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Formulário de Contato */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl [&_input]:!bg-white [&_input]:!text-black [&_textarea]:!bg-white [&_textarea]:!text-black">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Send className="h-5 w-5 lg:h-6 lg:w-6 text-[#e2ba4b] mr-3" />
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Nome Completo" 
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className={`h-11 lg:h-12 !bg-white !text-black placeholder:text-gray-500 border rounded-md focus:border-[#e2ba4b] focus:ring-2 focus:ring-[#e2ba4b]/20 transition-colors ${formErrors.nome ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}`}
                      required
                    />
                    {formErrors.nome && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.nome}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="E-mail Profissional" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`h-11 lg:h-12 !bg-white !text-black placeholder:text-gray-500 border rounded-md focus:border-[#e2ba4b] focus:ring-2 focus:ring-[#e2ba4b]/20 transition-colors ${formErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}`}
                      required
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Telefone/WhatsApp" 
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className={`h-11 lg:h-12 !bg-white !text-black placeholder:text-gray-500 border rounded-md focus:border-[#e2ba4b] focus:ring-2 focus:ring-[#e2ba4b]/20 transition-colors ${formErrors.telefone ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}`}
                      required
                    />
                    {formErrors.telefone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.telefone}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input 
                      placeholder="Empresa/Escritório" 
                      value={formData.empresa}
                      onChange={(e) => handleInputChange('empresa', e.target.value)}
                      className={`h-11 lg:h-12 !bg-white !text-black placeholder:text-gray-500 border rounded-md focus:border-[#e2ba4b] focus:ring-2 focus:ring-[#e2ba4b]/20 transition-colors ${formErrors.empresa ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}`}
                      required
                    />
                    {formErrors.empresa && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.empresa}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Conte-nos sobre seu interesse..." 
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    className={`min-h-[100px] lg:min-h-[120px] resize-none !bg-white !text-black placeholder:text-gray-500 border rounded-md focus:border-[#e2ba4b] focus:ring-2 focus:ring-[#e2ba4b]/20 transition-colors ${formErrors.mensagem ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300'}`}
                    required
                  />
                  {formErrors.mensagem && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.mensagem}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e2ba4b] hover:bg-[#d4a93a] text-black py-3 lg:py-4 text-base lg:text-lg font-semibold h-12 lg:h-14 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 lg:h-5 lg:w-5 border-b-2 border-black mr-2"></div>
                      ENVIANDO...
                    </>
                  ) : (
                    <>
                      ENVIAR MENSAGEM
                      <Send className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Informações de Contato e Mapa */}
          <div className="order-1 lg:order-2 space-y-6">
            
            {/* Informações de Contato */}
            <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 text-white border border-[#e2ba4b]/20 shadow-2xl">
              <h3 className="text-lg lg:text-xl font-bold text-[#e2ba4b] mb-6 flex items-center">
                <Building className="h-5 w-5 lg:h-6 lg:w-6 mr-3" />
                {contactInfo.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-[#e2ba4b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-xs lg:text-sm">Telefone</p>
                    <p className="text-gray-300 text-xs lg:text-sm">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-[#e2ba4b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-xs lg:text-sm">E-mail</p>
                    <p className="text-gray-300 text-xs lg:text-sm break-all">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-[#e2ba4b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-xs lg:text-sm">Endereço</p>
                    <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-[#e2ba4b] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-xs lg:text-sm">Horário</p>
                    <p className="text-gray-300 text-xs lg:text-sm">{contactInfo.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa do Google */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <h4 className="text-base lg:text-lg font-bold text-black mb-4 flex items-center">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-[#e2ba4b] mr-2" />
                Nossa Localização
              </h4>
              <div className="h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
                <GoogleMapComponent cityConfig={cityConfig} />
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#e2ba4b] to-[#d4a93a] rounded-2xl p-6 text-center shadow-2xl">
              <Calendar className="h-8 w-8 lg:h-10 lg:w-10 text-black mx-auto mb-3" />
              <h4 className="text-base lg:text-lg font-bold text-black mb-2">Agende uma Reunião</h4>
              <p className="text-black/80 text-xs lg:text-sm mb-4 leading-relaxed">
                Converse diretamente com nossos especialistas
              </p>
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                AGENDAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
