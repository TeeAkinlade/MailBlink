/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				ui_primary: '#1F284F',
				ui_secondary1: '#0070F0',
				ui_primary2: '#228B22',
				tertiary: '#FAFBFC',
				accent_1: '#3CBA79',
				accent_3: '#B7C5CC',
				accent_4: ' #DBDBDB',
			},
			keyframes: {
				'animate-fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'animate-fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				'fade-in': 'animate-fade-in 0.4s ease-out backwards',
				'fade-out': 'animate-fade-out 0.4s ease-out forwards',
			},
		},
		plugins: [],
	},
};
