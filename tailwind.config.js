// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      primary: ["'Poppins'", "sans-serif"],
      fontawesome: ["'Font Awesome 5 Pro'"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        heading: "#0D0F19",
        primary: "#E4AE63",
        secondary: "#F98F4E",
        success: "#349f8b",
        border: "#EFF0F2",
        borderLight: "#41c7ae",
        body: "#1C1C1C",
        gray: "#171717",     // para fondos de input
        lightest: "#f9f9f9",
        teal: "#8b349f",
        danger: "#c7415a",
        warning: "#f28020",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
