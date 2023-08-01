/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: ["prose", "prose-sm", "m-auto"],
    },
  },
  darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {},
  },
};
