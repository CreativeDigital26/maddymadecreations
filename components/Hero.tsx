import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/flowerarch.jpg"
          alt="Beautiful flower arch arrangement by Maddy Made Creations"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-sage-100/90" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24 md:pt-40">
        <p
          className="font-serif text-gold-300 tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Handcrafted with love
        </p>

        <h1
          className="font-script text-5xl sm:text-6xl md:text-8xl text-white leading-tight mb-6 animate-fade-up drop-shadow-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Maddy Made Creations
        </h1>

        <p
          className="font-serif text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          Bespoke floral arrangements and event styling, crafted to transform
          your most cherished moments into lasting memories.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#gallery"
            className="inline-block cursor-pointer bg-emerald-700 hover:bg-emerald-800 text-white font-serif tracking-widest uppercase text-sm px-8 py-4 transition-colors duration-300"
          >
            View the Work
          </a>
          <a
            href="#contact"
            className="inline-block cursor-pointer border border-white/70 hover:border-gold-400 hover:text-gold-300 text-white font-serif tracking-widest uppercase text-sm px-8 py-4 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="font-serif text-white/60 tracking-widest uppercase text-xs">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  )
}
