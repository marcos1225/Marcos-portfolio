/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  classic: {
			primary: '#EBF4F6',
			secundary: '#102C57',
			blanco: '#FFFFFF',
		  },
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/forms'),
	  require('tailwindcss-animated'), 
	],
  }
  