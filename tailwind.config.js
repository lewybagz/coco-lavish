/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coco: {
          100: "#fff3e6",
          200: "#ffd9b3",
          300: "#ffb366",
          400: "#ff8c1a",
          500: "#ff6600",
        },
        nature: {
          100: "#f0f7e6",
          200: "#d6ecc0",
          300: "#a8d975",
          400: "#7ab940",
          500: "#558b2f",
        },
        earth: {
          50: "#fafaf7", // Added this lighter shade
          100: "#f5f5f0",
          200: "#e6e6dc",
          300: "#ccc5b9",
          400: "#999485",
          500: "#666055",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "display-1": [
          "5.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ], // Increased from 4.5rem
        "display-2": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ], // Increased from 3.75rem
        "heading-1": [
          "3.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ], // Increased from 3rem
        "heading-2": [
          "2.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ], // Increased from 2.25rem
        "heading-3": ["2.25rem", { lineHeight: "1.2" }], // Increased from 1.875rem
        "heading-4": ["1.875rem", { lineHeight: "1.2" }], // Increased from 1.5rem
        "body-lg": ["1.375rem", { lineHeight: "1.6" }], // Increased from 1.125rem
        body: ["1.125rem", { lineHeight: "1.6" }], // Increased from 1rem
        "body-sm": ["1rem", { lineHeight: "1.5" }], // Increased from 0.875rem
      },
    },
  },
  plugins: [],
};
