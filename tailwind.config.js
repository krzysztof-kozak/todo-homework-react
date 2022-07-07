/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        ram: 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
};
