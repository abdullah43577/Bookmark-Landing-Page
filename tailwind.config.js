/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./app/*.js"],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440",
    },
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
