/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/customers/*.liquid',
    './templates/*.liquid',
    './templates/*.json'
   
  ],
  theme: {
    extend: {
      height:{
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

