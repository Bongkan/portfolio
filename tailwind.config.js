/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#030712",
          card: "rgba(15, 23, 42, 0.65)",
          border: "rgba(16, 185, 129, 0.25)",
          emerald: "#10b981",
          neon: "#00f076",
          cyan: "#06b6d4",
          violet: "#8b5cf6",
        },
      },
      boxShadow: {
        "neon-green": "0 0 15px rgba(0, 240, 118, 0.35)",
        "neon-emerald": "0 0 25px rgba(16, 185, 129, 0.4)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
    },
    fontFamily: {
      space: ["Orbitron", "sans-serif"],
      grotesk: ["Space Grotesk", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};

