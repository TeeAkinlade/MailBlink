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
      colors: {
        ui_primary: "#1F284F",
        ui_secondary1: "#0070F0",
        tertiary: "#FAFBFC",
        Ash: "#575757",
        ui_primary2:"#228B22",
        ui_button:"#0070F0",
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
