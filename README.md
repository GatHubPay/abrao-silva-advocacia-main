# Abrão & Silva Advocacia - Sistema Multi-Cidade

Este projeto implementa um sistema dinâmico para gerenciar múltiplas unidades da advocacia Abrão & Silva em diferentes cidades, mantendo tudo centralizado em uma única aplicação.

## 🏙️ Cidades Suportadas

### 1. **Main (Anicuns)** - Domínio Principal
- **Cidade:** Anicuns, GO
- **Coordenadas:** -16.4647, -49.9614
- **Endereço:** Rua Principal, Centro

### 2. **Goiânia Centro**
- **Cidade:** Goiânia, GO
- **Coordenadas:** -16.6864, -49.2653
- **Endereço:** Av. Goiás, Centro

### 3. **São Miguel do Araguaia**
- **Cidade:** São Miguel do Araguaia, GO
- **Coordenadas:** -13.2750, -50.1628
- **Endereço:** Av. Mato Grosso, casa 2, quadra 58, lote p2, setor central

### 4. **Setor Sul**
- **Cidade:** Goiânia, GO
- **Coordenadas:** -16.6864, -49.2653
- **Endereço:** Av. T-63, Setor Bueno

## 🚀 Como Usar

### Configuração Automática por Domínio

O sistema detecta automaticamente a cidade baseada no domínio:

- **anicuns.adv.br** → Main (Anicuns)
- **goiania-centro.adv.br** → Goiânia Centro
- **sao-miguel.adv.br** → São Miguel do Araguaia
- **setor-sul.adv.br** → Setor Sul

### Configuração Manual por URL

Você pode forçar uma cidade específica usando parâmetros na URL:

```
https://seudominio.com/?city=goianiaCentro
https://seudominio.com/?city=saoMiguelAraguaia
https://seudominio.com/?city=setorSul
https://seudominio.com/?city=main
```

### Seletor de Cidade

O usuário pode alternar entre as cidades usando o seletor na seção de localização.

## 🛠️ Estrutura do Projeto

```
├── lib/
│   └── config.ts              # Configurações das cidades
├── hooks/
│   └── use-city-config.ts     # Hook para gerenciar cidade
├── components/
│   ├── GoogleMap.tsx          # Mapa dinâmico
│   └── CitySelector.tsx       # Seletor de cidade
└── app/
    └── page.tsx               # Página principal
```

## 📝 Configuração

### Adicionar Nova Cidade

1. Edite `lib/config.ts`
2. Adicione nova configuração em `citiesConfig`
3. Configure coordenadas, endereço e informações

```typescript
novaCidade: {
  id: 'novaCidade',
  name: 'Nova Cidade',
  displayName: 'NOVA CIDADE',
  coordinates: {
    lat: -XX.XXXX,
    lng: -XX.XXXX
  },
  address: {
    street: 'Rua Exemplo',
    neighborhood: 'Bairro',
    city: 'Nova Cidade',
    state: 'GO'
  },
  phone: '(62) XXXX-XXXX',
  email: 'contato@abraoesilva.adv.br',
  workingHours: 'Seg - Sex: 08:00 às 17:00',
  title: 'Nossa localização em NOVA CIDADE',
  subtitle: 'Contamos também com outras unidades em diversas regiões do Brasil.',
  description: 'Atendimento em todo território nacional'
}
```

### Configurar Domínio

1. Edite `next.config.mjs`
2. Adicione regra de rewrite para o novo domínio
3. Configure redirecionamento para a cidade correspondente

## 🔧 Variáveis de Ambiente

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_api_aqui
```

## 🚀 Deploy

### Vercel
- Configure domínios personalizados para cada cidade
- O sistema detectará automaticamente o domínio

### Outros Provedores
- Configure redirecionamentos de domínio
- Use parâmetros de URL para especificar a cidade

## 📱 Funcionalidades

- ✅ **Detecção automática de cidade** por domínio
- ✅ **Seletor de cidade** para usuários
- ✅ **Mapa dinâmico** com coordenadas específicas
- ✅ **Informações de contato** personalizadas
- ✅ **Endereços específicos** para cada unidade
- ✅ **Horários de funcionamento** configuráveis
- ✅ **URLs amigáveis** com parâmetros de cidade

## 🎯 Benefícios

1. **Manutenção centralizada** - Uma única aplicação para todas as cidades
2. **SEO otimizado** - Cada cidade tem seu próprio domínio/URL
3. **Experiência consistente** - Mesmo design e funcionalidades
4. **Fácil expansão** - Adicione novas cidades sem duplicar código
5. **Performance otimizada** - Lazy loading e otimizações

## 🤝 Suporte

Para dúvidas ou sugestões, entre em contato com a equipe de desenvolvimento.
