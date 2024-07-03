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
			  darkGray: '#222831',
			  gold: '#DAA520',
			  primary: '#393E46',
			  secundary: '#00ADB5',
			  colorFuente: '#E0E0E0',
			  colorAcento: '#BB86FC',
			  colorBoton: '#EEEEEE'
			},
		  },
		},
	  },
	plugins: [require('@tailwindcss/forms'),],
}
