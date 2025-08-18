import { useState, useEffect } from 'react';
import { getCityConfig, CityConfig } from '@/lib/config';

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

  // Função para mudar a cidade
  const changeCity = (cityId: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('city', cityId);
    window.history.pushState({}, '', url.toString());
    setCityConfig(getCityConfig());
  };

  return {
    cityConfig,
    changeCity
  };
}
