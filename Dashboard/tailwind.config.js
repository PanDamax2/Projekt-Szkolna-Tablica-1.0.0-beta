/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px', // mobile
			md: '768px', // tablet
			lg: '1024px', // desktop
			xl: '1280px', // large desktop
		},
		fontFamily: {
			satoshi: ['Satoshi', 'sans-serif'],
		},
		extend: {
			colors: {
				black: '#1C2434',
				udark: '#1A222C',
				lightdark: '#24303F',
				lightblack: '#0E1217',
				lightgray: '#a2a4a6',
				darkinput: '#1D2A39',
				purpleborder: '#3C50E0',
				ured: '#70211C',
				gray: '#F1F5F9',
				lime: '#38ce3c',
				success: '#219653',
				danger: '#D34053',
				warning: '#FFA70B',
			},
		},
	},
	plugins: [],
}
