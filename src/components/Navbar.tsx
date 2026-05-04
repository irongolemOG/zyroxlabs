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
          Get Started
        </a>
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
          
          <a 
            href="https://wa.me/919150811600?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20website%20by%20Zyrox%20Labs!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mob-wa"
            onClick={closeMenu}
          >
            <svg style={{ width: '20px', height: '20px', fill: '#fff', flexShrink: 0 }} viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.836L.057 23.272a.75.75 0 0 0 .92.921l5.51-1.457A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.95-1.355l-.355-.212-3.67.97.986-3.598-.232-.37A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg> 
            Chat on WhatsApp
          </a>
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
