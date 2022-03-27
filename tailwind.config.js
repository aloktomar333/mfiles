module.exports = {
  content: ["./*.{html,js}"],
    
  
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      lap:'1280px',
      xl: '1440px',
      xxl: '1560px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': {
        100: '#fff',
        200: '#F2F2ED',
        300: '#DCDDD3',
        400: '#E3E5DE',
        500:'#EBEDE5'
      },
      'pink':{
        400:'#BF2F99'
      },
      'blue':{
        100:'#BFE0F4',
        300:"#0072CE",
        700:'#1C243A',
        800:'#1C233A',
        900:'#1F1F29',
      },
      'navy-blue':{
        100:'#004D9F'
      },
      'black':{
        100:'#1F1F29',
      },
      'cyan':{
        100:'#C9EFF0'
      },
      'sea':{
        100:'#52C0C9'
      },
      'aliceblue':{
        100:'#EBF3F9'
      }
    },
    maxWidth: {
      '6xl': '1395px',
      'lap-width':'1160px'
    },
 
  },
  plugins: [],
}