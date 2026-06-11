import Image from 'next/image'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white/70">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col items-center gap-10">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-64 overflow-hidden leading-[0]">
            <Image
              src="/maddylogo2.png"
              alt="Maddy Made Creations"
              height={400}
              width={400}
              className="block w-auto h-[352px] -mt-[56px]"
              style={{ filter: 'brightness(0) invert(1)', mixBlendMode: 'screen' }}
            />
          </div>
          <p className="font-serif text-xs tracking-widest uppercase text-white/40">
            Handcrafted Florals &amp; Event Styling
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-serif text-xs tracking-widest uppercase text-white/50 hover:text-gold-400 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <a
          href="https://www.instagram.com/maddymadecreations/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group flex items-center gap-2 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-white/40 group-hover:text-gold-400 transition-colors duration-200">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
          <span className="font-serif text-xs text-white/40 group-hover:text-gold-400 transition-colors duration-200">
            Instagram
          </span>
        </a>

        {/* Divider */}
        <div className="w-16 h-px bg-gold-400/30" />

        {/* Copyright */}
        <p className="font-serif text-xs text-white/30 text-center">
          &copy; {new Date().getFullYear()} Maddy Made Creations. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
