module.exports = {
  important: true,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        yellow: '#feda6a',
        'grey-matte': '#393f4d',
        'silver-fox': '#d4d4dc',
        'dark-slate': '#1d1e22'
      },
      margin: {
        '96': '24rem',
        '128': '32rem'
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
}
