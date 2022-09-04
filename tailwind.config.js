const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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
