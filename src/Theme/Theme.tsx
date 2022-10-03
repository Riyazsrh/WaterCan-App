/** @format */

import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
	typography: {
		fontFamily: "Inter",
		h1: {
			fontSize: "2rem",
			fontWeight: 500,
		},

		h2: {
			fontSize: "34px",
			fontWeight: 400,
			fontFamily: "Praise",
			lineHeight: "40px",
		},

		h3: {
			fontSize: "1.1rem",
			fontWeight: 600,
			letterSpacing: 0.8,
		},

		h4: {
			fontSize: "1.05rem",
			fontWeight: 700,
			letterSpacing: 0.2,
		},

		h5: {
			fontSize: "20px",
			fontWeight: 500,
		},

		h6: {
			fontSize: "1rem",
			fontWeight: 500,
		},

		body1: {
			fontSize: "0.95rem !important",
			fontWeight: 500,
			letterSpacing: 0.2,
			wordSpacing: 1,
			lineHeight: 1.7,
		},
	},
	palette: {
		primary: {
			main: "#1C97FD",
			dark: "#01E9EB",
		},
		secondary: {
			main: "rgba(255, 99, 71, 0.5)",
			dark: "#000620",
		},
	},

	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: {
						background: "#FFFFFF",
						boxShadow: "2px 2px 60px 2px rgba(1, 233, 235, 0.5)",
						borderRadius: "5px",
						width: "100%",
					},
				},
				{
					props: { variant: "outlined" },
					style: {
						fontWeight: "70px",
						borderRadius: "50%",
						border: "3px solid 	rgb(0,0,0)",
						backgroundColor: "secondary",
					},
				},
			],
		},
	},
});

const theme = {
	...defaultTheme,
};

export default theme;
