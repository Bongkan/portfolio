/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      space: ["Orbitron"],
      spacemono: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
