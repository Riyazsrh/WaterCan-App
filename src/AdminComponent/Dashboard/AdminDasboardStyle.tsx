/** @format */

import theme from "../../Theme/Theme";

export const Styles: any = {
	flexCenter: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	earningBox: {
		display: "flex",
		justifyContent: "space-between",
		padding: "30px",
		[theme.breakpoints.down("sm")]: {
			padding: "10px",
		},
	},
	boxText: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "93px !important",
			fontWeight: "600 !important",
		},
	},
	cardHeading: {
		color: "#A2A3A5",
	},
	fontWeight600: {
		textTransform: "capitalize",
		fontWeight: "600 !important",
		[theme.breakpoints.down("sm")]: {
			fontSize: "20px !important",
		},
	},
	pageHeading: {
		fontSize: "1.5rem !important",
		fontWeight: "700 !important",
		margin: "1.5rem 0",
		borderLeft: "4px solid #1C97FD",
		paddingLeft: "1.2rem",
	},
	detailCard: {
		padding: "1rem 0",
		borderRadius: "10px !important",
		boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5) !important",
	},
	cardStyle: {
		borderRadius: "20px !important",
		padding: "1rem",
		marginBottom: "25px",
		border:"1px solid #D6DCF3",
	},
	orderImage: {
		margin: "0 auto",
		display: "block",
	},
	locationIconStyle: {
		verticalAlign: "middle",
		fontSize: "22px",
		marginRight: "0.7rem",
	},
	addressColor: {
		color: "#A2A3A5",
	},
	checkIcon: {
		border: "1px solid green",
		borderRadius: "50%",
		marginTop: "1rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50px",
		width: "50px",
	},
	closeIcon: {
		border: "1px solid red",
		borderRadius: "50%",
		marginTop: "1rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "50px",
		width: "50px",
		marginLeft: "15px !important",
	},
	adminSalesmanCard: {
		borderRadius: "10px !important",
		border: '1px solid #D6DCF3',
		boxShadow: "2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
	},
	adminShopCard: {
		borderRadius: "20px !important",
		border: '1px solid #D6DCF3',
		// boxShadow: "2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
	},
	imgTag1: {
		width: "80px",
		height: "80px",
		[theme.breakpoints.down("sm")]: {
			width: "70px",
			height: "70px",
		},
	},
	shopimg: {
		width:"100px",
		height: "70px",
		[theme.breakpoints.down("sm")]: {
			width: "70px",
			height: "70px",
		},
		[theme.breakpoints.down("md")]: {
			width: "60px",
			height: "70px",
		},
	},
	btnSec: {
		[`& button`]: {
			border: "1px solid blue",
			textTransform: "capitalize",
			color: "black",
			minWidth: "200px",
			padding: "10px !important",
			"&:hover": {
				background: "#1C97FD",
				color: "white",
				boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5)",
				border: "1px solid transparent",
			},
			[theme.breakpoints.down("sm")]: {
				minWidth: "100% !important",
				padding: "12px !important",
			},
		},
	},
	recentOrderbtn: {
		[`& button`]: {
			border: "2px solid #1C97FD",
			textTransform: "capitalize",
			color: "black",
			fontSize: "17px",
			fontWeight: 600,
			minWidth: "200px",
			width: "50px",
			padding: "10px !important",
			"&:hover": {
				background: "#1C97FD",
				color: "white",
				boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5)",
				border: "1px solid transparent",
			},
			[theme.breakpoints.down("sm")]: {
				minWidth: "100% !important",
				padding: "12px !important",
			},
			[theme.breakpoints.up("md")]: {
				maxWidth: "50% !important",
				padding: "8px !important",
			},
		},
	},
};
