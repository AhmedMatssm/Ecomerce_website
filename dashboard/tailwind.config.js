/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow:{
      'ShadowSide': '4px 0px 8px gray',
      'ShadowNav': '10px 2px 8px gray',
    },
  },
  plugins: [],
}
