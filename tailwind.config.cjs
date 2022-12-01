
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        azulDark: "#041833",
        azulLight: "#1875E8",
        fontPost: "#444444",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
