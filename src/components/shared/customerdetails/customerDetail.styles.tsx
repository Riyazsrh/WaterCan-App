/** @format */

import theme from "../../../Theme/Theme";
export const Styles = {
	shopName: {
		[theme.breakpoints.down("sm")]: {
			marginTop: "30px !important",
		},
	},
	locationSec: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "20px 0",
		fontSize: "15px",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column !important",
			alignItems: "flex-start",
		},
	},
	locationSecInner: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	},
	star: {
		marginRight: "30px !important",
	},
	distance: {
		fontSize: "15px !important",
		marginRight: "20px !important",
	},
	time: {
		fontSize: "15px !important",
	},
	icons: {
		fontSize: "18px !important",
		color: "#1C97FD",
		marginRight: "10px",
		verticalAlign: "middle",
	},
	starIcon: {
		fontSize: "18px !important",
		color: "#FFD200",
		verticalAlign: "middle",
	},
	address: {
		color: "#A2A3A5 !important",
	},
};
