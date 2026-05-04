import type { Metadata } from 'next'
import { Outfit, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundLayers from '@/components/BackgroundLayers'

const outfit = Outfit({ subsets: ['latin'], variable: '--fh' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400'], variable: '--fs' })

export const metadata: Metadata = {
  title: 'Zyrox Labs — Smart Websites Powered by AI',
  description: 'We build modern, high-performance websites at a fraction of traditional costs. Fast delivery. Stunning results.',
  openGraph: {
    title: 'Zyrox Labs — Smart Websites Powered by AI',
    description: 'We build modern, high-performance websites at a fraction of traditional costs.',
    url: 'https://zyroxlabs.com',
    siteName: 'Zyrox Labs',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zyrox Labs — Smart Websites Powered by AI',
    description: 'Premium website development powered by AI.',
  },
  metadataBase: new URL('https://zyroxlabs.com'),
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
              "@type": ["Organization", "WebSite", "ProfessionalService", "LocalBusiness"],
              "name": "Zyrox Labs",
              "url": "https://zyroxlabs.com",
              "logo": "https://zyroxlabs.com/logo.png",
              "image": "https://zyroxlabs.com/og-image.jpg",
              "description": "Zyrox Labs is a premier AI-powered website development agency in Chennai, India. We build fast, high-converting websites for businesses globally.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "areaServed": "India",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9150811600",
                "contactType": "customer service",
                "email": "zyroxlabs@gmail.com"
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
