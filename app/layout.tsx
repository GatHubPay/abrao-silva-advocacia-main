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
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
