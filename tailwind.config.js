/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        ram: 'repeat(auto-fit, minmax(0, 350px));',
      },

      animation: {
        'slide-from-top': 'slide-from-top 0.6s ease-in-out forwards',
        'toast-from-top': 'toast-from-top 3s ease-in-out forwards',
      },

      keyframes: {
        'slide-from-top': {
          '100%': { transform: 'translateY(0px)', opacity: 1 },
        },
        'toast-from-top': {
          '25%': { transform: 'translateY(0px)', opacity: 1 },
          '55%': { transform: 'translateY(0px)', opacity: 1 },
          '100%': { transform: 'translateY(100px)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
