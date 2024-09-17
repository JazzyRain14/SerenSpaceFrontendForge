/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#80205A',     
        'secondary': '#D8BACC',  
        'background': '#FFFFFF', 
        'text': '#161010',       
        'accent': '#000000',  
      },
      fontFamily: {
        'body': ['Red Hat Display', 'sans-serif'],
        'heading': ['Libre Caslon Text', 'serif'],
        'brand': ['Mrs Sheppards', 'sans-serif'], 
      },
      backgroundImage: {
        'custom-bg': "url('/images/background.png')", 
      },
    },
  },
  plugins: [],
}
