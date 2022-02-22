module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },

      colors: {
        darkPurple: {
          50: '#AB89E7',
          100: '#976AE5',
          200: '#7838E6',
          300: '#5908E5',
          400: '#4D00D1',
          500: '#4500BD ',
          600: '#4000AE  ',
          700: '#34008D ',
          800: '#38009A',
          900: '#1e0054',
        },
      },
    },
  },
  plugins: [],
}
