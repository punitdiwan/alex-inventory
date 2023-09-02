/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./public/**/*.html",
   
    
  ],
  theme: {
    extend: {
      screens: {
        'ms': {'min':'150px','max':'639px'},
      },
    },
  },
  plugins: [
 
    require("daisyui"),
    require("flowbite/plugin"),
    require('tailwind-scrollbar-hide')
    
    

  ],


  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}

