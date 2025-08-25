import { useState, useEffect } from 'react';
import { getCityConfig, CityConfig, redirectToCityDomain } from '@/lib/config'; // [cursor-edit]

export function useCityConfig() {
  const [cityConfig, setCityConfig] = useState<CityConfig>(getCityConfig());

  useEffect(() => {
    // Atualizar configuração quando o componente montar
    setCityConfig(getCityConfig());

    // Função para detectar mudanças na URL
    const handleUrlChange = () => {
      setCityConfig(getCityConfig());
    };

    // Escutar mudanças na URL
    window.addEventListener('popstate', handleUrlChange);
    
    // Escutar mudanças no hash
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Função para mudar a cidade // [cursor-edit]
  const changeCity = (cityId: string) => {
    // Redirecionar para o domínio correto
    redirectToCityDomain(cityId);
  };

  return {
    cityConfig,
    changeCity
  };
}
