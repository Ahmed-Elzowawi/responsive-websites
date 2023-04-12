/** @type {import('tailwindcss').Config} */ module.exports = {
	content: ["./index.html"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
		},
		extend: {
			fontFamily: { bai: ['"Bai Jamjuree"', "sans-serif"] },
			colors: { primary: "#26baa4", secondary: "#6173ff", dark: "#4c545d", light: "#9fabb2" },
		},
	},
	plugins: [],
};
