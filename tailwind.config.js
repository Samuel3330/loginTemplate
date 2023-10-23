/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./public/edificios.jpg')",
        hero2: "url('./public/edificios2.jpg')",
      },
      fontFamily: {
        body: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
