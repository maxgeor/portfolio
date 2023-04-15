/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: '375px',
				525: '525px',
			},
			fontFamily: {
				crimson: ['Crimson Text', 'serif'],
				ibm: ['IBM Plex Sans', 'sans-serif'],
				karla: ['Karla', 'sans-serif'],
				lora: ['Lora', 'serif'],
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
