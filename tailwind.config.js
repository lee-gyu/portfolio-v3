/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: [
    "components/**/*.{ts,tsx,css,scss}",
    "app/**/*.{ts,tsx,css,scss}",
    "styles/**/*.scss",
  ],
  theme: {
    extend: {

    }
  },
  plugins: [
    require("daisyui")
  ]
};

module.exports = tailwindConfig;
