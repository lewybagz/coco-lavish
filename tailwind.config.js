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
          "3.5rem", // Mobile size
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
          {
            md: "5.5rem", // Desktop size
          },
        ],
        "display-2": [
          "3rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
          {
            md: "4.5rem",
          },
        ],
        "heading-1": [
          "2.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
          {
            md: "3.75rem",
          },
        ],
        "heading-2": [
          "2rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
          {
            md: "2.75rem",
          },
        ],
        "heading-3": [
          "1.75rem",
          { lineHeight: "1.2" },
          {
            md: "2.25rem",
          },
        ],
        "heading-4": [
          "1.5rem",
          { lineHeight: "1.2" },
          {
            md: "1.875rem",
          },
        ],
        "body-lg": [
          "1.125rem",
          { lineHeight: "1.6" },
          {
            md: "1.375rem",
          },
        ],
        body: [
          "1rem",
          { lineHeight: "1.6" },
          {
            md: "1.125rem",
          },
        ],
        "body-sm": [
          "0.875rem",
          { lineHeight: "1.5" },
          {
            md: "1rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
