export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  icon: string; // Nome do ícone
}

export interface CityConfig {
  id: string;
  name: string;
  displayName: string;
  path: string; // [cursor-edit] - Alterado de domain para path
  coordinates: {
    lat: number;
    lng: number;
  };
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode?: string;
  };
  phone: string;
  whatsapp: string; // [cursor-edit] - Número do WhatsApp específico da cidade
  email: string;
  workingHours: string;
  workingHoursBreak?: string;
  title: string;
  subtitle: string;
  description: string;
  practiceAreas: PracticeArea[];
}

export const citiesConfig: Record<string, CityConfig> = {
  main: {
    id: 'anicuns',
    name: 'Anicuns',
    displayName: 'ANICUNS - GOIÁS',
    path: '/anicuns', // [cursor-edit] - Alterado para subpasta
    coordinates: {
      lat: -16.464561, // [cursor-edit]
      lng: -49.951667  // [cursor-edit]
    },
    address: {
      street: 'Av. Bandeirantes, 2216',
      neighborhood: 'Setor Leste',
      city: 'Anicuns',
      state: 'GO',
      zipCode: '76170-000'
    },
    phone: '(62) 3412-2893',
    whatsapp: '556234122893', // [cursor-edit] - WhatsApp Anicuns
    email: 'contato@abraoesilva.adv.br',
    workingHours: 'Seg - Sex: 07:00 às 17:00',
    workingHoursBreak: 'Pausa para almoço: 11:00 às 13:00',
    title: 'Nossa localização em ANICUNS - GOIÁS',
    subtitle: 'Contamos também com outras unidades em diversas regiões do Brasil.',
    description: 'Atendimento em todo território nacional',
    practiceAreas: [
      { id: 'previdenciario', title: 'Direito', subtitle: 'Previdenciário', icon: 'PrevidenciarioIcon' },
      { id: 'trabalhista', title: 'Direito', subtitle: 'Trabalhista', icon: 'TrabalhistaIcon' },
      { id: 'civil', title: 'Direito', subtitle: 'Civil', icon: 'CivilIcon' },
      { id: 'tributario', title: 'Direito', subtitle: 'Tributário', icon: 'TributarioIcon' },
      { id: 'publico', title: 'Direito Público', subtitle: 'Estatutário', icon: 'PublicoEstatutarioIcon' }
    ]
  },
  goianiaCentro: {
    id: 'goianiaCentro',
    name: 'Goiânia Centro',
    displayName: 'GOIÂNIA CENTRO - GOIÁS',
    path: '/goiania-centro', // [cursor-edit] - Alterado para subpasta
    coordinates: {
      lat: -16.6763647, // [cursor-edit]
      lng: -49.2574073  // [cursor-edit]
    },
    address: {
      street: 'Av. Goiás, 382',
      neighborhood: 'Setor Central',
      city: 'Goiânia',
      state: 'GO',
      zipCode: '74063-010'
    },
    phone: '(62) 3412-2893',
    whatsapp: '556234122893', // [cursor-edit] - WhatsApp Goiânia Centro
    email: 'abraoesilvaadv@gmail.com',
    workingHours: 'Seg - Sex: 08:00 às 17:00',
    title: 'Nossa localização em GOIÂNIA CENTRO - GOIÁS',
    subtitle: 'Especializada em Direito Empresarial e Civil no centro da capital.',
    description: 'Atendimento especializado para empresas e pessoas físicas',
    practiceAreas: [
      // { id: 'civil', title: 'Direito', subtitle: 'Civil', icon: 'CivilIcon' },
      // { id: 'empresarial', title: 'Direito', subtitle: 'Empresarial', icon: 'TributarioIcon' },
      // { id: 'tributario', title: 'Direito', subtitle: 'Tributário', icon: 'TributarioIcon' },
      // { id: 'trabalhista', title: 'Direito', subtitle: 'Trabalhista', icon: 'TrabalhistaIcon' },
      { id: 'previdenciario', title: 'Direito', subtitle: 'Previdenciário', icon: 'PrevidenciarioIcon' }

    ]
  },
  saoMiguelAraguaia: {
    id: 'saoMiguelAraguaia',
    name: 'São Miguel do Araguaia',
    displayName: 'SÃO MIGUEL DO ARAGUAIA - GOIÁS',
    path: '/sao-miguel', // [cursor-edit] - Alterado para subpasta
    coordinates: {
      lat: -13.272635, // [cursor-edit]
      lng: -50.160236  // [cursor-edit]
    },
    address: {
      street: 'Av. Mato Grosso, 814', // [cursor-edit]
      neighborhood: 'St. Centro', // [cursor-edit]
      city: 'São Miguel do Araguaia',
      state: 'GO',
      zipCode: '76590-000' // [cursor-edit]
    },
    phone: '(62) 99643-4339',
    whatsapp: '5562996434339', // [cursor-edit] - WhatsApp São Miguel
    email: 'saomiguel@abraoesilva.adv.br',
    workingHours: 'Seg - Sex: 08:00 às 17:00',
    title: 'Nossa localização em SÃO MIGUEL DO ARAGUAIA - GOIÁS',
    subtitle: 'Especializada em Direito Previdenciário na região do Araguaia.',
    description: 'Foco em Direito Previdenciário e atendimento rural',
    practiceAreas: [
      { id: 'previdenciario', title: 'Direito', subtitle: 'Previdenciário', icon: 'PrevidenciarioIcon' }
    ]
  },
  setorSul: {
    id: 'setorSul',
    name: 'Setor Sul',
    displayName: 'GOIÂNIA - SETOR SUL - GOIÁS',
    path: '/setor-sul', // [cursor-edit] - Alterado para subpasta
    coordinates: {
      lat: -16.682907, // [cursor-edit]
      lng: -49.258459  // [cursor-edit]
    },
    address: {
      street: 'R. 100, 35', // [cursor-edit]
      neighborhood: 'Quadra F17, Lote 12 - St. Sul', // [cursor-edit]
      city: 'Goiânia',
      state: 'GO',
      zipCode: '74080-140' // [cursor-edit]
    },
    phone: '(62) 98585-1251',
    whatsapp: '5562985851251', // [cursor-edit] - WhatsApp Setor Sul
    email: 'setorsul@abraoesilva.adv.br',
    workingHours: 'Seg - Sex: 08:00 às 17:00',
    title: 'Nossa localização no SETOR SUL - GOIÁS',
    subtitle: 'Especializada em Direito Tributário e Público no Setor Sul.',
    description: 'Foco em Direito Tributário e Público Estatutário',
    practiceAreas: [
      { id: 'tributario', title: 'Direito', subtitle: 'Tributário', icon: 'TributarioIcon' },
      { id: 'publico', title: 'Direito Público', subtitle: 'Estatutário', icon: 'PublicoEstatutarioIcon' }
    ]
  }
};

