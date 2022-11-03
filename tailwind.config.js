/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Ubuntu, sans-serif",
      },

      backgroundImage: {
        web: "url(/background.png)",
      },

      colors: {
        softGreen: {
          500: "#129E57",
        },

        nlwYellow: {
          500: "#F7DD43",
        },
      },
    },
  },
  plugins: [],
};
