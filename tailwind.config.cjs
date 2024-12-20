/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  darkMode: 'selector',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Arial', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      serif: ['Times New Roman', 'Times', 'Georgia', 'Cambria', 'serif'],
      mono: ['Berkeley Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {
      gap: {
        0: '0',
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        25: '25px',
        30: '30px',
      },
      margin: {
        0: '0',
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        25: '25px',
        30: '30px',
      },
      padding: {
        0: '0',
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        25: '25px',
        30: '30px',
      },
      leading: {
        0: '0',
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px',
        25: '25px',
        30: '30px',
      },
      fontSize: {
        DEFAULT: ['16px', '24px'],
        12: ['12px', '15px'],
        20: ['19px', '20px'],
        24: ['24px', '25px'],
        30: ['27px', '30px'],
      },
      colors: {
        gray: {
          150: "#E6E9ED",
          // 200: "#DBDEE6",
        },
        green: '#23FF27',
        pink: '#eb47ca',
        neutral: {
          50: '#fcfcfc',
          100: '#F5F5F5',
          150: '#f0f0f0',
          200: '#ececec',
          250: '#E6E6E6',
          300: '#ccc',
          400: '#B3B3B3',
          490: '#7D7D7D',
          500: '#8B8B8B',
          700: '#4B4B4B',
          750: '#363636',
          800: '#212121',
          900: '#181818',
          950: '#060606'
        }
      },
      screens: {
        xs: '425px',
        sm: '500px',
        smmd: '600px',
        lg: '1024px',
        '2xl': '1600px',
        '3xl': '1900px',
      },
      maxWidth: {
        '2xl': '1480px',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
      },
      boxShadow: {
        'sub-pixel-black': 'inset 0 0.5px 0 0 rgba(0, 0, 0, 1)',
        'sub-pixel-white': 'inset 0 0.5px 0 0 rgba(255, 255, 255, 1)',
      },
      listStyleType: {
        none: 'none',
        custom: 'none',
      },
    }
  },
  variants: {
    borderColor: ['group-hover', 'group-focus'],
    scale: ['group-hover', 'group-focus'],
    shadow: ['group-hover']
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities, theme }) {
      const newUtilities = {
        'small-caps': {
          'font-variant': 'small-caps'
        },
        '.custom-ol': {
          counterReset: 'item',
        },
        '.custom-ol li': {
          display: 'block',
          position: 'relative',
        },
        '.custom-ol li::before': {
          content: 'counter(item)',
          counterIncrement: 'item',
          position: 'absolute',
        },
        '@media (max-width: 1023px)': {
          '.custom-ol li': {
            paddingLeft: '0.75em',
          },
          '.custom-ol li::before': {
            left: '0',
            top: '0',
          },
        },
        '@media (min-width: 1024px)': {
          '.custom-ol': {
            paddingLeft: '0',
          },
          '.custom-ol li': {
            paddingLeft: '0',
          },
          '.custom-ol li::before': {
            left: '-1.25em',
            top: '0',
            'text-align': 'right',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
  safelist: [
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
    "col-span-13",
    "col-span-14",
    "col-span-15",
    "col-span-16",
    "col-span-17",
    "col-span-18",
    "col-span-19",
    "col-span-20",
    "col-span-21",
    "col-span-22",
    "col-span-23",
    "col-span-24",
    "sm:col-span-1",
    "sm:col-span-2",
    "sm:col-span-3",
    "sm:col-span-4",
    "sm:col-span-5",
    "sm:col-span-6",
    "sm:col-span-7",
    "sm:col-span-8",
    "sm:col-span-9",
    "sm:col-span-10",
    "sm:col-span-11",
    "sm:col-span-12",
    "sm:col-span-13",
    "sm:col-span-14",
    "sm:col-span-15",
    "sm:col-span-16",
    "sm:col-span-17",
    "sm:col-span-18",
    "sm:col-span-19",
    "sm:col-span-20",
    "sm:col-span-21",
    "sm:col-span-22",
    "sm:col-span-23",
    "sm:col-span-24",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-3",
    "md:col-span-4",
    "md:col-span-5",
    "md:col-span-6",
    "md:col-span-7",
    "md:col-span-8",
    "md:col-span-9",
    "md:col-span-10",
    "md:col-span-11",
    "md:col-span-12",
    "md:col-span-13",
    "md:col-span-14",
    "md:col-span-15",
    "md:col-span-16",
    "md:col-span-17",
    "md:col-span-18",
    "md:col-span-19",
    "md:col-span-20",
    "md:col-span-21",
    "md:col-span-22",
    "md:col-span-23",
    "md:col-span-24",
    "lg:col-span-1",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-4",
    "lg:col-span-5",
    "lg:col-span-6",
    "lg:col-span-7",
    "lg:col-span-8",
    "lg:col-span-9",
    "lg:col-span-10",
    "lg:col-span-11",
    "lg:col-span-12",
    "lg:col-span-13",
    "lg:col-span-14",
    "lg:col-span-15",
    "lg:col-span-16",
    "lg:col-span-17",
    "lg:col-span-18",
    "lg:col-span-19",
    "lg:col-span-20",
    "lg:col-span-21",
    "lg:col-span-22",
    "lg:col-span-23",
    "lg:col-span-24",
    "xl:col-span-1",
    "xl:col-span-2",
    "xl:col-span-3",
    "xl:col-span-4",
    "xl:col-span-5",
    "xl:col-span-6",
    "xl:col-span-7",
    "xl:col-span-8",
    "xl:col-span-9",
    "xl:col-span-10",
    "xl:col-span-11",
    "xl:col-span-12",
    "xl:col-span-13",
    "xl:col-span-14",
    "xl:col-span-15",
    "xl:col-span-16",
    "xl:col-span-17",
    "xl:col-span-18",
    "xl:col-span-19",
    "xl:col-span-20",
    "xl:col-span-21",
    "xl:col-span-22",
    "xl:col-span-23",
    "xl:col-span-24",
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
    "col-start-8",
    "col-start-9",
    "col-start-10",
    "col-start-11",
    "col-start-12",
    "col-start-13",
    "col-start-14",
    "col-start-15",
    "col-start-16",
    "col-start-17",
    "col-start-18",
    "col-start-19",
    "col-start-20",
    "col-start-21",
    "col-start-22",
    "col-start-23",
    "col-start-24",
    "sm:col-start-1",
    "sm:col-start-2",
    "sm:col-start-3",
    "sm:col-start-4",
    "sm:col-start-5",
    "sm:col-start-6",
    "sm:col-start-7",
    "sm:col-start-8",
    "sm:col-start-9",
    "sm:col-start-10",
    "sm:col-start-11",
    "sm:col-start-12",
    "sm:col-start-13",
    "sm:col-start-14",
    "sm:col-start-15",
    "sm:col-start-16",
    "sm:col-start-17",
    "sm:col-start-18",
    "sm:col-start-19",
    "sm:col-start-20",
    "sm:col-start-21",
    "sm:col-start-22",
    "sm:col-start-23",
    "sm:col-start-24",
    "md:col-start-1",
    "md:col-start-2",
    "md:col-start-3",
    "md:col-start-4",
    "md:col-start-5",
    "md:col-start-6",
    "md:col-start-7",
    "md:col-start-8",
    "md:col-start-9",
    "md:col-start-10",
    "md:col-start-11",
    "md:col-start-12",
    "md:col-start-13",
    "md:col-start-14",
    "md:col-start-15",
    "md:col-start-16",
    "md:col-start-17",
    "md:col-start-18",
    "md:col-start-19",
    "md:col-start-20",
    "md:col-start-21",
    "md:col-start-22",
    "md:col-start-23",
    "md:col-start-24",
    "lg:col-start-1",
    "lg:col-start-2",
    "lg:col-start-3",
    "lg:col-start-4",
    "lg:col-start-5",
    "lg:col-start-6",
    "lg:col-start-7",
    "lg:col-start-8",
    "lg:col-start-9",
    "lg:col-start-10",
    "lg:col-start-11",
    "lg:col-start-12",
    "lg:col-start-13",
    "lg:col-start-14",
    "lg:col-start-15",
    "lg:col-start-16",
    "lg:col-start-17",
    "lg:col-start-18",
    "lg:col-start-19",
    "lg:col-start-20",
    "lg:col-start-21",
    "lg:col-start-22",
    "lg:col-start-23",
    "lg:col-start-24",
    "xl:col-start-1",
    "xl:col-start-2",
    "xl:col-start-3",
    "xl:col-start-4",
    "xl:col-start-5",
    "xl:col-start-6",
    "xl:col-start-7",
    "xl:col-start-8",
    "xl:col-start-9",
    "xl:col-start-10",
    "xl:col-start-11",
    "xl:col-start-12",
    "xl:col-start-13",
    "xl:col-start-14",
    "xl:col-start-15",
    "xl:col-start-16",
    "xl:col-start-17",
    "xl:col-start-18",
    "xl:col-start-19",
    "xl:col-start-20",
    "xl:col-start-21",
    "xl:col-start-22",
    "xl:col-start-23",
    "xl:col-start-24",
    "col-end-1",
    "col-end-2",
    "col-end-3",
    "col-end-4",
    "col-end-5",
    "col-end-6",
    "col-end-7",
    "col-end-8",
    "col-end-9",
    "col-end-10",
    "col-end-11",
    "col-end-12",
    "col-end-13",
    "col-end-14",
    "col-end-15",
    "col-end-16",
    "col-end-17",
    "col-end-18",
    "col-end-19",
    "col-end-20",
    "col-end-21",
    "col-end-22",
    "col-end-23",
    "col-end-24",
    "sm:col-end-1",
    "sm:col-end-2",
    "sm:col-end-3",
    "sm:col-end-4",
    "sm:col-end-5",
    "sm:col-end-6",
    "sm:col-end-7",
    "sm:col-end-8",
    "sm:col-end-9",
    "sm:col-end-10",
    "sm:col-end-11",
    "sm:col-end-12",
    "sm:col-end-13",
    "sm:col-end-14",
    "sm:col-end-15",
    "sm:col-end-16",
    "sm:col-end-17",
    "sm:col-end-18",
    "sm:col-end-19",
    "sm:col-end-20",
    "sm:col-end-21",
    "sm:col-end-22",
    "sm:col-end-23",
    "sm:col-end-24",
    "md:col-end-1",
    "md:col-end-2",
    "md:col-end-3",
    "md:col-end-4",
    "md:col-end-5",
    "md:col-end-6",
    "md:col-end-7",
    "md:col-end-8",
    "md:col-end-9",
    "md:col-end-10",
    "md:col-end-11",
    "md:col-end-12",
    "md:col-end-13",
    "md:col-end-14",
    "md:col-end-15",
    "md:col-end-16",
    "md:col-end-17",
    "md:col-end-18",
    "md:col-end-19",
    "md:col-end-20",
    "md:col-end-21",
    "md:col-end-22",
    "md:col-end-23",
    "md:col-end-24",
    "lg:col-end-1",
    "lg:col-end-2",
    "lg:col-end-3",
    "lg:col-end-4",
    "lg:col-end-5",
    "lg:col-end-6",
    "lg:col-end-7",
    "lg:col-end-8",
    "lg:col-end-9",
    "lg:col-end-10",
    "lg:col-end-11",
    "lg:col-end-12",
    "lg:col-end-13",
    "lg:col-end-14",
    "lg:col-end-15",
    "lg:col-end-16",
    "lg:col-end-17",
    "lg:col-end-18",
    "lg:col-end-19",
    "lg:col-end-20",
    "lg:col-end-21",
    "lg:col-end-22",
    "lg:col-end-23",
    "lg:col-end-24",
    "xl:col-end-1",
    "xl:col-end-2",
    "xl:col-end-3",
    "xl:col-end-4",
    "xl:col-end-5",
    "xl:col-end-6",
    "xl:col-end-7",
    "xl:col-end-8",
    "xl:col-end-9",
    "xl:col-end-10",
    "xl:col-end-11",
    "xl:col-end-12",
    "xl:col-end-13",
    "xl:col-end-14",
    "xl:col-end-15",
    "xl:col-end-16",
    "xl:col-end-17",
    "xl:col-end-18",
    "xl:col-end-19",
    "xl:col-end-20",
    "xl:col-end-21",
    "xl:col-end-22",
    "xl:col-end-23",
    "xl:col-end-24",
    "-mx-15",
    "mx-0",
    "sm:-mx-15",
    "sm:mx-0",
    "md:-mx-15",
    "md:mx-0",
    "lg:-mx-15",
    "lg:mx-0",
    "xl:-mx-15",
    "xl:mx-0",
    "px-15",
    "px-0",
    "sm:px-15",
    "sm:px-0",
    "md:px-15",
    "md:px-0",
    "lg:px-15",
    "lg:px-0",
    "xl:px-15",
    "xl:px-0",
  ],
}
