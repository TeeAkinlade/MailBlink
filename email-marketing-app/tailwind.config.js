/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Slab"],
        Poppins: ["Poppins"]
      },
      colors:{
        backGround: '#E5E5E5',
        navyBlue: '#001F3F',
        lightBlue: '#0070F0',
        forestGreen: '#228B22',
        primaryBlack: '#575757',
      }
    },
  },
  plugins: [],
}
