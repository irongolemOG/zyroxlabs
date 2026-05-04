/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import GsapInitializer from '@/components/GsapInitializer'

export const metadata: Metadata = {
  title: 'Contact Zyrox Labs | Start Your Project Today',
  description: 'Ready to build a premium website? Contact Zyrox Labs via WhatsApp, email, or phone. Get your website launched in 48 hours.',
}

export default function Contact() {
  return (
    <>
      <GsapInitializer />

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '0' }}>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-badge sa-up" id="heroBadge"><span className="badge-dot"></span>Get In Touch</div>
        <h1 className="hero-h1 sa-up" id="heroH1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
          Let's Build Something <span className="line-gradient">Amazing</span>
        </h1>
        <p className="hero-sub sa-up" id="heroSub">Our team is ready to transform your ideas into a high-performance digital reality. Pick the fastest way to reach us below.</p>
        <div className="gradual-blur">
          <div className="gb-shimmer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="contact-methods">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="contact-header">
            <span className="section-label sa-up">Contact</span>
            <h2 className="section-title sa-up">Reach Us Your Way</h2>
            <p className="section-sub sa-up">Three ways to connect — all of them fast.</p>
          </div>
          <div className="contact-grid">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!"
              target="_blank"
              rel="noopener noreferrer"
              className="feat-card sa-up contact-card"
            >
              <div className="feat-icon wa-icon">
                <svg style={{ width: '24px', height: '24px', fill: '#25d366' }} viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
              </div>
              <h3 className="feat-title">WhatsApp (Fastest)</h3>
              <p className="feat-desc">Get a response within minutes. Share your requirements directly and we'll get back to you instantly.</p>
              <div className="contact-link wa-text">+91 91508 11600 →</div>
            </a>

            {/* Email */}
            <a
              href="mailto:zyroxlabs@gmail.com"
              className="feat-card sa-up contact-card"
            >
              <div className="feat-icon">
                <svg style={{ width: '24px', height: '24px', fill: 'none', stroke: 'var(--a2)', strokeWidth: 2 }} viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m2 7 10 8 10-8" />
                </svg>
              </div>
              <h3 className="feat-title">Email Us</h3>
              <p className="feat-desc">Send us a detailed brief, reference sites, or any files. We respond to every email within 24 hours.</p>
              <div className="contact-link">zyroxlabs@gmail.com →</div>
            </a>

            {/* Call 1 */}
            <a
              href="tel:+919150811600"
              className="feat-card sa-up contact-card"
            >
              <div className="feat-icon">
                <svg style={{ width: '24px', height: '24px', fill: 'none', stroke: 'var(--a2)', strokeWidth: 2 }} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="feat-title">Primary Support</h3>
              <p className="feat-desc">Speak with our lead coordinator for project inquiries and pricing details.</p>
              <div className="contact-link">+91 91508 11600 →</div>
            </a>

            {/* Call 2 */}
            <a
              href="tel:+919080989597"
              className="feat-card sa-up contact-card"
            >
              <div className="feat-icon">
                <svg style={{ width: '24px', height: '24px', fill: 'none', stroke: 'var(--a2)', strokeWidth: 2 }} viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="feat-title">Direct Hotline</h3>
              <p className="feat-desc">Instant access for technical consulting and active project updates.</p>
              <div className="contact-link">+91 90809 89597 →</div>
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-card sa-scale">
            <h2 className="cta-title">
              Your ideal website<br />
              <span style={{ background: 'linear-gradient(135deg,#818cf8,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                is 48 hours away.
              </span>
            </h2>
            <p className="cta-sub">Don't wait. Every day without a great website is a day you're losing leads to your competitors.</p>
            <div className="cta-btns">
              <a
                href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!"
                target="_blank" rel="noopener noreferrer"
                className="btn-cta-wa"
              >
                <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a href="tel:+919150811600" className="btn-cta-call">📞 Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
