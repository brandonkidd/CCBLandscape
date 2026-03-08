/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CCB Landscape brand colors (matching Framer design)
        primary: '#6DBBDB',      // Logo blue
        'dark-blue': '#1A4D7A',  // Headers
        secondary: '#2874A6',    // Depth
        'light-blue': '#A8D5E2', // Accents
        orange: '#E67E22',       // CTAs
        'dark-orange': '#D35400',// Hover states
        charcoal: '#5A5A5A',     // Body text
        'light-gray': '#F2F2F2', // Backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
