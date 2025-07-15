// tailwind.config.js
module.exports = {
  content: [
    "./views/**/*.ejs", // required for EJS
    "./public/**/*.html", // if using raw HTML
    "./src/**/*.{js,ts,jsx,tsx}", // if using JS/TS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
