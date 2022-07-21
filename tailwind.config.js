/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // important: true,
  theme: {
    extend: {
      borderRadius: {
        'lg': '20px',
        'md': '10px',
        'sm': '5px',
      },
      colors: {
        'text': '#1D1D1D',
        'text-light': '#8C8C8C',
        'pink': '#FF868E',
        'pink-light': '#FBE0DC',
        'green': '#97EAB9',
        'yellow': '#FFD280',
        'background': '#F8F8F7',
      },
    }
  },
  plugins: [],
}
