module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        purp: '#C285D3',
        mintee: '#C2F0CC',
        'mintee-dark': '#1F7A32',
        thyme: '#23903A',
        'gray-2B2B2B': '#2B2B2B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
