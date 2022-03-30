module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      
     
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', "sans-serif"]
      },
      screens: {
        xs:"400px",
        sm:"639px",
        md:"766px",
        lg:"1023px",
        xl:"1270px",
        '2xl':"1532px"
        

    },
  },
  
  plugins: [],
}
}

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         'lg': '992px',
//         // => @media (min-width: 992px) { ... }
//       },
//     },
//   },
// }