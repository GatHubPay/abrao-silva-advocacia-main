import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Abrão & Silva Advocacia - Escritório de Advocacia em Anicuns-GO",
  description: "Escritório de advocacia especializado em diversas áreas do direito, localizado em Anicuns-GO. Atendimento em todo território nacional.",
  keywords: "advocacia, direito, advogado, Anicuns, Goiás, jurídico, consultoria",
  authors: [{ name: "Abrão & Silva Advocacia" }],
  creator: "Abrão & Silva Advocacia",
  publisher: "Abrão & Silva Advocacia",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://abraoesilva.adv.br",
    title: "Abrão & Silva Advocacia - Escritório de Advocacia",
    description: "Escritório de advocacia especializado em diversas áreas do direito, localizado em Anicuns-GO.",
    siteName: "Abrão & Silva Advocacia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abrão & Silva Advocacia",
    description: "Escritório de advocacia especializado em diversas áreas do direito.",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        
        {/* Fontes com display=swap para evitar bloqueio */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        
        {/* Preload de recursos críticos */}
        <link rel="preload" href="/logo.png" as="image" />
        
        {/* Preload da imagem LCP para melhorar performance */}
        <link rel="preload" href="/fundo/01.webp" as="image" type="image/webp" />
        <link rel="preload" href="/fundo/01.png" as="image" type="image/png" />
        
        <meta name="theme-color" content="#e2ba4b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}