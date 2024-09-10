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
        Jua : ["Jua", "sans-serif"],
        BalsamiqSans : ["Balsamiq Sans", "sans-serif"],
        roboto : ["Roboto", "sans-serif"],
        acme : ["Acme", "sans-serif"],
        aclonica : ["Aclonica","sans-serif"]
      },
    },
  },
  plugins: [],
};