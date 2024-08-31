/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Ranchers: ["Ranchers", "sans-serif"],
        AbrilFatface: ["Abril Fatface", "serif"],
        RubikWetPaint: ["Rubik Wet Paint"],
      },
    },
  },
  plugins: [],
};