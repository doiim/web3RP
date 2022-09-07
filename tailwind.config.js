module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    colors: {
      'black': '#000',
      'dark-green': '#00ffa2',
      'outline': '#483C5C',
      'darker-blue': '#1F1B2B',
      'dark-blue': '#2C263D',
      'blue': '#7AA5C5',
      'light-blue': '#A1C3DB',
      'purple': '#635B8B',
      'green': '#3F7482',
      'light-green': '#8BFFD5',
      'red': '#9A5553',
      'orange': '#C39E6B',
      'yellow': '#D5CBA6',
      'white': '#FEFEFE',
    },
    spacing: {
      '1': '8px',
      '2': '16px',
      '3': '32px',
      '4': '48px',
      '5': '52px',
      '6': '64px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '1rem',
      'base': '1.5rem',
      'lg': '2rem',
      'xl': '2.5rem',
      '2xl': '3.5rem',
      '3xl': '4.5rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'sans': ['Jura'],
      'header': ['Jura']
    },
    extend: {},
  },
  plugins: [],
}