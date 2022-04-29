module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //Colors scheme and names based on happyhues.co
      colors: {
        background:{
          'primary':'#0f0e17',
          'secondary':'#363252'
        },
        main:'#fffffe',
        paragraph:'#a7a9be',
        primary:'#ff8906',
        secondary: '#f25f4c',
        tertiary:'#e53170'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
