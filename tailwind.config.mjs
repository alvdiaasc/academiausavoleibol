/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./src/**/*.{astro,html,js,jsx,ts,tsx}",
	  "./public/**/*.{html,svg}",
	],
	theme: {
	  extend: {
		colors: {
		  neonPink: "#ff00ff",
		  neonPurple: "#b734eb",
		  neonBlue: "#00ffff",
		  brandGreen: "#1eb300", 
		  brandBlack: "#0b0b0b",
		},
	  },
	},
	plugins: [],
  }
  