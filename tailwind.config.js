/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4E598C",
        orange: "#F2994A",
        lightOrange: "#F2C94C",
        offWhite: "#F7F7FF",
        gray: "#BDBDBD",
        lightPurple: "#817E9E"
      },
      borderColor: {
        purple: "rgba(78, 89, 140, 1)",
      },
    },
  },
  plugins: [],
};
