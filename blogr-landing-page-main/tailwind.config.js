/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./main.js"],
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
		},
		extend: {
			colors: {
				"primary-red": "#ff525d",
				"primary-light-red": "#ff7a85",
				"primary-dark": "#1f3f5b",
				"n-gray": "#c8c8cb",
				"n-dark-gray": "#4b5862",
				"n-dark-blue": "#25252d",
				"g-light-red": "#ff8f70",
				"g-red": "#ff3d54",
				"g-dark-gray": "#2c2d3f",
				"g-dark-blue": "#3f4164",
			},
		},
	},
	plugins: [],
};
