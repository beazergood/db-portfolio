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
        'purp-dark': '#77328B',
        mintee: '#C2F0CC',
        'mintee-dark': '#6FDC87',
        'gray-2B2B2B': '#2B2B2B',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
