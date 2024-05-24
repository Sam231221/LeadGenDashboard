/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "open-sas": "Open Sans",
    },
    extend: {
      colors: {
        ...colors,
        primaryTextColor: "#013685",
        secondaryTextColor: "#4154F1",
        ternaryTextColor: "#899bbd",
        forteryTextColor: "#51678f",
        primaryBgColor: "#EEF2FA",
        secondaryBgColor: "#f6f6fe",
      },
    },
  },
  plugins: [],
};
