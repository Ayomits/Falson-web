/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      background: "#232323",
      components: "#4F4F4F",
      "components-hover": "#3D3D3D",
      text: "#E0E0E0",
      general: "#353535",
      accent: "#FF6347",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      dmsans: ["DM sans", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      mplus: ["M PLUS Rounded 1c", "sans-serif"],
    },
    screens: {
      'sm': {'max': '768px'},
      'md': {'min': '1024px'},
      'lg': {'min': '1280px'},
      'xl': {'min': '1536px'},

    },
  },
  plugins: [],
};
