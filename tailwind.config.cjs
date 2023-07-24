/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['untitled', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			serif: ["Times New Roman", 'Times', 'Georgia', 'Cambria', 'serif'],
			mono: ["Berkeley Mono", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
		extend: {
			colors: {
				green: '#00A200',
				yellow: '#fdfd41',
				neutral: {
					100: '#F5F5F5',
					190: '#EEEEEE',
					200: '#E2E2E2',
					300: '#B4B4B4',
					400: '#909090',
					490: '#888888',
					500: '#767676',
					700: '#434343',
					710: '#313131',
					800: '#212121',
					950: '#030303',
				}
			},
			screens: {
				xxs: '380px',
				xs: '450px',
			},
			boxShadow: {
				sm: '0px 1px 1px -1px rgba(0,0,0,.045), 0px 2px 2px -1px rgba(0,0,0,.045), 0px 0px 0px 1px rgba(0,0,0,.068)',
				DEFAULT: '0px 1px 1px -1px rgba(0,0,0,.09), 0px 2px 2px -1px rgba(0,0,0,.09), 0px 0px 0px 1px rgba(0,0,0,.081)',
				dark: '0px 0px 0px 0.5px rgba(0,0,0,.4), 0px 1px 1px -1px rgba(0,0,0,.12), 0px 2px 2px -1px rgba(0,0,0,.12), inset 0px 0.5px 0px hsla(0,0%,100%,.06), inset 0px 0px 1px 0px hsla(0,0%,100%,.16), inset 0px -6px 12px -4px rgba(0,0,0,.16)',
				contour: 'inset 0px 0px 0px rgba(255,255,255,0.5)',
			},
			dropShadow: {
				sm: [
					'-1px 0 0 rgb(0 0 0 / 0.022)',
					'1px 0 0 rgb(0 0 0 / 0.022)',
					'0 1px 0 rgb(0 0 0 / 0.05)', 
				],
				'sm-dark': [
					'-1px 0 0 rgb(0 0 0 / 0.6)',
					'1px 0 0 rgb(0 0 0 / 0.6)',
					'0 1px 0 rgb(0 0 0 / 1)', 
				],
			}
		},
	},
	variants: {
		borderColor: ['group-hover', 'group-focus'],
		scale: ['group-hover', 'group-focus'],
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
