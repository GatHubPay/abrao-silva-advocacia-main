'use client';

import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { citiesConfig, CityConfig, redirectToCityPath } from '@/lib/config'; // [cursor-edit]
import { Button } from '@/components/ui/button';

interface CitySelectorProps {
  currentCity: CityConfig;
  onCityChange: (cityId: string) => void;
}

export default function CitySelector({ currentCity, onCityChange }: CitySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCitySelect = (cityId: string) => {
    // Redirecionar para o path correto // [cursor-edit]
    redirectToCityPath(cityId);
    
    setIsOpen(false);
  };

  return (
    <div className="relative z-[9999999999]">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-black border border-gray-300 hover:bg-gray-50 flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm transition-all duration-200 relative z-[9999999999]"
      >
        <MapPin className="h-4 w-4" />
        <span className="font-medium">{currentCity.displayName}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-[9999999999]">
          <div className="p-2">
            {Object.entries(citiesConfig).map(([cityId, city]) => (
              <button
                key={cityId}
                onClick={() => handleCitySelect(cityId)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                  cityId === currentCity.id
                    ? 'bg-[#e2ba4b] text-black font-medium'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <div>
                    <div className="font-medium">{city.displayName}</div>
                    <div className="text-xs text-gray-500">{city.address.city}, {city.address.state}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
