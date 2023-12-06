/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto Slab"],
      },
      colors: {
<<<<<<< HEAD
        backGround: "#E5E5E5",
        navyBlue: "#001F3F",
        forestGreen: "#228B22",
        lightBlue: "#2EC5CE",
        primaryBlack: "#575757",
        primaryBlack2: "#202020",
        ui_primary: "#1F284F",
        ui_secondary1: "#0070F0",
        tertiary: "#FAFBFC",
        linear: "#F5F0FF",
        Ash: "#575757",
=======
        backGround: '#E5E5E5',
        navyBlue: '#001F3F',
        forestGreen: '#228B22',
        lightBlue: '#2EC5CE',
        primaryBlack: '#575757',
        primaryBlack2: '#202020',
        ui_primary: "#1F284F",
        ui_secondary1: "#0070F0",
        tertiary: "#FAFBFC",
        linear: '#F5F0FF',
>>>>>>> d38260f18d8434cd24376d0ff884a78834547c5d
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "animate-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.4s ease-out backwards",
        "fade-out": "animate-fade-out 0.4s ease-out forwards",
      },
    },
    plugins: [],
  },
};
