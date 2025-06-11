module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/locales/*.json"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0084ff" // أزرق ماسنجر
      }
    },
  },
  plugins: [],
};