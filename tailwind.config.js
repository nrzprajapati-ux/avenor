/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff9fb',
          100: '#fff1f6',
          500: '#0b1220'
        }
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
