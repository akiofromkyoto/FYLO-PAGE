/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '375px',
      'desktop': '1260px',
        },
  },
  plugins: [],
}

