import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:  '#FAF7F2',
        warm:   '#F2EAD8',
        brown: {
          DEFAULT: '#2C1810',
          dark:    '#4A2E20',
        },
        gold:   '#D4A017',
        rust:   '#C4622D',
        'salon-text': '#1A0F08',
        muted:  '#9A7B6E',
        night: {
          DEFAULT: '#0C0907',
          card:    '#1A0E08',
          card2:   '#100804',
          border:  'rgba(250,247,242,0.07)',
        },
      },
      fontFamily: {
        sans:    ['var(--font-dm-sans)',    'ui-sans-serif',  'system-ui'],
        display: ['var(--font-playfair)',   'Georgia',        'ui-serif'],
      },
      maxWidth: {
        salon: '1200px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.7)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        scrollProgress: {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% center' },
          to:   { backgroundPosition: '200% center' },
        },
        revMar: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease both',
        'fade-up-d1': 'fadeUp 0.8s 0.1s ease both',
        'fade-up-d2': 'fadeUp 0.8s 0.2s ease both',
        'fade-up-d3': 'fadeUp 0.8s 0.3s ease both',
        'fade-up-d5': 'fadeUp 0.8s 0.5s ease both',
        'fade-up-d6': 'fadeUp 0.8s 0.6s ease both',
        float:          'float 4s ease-in-out infinite',
        'float-d2':     'float 4s 2s ease-in-out infinite',
        blink:          'blink 2s ease-in-out infinite',
        marquee:        'marquee 22s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite',
        'slide-down':   'slideDown 0.25s ease',
        'pop-in':       'popIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
        'pulse-dot':    'pulseDot 2s ease-in-out infinite',
        shimmer:        'shimmer 4s linear infinite',
        'rev-mar':      'revMar 38s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
