'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
  { src: '/flowerarch.jpg',   alt: 'Flower arch installation',       label: 'Flower Arch' },
  { src: '/flowerarch2.jpg',  alt: 'Flower arch detail',             label: 'Arch Detail' },
  { src: '/flowerboquet.jpg', alt: 'Handtied floral bouquet',        label: 'Bouquet' },
  { src: '/flowertrail.jpg',  alt: 'Trailing floral arrangement',    label: 'Floral Trail' },
  { src: '/flower1.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower2.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower3.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower4.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower5.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower6.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower7.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower8.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower9.jpg',      alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/flower10.jpg',     alt: 'Floral arrangement',             label: 'Florals' },
  { src: '/wedding1.jpg',     alt: 'Wedding floral styling',         label: 'Wedding' },
  { src: '/wedding2.jpg',     alt: 'Wedding floral styling',         label: 'Wedding' },
  { src: '/wedding3.jpg',     alt: 'Wedding floral styling',         label: 'Wedding' },
  { src: '/wedding4.jpg',     alt: 'Wedding floral styling',         label: 'Wedding' },
]

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 relative overflow-hidden">
      {/* Floral texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/floral-bg.svg')", backgroundSize: '400px 400px' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-serif text-gold-500 tracking-[0.25em] uppercase text-xs mb-4">Recent Work</p>
          <h2 className="font-script text-5xl md:text-6xl text-emerald-800 mb-5">The Gallery</h2>
          <p className="font-serif text-emerald-900/60 text-lg max-w-xl mx-auto leading-relaxed">
            A glimpse into the arrangements and installations that have graced
            some very special occasions.
          </p>
        </div>

        {/* 3 rows × 6 columns — scales down on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden cursor-pointer group rounded-sm"
              onClick={() => setActive(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 font-serif text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </span>
            </div>
          ))}
        </div>

        {/* Instagram link */}
        <p className="text-center font-serif text-emerald-900/50 text-sm mt-10 tracking-wide">
          See more on{' '}
          <a
            href="https://www.instagram.com/maddymadecreations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-gold-500 underline underline-offset-4 transition-colors duration-200 cursor-pointer"
          >
            Instagram @maddymadecreations
          </a>
        </p>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
            onClick={() => setActive(null)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <div className="relative w-full max-w-3xl max-h-[85vh] flex items-center justify-center">
            <Image
              src={active}
              alt="Gallery image"
              width={1200}
              height={1200}
              className="object-contain max-h-[85vh] w-auto h-auto"
            />
          </div>
        </div>
      )}
    </section>
  )
}
