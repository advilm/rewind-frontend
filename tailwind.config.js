// tailwind.config.js

module.exports = {
	darkMode: false,
	theme: {
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'primary': '#08090d',
			'primary-light': '#12151e',
			'primary-text': '#e1e1e1',
			'secondary': '#4fc2f7',
			'secondary-dark': '#0ba7f3'
		}
	},
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
};
