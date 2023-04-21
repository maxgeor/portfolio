/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      sans: ['"Times"', 'serif']
    },
		extend: {
			colors: {
				gray: {
					dark: '#3f3f3f',
					DEFAULT: '#888',
					light: '#e4e4e4'
				},
				red: '#FF4275',
				blue: '#518CFE',
				yellow: '#f4f44a',
			},
			screens: {
				xs: '375px',
				525: '525px',
			},
			fontFamily: {
				ibm: ['IBM Plex Sans', 'sans-serif'],
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
