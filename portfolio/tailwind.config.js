/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      background: 'rgb(var(--background))',
      text: 'rgb(var(--text))',
      highlights1: 'rgb(var(--highlights-1))',
      highlights2: 'rgb(var(--highlights-2))',
      details: 'rgb(var(--details))',
    },
    fontFamily: {
      'html': ['Ubuntu', 'sans-serif']
    },
    fontWeight: {
      bold: '700',
    }
  },
  plugins: [],
}

