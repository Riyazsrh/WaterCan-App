/** @format */

import theme from "../../../Theme/Theme";
export const Styles: any = {
	myOrder: {
		flexDirection: "row !important",
		[theme.breakpoints.down("md")]: {
			display: "flex",
			flexDirection: "row",
		},
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column !important",
		},
	},
	cardItems: {
		[theme.breakpoints.down("md")]: {
			width: "360px !important",
		},
	},
	rootProducts: {
		gridTemplateRow: "repeat(auto-fit, minmax(250px, 1fr))",
		gridGap: "15px",
		display: "flex !important",
		justifyContent: "flex-start !important",
		flexDirection: "row !important",
		flexWrap: "nowrap !important",
	},
	productMain: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column!important" as any,
		width: "241px",
		height: "291px",
		"&:hover": {
			boxShadow: " 2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
			color: "#1C97FD",
		},
		[theme.breakpoints.only("lg")]: {
			width: "170px",
			height: "220px",
		},
	},

	imgMain: {
		width: "129.14px",
		height: "144.13px",
	},
	img: {
		width: "100%",
		height: "100%",
	},
	content: {
		marginTop: "15px",
	},
	prodcutPrice: {
		textAlign: "center",
		textTransform: "capitalize",
	},
	productText: {
		textAlign: "center",
		textTransform: "capitalize",
		color: "#000620",
	},
};
