/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			colors: {
				dark: "#292A2F",
				blue: "#3560FA",
				negative: "#F7343D",
			},
		},
	},
	plugins: [],
};
