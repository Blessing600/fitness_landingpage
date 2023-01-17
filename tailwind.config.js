/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#0A110E',
        'smoke-white': '#FFFFFF',
        'dark-green': '#5A997D',
      },
    },
  
  },
  plugins: [],
}