import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Html, Head, Main, NextScript } from 'next/document'


export const metadata: Metadata = {
  title: 'Abrão & Silva Advocacia | Excelência Jurídica',
  description: 'Abrão & Silva Advocacia - Escritório de advocacia especializado em Direito Previdenciário, Tributário, Médico e outras áreas. Atendimento personalizado em todo território nacional.',
  generator: 'Gat Hub',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Abrão & Silva',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
html {
  font-family: 'Montserrat', ${GeistSans.style.fontFamily}, sans-serif;
  --font-sans: 'Montserrat', ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  line-height: 1.5;
}

* {
  font-family: 'Montserrat', sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
