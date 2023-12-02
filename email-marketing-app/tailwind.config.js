/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto Slab"],
        Poppins: ["Poppins"]
      },
      colors:{
        backGround: '#E5E5E5',
        navyBlue: '#001F3F',
        forestGreen: '#228B22',
        primaryBlack: '#575757',
        primaryBlack2: '#202020',
        ui_primary: "#1F284F",
        ui_secondary1: "#0070F0",
        tertiary: "#FAFBFC",
        linear: '#F5F0FF',
      }
    },
  },
  plugins: [],
}
