/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-yellow": "var(--brand-yellow)",
        "brand-white": "var(--brand-white)",
        "brand-grey": "var(--brand-grey)",
        "brand-black": "var(--brand-black)",
      },
    },
  },
  plugins: [],
};
