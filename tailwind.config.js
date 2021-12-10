module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#A8763E",
        secondary: "#F7F3E3",
        light: "#E8CAA9",
        dark: "#4F2D07",
        white: "#fff",
        mainHeading: "#373F41",
        subHeading: "#737B7D",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        main: ["Work Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
