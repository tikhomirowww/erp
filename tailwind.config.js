/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		screens: {
            sm: { max: "500px" },
			md: { max: "800px" },
			lg: { max: "1068px" },
			xl: { max: "1200px" },
		},
		extend: {
			boxShadow: {
				darken: "0px 16px 64px 0px rgba(168, 168, 168, 0.15)",
			},
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			colors: {
				dark: "#292A2F",
				secondaryDark: "#505154",
				light: "#EFF2FF",
				blue: "#3560FA",
				negative: "#F7343D",
				gray: "#939599",
			},
		},
	},
	plugins: [],
};
