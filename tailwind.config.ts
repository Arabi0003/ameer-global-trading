import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050d1a",
          900: "#0a1628",
          800: "#111d35",
          700: "#162544",
          600: "#1e3a5f",
        },
        royal: {
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
        },
        gold: {
          300: "#e8c874",
          400: "#d4af37",
          500: "#c9a227",
          600: "#a8871e",
        },
        champagne: "#f5e6c8",
        ivory: "#fdfbf5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Calibri", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
