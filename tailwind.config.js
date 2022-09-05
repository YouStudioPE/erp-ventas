const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: "#343a40",
          dark: "#3f474e",
          default: "#4b545c",
          light: "#e8f0f7",
        },
        white: {
          default: colors.white,
          light: "rgba(255,255,255,0.8)",
        },
      },
      height: {
        full: "100%",
      },
    },
    screens: {
      tablet: "600px",
      desktop: "1280px",
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".wrapper": {
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
        },
      });
    }),
  ],
};
