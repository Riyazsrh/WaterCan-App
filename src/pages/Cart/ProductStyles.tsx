/** @format */

import theme from "../../Theme/Theme";

export const Styles = {
	cardBox: {
		"&:hover": {},
	},
	cartProductCart: {
		marginTop: "27px !important",

		[theme.breakpoints.down("lg")]: {
			marginTop: "100px !important",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "27px !important",
		},
	},
	customerCartText: {
		fontSize: "24px !important",
		fontWeight: "600",

		marginLeft: "27px !important",
	},

	cartflexBetween: {
		display: "flex !important",
		justifyContent: "space-between !important",
		marginTop: "10px",
	},
	customerCartCard: {
		padding: "30px !important",
		background: "#ffffff",
		boxShadow: "2px 2px 40px 2px rgba(177, 233, 255, 0.5) !important",
		borderRadius: "20px !important",
		marginTop: "88px  !important",
		marginBottom: "15px !important",
	},
	cartFirstTextCheckout: {
		marginBottom: "16px !important",
		fontFamily: "Inter !important",
		fontWeight: "400 !important",
	},
	cartBtnn: {
		margin: "30px 0 !important",
		[`& button`]: {
			minWidth: "100% !important",
		},
	},
};
