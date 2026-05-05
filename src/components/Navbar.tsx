'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  const toggleMenu = () => {
    const nextState = !mobileMenuOpen
    setMobileMenuOpen(nextState)
    document.body.style.overflow = nextState ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">
          Zyrox Labs
        </Link>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/our-works">Our Works</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="nav-actions">
          <a 
            href="https://www.instagram.com/zyroxlabs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-insta"
            title="Instagram"
          >
            <svg style={{ width: '18px', height: '18px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
          >
            <svg style={{ width: '15px', height: '15px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg> 
            <span className="cta-text">Get Started</span>
          </a>
        </div>
        <button className={`hbg ${mobileMenuOpen ? 'open' : ''}`} id="hbg" aria-label="Menu" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mob-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobMenu">
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <Link href="/" className="mob-link" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="mob-link" onClick={closeMenu}>About</Link>
          <Link href="/services" className="mob-link" onClick={closeMenu}>Services</Link>
          <Link href="/our-works" className="mob-link" onClick={closeMenu}>Our Works</Link>
          <Link href="/contact" className="mob-link" onClick={closeMenu}>Contact</Link>
          
          <div className="mob-actions">
            <a 
              href="https://www.instagram.com/zyroxlabs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mob-insta"
              onClick={closeMenu}
            >
              <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mob-wa"
              onClick={closeMenu}
              style={{ flex: 1, marginTop: 0 }}
            >
              <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg> 
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <ProgressIndicator />
    </>
  )
}

function ProgressIndicator() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setProgress((scrollY / docHeight) * 100)
      } else {
        setProgress(0)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        zIndex: 9999,
        background: 'linear-gradient(90deg, #6366f1, #818cf8, #a78bfa)',
        width: `${progress}%`,
        transition: 'width .1s linear',
        pointerEvents: 'none'
      }}
    />
  )
}
