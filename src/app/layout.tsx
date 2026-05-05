import type { Metadata, Viewport } from 'next'
import { Outfit, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundLayers from '@/components/BackgroundLayers'

const outfit = Outfit({ subsets: ['latin'], variable: '--fh' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400'], variable: '--fs' })

export const viewport: Viewport = {
  themeColor: '#04040a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Zyrox Labs — Smart Websites Powered by AI',
  description: 'We build modern, high-performance websites at a fraction of traditional costs. Fast delivery. Stunning results.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: 'Zyrox Labs — Smart Websites Powered by AI',
    description: 'We build modern, high-performance websites at a fraction of traditional costs. Fast delivery. Stunning results.',
    url: 'https://zyroxlabs.in',
    siteName: 'Zyrox Labs',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Zyrox Labs',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Zyrox Labs — Smart Websites Powered by AI',
    description: 'We build modern, high-performance websites at a fraction of traditional costs. Fast delivery. Stunning results.',
    images: ['/favicon.png'],
  },
  metadataBase: new URL('https://zyroxlabs.in'),
  alternates: {
    canonical: '/',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cormorant.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zyrox Labs",
              "url": "https://zyroxlabs.in",
              "logo": "https://zyroxlabs.in/icon.png",
              "image": "https://zyroxlabs.in/og-image.png",
              "description": "Zyrox Labs is a premier AI-powered website development agency in Chennai, India. We build fast, high-converting websites for businesses globally.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Chennai, Tamil Nadu",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.0827,
                "longitude": 80.2707
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9150811600",
                "contactType": "customer service",
                "email": "zyroxlabs@gmail.com",
                "availableLanguage": ["English", "Tamil", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/zyroxlabs"
              ]
            })
          }}
        />
        <BackgroundLayers />
        <Navbar />
        {children}
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" async></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/SplitText.min.js" async></script>
      </body>
    </html>
  )
}
