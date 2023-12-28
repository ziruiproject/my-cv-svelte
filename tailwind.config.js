/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['rig-sans']
    },
    colors: {
      'primary': '#201F20',
      'white': '#FFFFFF',
      'light-gray': '#8F8F8F',
      'white-text': '#D9D9D9',
      'dark-gray': '#242324',
      'green': '#2DD293'
    },
  },
  plugins: []
};