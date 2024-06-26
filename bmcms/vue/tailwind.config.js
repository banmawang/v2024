const { default: plugin } = require('tailwindcss')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        page: '1450px',
      },
      colors: {
        'bm-blue': '#62569F',
      },
      fontFamily: {
        pfscr: 'PingFangSC-Regular',
      },
      screens: {},
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        '.el-button': {
          'background-color': 'var(--el-button-bg-color,val(--el-color-white))',
        },
      })
    },
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['responsive', 'hover'],
  },
}
