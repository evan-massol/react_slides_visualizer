/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "96": "90%"
      },
      maxHeight: {
        "96": "80%"
      }
    },
  },
  plugins: [],
}