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
					dark: '#434343',
					DEFAULT: '#888',
					light: '#D9D9D9'
				},
				red: '#FF2C2C',
				blue: '#385BFF',
				yellow: '#EAEA00',
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
