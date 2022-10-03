/** @format */

import theme from "../../../Theme/Theme";
export const Styles = {
	MuiPaperRoot: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "20px",
		padding: "0px 15px",
		borderRadius: "20px !important",
		boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5) !important",
		[theme.breakpoints.down("lg")]: {
			flexDirection: "column !important",
			padding: "20px 0",
		},
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column !important",
			padding: "20px 0",
		},
	},
	imgTag: {
		width: "260px !important",
		height: "100% !important",
		[theme.breakpoints.down("lg")]: {
			width: "98% !important",
		},
		[theme.breakpoints.down("sm")]: {
			borderRadius: "10px",
			width: "95% !important",
		},
	},
	shopName: {
		[theme.breakpoints.down("sm")]: {
			marginTop: "30px !important",
		},
	},
	customerinfo: {
		[theme.breakpoints.down("lg")]: {
			padding: "20px 0 !important",
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
	btnSec: {
		marginBottom: "90px",
		[theme.breakpoints.down("lg")]: {
			marginBottom: "0px",
		},
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
		},
		[`& button`]: {
			border: "1px solid blue",
			textTransform: "capitalize",
			color: "black",
			paddingLeft: "20px",
			paddingRight: "20px",
			minWidth: "130px",
			"&:hover": {
				background: "#1C97FD",
				color: "white",
				boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5)",
				border: "1px solid transparent",
			},
			[theme.breakpoints.down("lg")]: {
				minWidth: "320px !important",
				marginTop: "0px",
			},
			[theme.breakpoints.down("sm")]: {
				minWidth: "328px !important",
			},
		},
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
	Slider: {
		[theme.breakpoints.down("md")]: {
			marginTop: "60px !important",
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: "-60px !important",
		},
	},
};
