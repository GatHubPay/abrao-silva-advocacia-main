import { useState, useEffect } from 'react';
import { getCityConfig, CityConfig, redirectToCityPath, citiesConfig } from '@/lib/config';

export function useCityConfig() {
  const [cityConfig, setCityConfig] = useState<CityConfig>(getCityConfig());

  useEffect(() => {
    console.log('useCityConfig hook montado'); // [cursor-edit] - Debug
    
    // Atualizar configuração quando o componente montar
    setCityConfig(getCityConfig());

    // Função para detectar mudanças na URL
    const handleUrlChange = () => {
      console.log('handleUrlChange chamado'); // [cursor-edit] - Debug
      setCityConfig(getCityConfig());
    };

    // Escutar mudanças na URL (incluindo parâmetros de busca)
    const handlePopState = () => {
      console.log('handlePopState chamado'); // [cursor-edit] - Debug
      setCityConfig(getCityConfig());
    };

    // Escutar mudanças no hash
    const handleHashChange = () => {
      console.log('handleHashChange chamado'); // [cursor-edit] - Debug
      setCityConfig(getCityConfig());
    };

    // Escutar evento customizado de mudança de cidade
    const handleCityChange = (event: CustomEvent) => {
      console.log('Evento cityChange recebido:', event.detail); // [cursor-edit] - Debug
      const cityId = event.detail.cityId;
      if (cityId && citiesConfig[cityId]) {
        console.log('Atualizando cidade para:', cityId); // [cursor-edit] - Debug
        setCityConfig(citiesConfig[cityId]);
      }
    };

    // Adicionar listeners
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('cityChange', handleCityChange as EventListener);
    
    console.log('Listeners adicionados para cityChange'); // [cursor-edit] - Debug
    
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
    console.log('changeCity chamado com:', cityId); // [cursor-edit] - Debug
    // Redirecionar para o path correto
    redirectToCityPath(cityId);
  };

  return {
    cityConfig,
    changeCity
  };
}
