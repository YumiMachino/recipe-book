module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#A8763E',
        secondary: '#F7F3E3',
        light: '#E8CAA9',
        dark: '#4F2D07',
        white: '#fff',
        accent: '#A83E3E',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
