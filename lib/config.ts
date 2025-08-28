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
  domain: string; // [cursor-edit]
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
    id: 'main',
    name: 'Anicuns',
    displayName: 'ANICUNS - GOIÁS',
    domain: 'anicuns.abraoesilvaadvassociados.com.br', // [cursor-edit]
    coordinates: {
      lat: -16.4647,
      lng: -49.9614
    },
    address: {
      street: 'Av. Bandeirantes, 2216',
      neighborhood: 'Setor Leste',
      city: 'Anicuns',
      state: 'GO',
      zipCode: '76170-000'
    },
    phone: '(62) 3412-2893',
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
    domain: 'centro.abraoesilvaadvassociados.com.br', // [cursor-edit]
    coordinates: {
      lat: -16.6864,
      lng: -49.2653
    },
    address: {
      street: 'Av. Goiás, 382',
      neighborhood: 'Setor Central',
      city: 'Goiânia',
      state: 'GO',
      zipCode: '74023-010'
    },
    phone: '(62) 3225-4567',
    email: 'goiania@abraoesilva.adv.br',
    workingHours: 'Seg - Sex: 08:00 às 18:00',
    title: 'Nossa localização em GOIÂNIA CENTRO - GOIÁS',
    subtitle: 'Especializada em Direito Empresarial e Civil no centro da capital.',
    description: 'Atendimento especializado para empresas e pessoas físicas',
    practiceAreas: [
      { id: 'civil', title: 'Direito', subtitle: 'Civil', icon: 'CivilIcon' },
      { id: 'empresarial', title: 'Direito', subtitle: 'Empresarial', icon: 'TributarioIcon' },
      { id: 'tributario', title: 'Direito', subtitle: 'Tributário', icon: 'TributarioIcon' },
      { id: 'trabalhista', title: 'Direito', subtitle: 'Trabalhista', icon: 'TrabalhistaIcon' }
    ]
  },
  saoMiguelAraguaia: {
    id: 'saoMiguelAraguaia',
    name: 'São Miguel do Araguaia',
    displayName: 'SÃO MIGUEL DO ARAGUAIA - GOIÁS',
    domain: 'saomiguel.abraoesilvaadvassociados.com.br', // [cursor-edit]
    coordinates: {
      lat: -13.2750,
      lng: -50.1628
    },
    address: {
      street: 'Av. Mato Grosso, casa 2',
      neighborhood: 'quadra 58, lote p2, setor central',
      city: 'São Miguel do Araguaia',
      state: 'GO'
    },
    phone: '(62) 99643-4339',
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
    domain: 'setorsul.abraoesilvaadvassociados.com.br', // [cursor-edit]
    coordinates: {
      lat: -16.6864,
      lng: -49.2653
    },
    address: {
      street: 'Rua 100, Nº 35',
      neighborhood: 'Qd. F-17, Lt. 12, Setor Sul',
      city: 'Goiânia',
      state: 'GO',
      zipCode: '74080-100'
    },
    phone: '(62) 98585-1251',
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

// Função para obter o domínio de uma cidade // [cursor-edit]
export function getCityDomain(cityId: string): string {
  return citiesConfig[cityId]?.domain || citiesConfig.main.domain;
}

// Função para redirecionar para o domínio da cidade // [cursor-edit]
export function redirectToCityDomain(cityId: string): void {
  if (typeof window === 'undefined') return;
  
  const targetDomain = getCityDomain(cityId);
  const currentDomain = window.location.hostname;
  
  // Se já estamos no domínio correto, não fazer nada
  if (currentDomain === targetDomain) return;
  
  // Redirecionar para o domínio correto mantendo o protocolo
  const protocol = window.location.protocol;
  const newUrl = `${protocol}//${targetDomain}${window.location.pathname}${window.location.search}${window.location.hash}`;
  window.location.href = newUrl;
}

// Função para obter configuração da cidade baseada no domínio ou parâmetro
export function getCityConfig(): CityConfig {
  // Verificar se estamos no browser
  if (typeof window === 'undefined') {
    return citiesConfig.main; // Fallback para SSR
  }

  // Verificar parâmetro na URL
  const urlParams = new URLSearchParams(window.location.search);
  const cityParam = urlParams.get('city');
  
  if (cityParam && citiesConfig[cityParam]) {
    return citiesConfig[cityParam];
  }

  // Verificar domínio
  const hostname = window.location.hostname;
  
  // Suporte para domínios locais de teste
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    // Para desenvolvimento local, verificar se há parâmetro de cidade
    if (cityParam && citiesConfig[cityParam]) {
      return citiesConfig[cityParam];
    }
    // Padrão para localhost
    return citiesConfig.main;
  }
  
  // Verificar domínios específicos // [cursor-edit]
  if (hostname === 'centro.abraoesilvaadvassociados.com.br') {
    return citiesConfig.goianiaCentro;
  }
  
  if (hostname === 'saomiguel.abraoesilvaadvassociados.com.br') {
    return citiesConfig.saoMiguelAraguaia;
  }
  
  if (hostname === 'setorsul.abraoesilvaadvassociados.com.br') {
    return citiesConfig.setorSul;
  }
  
  if (hostname === 'anicuns.abraoesilvaadvassociados.com.br') {
    return citiesConfig.main;
  }

  // Manter compatibilidade com domínios antigos // [cursor-edit]
  if (hostname.includes('goiania-centro') || hostname.includes('goianiacentro')) {
    return citiesConfig.goianiaCentro;
  }
  
  if (hostname.includes('sao-miguel') || hostname.includes('saomiguel')) {
    return citiesConfig.saoMiguelAraguaia;
  }
  
  if (hostname.includes('setor-sul') || hostname.includes('setorsul')) {
    return citiesConfig.setorSul;
  }

  // Padrão: main (Anicuns)
  return citiesConfig.main;
}
