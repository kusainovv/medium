const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/index.tsx', './src/app/**/*.tsx'],
	theme: {
		screens: {
			...defaultTheme.screens,
			m: '810px',
			s: '480px',
			xs: '320px',
		},

		extend: {
			keyframes: {},

			animation: {},
		},

		fontFamily: {},

		backgroundImage: {},
	},
};
