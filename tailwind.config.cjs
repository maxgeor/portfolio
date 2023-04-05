/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				crimson: ['Crimson Text', 'serif'],
				ibm: ['IBM Plex Sans', 'sans-serif'],
				karla: ['Karla', 'sans-serif'],
				lora: ['Lora', 'serif'],
			}
		},
	},
	plugins: [],
}
