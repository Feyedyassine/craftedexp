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
        // Roboto Condensed for body text
        sans: ['Roboto Condensed', 'sans-serif'],
        // OPTI Copperplate for headlines
        display: ['OPTI Copperplate', 'Roboto Condensed', 'sans-serif'],
      },
      fontSize: {
        // Typography hierarchy from PRD
        'h1': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
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
