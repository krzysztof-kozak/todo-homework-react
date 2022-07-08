/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        ram: 'repeat(auto-fill, minmax(250px, 1fr))',
      },

      animation: {
        'slide-from-top': 'slide-from-top 0.6s ease-in-out forwards',
      },

      keyframes: {
        'slide-from-top': {
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
