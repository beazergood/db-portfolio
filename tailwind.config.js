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
                
                
                'true-blue': '#576CA1ff',
                'cool-gray': '#8F91A8ff',
                'melon': '#FDB6B8ff',
                'drab-dark-brown': '#414123ff',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

