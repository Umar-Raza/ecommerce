const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'dark': '#433878',
      'primary': '#7E60BF',
      'light': '#FFE1FF',


    },
    extend: {},
  },
  plugins: [],
});
