module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}