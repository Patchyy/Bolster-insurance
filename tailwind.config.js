/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'blue-dark': '#02004E',
      blue: '#486AE9',
      bluehover: '#1b45e3',
      pink: '#FF6587',
      pinkhover: '#ff325f',
      green: '#00C88B',
      white: '#FFFFFF',
      black: '#000000',
      'white-off': '#F9F7F3',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      spoof: ['Spoof', 'sans-serif'],
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("assets/checkmark.svg")',
      },
    },
  },
  plugins: [],
};
