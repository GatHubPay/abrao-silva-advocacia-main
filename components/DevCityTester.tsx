'use client';

import { useState } from 'react';
import { citiesConfig, CityConfig } from '@/lib/config';
import { Button } from '@/components/ui/button';
import { MapPin, Code, Globe } from 'lucide-react';

interface DevCityTesterProps {
  currentCity: CityConfig;
  onCityChange: (cityId: string) => void;
}

export default function DevCityTester({ currentCity, onCityChange }: DevCityTesterProps) {
  const [showDetails, setShowDetails] = useState(false);

  // Só mostrar em desenvolvimento
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed top-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          <Code className="h-4 w-4" />
          Teste de Cidades
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowDetails(!showDetails)}
          className="h-6 w-6 p-0"
        >
          {showDetails ? '−' : '+'}
        </Button>
      </div>

      {/* Cidade Atual */}
      <div className="mb-3 p-2 bg-blue-50 rounded border border-blue-200">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4 text-blue-600" />
          <span className="font-medium text-blue-800">
            {currentCity.displayName}
          </span>
        </div>
        <div className="text-xs text-blue-600 mt-1">
          {currentCity.address.city}, {currentCity.address.state}
        </div>
      </div>

      {/* Botões de Teste */}
      <div className="space-y-2">
        {Object.entries(citiesConfig).map(([cityId, city]) => (
          <Button
            key={cityId}
            onClick={() => onCityChange(cityId)}
            variant={cityId === currentCity.id ? "default" : "outline"}
            size="sm"
            className={`w-full text-xs ${
              cityId === currentCity.id 
                ? 'bg-[#e2ba4b] text-black hover:bg-[#d4a93a]' 
                : 'hover:bg-gray-50'
            }`}
          >
            <MapPin className="h-3 w-3 mr-1" />
            {city.displayName}
          </Button>
        ))}
      </div>

      {/* Detalhes da Configuração */}
      {showDetails && (
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="text-xs text-gray-600 space-y-1">
            <div><strong>ID:</strong> {currentCity.id}</div>
            <div><strong>Coordenadas:</strong> {currentCity.coordinates.lat}, {currentCity.coordinates.lng}</div>
            <div><strong>Endereço:</strong> {currentCity.address.street}</div>
            <div><strong>Bairro:</strong> {currentCity.address.neighborhood}</div>
            <div><strong>Telefone:</strong> {currentCity.phone}</div>
          </div>
          
          {/* URLs de Teste */}
          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="text-xs text-gray-500 mb-1">URLs de teste:</div>
            {Object.entries(citiesConfig).map(([cityId, city]) => (
              <div key={cityId} className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer" 
                   onClick={() => {
                     const url = new URL(window.location.href);
                     url.searchParams.set('city', cityId);
                     window.history.pushState({}, '', url.toString());
                     onCityChange(cityId);
                   }}>
                <Globe className="h-3 w-3 inline mr-1" />
                ?city={cityId}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
