/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					"blue": "#043873",
					"skyblue": "#4F9CF9",
				},
				"secondary": {
					"yellow": "#FFE492",
					"skyblue": "#A7CEFC",
					"dark": "#212529",
				}
			}
		},
	},
	plugins: [],
}
