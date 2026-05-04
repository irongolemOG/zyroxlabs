/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { createClient } from '@/utils/supabase/server'
import GsapInitializer from '@/components/GsapInitializer'
import Link from 'next/link'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Our Works | Zyrox Labs Portfolio',
  description: 'Explore our portfolio of premium websites built for businesses in Chennai and globally. See our web development case studies.',
}

// Fallback projects shown ONLY if the database is empty.
// To make these editable, run the provided insert_projects.sql in your Supabase SQL Editor.
const FALLBACK_PROJECTS = [
  {
    id: 101,
    title: 'Sri Mahaveer Jain Pashu Seva Kendra',
    industry: 'NGO',
    category: 'NGO Website',
    description: 'A dedicated platform for a noble animal welfare NGO based in Nellore, designed to increase trust and donations.',
    link: 'http://srimahaveerjainpashusevakendra.in/',
    image_url: ''
  },
  {
    id: 102,
    title: 'Khiara Fashion',
    industry: 'Fashion',
    category: 'E-Commerce / Boutique',
    description: 'A premium, luxurious digital storefront for a high-end clothing boutique.',
    link: 'https://khiarafashion.vercel.app/',
    image_url: ''
  },
  {
    id: 103,
    title: 'Sri Kartikeya Enterprises',
    industry: 'Chemicals',
    category: 'Corporate Website',
    description: 'A modern, professional showcase for a leading chemical distribution enterprise.',
    link: 'https://skechem.co.in',
    image_url: ''
  },
  {
    id: 104,
    title: 'Sansun TV Repair Centre',
    industry: 'Local Business',
    category: 'Service Website',
    description: 'A high-converting, local SEO optimized website for a premium electronics repair studio.',
    link: 'https://sansunservicecenter.in/',
    image_url: ''
  },
  {
    id: 105,
    title: 'Superbhumans',
    industry: 'Consulting',
    category: 'Agency Website',
    description: 'A sleek, dynamic digital presence designed to attract high-ticket clients.',
    link: 'https://superbhumans.vercel.app/',
    image_url: ''
  },
  {
    id: 106,
    title: 'Aspire Corp',
    industry: 'Corporate',
    category: 'Business Website',
    description: 'A futuristic, industrial-themed corporate website built for scale and authority.',
    link: 'https://aspirecorp.vercel.app/',
    image_url: ''
  }
]

export default async function OurWorks() {
  const supabase = createClient()

  let allProjects: any[] = []
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Supabase error:', error)
      allProjects = FALLBACK_PROJECTS
    } else {
      // If DB has projects, show them. If empty, show fallback.
      allProjects = (data && data.length > 0) ? data : FALLBACK_PROJECTS
    }
  } catch (e) {
    console.error('Fetch catch:', e)
    allProjects = FALLBACK_PROJECTS
  }

  return (
    <>
      <GsapInitializer />

      {/* HERO */}
      <section className="hero" style={{ minHeight: '55vh', paddingBottom: '0' }}>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-badge sa-up" id="heroBadge"><span className="badge-dot"></span>Portfolio</div>
        <h1 className="hero-h1 sa-up" id="heroH1" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}>
          Selected <span className="line-gradient">Works</span>
        </h1>
        <p className="hero-sub sa-up" id="heroSub">A showcase of premium digital experiences crafted for forward-thinking brands and businesses.</p>
        
        {/* Removed gradual-blur from hero bottom to prevent text blurring issues */}
      </section>

      {/* PORTFOLIO GRID */}
      <section className="works-gallery">
        <div className="container">
          <div className="works-grid">
            {allProjects.map((project: any) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="sa-up work-card"
              >
                {/* Square image box */}
                <div className="work-image-box">
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="work-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="work-img-placeholder">
                      <div className="placeholder-icon">🌐</div>
                      <div className="placeholder-cta">View Live Site →</div>
                    </div>
                  )}
                </div>

                {/* Card text */}
                <div className="work-info">
                  <div className="work-meta">
                    <span className="work-category">{project.category}</span>
                    <span className="work-industry">{project.industry}</span>
                  </div>
                  <h3 className="work-title">{project.title}</h3>
                  <p className="work-desc">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-card sa-scale">
            <h2 className="cta-title">
              Want to be<br />
              <span style={{ background: 'linear-gradient(135deg,#818cf8,#a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                on this list?
              </span>
            </h2>
            <p className="cta-sub">Join the 10+ brands that trust Zyrox Labs to build their digital presence.</p>
            <div className="cta-btns">
              <a
                href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-wa"
              >
                <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                Start on WhatsApp
              </a>
              <Link href="/contact" className="btn-cta-call">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
