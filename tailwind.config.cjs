/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gandhiSans: ["Gandhi Sans", "sans-serif"],
      },
      colors: {
        space: {
          100: "#D9D9D9",
          200: "#94A3B8",
          300: "#C98CF1",
          400: "#7B78E5",
          500: "#041833",
          600: "#04244F",
          700: "#154580",
          800: "rgba(148, 163, 184,0.3)",
        },
      },
    },
  },
  plugins: [],
};
