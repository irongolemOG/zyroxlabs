import type { Metadata } from 'next'
import GsapInitializer from '@/components/GsapInitializer'

export const metadata: Metadata = {
  title: 'Zyrox Labs — Smart Websites Powered by AI | Fast & Premium',
  description: 'We build modern, high-performance websites at a fraction of traditional costs. Fast delivery. Stunning results.',
  alternates: {
    canonical: 'https://zyroxlabs.in',
  },
}

export default function Home() {
  return (
    <>
      <GsapInitializer />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Zyrox Labs",
            "image": "https://zyroxlabs.in/og-image.png",
            "@id": "https://zyroxlabs.in",
            "url": "https://zyroxlabs.in",
            "telephone": "+91-9150811600",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chennai, Tamil Nadu",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "postalCode": "600001",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "6"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            }
          })
        }}
      />

      {/* WA SVG */}
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <symbol id="wa" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </symbol>
      </svg>

      {/* HERO */}
      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <div className="hero-badge" id="heroBadge"><span className="badge-dot"></span>AI-Powered Web Development</div>

        <h1 className="hero-h1" id="heroH1">
          Get a Premium Website <br className="mob-only"/><span className="line-gradient"><span className="scramble-wrap" id="scrT">in 48 Hours</span></span><br/>— <em>Powered by AI</em>
        </h1>

        <p className="hero-sub" id="heroSub">We build modern, high-performance websites at a fraction of traditional costs. Fast delivery. Stunning results.</p>

        <div className="hero-ctas" id="heroCtas">
          <a href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!" target="_blank" rel="noopener noreferrer" className="btn-primary" id="heroBtn">
            <span className="shine"></span>
            <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24"><use href="#wa"/></svg>
            Get Started on WhatsApp
          </a>
        </div>

        <div className="hero-meta" id="heroMeta">
          <div className="meta-item"><span className="meta-num">48h</span><span className="meta-label">Delivery Time</span></div>
          <div className="meta-item"><span className="meta-num">10+</span><span className="meta-label">Sites Launched</span></div>
          <div className="meta-item"><span className="meta-num">100%</span><span className="meta-label">Satisfaction</span></div>
          <div className="meta-item"><span className="meta-num">3×</span><span className="meta-label">Faster Than Agencies</span></div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <span className="trust-item"><span className="trust-dot">◆</span> Startups</span>
          <span className="trust-item"><span className="trust-dot">◆</span> E-Commerce Brands</span>
          <span className="trust-item"><span className="trust-dot">◆</span> SaaS Products</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Consultants & Coaches</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Local Businesses</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Creative Agencies</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Solo Founders</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Personal Brands</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Startups</span>
          <span className="trust-item"><span className="trust-dot">◆</span> E-Commerce Brands</span>
          <span className="trust-item"><span className="trust-dot">◆</span> SaaS Products</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Consultants & Coaches</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Local Businesses</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Creative Agencies</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Solo Founders</span>
          <span className="trust-item"><span className="trust-dot">◆</span> Personal Brands</span>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="container">
          <div className="features-header">
            <span className="section-label sa-up">What You Get</span>
            <h2 className="section-title sa-up">Everything You Need.<br/>Nothing You Don't.</h2>
            <p className="section-sub sa-up">We've stripped away the bloat traditional agencies charge for — and kept everything that makes a website actually convert.</p>
          </div>
          <div className="features-grid">
            <div className="feat-card sa-rot"><div className="feat-icon">⚡</div><h3 className="feat-title">Blazing Fast Delivery</h3><p className="feat-desc">Your website goes live in 1–3 business days. No endless revision cycles. We move fast so you can too.</p></div>
            <div className="feat-card sa-rot"><div className="feat-icon">🤖</div><h3 className="feat-title">AI-Powered Design</h3><p className="feat-desc">We leverage cutting-edge AI to craft pixel-perfect layouts and copy at a speed no traditional designer can match.</p></div>
            <div className="feat-card sa-rot"><div className="feat-icon">💰</div><h3 className="feat-title">Fraction of Agency Cost</h3><p className="feat-desc">Premium quality doesn't mean premium prices. Get a ₹2L+ result at a startup-friendly budget — every time.</p></div>
            <div className="feat-card sa-rot"><div className="feat-icon">📱</div><h3 className="feat-title">Fully Responsive</h3><p className="feat-desc">Every site we build looks flawless on any device — mobile, tablet, or desktop. Seamless everywhere.</p></div>
            <div className="feat-card sa-rot"><div className="feat-icon">🎯</div><h3 className="feat-title">Conversion-Optimised</h3><p className="feat-desc">We don't just make pretty sites — we build websites engineered to turn visitors into leads and paying customers.</p></div>
            <div className="feat-card sa-rot"><div className="feat-icon">🛡️</div><h3 className="feat-title">Done-For-You Service</h3><p className="feat-desc">Copy, design, development, hosting — all handled. You describe your vision, we deliver a finished product.</p></div>
          </div>
        </div>
      </section>

      {/* STATS STRIPS */}
      <div className="stats-strip">
        <div className="stats-row">
          <div className="stat-pill"><span className="stat-pill-num">48h</span><span className="stat-pill-label">Average Delivery</span></div>
          <div className="stat-pill"><span className="stat-pill-num">3×</span><span className="stat-pill-label">Faster Than Agencies</span></div>
          <div className="stat-pill"><span className="stat-pill-num">90%</span><span className="stat-pill-label">Cost Savings</span></div>
          <div className="stat-pill"><span className="stat-pill-num">10+</span><span className="stat-pill-label">Sites Launched</span></div>
          <div className="stat-pill"><span className="stat-pill-num">100%</span><span className="stat-pill-label">Satisfaction</span></div>
          <div className="stat-pill"><span className="stat-pill-num">∞</span><span className="stat-pill-label">Revisions</span></div>
          <div className="stat-pill"><span className="stat-pill-num">48h</span><span className="stat-pill-label">Average Delivery</span></div>
          <div className="stat-pill"><span className="stat-pill-num">3×</span><span className="stat-pill-label">Faster Than Agencies</span></div>
          <div className="stat-pill"><span className="stat-pill-num">90%</span><span className="stat-pill-label">Cost Savings</span></div>
          <div className="stat-pill"><span className="stat-pill-num">10+</span><span className="stat-pill-label">Sites Launched</span></div>
          <div className="stat-pill"><span className="stat-pill-num">100%</span><span className="stat-pill-label">Satisfaction</span></div>
          <div className="stat-pill"><span className="stat-pill-num">∞</span><span className="stat-pill-label">Revisions</span></div>
        </div>
        <div className="stats-row">
          <div className="stat-pill"><span className="stat-pill-num">AI</span><span className="stat-pill-label">Powered</span></div>
          <div className="stat-pill"><span className="stat-pill-num">1-3</span><span className="stat-pill-label">Day Turnaround</span></div>
          <div className="stat-pill"><span className="stat-pill-num">₹4,999</span><span className="stat-pill-label">Starting Price</span></div>
          <div className="stat-pill"><span className="stat-pill-num">SEO</span><span className="stat-pill-label">Optimized</span></div>
          <div className="stat-pill"><span className="stat-pill-num">Mobile</span><span className="stat-pill-label">First Design</span></div>
          <div className="stat-pill"><span className="stat-pill-num">24/7</span><span className="stat-pill-label">Support</span></div>
          <div className="stat-pill"><span className="stat-pill-num">AI</span><span className="stat-pill-label">Powered</span></div>
          <div className="stat-pill"><span className="stat-pill-num">1-3</span><span className="stat-pill-label">Day Turnaround</span></div>
          <div className="stat-pill"><span className="stat-pill-num">₹4,999</span><span className="stat-pill-label">Starting Price</span></div>
          <div className="stat-pill"><span className="stat-pill-num">SEO</span><span className="stat-pill-label">Optimized</span></div>
          <div className="stat-pill"><span className="stat-pill-num">Mobile</span><span className="stat-pill-label">First Design</span></div>
          <div className="stat-pill"><span className="stat-pill-num">24/7</span><span className="stat-pill-label">Support</span></div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="hiw" id="how-it-works">
        <div className="container">
          <div className="hiw-inner">
            <div>
              <span className="section-label sa-left">Our Process</span>
              <h2 className="section-title sa-left">From Brief to<br/>Live in 3 Steps</h2>
              <p className="section-sub sa-left">A streamlined process that gets you an elite website without the usual headaches.</p>
              <div className="hiw-steps">
                <div className="step sa-left"><div className="step-num">01</div><div className="step-line"></div><div><h4 className="step-title">Tell Us About Your Vision</h4><p className="step-desc">Fill out a quick brief — your goals, brand, and what you need. Takes less than 5 minutes.</p></div></div>
                <div className="step sa-left"><div className="step-num">02</div><div className="step-line"></div><div><h4 className="step-title">We Design & Build With AI</h4><p className="step-desc">Our team uses AI-powered tools to build a high-converting, beautiful website tailored to your brand.</p></div></div>
                <div className="step sa-left"><div className="step-num">03</div><div className="step-line"></div><div><h4 className="step-title">Review, Refine & Go Live</h4><p className="step-desc">You review the design, we make any tweaks, and your site is deployed live — within 48 hours.</p></div></div>
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

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing-header">
            <span className="section-label sa-up">Simple Pricing</span>
            <h2 className="section-title sa-up">Transparent. No Surprises.</h2>
            <p className="section-sub sa-up">Agency-quality websites at a price that makes sense for every stage of business.</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card sa-up">
              <div className="price-name">Starter</div>
              <div className="price-amount">₹4,999 <span>/ site</span></div>
              <p className="price-desc">Perfect for personal brands & solo founders</p>
              <ul className="price-features"><li>Up to 3 pages</li><li>Mobile responsive</li><li>Contact form</li><li>Basic SEO setup</li><li>Delivered in 48 hours</li></ul>
              <a href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20the%20Starter%20plan!" target="_blank" rel="noopener noreferrer" className="btn-price btn-price-outline"><svg style={{ width: '14px', height: '14px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><use href="#wa"/></svg> Get Started</a>
            </div>
            <div className="price-card featured sa-scale">
              <div className="price-name">Growth</div>
              <div className="price-amount">₹9,999 <span>/ site</span></div>
              <p className="price-desc">For startups and growing businesses</p>
              <ul className="price-features"><li>Up to 7 pages</li><li>Premium design system</li><li>AI-generated copy</li><li>Advanced SEO</li><li>Analytics integration</li><li>Delivered in 48–72 hours</li></ul>
              <a href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20the%20Growth%20plan!" target="_blank" rel="noopener noreferrer" className="btn-price btn-price-solid"><svg style={{ width: '14px', height: '14px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24"><use href="#wa"/></svg> Get Started</a>
            </div>
            <div className="price-card sa-up">
              <div className="price-name">Scale</div>
              <div className="price-amount">₹19,999 <span>/ site</span></div>
              <p className="price-desc">For businesses that need it all</p>
              <ul className="price-features"><li>Unlimited pages</li><li>Custom animations</li><li>E-commerce ready</li><li>Priority support</li><li>1 month post-launch care</li><li>Delivered in 3–5 days</li></ul>
              <a href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20the%20Scale%20plan!" target="_blank" rel="noopener noreferrer" className="btn-price btn-price-outline"><svg style={{ width: '14px', height: '14px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><use href="#wa"/></svg> Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label sa-up">Client Stories</span>
            <h2 className="section-title sa-up">Brands That Trusted Us</h2>
            <p className="section-sub sa-up">Real founders. Real results. See how we've helped businesses across industries elevate their digital presence.</p>
          </div>
          <div className="testi-grid">
            <div className="testi-card sa-up">
              <div className="stars">★★★★★</div>
              <p className="testi-text">"Zyrox Labs understood the heart of what we do — protecting and caring for animals. They built us a website that communicates our mission beautifully, and we've seen a remarkable increase in donations and volunteer sign-ups since launch. Truly outstanding work."</p>
              <div className="testi-author">
                <div className="testi-avatar">IJ</div>
                <div>
                  <div className="testi-name">Indira Jain</div>
                  <div className="testi-role">Founder, Sri Mahaveer Jain Pashu Seva Kendra</div>
                </div>
              </div>
              <a href="https://srimahaveerjainpashusevakendra.in/" target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Website <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 10L10 2M10 2H4.5M10 2V7.5"/></svg>
              </a>
            </div>
            <div className="testi-card sa-up">
              <div className="stars">★★★★★</div>
              <p className="testi-text">"We needed a professional digital presence that matched the quality of our technical expertise, and Zyrox Labs delivered exactly that. The website is crisp, fast, and our customers now find us with ease. The turnaround time was extraordinary — highly recommended."</p>
              <div className="testi-author">
                <div className="testi-avatar">MB</div>
                <div>
                  <div className="testi-name">Mr. Boopalan</div>
                  <div className="testi-role">Director, Sansun Premium Electronics Studio</div>
                </div>
              </div>
              <a href="https://sansunservicecenter.in/" target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Website <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 10L10 2M10 2H4.5M10 2V7.5"/></svg>
              </a>
            </div>
            <div className="testi-card sa-up">
              <div className="stars">★★★★★</div>
              <p className="testi-text">"Khiara is about elegance and style, and Zyrox Labs captured that essence perfectly. The website feels luxurious, loads instantly, and has genuinely elevated how our clients perceive our brand before they even walk through the door. Worth every rupee."</p>
              <div className="testi-author">
                <div className="testi-avatar">MA</div>
                <div>
                  <div className="testi-name">Abhishek</div>
                  <div className="testi-role">Owner, Khiara — Luxury Fashion Atelier</div>
                </div>
              </div>
              <a href="https://khiarafashion.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Website <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 10L10 2M10 2H4.5M10 2V7.5"/></svg>
              </a>
            </div>
            <div className="testi-card sa-up">
              <div className="stars">★★★★★</div>
              <p className="testi-text">"Zyrox Labs revamped our agency site and the difference is night and day. The dynamic animations and clean layout helped us close 3 new clients in the first week. Phenomenal work and communication throughout."</p>
              <div className="testi-author">
                <div className="testi-avatar">RB</div>
                <div>
                  <div className="testi-name">Raghav Baldwa</div>
                  <div className="testi-role">Director, Sri Kartikeya Enterprises</div>
                </div>
              </div>
              <a href="https://skechem.co.in/" target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Website <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 10L10 2M10 2H4.5M10 2V7.5"/></svg>
              </a>
            </div>
            <div className="testi-card sa-up">
              <div className="stars">★★★★★</div>
              <p className="testi-text">"We needed a website that could hold its own against industry giants, and Zyrox Labs delivered beyond our expectations. The site is polished, professional, and our corporate partnerships have grown significantly since launch. A true game-changer."</p>
              <div className="testi-author">
                <div className="testi-avatar">SR</div>
                <div>
                  <div className="testi-name">Sanjay Reddy</div>
                  <div className="testi-role">CEO, Aspire Corporation</div>
                </div>
              </div>
              <a href="https://aspirecorp.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Website <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 10L10 2M10 2H4.5M10 2V7.5"/></svg>
              </a>
            </div>
            <div className="testi-card sa-up">
              <div className="stars">★★★★★</div>
              <p className="testi-text">"As a healthcare professional branching into coaching, I needed a website that conveyed both credibility and warmth. Zyrox Labs nailed it. The site has directly led to more consultation bookings and the feedback from clients has been overwhelmingly positive."</p>
              <div className="testi-author">
                <div className="testi-avatar">DS</div>
                <div>
                  <div className="testi-name">Dr. Sachin</div>
                  <div className="testi-role">Founder, Superbhumans Coaching</div>
                </div>
              </div>
              <a href="https://superbhumans.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Website <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 10L10 2M10 2H4.5M10 2V7.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq" id="faq">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="faq-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label sa-up">Questions?</span>
            <h2 className="section-title sa-up">Frequently Asked Questions</h2>
            <p className="section-sub sa-up" style={{ margin: '0 auto' }}>Everything you need to know about getting your website built with Zyrox Labs.</p>
          </div>
          <div className="faq-grid">
            {[
              { q: "How long does it take to build a website?", a: "Most websites are delivered in 48 hours. More complex projects like E-commerce or Scale plans take between 3-5 business days." },
              { q: "What is your pricing?", a: "Our plans start at ₹4,999 for personal brands, ₹9,999 for growth businesses, and ₹19,999 for full-scale digital solutions." },
              { q: "Do you build on WordPress?", a: "No, we build modern, custom-coded websites using high-performance frameworks like Next.js and React for superior speed, security, and SEO." },
              { q: "What do I need to provide to get started?", a: "Just your brand vision, any existing content or logos, and a few reference sites you like. We handle the design, copy, and development." },
              { q: "Do you offer revisions?", a: "Yes! All our plans include revisions to ensure you are 100% satisfied with the final result." },
              { q: "Do you handle hosting?", a: "Absolutely. We set up your hosting, domain connection, and SSL certificates so your site is secure and fast from day one." }
            ].map((item, i) => (
              <div key={i} className="faq-item sa-up">
                <details className="faq-details">
                  <summary className="faq-summary">
                    {item.q}
                    <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-card sa-scale">
            <h2 className="cta-title">Your website is<br/><span style={{ background: 'linear-gradient(135deg,#818cf8,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>already overdue.</span></h2>
            <p className="cta-sub">Stop losing clients to competitors with better websites. Let's build yours — in 48 hours.</p>
            <div className="cta-btns">
              <a href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!" target="_blank" rel="noopener noreferrer" className="btn-cta-wa">
                <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24"><use href="#wa"/></svg>
                Start on WhatsApp
              </a>
              <a href="tel:+919150811600" className="btn-cta-call">📞 Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
