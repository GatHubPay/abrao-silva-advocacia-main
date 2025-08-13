'use client';

import { Phone, Facebook, Instagram, Youtube, Linkedin, BookOpen } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

interface FooterProps {
  socialLinks: Array<{
    name: string;
    icon: any;
    href: string;
  }>;
  menuItems: Array<{
    label: string;
    id: string;
    key: string;
  }>;
  scrollToSection: (sectionId: string) => void;
}

const Footer = memo(function Footer({ socialLinks, menuItems, scrollToSection }: FooterProps) {
  return (
    <footer className="bg-black text-white mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          
          {/* Left Side - Logo */}
          <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
            <div className="flex items-center">
              <div className="text-white">
                <Image 
                  src="/logo.png" 
                  alt="Abrão & Silva Advocacia" 
                  width={200} 
                  height={100} 
                  className="h-16 w-auto lg:h-20" 
                  loading="lazy" 
                  quality={85} 
                />
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
  );
});

export default Footer;