import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f5f9f4',
          100: '#deebda',
          200: '#c4dbbe',
          300: '#a3c89a',
          400: '#7aad70',
          500: '#5a9451',
        },
        emerald: {
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
        gold: {
          300: '#f0d080',
          400: '#d4af37',
          500: '#b8962e',
          600: '#9a7b24',
        },
      },
      fontFamily: {
        script:  ['Great Vibes', 'cursive'],
        serif:   ['Cormorant Infant', 'Georgia', 'serif'],
        display: ['Cormorant', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'floral-texture': "url('/floral-bg.svg')",
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
