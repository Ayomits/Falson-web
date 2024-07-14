/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      "background": "#232323",
      "components": "#4F4F4F",
      "components-hover": "#3D3D3D",
      "text": "#E0E0E0",
      "general": "#353535",
      "accent": "#FF6347"
    }
  },
  plugins: [],
  
}