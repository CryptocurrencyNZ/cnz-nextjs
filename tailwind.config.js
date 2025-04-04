/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: [
            'var(--font-geist-sans)',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            'Cantarell',
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            'sans-serif',
          ],
          mono: ['var(--font-geist-mono)', 'monospace'],
        },
        animation: {
          'shake': 'shake 5s ease-in-out infinite',
        },
        keyframes: {
          shake: {
            '0%, 50%, 100%': { transform: 'rotate(0deg)' },
            '5%, 15%': { transform: 'rotate(-5deg)' },
            '10%, 20%': { transform: 'rotate(5deg)' },
          }
        },
      },
    },
    plugins: [],
  }