/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'my-img':"URL(/img/bg-img.jpg)"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

