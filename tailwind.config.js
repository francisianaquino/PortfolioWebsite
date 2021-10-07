module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-green': '#61892F',
        'light-green': '#86C232',
        'custom-black': '#222629',
        'custom-gray': '#474B4F',
        'custom-light-gray': '#6b6E70',

        'dark-gray': '#121212',
        'dark-gray2': '#1C1C1C',
        'dark-gray3': '#262626',
        'custom-green-200': '#C5E1A5',
        'custom-green-300': '#AED581',
        'custom-green-400': '#9CCC65',
        'custom-green-500': '#8BC34A',
        'custom-green-600': '#7CB342',
        'custom-green-700': '#689F38',
        'custom-green-800': '#558B2F',
        'custom-green-900': '#33691E',

        'custom-white': '#f2f2f2',
        'custom-white2': '#e6e6e6',
        'custom-white3': '#d9d9d9'
      },
      backgroundImage: {
        'hero-pattern': "url('./images/pexels-negative-space-160107.jpg')",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active']
    },
  },
  plugins: [],
}
