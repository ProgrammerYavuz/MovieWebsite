/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'movie-red'   : '#bc1a45',
        'movie-melon' : '#ffd369',
        'movie-grey'  : '#dddddd',
        'movie-white' : '#f7f7f7',
      }
    },
  },
  plugins: [],
}
