module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web'],
        roboto: ['Roboto Slab'],
        logo: ["Lilita One"]
      },
      screens: {
        'xs': '405px',
        // => @media (min-width: 380px) { ... }

        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}