// Função para obter o path de uma cidade // [cursor-edit]
export function getCityPath(cityId: string): string {
  // Mapear 'main' para 'anicuns' na URL
  if (cityId === 'main') {
    return '/anicuns';
  }
  return citiesConfig[cityId]?.path || '/anicuns';
}

// Função para redirecionar para o path da cidade // [cursor-edit]
export function redirectToCityPath(cityId: string): void {
  if (typeof window === 'undefined') return;
  
  // Em vez de mudar o pathname, vamos usar parâmetros de URL
  // Isso mantém tudo na mesma página mas com cidade diferente
  
  // Mapear 'main' para 'anicuns' na URL
  const urlCityId = cityId === 'main' ? 'anicuns' : cityId;
  
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set('city', urlCityId);
  
  // Usar pushState para mudar a URL sem recarregar a página
  // Isso permite que o React detecte a mudança e atualize a interface
  window.history.pushState({ cityId }, '', currentUrl.toString());
  
  // Disparar um evento customizado para notificar sobre a mudança
  const customEvent = new CustomEvent('cityChange', { detail: { cityId } });
  window.dispatchEvent(customEvent);
}

// Função para obter configuração da cidade baseada no parâmetro da URL
export function getCityConfig(): CityConfig {
  // Verificar se estamos no browser
  if (typeof window === 'undefined') {
    return citiesConfig.main; // Fallback para SSR
  }

  // Verificar parâmetro na URL
  const urlParams = new URLSearchParams(window.location.search);
  const cityParam = urlParams.get('city');
  
  // Mapear 'anicuns' para 'main' para compatibilidade
  if (cityParam === 'anicuns') {
    return citiesConfig.main;
  }
  
  if (cityParam && citiesConfig[cityParam]) {
    return citiesConfig[cityParam];
  }

  // Suporte para desenvolvimento local
  if (window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')) {
    // Para desenvolvimento local, padrão é main (Anicuns)
    return citiesConfig.main;
  }
  
  // Para produção, padrão é main (Anicuns)
  return citiesConfig.main;
}
