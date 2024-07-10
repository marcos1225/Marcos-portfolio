/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  classic: {
			primary: '#00785D',
			secundary: '#FDC323',
		  },
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/forms'),
	  require('tailwindcss-animated'), 
	],
  }
  