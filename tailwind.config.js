module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        maroon: {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        gray:{
          DEFAULT:'#707070'
        }
      },
      fontFamily: {
        myFonts: ['Roboto', '"Noto Sans TC"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
