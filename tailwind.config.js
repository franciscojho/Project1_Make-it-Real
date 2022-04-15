module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                primary: '#003caf',
                secondary: '#0094AF',
                tertiary: '#fff',
                quaternary: '#f3f3f4',
                quinary: '#000',
            },
            backgroundImage: {
                'cleaning-banner': "url('/src/assets/cleaning-banner.png')",
            },
        },
    },
    plugins: [],
}
