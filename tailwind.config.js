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
          'blue': '#2a9d8f',
          'yellow': '#e9c46a',
          'orange': '#f4a261',
          'red': '#e76f51',
        },
        'primary1': {
          'gray': '#4a6668',
          'mauve': '#684A66',
          'olive': '#66684A'
        }
      }
    },
  },
  plugins: [],
}

