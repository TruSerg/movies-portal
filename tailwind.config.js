/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mantine-color-scheme="dark"]'],
  theme: {
    screens: {
      "2xl": { max: "1320px" },
      xl: { max: "1080px" },
      lg: { max: "768px" },
      md: { max: "640px" },
      sm: { max: "480px" },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        vt323: ["VT323", "sans-serif"],
      },
    },
  },
  plugins: [],
};
