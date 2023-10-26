/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
        transitionDuration: {
            DEFAULT: "200ms",
        },
		screens: {
            sm: { max: "500px" },
			md: { max: "800px" },
			lg: { max: "1068px" },
			xl: { max: "1200px" },
		},
		extend: {
			boxShadow: {
				darken: "0px 16px 64px 0px rgba(168, 168, 168, 0.15)",
                darkenSky: "0px 6px 16px 0px rgba(46, 90, 249, 0.30)"
			},
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			colors: {
				dark: "#292A2F",
				secondaryDark: "#505154",
				light: "#EFF2FF",
                secondaryLight: "#EAEBED",
				blue: "#3560FA",
                secondaryBlue: "#6F8EFF",
				negative: "#F7343D",
                secondaryNegative: "#FF8B90",
				gray: "#939599",
			},
		},
	},
	plugins: [],
};
