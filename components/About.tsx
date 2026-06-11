import Image from 'next/image'

const aboutImages = [
  { src: '/wedding1.jpg', alt: 'Wedding floral styling' },
  { src: '/flowerboquet.jpg', alt: 'Handtied bouquet' },
  { src: '/flower1.jpg', alt: 'Floral arrangement' },
  { src: '/wedding2.jpg', alt: 'Wedding table flowers' },
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/floral-bg.svg')", backgroundSize: '400px 400px' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* 2×2 image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-2">
              {aboutImages.map((img) => (
                <div key={img.src} className="relative aspect-square overflow-hidden rounded-sm shadow-lg">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-400/50 rounded-sm pointer-events-none" aria-hidden="true" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 md:gap-6 mt-8 md:mt-0">
            <p className="font-serif text-gold-500 tracking-[0.25em] uppercase text-xs">The Story</p>
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-emerald-800 leading-tight">
              A passion rooted<br />in nature
            </h2>
            <div className="w-12 h-px bg-gold-400" />
            <p className="font-serif text-emerald-900/70 text-base md:text-lg leading-relaxed">
              Maddy Made Creations was born from a deep love of flowers and the
              belief that every occasion deserves something truly beautiful. From
              intimate gatherings to grand celebrations, each piece is designed
              with intention, care, and a personal touch.
            </p>
            <p className="font-serif text-emerald-900/70 text-base md:text-lg leading-relaxed">
              Working closely with each client, Maddy brings visions to life
              through seasonal blooms, thoughtful compositions, and an eye for
              timeless elegance. No two arrangements are ever the same — just
              like the moments they celebrate.
            </p>

            <div className="flex gap-8 md:gap-10 mt-2">
              <div>
                <p className="font-script text-3xl md:text-4xl text-emerald-700">100<span className="text-gold-500">+</span></p>
                <p className="font-serif text-xs tracking-widest uppercase text-emerald-900/50 mt-1">Events Styled</p>
              </div>
              <div>
                <p className="font-script text-3xl md:text-4xl text-emerald-700">5<span className="text-gold-500">★</span></p>
                <p className="font-serif text-xs tracking-widest uppercase text-emerald-900/50 mt-1">Rated by Clients</p>
              </div>
              <div>
                <p className="font-script text-3xl md:text-4xl text-emerald-700">All<span className="text-gold-500"> {'♥︎'}</span></p>
                <p className="font-serif text-xs tracking-widest uppercase text-emerald-900/50 mt-1">Made with Love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
