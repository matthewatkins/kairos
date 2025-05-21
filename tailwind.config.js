/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-darkest': 'var(--color-gray-darkest)',
        'gray-dark': 'var(--color-gray-dark)',
        'gray-medium': 'var(--color-gray-medium)',
        'gray-light': 'var(--color-gray-light)',
        'gray-lightest': 'var(--color-gray-lightest)',
        'energy-high': 'var(--color-energy-high)',
        'energy-medium': 'var(--color-energy-medium)',
        'energy-low': 'var(--color-energy-low)',
      },
    },
  },
  plugins: [],
}