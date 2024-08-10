/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
            },
            backgroundColor: {
                'primary': 'var(--background-primary)',
                'secondary': 'var(--background-secondary)',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
                'custom-sans': ['Helvetica', 'Arial', 'sans-serif'],
            },
            fontSize: {
                'title': '2.5rem',
                'subtitle': '1.75rem',
                'paragraph': '1rem',
                'small': '0.875rem',
            },
        }
    },
    plugins: [],
};
