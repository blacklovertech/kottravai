/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(136, 71, 173)',
          light: 'rgb(158, 105, 188)',
          dark: 'rgb(114, 59, 145)',
        },
        accent: {
          yellow: 'rgb(241, 176, 55)',
          pink: 'rgb(233, 120, 118)',
        },
        background: {
          light: 'rgb(244, 238, 255)',
          lavender: 'rgb(238, 233, 248)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(136, 71, 173, 0.1)',
        'card': '0 6px 16px rgba(136, 71, 173, 0.08)',
      },
    },
  },
  plugins: [],
};