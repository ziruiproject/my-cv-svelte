/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['rig-sans']
    },
    colors: {
      'primary': '#232323',
      'white': '#ededec',
      'light-gray': '#707070',
      'white-text': '#D9D9D9',
      'dark-gray': '#282828',
      'green': '#2DD293'
    },
  },
  plugins: []
};