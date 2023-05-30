const screenValue = {
  // [breakpoint, max-width]
  mobile: [480, 600],
  tablet: [600, 900],
  desktop: [1200, 1200],
};

const screens = Object.fromEntries( Object.entries(screenValue).map( ([key, value]) => [key, `${value[0]}px`] ) );
const screenWidth = Object.fromEntries( Object.entries(screenValue).map( ([key, value]) => [key, `${value[1]}px`] ) );

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: [
    "components/**/*.{ts,tsx,css,scss}",
    "app/**/*.{ts,tsx,css,scss}",
    "styles/**/*.scss",
  ],
  darkMode: "class",
  theme: {
    screens,
    extend: {
      width: {
        ...screenWidth
      },
      maxWidth: {
        ...screenWidth
      },
      height: { }
    }
  },
  plugins: [
    require("daisyui")
  ]
};

module.exports = tailwindConfig;
