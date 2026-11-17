/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimitri: {
          950: '#0a0a0a',
          900: '#121212',
          850: '#181818',
          800: '#222222',
          700: '#333333',
          500: '#666666',
          400: '#888888',
          300: '#b0b0b0',
          200: '#dcd7cf',
          150: '#ebe6de',
          100: '#f4f1eb',
          50: '#faf8f5',
          gold: {
            DEFAULT: '#c5a880',
            light: '#d8c2a3',
            dark: '#a88960',
            hover: '#b5976e',
          },
          emerald: '#1a3a34',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        monogram: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.12)',
        'luxury-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 25px rgba(197, 168, 128, 0.25)',
      }
    },
  },
  plugins: [],
}
