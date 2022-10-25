/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins, sans-serif'],
        noto: ['Noto Sans JP, sans-serif'],
      },
      colors: {
        gray: {
          900: '#333333',
          500: '#828282',
          200: '#f2f2f2',
        },
        blue: {
          500: '#2962FF',
        },
        red: {
          500: '#D32F2F',
        },
      },
    },
  },
  plugins: [],
};
