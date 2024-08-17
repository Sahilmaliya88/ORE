/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custum1:"rgba(10, 6, 4, 0.812)"
      }
    },
  },
  plugins: [],
}

