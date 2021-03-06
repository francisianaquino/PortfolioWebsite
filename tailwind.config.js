const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      colors: {
        // 'custom-dark-green': '#61892F',
        // 'custom-light-green': '#86C232',
        // 'custom-black': '#222629',
        // 'custom-gray': '#474B4F',
        // 'custom-light-gray': '#6b6E70',

        'custom-black': '#121212',
        'custom-black2': '#1C1C1C',
        'custom-black3': '#262626',

        'custom-white': '#f4f4f4',
        'custom-white2': '#eaeaea',
        'custom-white3': '#d0d0d0',

        'forest-green': {
          DEFAULT: '#2CB42C',
          '50': '#D2F4D2',
          '100': '#BDEFBD',
          '200': '#94E594',
          '300': '#6BDB6B',
          '400': '#42D142',
          '500': '#2CB42C',
          '600': '#228B22',
          '700': '#186218',
          '800': '#0E390E',
          '900': '#041004'
        },

        teal: colors.teal,
        lime: colors.lime,

        // 'teal': {
        //   DEFAULT: '#008080',
        //   '50': '#66FFFF',
        //   '100': '#4DFFFF',
        //   '200': '#1AFFFF',
        //   '300': '#00E6E6',
        //   '400': '#00B3B3',
        //   '500': '#008080',
        //   '600': '#006667',
        //   '700': '#004D4D',
        //   '800': '#003334',
        //   '900': '#001A1A'
        // },

        'custom-gray': {
          DEFAULT: '#808080',
          '50': '#F3F3F3',
          '100': '#E6E6E6',
          '200': '#CCCCCC',
          '300': '#B3B3B3',
          '400': '#9A9A9A',
          '500': '#808080',
          '600': '#676767',
          '700': '#4D4D4D',
          '800': '#343434',
          '900': '#1A1A1A'
        },
      },
      backgroundImage: {
        'hero': "url('./images/pexels-negative-space-160107.jpg')",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
}
