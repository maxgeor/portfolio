/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      serif: ['Times', 'serif'],
			sans: ['untitled', 'Ariel', 'Helvetica', 'sans'],
			ornament: ["ornament"],
    },
		extend: {
			boxShadow: {
				px: '0 0 0 1px rgba(0, 0, 0, 0.03)',
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
				xs: '375px',
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
