/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6DBBDB',
          dark: '#2874A6',
          light: '#A8D5E2',
        },
        accent: {
          DEFAULT: '#059669',
          dark: '#047857',
        },
        charcoal: '#5A5A5A',
      },
      backgroundColor: {
        primary: '#6DBBDB',
        'primary-dark': '#2874A6',
        accent: '#059669',
      },
      textColor: {
        primary: '#6DBBDB',
        'primary-dark': '#2874A6',
        accent: '#059669',
      },
    },
  },
  plugins: [],
}
