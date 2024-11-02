const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        raleway: ["Raleway", "serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
