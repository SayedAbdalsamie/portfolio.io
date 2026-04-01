/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
        cosmic: {
          deep: "#050814",
          mid: "#0c1528",
          glow: "#38bdf8",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(100, 255, 218, 0.15)",
        "glow-lg": "0 0 60px rgba(56, 189, 248, 0.2)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 