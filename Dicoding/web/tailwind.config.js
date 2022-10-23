/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		container: {
			center: true,
			padding: "50px",
		},
		extend: {
			colors: {
				javascript: "#F7DF1E",
				secondary: "#64748b",
				primary: "#0ea5e9",
				react: "#61DAFB",
				mysql: "#4479A1",
				mongo: "#47A248",
				dark: "#0f172a",
				node: "#339933",
				html: "#E34F26",
				php: "#777BB4",
				css: "#1572B6",
			},
			screen: {
				"2xl": "1320px",
			},
		},
	},
	plugins: [],
};
