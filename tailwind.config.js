/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      Playfair:['Playfair Display','serif'],
      Bebas:['Bebas Neue','serif'],
      Righteous:['Righteous','serif'],
      saira: ['Saira', 'sans-serif'],

    },
 
    screens: {
      'sm': '480px',  // Custom small screen breakpoint
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',  // Custom extra large screen breakpoint
    },
 
  },
  plugins: [],
}

