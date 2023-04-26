/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      sans: ['"Times"', 'serif']
    },
		extend: {
			boxShadow: {
				px: '0 0 0 1px rgba(0, 0, 0, 0.03)',
			},
			colors: {
				gray: {
					darkest: '#3a3a3a',
					darker: '#474747',
					dark: '#505050',
					DEFAULT: '#565656',
					light: '#d5d5d5'
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
				'1.5xl': '1280px'
			},
			fontFamily: {
				bodoni: ['Bodoni Moda', 'serif'],
				garamond: ['Cormorant Garamond', 'serif'],
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
