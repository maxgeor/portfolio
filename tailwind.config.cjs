/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['untitled', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			mono: ["Berkeley Mono", 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
    },
		extend: {
			boxShadow: {
				float: 'rgba(0, 0, 0, 0.17) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0 -.5px 0;',
			},
			colors: {
				gray: {
					darkest: '#030303',
					darker: '#181818',
					dark: '#282828',
					DEFAULT: '#2e2e2e',
					light: '#BFBFBF'
				},
				twilight: {
					darkest: '#3A3A41',
					darker: '#47474E',
					dark: '#505055',
					DEFAULT: '#56565b',
					light: '#d5d5dc'
				}
			},
			screens: {
				xs: '450px',
				525: '525px',
				mdlg: '884px',
				'1.5xl': '1240px',
				'2.5xl': '1360px',
			},
			fontFamily: {
				bodoni: ['Bodoni Moda', 'serif'],
			},
			maxWidth: {
				'6.5xl': '1200px',
				'8xl': '1300px',
				'9xl': '1600px'
			},
			letterSpacing: {
				tightish: '-0.016em',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
