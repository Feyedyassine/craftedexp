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
        // Custom color palette from PRD
        sand: '#F5F3EF',
        charcoal: '#3A3A3A',
        'soft-gray': '#E6E6E6',
        cream: '#E4E2DD',
      },
      fontFamily: {
        // Inter for body text
        sans: ['var(--font-inter)', 'sans-serif'],
        // Cormorant for headlines
        display: ['var(--font-cormorant)', 'var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Typography hierarchy from PRD - responsive sizes (H1 and H2 aligned)
        'h1': ['36px', { lineHeight: '1.1', fontWeight: '500' }],
        'h1-sm': ['44px', { lineHeight: '1.1', fontWeight: '500' }],
        'h1-lg': ['56px', { lineHeight: '1.1', fontWeight: '500' }],
        'h2': ['36px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2-sm': ['44px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2-lg': ['56px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        'h3-sm': ['24px', { lineHeight: '1.3', fontWeight: '500' }],
        'h3-lg': ['32px', { lineHeight: '1.3', fontWeight: '500' }],
        'h4': ['16px', { lineHeight: '1.4', fontWeight: '500' }],
        'h4-sm': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'h4-lg': ['20px', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        // Custom spacing for generous whitespace
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      screens: {
        // Breakpoints from PRD
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
