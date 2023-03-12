/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-image': "url('./public/images/backgroundImg.png')"
      }, 
      backgroundColor: {
        'grayish': '#F6F7FB',
        'light-grey': '#B9BDCF',
        'light-blue': '#1E86FF'

      }
    },
  },
  plugins: [],
}