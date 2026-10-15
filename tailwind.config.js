/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1E24",
        deep: "#111418",
        copper: "#D4A373",
        alabaster: "#F8F9FA",
        sage: "#A3B18A",
        ink: "#18212B",
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
