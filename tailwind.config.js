module.exports = {
  content: ['./app/**/*.{html,ejs}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '12px',
        screens:{
          '2xl': '1320px',
        }
      },
      colors: {
        maroon: {
          light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        gray: {
          light:'#DCDCDC',
          DEFAULT: '#707070',
        },
        brown:{
          DEFAULT:'#5F3E2D',
          light:'#B75929'
        }
      },
      fontFamily: {
        myFonts: ['Roboto', '"Noto Sans TC"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
