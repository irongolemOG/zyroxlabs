/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import GsapInitializer from '@/components/GsapInitializer'

export const metadata: Metadata = {
  title: 'About Zyrox Labs | Modern Website Design India',
  description: 'Zyrox Labs is a premier AI-powered website development agency in Chennai, India. We build fast, high-converting websites for businesses globally.',
}

export default function About() {
  return (
    <>
      <GsapInitializer />

      {/* ── HERO ── */}
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '0' }}>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-badge sa-up" id="heroBadge"><span className="badge-dot"></span>About Us</div>
        <h1 className="hero-h1 sa-up" id="heroH1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
          We Build <span className="line-gradient">The Future</span> of the Web
        </h1>
        <p className="hero-sub sa-up" id="heroSub">Based in Chennai, India — Zyrox Labs is an elite digital agency blending AI innovation with premium design to help businesses dominate their market.</p>
        <div className="gradual-blur">
          <div className="gb-shimmer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div><div className="gb-layer"></div>
          <div className="gb-layer"></div><div className="gb-layer"></div>
        </div>
      </section>

      {/* ── MISSION SECTION ── */}
      <section style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="sa-left">
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Why Zyrox Labs Exists</h2>
              <p className="section-sub" style={{ maxWidth: '100%', lineHeight: '1.8' }}>
                Traditional website development is broken. Agencies charge exorbitant fees, take months to deliver, and often produce slow websites that fail to convert.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: '1.8', marginTop: '1rem', fontWeight: 300 }}>
                We're changing that. By leveraging AI and modern frameworks, we deliver enterprise-grade websites at a fraction of the time and cost — without ever compromising on quality.
              </p>
            </div>
            <div className="sa-right" style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,.1), rgba(167,139,250,.05))',
              border: '1px solid rgba(99,102,241,.2)', borderRadius: '20px',
              padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'
            }}>
              {[
                { num: '48h', label: 'Average Delivery' },
                { num: '10+', label: 'Sites Launched' },
                { num: '90%', label: 'Cost Savings vs Agencies' },
                { num: '100%', label: 'Client Satisfaction' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '.9rem' }}>{s.label}</span>
                  <span style={{ fontFamily: 'var(--fh)', fontSize: '1.6rem', fontWeight: 700, background: 'linear-gradient(135deg, #fff, var(--a2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US SECTION ── */}
      <section style={{ padding: '90px 0', position: 'relative', zIndex: 1, background: 'linear-gradient(180deg, transparent, rgba(99,102,241,.025) 50%, transparent)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label sa-up">Our Edge</span>
            <h2 className="section-title sa-up">What Makes Us Different</h2>
            <p className="section-sub sa-up" style={{ margin: '0 auto' }}>Three core pillars that make every Zyrox Labs site exceptional.</p>
          </div>
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {[
              { icon: '⚡', title: 'Speed Without Compromise', desc: 'What takes agencies weeks, we deliver in 48 hours. Full stop.' },
              { icon: '🎨', title: 'Design That Wows', desc: "Every site features modern glassmorphism, smooth animations, and premium typography — no boring templates." },
              { icon: '💰', title: 'Conversion Obsessed', desc: 'A beautiful website is useless if it doesn\'t make you money. Our sites are engineered to drive leads and revenue.' },
            ].map(item => (
              <div key={item.title} className="feat-card sa-up">
                <div className="feat-icon">{item.icon}</div>
                <h3 className="feat-title">{item.title}</h3>
                <p className="feat-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS SECTION ── */}
      <section style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-label sa-up">The Team</span>
            <h2 className="section-title sa-up">The People Behind Zyrox Labs</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { initials: 'RJ', name: 'Reet Jain', role: 'Co-Founder & Creative Director', bio: 'Leads design strategy and UI/UX across all projects. Passionate about creating digital experiences that are both beautiful and effective.' },
              { initials: 'LA', name: 'Laqshya Ajmera', role: 'Co-Founder & Technical Lead', bio: 'Architecting the technology stack and AI integrations that make Zyrox Labs faster and more capable than traditional agencies.' },
              { initials: 'NM', name: 'Nikunj Mehta', role: 'Partner & Strategic Investor', bio: 'A key strategic partner and investor helping Zyrox Labs scale its operations and reach new market heights.' },
            ].map(f => (
              <div key={f.name} className="sa-scale" style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '20px', padding: '2rem', textAlign: 'center'
              }}>
                <div style={{
                  width: '70px', height: '70px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--a), var(--a3))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', fontWeight: 700, color: '#fff',
                  margin: '0 auto 1.25rem'
                }}>{f.initials}</div>
                <h3 style={{ fontFamily: 'var(--fh)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{f.name}</h3>
                <div style={{ color: 'var(--a2)', fontSize: '.8rem', fontWeight: 500, marginBottom: '1rem', letterSpacing: '.03em' }}>{f.role}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: '1.65' }}>{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-card sa-scale">
            <h2 className="cta-title">Let's build your<br/><span style={{ background: 'linear-gradient(135deg,#818cf8,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>digital presence.</span></h2>
            <p className="cta-sub">Join the 10+ businesses that trust Zyrox Labs to build their digital presence.</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn-cta-wa" style={{ background: 'var(--a)', boxShadow: '0 0 28px rgba(99,102,241,.4)' }}>
                Contact Us
              </Link>
              <Link href="/our-works" className="btn-cta-call">View Our Works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
