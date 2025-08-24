// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs:  { max: "575px" },                 // <=575
      sm:  { max: "767px" },                 // <=767
      md:  { min: "768px",  max: "991px" },  // 768–991
      lg:  { min: "992px",  max: "1200px" }, // 992–1200
      xl:  { min: "1201px", max: "1400px" }, // 1201–1400
      xxl: { min: "1401px", max: "1600px" }, // 1401–1600
      xxxl:{ min: "1601px", max: "1920px" }, // 1601–1920
      minSm: { min: "768px" },               // >=768
    },
    container: {
      center: true,
      padding: "15px",
    },
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
        gray: "#fcfcfc",     // para fondos de input
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
