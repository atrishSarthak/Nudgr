/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD600', // Bannerbear yellow
        accent: '#3E8DFF',  // Updated blue
        dark: '#222222',    // Bannerbear black
        light: '#FFF8E1',   // Bannerbear light yellow
        secondary: '#FF5E3A', // Accent orange
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
