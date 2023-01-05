/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        purple: {
          400: '#3d0663',
          500: '#39065d',
          600: '#210554',
        },
        gray:{
          600: '#3c3c3b',
        }
      },
      dropShadow:{
        '3xl': '16px 16px 20px rgba(0,0,0,0.25)',
      }
    }
  },
  plugins: []
}
