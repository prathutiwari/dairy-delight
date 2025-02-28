/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    // colors: {
    //   'primary': '#43AC5'
    // },
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: '1rem', // Adds default padding
      },
    },
  },
  plugins: [],
}

