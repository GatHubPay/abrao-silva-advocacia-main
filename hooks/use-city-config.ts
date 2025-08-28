import { useState, useEffect } from 'react';
import { getCityConfig, CityConfig, redirectToCityPath, citiesConfig } from '@/lib/config';

export function useCityConfig() {
  const [cityConfig, setCityConfig] = useState<CityConfig>(getCityConfig());

  useEffect(() => {
    // Atualizar configuração quando o componente montar
    setCityConfig(getCityConfig());

    // Função para detectar mudanças na URL
    const handleUrlChange = () => {
      setCityConfig(getCityConfig());
    };

    // Escutar mudanças na URL (incluindo parâmetros de busca)
    const handlePopState = () => {
      setCityConfig(getCityConfig());
    };

    // Escutar mudanças no hash
    const handleHashChange = () => {
      setCityConfig(getCityConfig());
    };

    // Escutar evento customizado de mudança de cidade
    const handleCityChange = (event: CustomEvent) => {
      const cityId = event.detail.cityId;
      if (cityId && citiesConfig[cityId]) {
        setCityConfig(citiesConfig[cityId]);
      }
    };

    // Adicionar listeners
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('cityChange', handleCityChange as EventListener);
    
    // Também escutar mudanças na URL quando o usuário navegar
    window.addEventListener('beforeunload', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('cityChange', handleCityChange as EventListener);
      window.removeEventListener('beforeunload', handleUrlChange);
    };
  }, []);

  // Função para mudar a cidade
  const changeCity = (cityId: string) => {
    // Redirecionar para o path correto
    redirectToCityPath(cityId);
  };

  return {
    cityConfig,
    changeCity
  };
}
