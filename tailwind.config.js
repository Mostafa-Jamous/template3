/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#2196f3",
        altColor: "#1787e0",
        bgColor: "#ececec",
      },
      fontFamily: {
        sans: ["Cairo"],
        serif: [],
        mono: [],
      },
    },
  },
  plugins: [],
};
