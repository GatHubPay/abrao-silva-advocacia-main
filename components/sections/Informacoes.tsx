'use client';

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { memo } from "react";

const Informacoes = memo(function Informacoes() {
  return (
    <section id="informacoes" className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
            Informações de <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Todas as informações para entrar em contato conosco.
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {/* Dados de Contato */}
          <div className="bg-[#e2ba4b] rounded-2xl shadow-2xl overflow-hidden border border-[#e2ba4b] card-hover-effect scroll-reveal-left golden-particles">
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-black mb-6 animate-float">
                Informações de Contato
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coluna Esquerda */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1 mb-4">
                      <p className="font-semibold text-black text-base">Telefone SAC</p>
                      <p className="text-gray-600 text-base break-all">(62) 3412-2893</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
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
                    <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-black text-base">Localização</p>
                      <p className="text-gray-600 text-base">Anicuns - GO</p>
                      <p className="text-sm text-gray-500 break-words">
                        Av. Bandeirantes, 2216, Setor Leste - Anicuns, GO, 76170-000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-black p-3 rounded-full flex-shrink-0 btn-hover-scale">
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
  );
});

export default Informacoes;