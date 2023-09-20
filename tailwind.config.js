/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'system-ui', '-apple-system', 'sans-serif'],
        bree: ['Bree Serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        color1: '#D1411E',
        color2: '#52190B',
        color3: '#FD9D3E',
        color4: '#303030',
      },
    },
  },
  plugins: [],
}
