/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Images/Hero Section.png')",
      },
      colors: {
        'primary': '#80205A',
        'secondary': '#D8BACC',
        'brown-black': '#161010',
        'ashh': '#00000'
      },
      fontFamily: {
        'LibreRegular': ['LibreRegular', 'sans-serif'],
        'LibreBold': ['LibreBold', 'sans-serif'],
        'RedHat': ['RedHat', 'sans-serif'],
      },
      screens: {
        'mobile': '600px',
        'tablet': '850px',
        'laptop': '1024px',
      }
    },
    plugins: [],
  }
}