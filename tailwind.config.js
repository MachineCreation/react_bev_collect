/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'custom_button': '0 10px 10px rgba(0,0,255,0.4)'
      }
    },
  },
  plugins: [],
}

