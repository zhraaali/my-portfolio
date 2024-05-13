/** @type {import('tailwindcss').Config} */
export default {
 
  content: [  
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.{js,jsx,txt}"],
  
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        "amber":"#fbbf24"

      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      }

    },
  },


  plugins: [
      
        
    require('flowbite/plugin')
  ],
}

