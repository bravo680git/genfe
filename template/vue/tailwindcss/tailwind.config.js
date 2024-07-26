/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#F2F2F2',
        accent: '#FFA500',
      },
    },
  },
  plugins: [],
};
