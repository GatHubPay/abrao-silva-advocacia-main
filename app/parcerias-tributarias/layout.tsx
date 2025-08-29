import type { Metadata } from "next"

// [cursor-edit] - Metadata SEO otimizada para parcerias tributárias
export const metadata: Metadata = {
  title: "Parcerias Tributárias | Abrão & Silva Advocacia - Especialistas em Direito Tributário",
  description: "Parcerias estratégicas em direito tributário com mais de R$ 2 bilhões recuperados. Transparência, agilidade e resultados comprovados em Goiânia/GO.",
  keywords: [
    "parcerias tributárias",
    "direito tributário",
    "advocacia tributária",
    "créditos tributários",
    "Goiânia",
    "Abrão Silva",
    "consultoria tributária",
    "recuperação de créditos",
    "parceria advocacia"
  ],
  authors: [{ name: "Abrão & Silva Advocacia" }],
  creator: "Abrão & Silva Advocacia",
  publisher: "Abrão & Silva Advocacia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://abraoesilva.adv.br/parcerias-tributarias",
    title: "Parcerias Tributárias | Abrão & Silva Advocacia",
    description: "Parcerias estratégicas em direito tributário com mais de R$ 2 bilhões recuperados. Transparência, agilidade e resultados comprovados.",
    siteName: "Abrão & Silva Advocacia",
    images: [
      {
        url: "/dr.png",
        width: 1200,
        height: 630,
        alt: "Especialista em Direito Tributário - Abrão & Silva Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcerias Tributárias | Abrão & Silva Advocacia",
    description: "Parcerias estratégicas em direito tributário com mais de R$ 2 bilhões recuperados.",
    images: ["/dr.png"],
  },
  alternates: {
    canonical: "https://abraoesilva.adv.br/parcerias-tributarias",
  },
  other: {
    "geo.region": "BR-GO",
    "geo.placename": "Goiânia",
    "geo.position": "-16.6869;-49.2648",
    "ICBM": "-16.6869, -49.2648",
  },
}

export default function ParceriasTributariasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Abrão & Silva Advocacia - Parcerias Tributárias",
            "description": "Especialistas em parcerias tributárias com mais de R$ 2 bilhões em créditos recuperados",
            "url": "https://abraoesilva.adv.br/parcerias-tributarias",
            "telephone": "+5562999128796",
            "email": "setorsul@abraoesilva.adv.br",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua 100, Nº 35, Qd. F-17, Lt. 12",
              "addressLocality": "Goiânia",
              "addressRegion": "GO",
              "postalCode": "74000-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -16.6869,
              "longitude": -49.2648
            },
            "openingHours": "Mo-Fr 08:00-17:00",
            "areaServed": {
              "@type": "State",
              "name": "Goiás"
            },
            "serviceType": "Direito Tributário",
            "priceRange": "Consulte",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "100"
            }
          })
        }}
      />
      {children}
    </>
  )
}
