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
      fontSize: {
        small: '1.25rem',
        base: '1.5rem',
        large: '1.75rem',
        xl: '2rem',
        '2xl': '2.2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        '5xl': '5rem',
        '6xl': '6rem'
      },
      backgroundImage: {
        'headshot': "url('headshot.png')",
      },
    },
  },
  plugins: [],
}

