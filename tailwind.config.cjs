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
				gray: {
					200: '#E8EBEF',
					300: '#b8bec3',
					400: '#868B90',
					500: '#6F7786',
					700: '*2c2f33',
					800: '*212427',
				},
			},
			screens: {
				xs: '450px',
        'betterhover': {'raw': '(hover: hover)'},
			},
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
