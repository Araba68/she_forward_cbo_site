/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1c2120',
        light: '#fffffe',
        gold: '#FFD700',
      },
      fontFamily: {
        heading: ['"League Spartan"', 'sans-serif'],
        body: ['"Glacial Indifference"', 'sans-serif'],
      },
       backgroundImage: {
          'nav-gradient': 'linear-gradient(to right, #1C2120, #FFD700)',
    },
  },
  plugins: [],
},
}
