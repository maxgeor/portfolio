/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      serif: ['Times', 'serif'],
			sans: ['untitled', 'Ariel', 'Helvetica', 'sans']
    },
		extend: {
			boxShadow: {
				px: '0 0 0 1px rgba(0, 0, 0, 0.03)',
			},
			// fontSize: {
			// 	sm: ['11px', '1rem'],
			// 	sm: ['13px', '1rem'],
			// 	base: ['16px', '1.25rem'],
			// 	md: ['19px', '1.5rem'],
			// 	lg: ['23px', '1.75rem'],
			// 	xl: ['28px', '2rem'],
			// 	'2xl': ['28px', '2rem'],
			// },
			colors: {
				gray: {
					darkest: '#070707',
					darker: '#1D1D1D',
					dark: '#282828',
					DEFAULT: '#2e2e2e',
					light: '#B6B6B6'
				},
				twilight: {
					darkest: '#3A3A41',
					darker: '#47474E',
					dark: '#505055',
					DEFAULT: '#56565b',
					light: '#d5d5dc'
				},
				red: '#FF2C2C',
				blue: '#4A6AFD',
				yellow: '#EAEA00',
			},
			screens: {
				xs: '375px',
				525: '525px',
				mdlg: '884px',
				'1.5xl': '1280px',
				'2.5xl': '1360px',
			},
			fontFamily: {
				bodoni: ['Bodoni Moda', 'serif'],
			},
			maxWidth: {
				'8xl': '96rem',
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
