/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#ece8ff',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        majenta: {
          500: '#8B008B',
          800: '#342637',
          900: '#19131a'
        },
      },
    },
    fontFamily: {
      second_font: ["Agbalumo"],
        lora: ["Lora", "serif"],
        lato: ["Lato", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};

