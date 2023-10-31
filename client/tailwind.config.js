/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF4E50',
        'custom-yellow':'#F9D423',
        'custom-orange-vsignup':'#FF4E50',
        'custom-yellow-vsignup':'#F9D423',
        'custom-blue-asignup':'#00BCA5',
        'custom-yellow-asignup' :'#FFFA83',
        "variable-collection-GRRN": "var(--variable-collection-GRRN)",
        "variable-collection-navbar": "var(--variable-collection-navbar)",
        "variable-collection-sidebar-text": "var(--variable-collection-sidebar-text)",
        "custom-white-transparent":'#ffffff66'
        


        
      },
      backgroundColor: {
        'admin-bg': 'linear-gradient(to right, #00BCA5, #FFFA83)',
        'blue-green': 'linear-gradient(to right, #6AFF35, #00FFE8)',
        'AdminNav-white': '#F3F3F3',
        'custom-orange-bg':'#FF534E'
      },
      fontFamily: {
        'noto-sans-jp': ['Noto Sans JP', 'sans'],
        'Lalezar-Regular,Helvetica':['Lalezar-Regular','Helvetica'],
      },
      width: {
        '25': '25px',
        '50': '50px',
        '75': '75px',
        '31rem': '31rem',
        '36rem': '36rem',
      },
      borderColor: {
        'custom-orange-border': '#FF534E', // Replace with your desired color code
      },
    },
  },
  plugins: [
   
  ],
}

