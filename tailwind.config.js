/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (CSS variables defined in globals.css)
        bg0: "rgb(var(--bg0) / <alpha-value>)",
        bg1: "rgb(var(--bg1) / <alpha-value>)",
        surf: "rgb(var(--surf) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        contrast: "rgb(var(--contrast) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",

        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",

        info: "rgb(var(--info) / <alpha-value>)",
        warn: "rgb(var(--warn) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--line) / 0.52), 0 18px 50px rgb(var(--shadow-rgb) / 0.24)",
        soft: "0 0 0 1px rgb(var(--line) / 0.38), 0 18px 50px rgb(var(--shadow-rgb) / 0.18)",
      },
      borderRadius: {
        xl2: "24px",
      },
      letterSpacing: {
        over: "0.28em",
      },
    },
  },
  plugins: [],
};

module.exports = config;
