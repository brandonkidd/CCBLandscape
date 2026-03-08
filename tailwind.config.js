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
        // CCB Landscape brand colors
        primary: '#2C5F2D', // Deep green
        secondary: '#8B4513', // Warm brown
        accent: '#FF6F00', // Orange accent
      },
    },
  },
  plugins: [],
}
