// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
	darkMode: false,
	theme: {
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'primary': '#08090d',
			'primary-light': '#171a26',
			'secondary': '#4fc2f7',
			'primary-text': '#e1e1e1',
		}
	},
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
};
