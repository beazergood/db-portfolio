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
                'purp-dark': '#642975',
                mintee: '#C2F0CC',
                'mintee-dark': '#6FDC87',
                thyme: '#23903A',
                'gray-2B2B2B': '#2B2B2B',
                
                'blue-1':'#8389aa',
                'blue-2':'#6d749b',
                'blue-3':'#1B233E',

                'true-blue': '#5f709d',
                'cool-gray': '#8F91A8ff',
                'melon': '#FDB6B8ff',
                'drab-dark-brown': '#414123ff',
                'gree':'#009994',
                'jaune': '#EEE8A9',
                'malon': '#fbc7c9',
                'ice-1': '#E6F4F1'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

