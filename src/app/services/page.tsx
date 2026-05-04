/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import GsapInitializer from '@/components/GsapInitializer'

export const metadata: Metadata = {
  title: 'Services | Premium Website Development India | Zyrox Labs',
  description: 'Custom website design, e-commerce development, and performance optimization for startups and businesses. Affordable website development in India.',
}

const services = [
  {
    icon: '🏢', title: 'Business Website Development',
    desc: 'Professional, conversion-optimized websites tailored for local businesses, agencies, and consultancies looking to establish authority and attract clients.',
    features: ['Up to 10 pages', 'Contact forms', 'Google Maps integration', 'Mobile-first design', 'Basic SEO setup']
  },
  {
    icon: '🎨', title: 'Custom Website Design',
    desc: 'Unique, pixel-perfect designs with premium animations and glassmorphism UI that make your brand stand out from every competitor.',
    features: ['Brand-aligned design system', 'Micro-animations', 'Glassmorphism UI', 'Dark / light mode', 'Premium typography']
  },
  {
    icon: '🛒', title: 'E-Commerce Websites',
    desc: 'High-converting online stores engineered for speed, seamless checkout experiences, and maximum sales volume from day one.',
    features: ['Product catalog', 'Payment gateway', 'Cart & checkout', 'Inventory management', 'Mobile shopping UX']
  },
  {
    icon: '🚀', title: 'Startup & SaaS Landing Pages',
    desc: 'Dynamic, modern SaaS-style landing pages designed to clearly communicate your value proposition and drive early adoption & signups.',
    features: ['Conversion-focused layout', 'Pricing sections', 'Feature showcases', 'Early access / waitlist', 'Analytics ready']
  },
  {
    icon: '📸', title: 'Portfolio Websites',
    desc: 'Sleek, minimalist digital portfolios for creatives, freelancers, and studios to showcase their work in the best possible light.',
    features: ['Case study layout', 'Gallery sections', 'Project filter', 'Smooth animations', 'Resume / about page']
  },
  {
    icon: '⚡', title: 'Performance & SEO Optimization',
    desc: 'We audit and optimize Core Web Vitals, reduce load times, and improve technical SEO to push your rankings significantly higher.',
    features: ['Lighthouse audit', 'Image optimization', 'Core Web Vitals', 'Technical SEO', 'Speed improvements']
  },
]

export default function Services() {
  return (
    <>
      <GsapInitializer />

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '0' }}>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-badge sa-up" id="heroBadge"><span className="badge-dot"></span>Premium Services</div>
        <h1 className="hero-h1 sa-up" id="heroH1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
          Digital Experiences That <span className="line-gradient">Drive Revenue</span>
        </h1>
        <p className="hero-sub sa-up" id="heroSub">From custom website design to high-performance e-commerce platforms — end-to-end digital solutions that convert visitors into customers.</p>
        <div className="gradual-blur">
          <div className="gb-shimmer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="features" id="all-services" style={{ paddingTop: '70px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label sa-up">What We Do</span>
            <h2 className="section-title sa-up">Everything Your Brand Needs</h2>
            <p className="section-sub sa-up" style={{ margin: '0 auto' }}>Six core service areas, all delivered with the same speed, quality, and attention to detail.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem' }}>
            {services.map(svc => (
              <div key={svc.title} className="feat-card sa-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="feat-icon">{svc.icon}</div>
                <h3 className="feat-title" style={{ fontSize: '1.1rem' }}>{svc.title}</h3>
                <p className="feat-desc" style={{ marginBottom: '1.25rem', flex: 1 }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {svc.features.map(f => (
                    <li key={f} style={{ fontSize: '.8rem', color: 'rgba(240,240,248,.7)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{ color: 'var(--a2)', fontWeight: 700 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <section className="hiw" id="process">
        <div className="gradual-blur top">
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
        </div>
        <div className="container">
          <div className="hiw-inner">
            <div>
              <span className="section-label sa-left">How We Work</span>
              <h2 className="section-title sa-left">From Brief to<br />Live in 3 Steps</h2>
              <p className="section-sub sa-left" style={{ marginBottom: '2rem' }}>A streamlined, transparent process that eliminates guesswork and gets you results fast.</p>
              <div>
                {[
                  { num: '01', title: 'Brief & Discovery', desc: 'Share your goals, brand, and vision via a quick brief. We ask the right questions to deeply understand your audience.' },
                  { num: '02', title: 'Design & Build With AI', desc: 'Our team uses AI-powered tools to create a pixel-perfect, high-converting website tailored to your brand.' },
                  { num: '03', title: 'Review, Refine & Launch', desc: 'You review, we refine. Your site goes live within 48 hours — fully tested and production-ready.' },
                ].map(step => (
                  <div key={step.num} className="step sa-left">
                    <div className="step-num">{step.num}</div>
                    <div className="step-line"></div>
                    <div>
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hiw-visual sa-right">
              <div className="browser-mock">
                <div className="browser-bar"><div className="b-dot"></div><div className="b-dot"></div><div className="b-dot"></div></div>
                <div className="browser-content">
                  <div className="mock-line wh" style={{ height: '14px', background: 'rgba(99,102,241,.2)' }}></div>
                  <div className="mock-line w3"></div><div className="mock-line wf"></div>
                  <div className="mock-block">✦ Your Website Here</div>
                  <div className="mock-grid"><div className="mock-card"></div><div className="mock-card"></div></div>
                  <div className="mock-line w2"></div><div className="mock-line w3"></div><div className="mock-line wh"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING QUICK CTA ── */}
      <section style={{ padding: '90px 0', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <span className="section-label sa-up">Pricing</span>
          <h2 className="section-title sa-up">Plans Starting at ₹4,999</h2>
          <p className="section-sub sa-up" style={{ margin: '1rem auto 2rem' }}>
            Transparent, no-surprise pricing with plans for every stage of business — from personal brands to full-scale enterprises.
          </p>
          <div className="cta-btns sa-up" style={{ justifyContent: 'center', opacity: 1, transform: 'none' }}>
            <a href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20from%20Zyrox%20Labs!" target="_blank" rel="noopener noreferrer" className="btn-cta-wa">
              <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Get a Free Quote
            </a>
            <Link href="/contact" className="btn-cta-call">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
