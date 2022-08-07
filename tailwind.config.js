const Nth = require('tailwind-nth-child')
const nth3n =  new  Nth('3n','3n+0') // Sub-elements that are multiples of 3
const nth2n =  new  Nth('2n','2n+0')


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
      borderWidth: [
        'nth-child-2n',
        'nth-child-3n',
      ],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'),nth2n.nthChild(),nth3n.nthChild()]
}
