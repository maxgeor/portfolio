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
				gray: {
					50: '#FBFCFC',
					100: '#F5F7FA',
					150: '#ECECEF',
					200: '#E8EBEF',
					300: '#b8bec3',
					400: '#909499',
					500: '#6F7786',
					700: '#3A3E47',
					800: '#2A2E37',
					950: '#030712',
				},
				neutral: {
					350: '#B4B4B4',
					500: '#888888',
					600: '#777777',
					675: '#3b3b3b',
					700: '#333333',
					800: '#212121',
				}
			},
			screens: {
				xxs: '380px',
				xs: '450px',
			},
			boxShadow: {
				DEFAULT: '0px 1px 1px -1px rgba(0,0,0,.09), 0px 2px 2px -1px rgba(0,0,0,.09), 0px 0px 0px 1px rgba(0,0,0,.08)',
				dark: '0px 0px 0px 0.5px rgba(0,0,0,.4), 0px 1px 1px -1px rgba(0,0,0,.12), 0px 2px 2px -1px rgba(0,0,0,.12), inset 0px 0.5px 0px hsla(0,0%,100%,.06), inset 0px 0px 1px 0px hsla(0,0%,100%,.16), inset 0px -6px 12px -4px rgba(0,0,0,.16)'
			},
			dropShadow: {
				sm: '0 1px 0 rgb(0 0 0 / 0.05)',
				'sm-dark': '0 1px 0 rgb(0 0 0 / 1)',
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
