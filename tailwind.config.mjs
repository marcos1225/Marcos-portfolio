/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	 darkMode: 'class',
	theme: {
		extend: {
		  colors: {
			classic: {
			  white: '#FFFFFF',
			  black: '#000000',
			  darkGray: '#333333',
			  gold: '#DAA520',
			  primary: '#EEEEEE',
			  secundary: '#DC5F00',
			},
		  },
		},
	  },
	plugins: [require('@tailwindcss/forms'),],
}
