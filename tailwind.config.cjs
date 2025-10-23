/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tomzaBlue: "#0b5ca8",
        tomzaYellow: "#ffd200",
        tomzaRed: "#e53935"
      },
      boxShadow: {
        smooth: "0 10px 30px rgba(0,0,0,.25)"
      }
    }
  },
  plugins: [],
};
