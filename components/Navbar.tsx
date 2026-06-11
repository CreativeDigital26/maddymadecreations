'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
]

// White for transparent state (over hero); dark emerald-900 (#064e3b) for scrolled state
const logoFilterHero    = 'brightness(0) invert(1)'
const logoFilterScrolled = 'invert(17%) sepia(73%) saturate(500%) hue-rotate(130deg) brightness(90%)'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-sage-100/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 md:h-48 flex items-center justify-between" style={{ overflow: 'hidden' }}>

        {/* Logo — mobile fits h-20, desktop expands to h-48 */}
        <a href="#home" className="h-20 md:h-48 overflow-hidden leading-[0] cursor-pointer flex-shrink-0">
          <Image
            src="/maddylogo2.png"
            alt="Maddy Made Creations"
            height={400}
            width={400}
            className="block w-auto h-32 md:h-72 -mt-[16px] md:-mt-[36px]"
            style={{
              filter:       scrolled ? 'none' : logoFilterHero,
              mixBlendMode: scrolled ? 'multiply' : 'screen',
            }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-serif text-sm tracking-widest uppercase transition-colors duration-200 relative group cursor-pointer ${
                scrolled ? 'text-emerald-800 hover:text-gold-500' : 'text-white/90 hover:text-gold-300'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-emerald-800' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-200 ${scrolled ? 'bg-emerald-800' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-emerald-800' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 pb-6 pt-4 flex flex-col gap-5 border-t border-emerald-800/20 rounded-b-2xl" style={{ backgroundColor: '#deebda' }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-sm tracking-widest uppercase text-emerald-900 hover:text-gold-500 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
