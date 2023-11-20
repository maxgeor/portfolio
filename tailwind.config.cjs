/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['untitled', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      serif: ['Georgia', 'Times New Roman', 'Times', 'Cambria', 'serif'],
      mono: ['Berkeley Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    extend: {
      content: {
        'path-1': 'url("/path-1.svg")',
        'path-2': 'url("/path-2.svg")',
        'path-3': 'url("/path-3.svg")',
      },
      colors: {
        red: '#FF3D33',
        green: '#0E9900',
        yellow: '#ffff00',
        neutral: {
          // 50: '#FAFAFA',
          50: '#FFFFFF',
          100: '#F5F5F5',
          190: '#f1f1f1',
          200: '#e0e0e0',
          250: '#C5C5C5',
          300: '#B4B4B4',
          400: '#909090',
          490: '#7D7D7D',
          500: '#767676',
          700: '#3c3c3c',
          710: '#2d2d2d',
          800: '#212121',
          950: '#060606'
        }
      },
      screens: {
        xxs: '380px',
        xs: '450px',
        '3xl': '2000px'
      },
      boxShadow: {
        outline: '0 0 0 1px rgba(0, 0, 0, 0.12)',
        'outline-dark': '0 0 0 1px rgba(255, 255, 255, 0.18)',
        contour: 'inset 0px 0px 0px rgba(255,255,255,0.5)'
      },
      dropShadow: {
        sm: [
          '-1px 0 0 rgb(0 0 0 / 0.025)',
          '1px 0 0 rgb(0 0 0 / 0.025)',
          '0 1px 0 rgb(0 0 0 / 0.05)'
        ],
        'sm-dark': [
          '-1px 0 0 rgb(0 0 0 / 0.6)',
          '1px 0 0 rgb(0 0 0 / 0.6)',
          '0 1px 0 rgb(0 0 0 / 1)'
        ]
      }
    }
  },
  variants: {
    borderColor: ['group-hover', 'group-focus'],
    scale: ['group-hover', 'group-focus'],
    shadow: ['group-hover']
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
