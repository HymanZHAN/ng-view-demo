/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
