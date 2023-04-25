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
					dark: '#434343',
					DEFAULT: '#888',
					light: '#D5D5D5'
				},
				red: '#FF2C2C',
				blue: '#4A6AFD',
				yellow: '#EAEA00',
			},
			screens: {
				xs: '375px',
				525: '525px',
				mdlg: '884px'
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
	plugins: [],
}
