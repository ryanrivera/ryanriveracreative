module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
  theme: {
    fontFamily: {
      sans: ['"DM Sans", sans-serif'],
      serif: ['"Playfair Display", serif'],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
