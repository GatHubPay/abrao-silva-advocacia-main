"use client"

import { useState } from "react"
import { Play } from "lucide-react"

// [cursor-edit] - Componente de seção de vídeo reutilizável
interface VideoSectionProps {
  title: string
  subtitle: string
  videoId?: string // Para YouTube
  videoUrl?: string // Para vídeos locais
  thumbnailUrl?: string
  className?: string
}

export default function VideoSection({ 
  title, 
  subtitle, 
  videoId, 
  videoUrl, 
  thumbnailUrl,
  className = ""
}: VideoSectionProps) {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlayVideo = () => {
    setShowVideo(true)
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {!showVideo ? (
              <div 
                className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group"
                onClick={handlePlayVideo}
                style={{
                  backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="text-center relative z-10">
                  <div className="bg-[#e2ba4b] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="h-10 w-10 text-black ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Clique para Assistir</h3>
                  <p className="text-gray-300">Conheça nossa abordagem em parcerias tributárias</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                {videoId ? (
                  // YouTube embed
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Vídeo YouTube"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : videoUrl ? (
                  // Vídeo local
                  <video
                    src={videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                  >
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                ) : (
                  // Placeholder
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-4 text-[#e2ba4b]" />
                      <p className="text-xl mb-2">Vídeo será inserido aqui</p>
                      <p className="text-gray-400">Layout estilo YouTube preparado</p>
                      <div className="mt-6 text-sm text-gray-500">
                        <p>Para adicionar vídeo:</p>
                        <p>• YouTube: adicione o videoId</p>
                        <p>• Local: adicione o videoUrl</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

