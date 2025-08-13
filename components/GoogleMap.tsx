'use client';

import { GoogleMap, Marker } from '@react-google-maps/api';
import { MapPin, AlertCircle } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

// Bibliotecas específicas do Google Maps para carregar apenas o necessário
const libraries: ("places" | "geometry" | "drawing" | "visualization")[] = [];

const containerStyle = {
  width: '100%',
  height: '320px'
};

const center = {
  lat: -16.6864, // Coordenadas de Anicuns
  lng: -49.2653
};

const officeLocation = {
  lat: -16.6864,
  lng: -49.2653
};

export default function GoogleMapComponent() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);
  
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Usar useJsApiLoader para melhor controle do carregamento
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
    libraries,
    preventGoogleFontsLoading: true, // Evita carregamento desnecessário de fontes
  });

  const handleMapLoad = useCallback(() => {
    setMapLoaded(true);
  }, []);

  const handleMapError = useCallback(() => {
    setMapError(true);
  }, []);

  // Memoizar opções do mapa para evitar re-renders
  const mapOptions = useMemo(() => ({
    styles: [
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ],
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    gestureHandling: 'cooperative', // Melhor para mobile
    clickableIcons: false // Reduz interações desnecessárias
  }), []);

  // Memoizar ícone do marker
  const markerIcon = useMemo(() => ({
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg width="32" height="45" viewBox="0 0 32 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 16 45 16 45C16 45 32 24.8366 32 16C32 7.16344 24.8366 0 16 0Z" fill="#e2ba4b"/>
        <circle cx="16" cy="16" r="8" fill="#FFFFFF"/>
        <circle cx="16" cy="16" r="4" fill="#e2ba4b"/>
      </svg>
    `)
  }), []);

  // Fallback quando não há chave da API
  if (!apiKey) {
    return (
      <div className="relative w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-black p-6 rounded-full mb-4 mx-auto w-20 h-20 flex items-center justify-center">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            {/* <p className="font-bold text-black text-lg">Sede Principal</p> */}
            <p className="text-gray-600">Anicuns - GO</p>
            <p className="text-sm text-gray-500 mt-2">Atendimento em todo território nacional</p>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-2 text-yellow-800">
                <AlertCircle className="h-4 w-4" />
                <p className="text-xs">Configure a chave da API do Google Maps para ver o mapa interativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mostrar erro de carregamento
  if (loadError) {
    return (
      <div className="relative w-full h-80 bg-red-50 rounded-lg overflow-hidden shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <p className="text-sm text-red-600">Erro ao carregar o mapa</p>
            <p className="text-xs text-red-500 mt-1">Verifique sua chave da API</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={handleMapLoad}
          options={mapOptions}
        >
          <Marker
            position={officeLocation}
            icon={markerIcon}
          />
        </GoogleMap>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-800 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Carregando mapa...</p>
          </div>
        </div>
      )}
      
      {/* Overlay com informações */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg border">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-gray-600" />
          <div>
            <p className="font-semibold text-sm text-gray-800">Escritório Abrão Silva</p>
            <p className="text-xs text-gray-600">Anicuns - GO</p>
          </div>
        </div>
      </div>
    </div>
  );
} 