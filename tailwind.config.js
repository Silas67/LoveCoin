/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },

      backgroundImage: {
        'hero': "url('assets/images/hero.png')",
      },
    },
  },
  plugins: [],
}