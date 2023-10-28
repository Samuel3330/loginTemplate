/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../edificios.jpg')",
        hero2: "url('../edificios2.jpg')",
      },
      fontFamily: {
        body: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
