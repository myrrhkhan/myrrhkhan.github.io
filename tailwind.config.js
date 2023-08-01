/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'charcoal': '#264653',
          'persian-green': '#2a9d8f',
          'saffron': '#e9c46a',
          'sandy-brown': '#f4a261',
          'burnt-sienna': '#e76f51',
        },
      },
      fontFamily: {
        'header': 'Cuprum',
        'subheader': 'Roboto',
        'paragraph': 'Khula',
      },
      backgroundImage: {
        'headshot': "url('headshot.png')",
      },
    },
  },
  plugins: [],
}

