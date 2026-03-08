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
        // Exact fonts from Framer template
        sans: ['var(--font-figtree)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        figtree: ['var(--font-figtree)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        // Clean professional colors matching Framer
        primary: {
          DEFAULT: '#1a1b1d', // Dark text
          light: '#6b7280', // Gray text
        },
        accent: {
          green: '#059669', // Green CTA button
          blue: '#3b82f6', // Blue accents
        },
      },
    },
  },
  plugins: [],
}
