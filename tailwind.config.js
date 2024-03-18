/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#AD1FEA',
        'main-blue-deep': '#4661E6',
        'main-black': 'rgb(55, 63, 104)',
        'main-white': '#FFFFFF',
        'main-gray-deep': '#F2F4FF',
        'main-gray-light': '#F7F8FD',
        'main-black-2': '#3A4374',
        'main-gray-deeper': '#647196',
        'main-orange': '#F49F85',
        'main-light-blue': '#62BCFA',
        'main-hover': '#C75AF6'
      },

      fontFamily:{
        'jost': ['Jost','sans-serif']
      },

      fontSize: {
        'h1': '24px',
        'h2': '20px',
        'h3': '18px',
        'h4': '14px',
        'body-1': '16px',
        'body-2': '15px',
        'body-3': '13px',
      },

      lineHeight: {
        'h1': '35px',
        'h2': '29px',
        'h3': '26px',
        'h4': '20px',
        'body-1': '23px',
        'body-2': '22px',
        'body-3': '19px',
      },

      letterSpacing: {
        'space-h1': '-0.33px',
        'space-h2': '-0.25px',
        'space-h3': '-0.25px',
        'space-h4': '-0.2px',
      },
      spacing: {
        '128': '1110px',
        '120': '830px',
        '30':  '12rem',
        '350': '350px',
      },

      container: {
        center: true,
      },


  },
  plugins: [],
}

}