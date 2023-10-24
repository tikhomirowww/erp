/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
            boxShadow: {
                "darken": "0px 16px 64px 0px rgba(168, 168, 168, 0.15)"
            },
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			colors: {
				dark: "#292A2F",
				blue: "#3560FA",
				negative: "#F7343D",
			}
		},
	},
	plugins: [],
};
