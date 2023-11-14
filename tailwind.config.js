/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        taskButton: "0 4px 5px 0 rgba(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
