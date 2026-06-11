const services = [
  {
    title: 'Wedding Florals',
    description:
      'From altar arches and table centrepieces to bridal bouquets and button holes — every detail considered, every bloom chosen with intention.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.5 2-4 3.5-4 6a4 4 0 008 0c0-2.5-2.5-4-4-6z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v12M9 18h6"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 13c-1 1.5-3 2-3 4a3 3 0 006 0c0-2-1.5-2.5-3-4z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 13c1 1.5 3 2 3 4a3 3 0 01-6 0c0-2 1.5-2.5 3-4z"/>
      </svg>
    ),
  },
  {
    title: 'Event Styling',
    description:
      'Corporate events, milestone celebrations, garden parties — bespoke floral installations that elevate any space and occasion.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
      </svg>
    ),
  },
  {
    title: 'Bespoke Bouquets',
    description:
      'Handtied arrangements for gifting, remembrance, or simply because flowers make everything better. Available to order anytime.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75C9 5.545 10.343 7 12 7s3-1.455 3-3.25S13.657.5 12 .5 9 1.955 9 3.75z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75C4.5 11.545 5.843 13 7.5 13s3-1.455 3-3.25S9.157 6.5 7.5 6.5 4.5 7.955 4.5 9.75z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 9.75c0 1.795 1.343 3.25 3 3.25s3-1.455 3-3.25S18.157 6.5 16.5 6.5s-3 1.455-3 3.25z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.75c0 1.795 1.343 3.25 3 3.25h3c1.657 0 3-1.455 3-3.25v-3h-9v3z"/>
      </svg>
    ),
  },
  {
    title: 'Seasonal Wreaths',
    description:
      'Handcrafted door wreaths and decorative pieces that bring the beauty of each season into your home, made fresh to order.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="3"/>
        <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
        <path strokeLinecap="round" d="M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-emerald-800/5 relative">
      {/* Faint divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-serif text-gold-500 tracking-[0.25em] uppercase text-xs mb-4">What I Create</p>
          <h2 className="font-script text-5xl md:text-6xl text-emerald-800 mb-5">Services</h2>
          <p className="font-serif text-emerald-900/60 text-lg max-w-xl mx-auto leading-relaxed">
            Every arrangement is made to order, using the freshest seasonal blooms
            sourced with care.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/60 backdrop-blur-sm border border-sage-200 hover:border-gold-400/60 rounded-sm p-6 md:p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/5 cursor-default"
            >
              <div className="text-emerald-700 group-hover:text-gold-500 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-emerald-900 tracking-wide">
                {service.title}
              </h3>
              <p className="font-serif text-base text-emerald-900/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block cursor-pointer border border-emerald-700 hover:bg-emerald-700 text-emerald-800 hover:text-white font-serif tracking-widest uppercase text-sm px-10 py-4 transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Faint divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
    </section>
  )
}
