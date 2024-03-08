/** @type {import('tailwindcss').Config} */
export default {

  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-dark': '0 3px 20px rgba(161, 122, 105, 0.6)'
      },
      colors: {
        primary: '#111',
        secondary:'#7843e9',
        tertiary:'#555',
        light: '#333',
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        bodyback: '#0c1022', 
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

