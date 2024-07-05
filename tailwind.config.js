/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "15px",
      fontFamily: {
        inter: ["Poppins", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: "#E7FCFC",
        txtColor: "#0E0F0F",
        accent: {
          DEFAULT: "#7DEDFA",
          hover: "#7DE3FA",
        },
      },
    },
  },
  plugins: [],
};
