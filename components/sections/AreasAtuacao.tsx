'use client';

import { Scale, Briefcase, UserCheck, Heart, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { memo } from "react";

interface AreasAtuacaoProps {
  isLoaded: boolean;
  scrollToSection: (sectionId: string) => void;
}

const AreasAtuacao = memo(function AreasAtuacao({ isLoaded, scrollToSection }: AreasAtuacaoProps) {
  const areas = [
    {
      icon: Scale,
      title: "DIREITO",
      subtitle: "PREVIDENCIÁRIO",
      delay: 100
    },
    {
      icon: Briefcase,
      title: "DIREITO",
      subtitle: "TRABALHISTA",
      delay: 200
    },
    {
      icon: UserCheck,
      title: "DIREITO",
      subtitle: "CIVIL",
      delay: 300
    },
    {
      icon: Heart,
      title: "DIREITO",
      subtitle: "TRIBUTÁRIO",
      delay: 400
    },
    {
      icon: Building,
      title: "DIREITO PÚBLICO",
      subtitle: "ESTATUTÁRIO",
      delay: 500
    }
  ];

  return (
    <section id="areas-atuacao" className="py-12 md:py-16 lg:py-24 bg-black text-white relative overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#e2ba4b]/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 md:mb-16 scroll-reveal ${isLoaded ? 'animate-fadeInUp' : ''}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Áreas de <span className="gradient-text">ATUAÇÃO</span>
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto px-4 mb-4">
            Atendimento nas Diversas Áreas do Direito
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto px-4">
            Nossa equipe capacitada e multidisciplinar está sempre preparada para atender às necessidades de nossos clientes com total eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className={`relative group cursor-pointer scroll-reveal-left golden-particles ${isLoaded ? `animate-scaleIn delay-${area.delay}` : ''}`}>
                {/* Borda animada principal */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#e2ba4b] via-[#f4d366] to-[#e2ba4b] rounded-2xl blur-sm opacity-75 group-hover:opacity-100 animate-[golden-glow_3s_ease-in-out_infinite] transition-all duration-300"></div>
                
                {/* Efeito shimmer */}
                <div className="absolute -inset-1 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-[shimmer_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                </div>
                
                {/* Card principal */}
                <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-[#e2ba4b] rounded-2xl p-6 md:p-8 text-center hover:bg-[#e2ba4b] hover:border-[#e2ba4b] transition-all duration-500 card-hover-effect h-full flex flex-col justify-between min-h-[280px] relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 group-hover:bg-black rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 btn-hover-scale">
                      <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-[#e2ba4b] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-black transition-colors duration-300 mb-2">
                      {area.title}
                    </h3>
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-black transition-colors duration-300">
                      {area.subtitle}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão Saiba Mais */}
        <div className="text-center">
          <Button 
            onClick={() => scrollToSection("contato")}
            className="btn-golden btn-hover-scale text-black py-4 px-8 text-lg font-semibold animate-pulse-golden inline-flex items-center space-x-2"
          >
            <span>+ SAIBA MAIS</span>
          </Button>
        </div>
      </div>
    </section>
  );
});

export default AreasAtuacao;