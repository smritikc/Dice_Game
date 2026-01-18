/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← Must include your component paths
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}