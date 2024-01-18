/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],

	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		colors: {
			'blue-dark': '#02004E',
			blue: '#486AE9',
			pink: '#FF6587',
			green: '#00C88B',
			white: '#FFFFFF',
			black: '#000000',
			'white-off': '#F9F7F3',
		},
		extend: {},
	},
	plugins: [],
};
