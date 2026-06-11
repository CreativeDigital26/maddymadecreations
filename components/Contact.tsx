'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In production, wire to a form service (e.g. Formspree, Resend)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative bg */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/floral-bg.svg')", backgroundSize: '400px 400px' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="font-serif text-gold-500 tracking-[0.25em] uppercase text-xs mb-4">Let's Connect</p>
          <h2 className="font-script text-5xl md:text-6xl text-emerald-800 mb-5">Get in Touch</h2>
          <p className="font-serif text-emerald-900/60 text-lg max-w-lg mx-auto leading-relaxed">
            Whether you have a date in mind or simply a dream, I'd love to hear
            about your vision. Fill in the form below or reach out on Instagram.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Form */}
          <div className="bg-white/60 backdrop-blur-sm border border-sage-200 rounded-sm p-6 md:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <p className="font-script text-4xl text-emerald-700 mb-3">Thank you!</p>
                <p className="font-serif text-emerald-900/60">I'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block font-serif text-xs tracking-widest uppercase text-emerald-900/70 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="w-full bg-sage-50 border border-sage-200 focus:border-emerald-600 focus:outline-none rounded-sm px-4 py-3 font-serif text-sm text-emerald-900 placeholder:text-emerald-900/30 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-serif text-xs tracking-widest uppercase text-emerald-900/70 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-sage-50 border border-sage-200 focus:border-emerald-600 focus:outline-none rounded-sm px-4 py-3 font-serif text-sm text-emerald-900 placeholder:text-emerald-900/30 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="occasion" className="block font-serif text-xs tracking-widest uppercase text-emerald-900/70 mb-2">
                    Occasion / Service
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    className="w-full bg-sage-50 border border-sage-200 focus:border-emerald-600 focus:outline-none rounded-sm px-4 py-3 font-serif text-sm text-emerald-900 transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Select…</option>
                    <option>Wedding Florals</option>
                    <option>Event Styling</option>
                    <option>Bespoke Bouquet</option>
                    <option>Seasonal Wreath</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-serif text-xs tracking-widest uppercase text-emerald-900/70 mb-2">
                    Tell me about your vision
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Date, venue, colour palette, inspiration…"
                    className="w-full bg-sage-50 border border-sage-200 focus:border-emerald-600 focus:outline-none rounded-sm px-4 py-3 font-serif text-sm text-emerald-900 placeholder:text-emerald-900/30 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-emerald-700 hover:bg-emerald-800 text-white font-serif tracking-widest uppercase text-sm px-8 py-4 transition-colors duration-300 cursor-pointer"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-serif text-xs tracking-widest uppercase text-gold-500 mb-2">Follow Along</p>
              <a
                href="https://www.instagram.com/maddymadecreations/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 cursor-pointer"
              >
                {/* Instagram icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-emerald-700 group-hover:text-gold-500 transition-colors duration-200 flex-shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                <span className="font-serif text-emerald-800 group-hover:text-gold-500 transition-colors duration-200 underline underline-offset-4">
                  @maddymadecreations
                </span>
              </a>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-gold-400/40 to-transparent" />

            <div>
              <p className="font-serif text-xs tracking-widest uppercase text-gold-500 mb-3">Hours</p>
              <p className="font-serif text-emerald-900/70 leading-relaxed text-sm">
                Monday – Friday: 9am – 5pm<br />
                Weekends by appointment<br />
                <span className="text-emerald-900/40 text-xs italic">(event days by arrangement)</span>
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-gold-400/40 to-transparent" />

            <div>
              <p className="font-serif text-xs tracking-widest uppercase text-gold-500 mb-3">A Little Note</p>
              <p className="font-serif text-emerald-900/60 leading-relaxed text-sm italic">
                "Every flower is a soul blossoming in nature — and in every arrangement
                I create, I try to capture a little of that magic."
              </p>
              <p className="font-script text-2xl text-emerald-700 mt-3">— Maddy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
