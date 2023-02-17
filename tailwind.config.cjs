/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/components/*.{html,js}",
    "./src/pages/*.{html,js}",
    "./src/pages/admin/*.{html,js}",
    "./src/pages/admin/project/*.{html,js}",
    "./src/pages/admin/skill/*.{html,js}",
  ],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [],
}