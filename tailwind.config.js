/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'text-glow': 'glow 5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { color: '#9333ea' },   // purple-700
          '25%': { color: '#db2777' },        // pink-600
          '50%': { color: '#2563eb' },        // blue-600
          '75%': { color: '#ca8a04' },        // yellow-600
        },
      },
    },
  },
  plugins: [],
};
