/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5869EA',
        gray: {
          100: '#2A3143',
          75: '#31394D',
          50: '#3A4259',
          25: '#46516D',
        },
      },
    },
  },
  plugins: [],
};
