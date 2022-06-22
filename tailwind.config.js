const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./views/*.{hbs,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Red Hat Display', defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
