/** @format */

import theme from "../../../Theme/Theme";
export const Styles: any = {
	mainContainer: {
		marginBottom: "20px",
		padding: "10px 20px",
		boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5)",
		[`& header`]: {
			width: "77%",
			background: "white !important",
			boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5)",
			[theme.breakpoints.down("lg")]: {
				width: "65%",
			},
		},
		[theme.breakpoints.down("md")]: {
			display: "none !important",
		},
	},

	textContent1: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		color: "#000620",
		[theme.breakpoints.down("lg")]: {
			display: "none !important",
		},
	},
	textContent2: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	textContent3: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	inputField: {
		[`& fieldset`]: {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			border: "none !important",
			borderRight: 0,
		},
		[`& input`]: {
			padding: "10px",
			width: "300px",
			background: "#F2F2F2",
			borderTopLeftRadius: "10px !important",
			borderBottomLeftRadius: "10px !important",
			[theme.breakpoints.down("sm")]: {
				paddingBottom: "15px",
				borderTopLeftRadius: "0px !important",
				borderBottomLeftRadius: "0px !important",
				width: "475px !important",
				height: "50px !important",
			},
		},
	},
	halfButton: {
		[`& button`]: {
			borderTopRightRadius: "10px !important",
			borderBottomRightRadius: "10px !important",
			padding: "11px 8px",
			minWidth: "45px !important",
			borderRadius: 0,
			background: "#1C97FD !important",
			"&:hover": {
				background: "#1C97FD",
			},
			[theme.breakpoints.down("sm")]: {
				borderTopRightRadius: "0px !important",
				borderBottomRightRadius: "0px !important",
				padding: "13px",
			},
		},
		[`& span`]: {
			marginRight: 0,
		},
	},
	spacious: {
		[`& button`]: {
			[theme.breakpoints.down("md")]: {
				height: "72px !important",
			},
		},
	},
	imgContent: {
		marginLeft: "30px",
	},
	MuiToolbarRoot: {
		justifyContent: "space-between",
	},
	responsiveSec: {
		display: "flex",
		marginTop: "62px",
		width: "100% !important",
		height: "72px !important",
		[theme.breakpoints.up("md")]: {
			display: "none !important",
		},
		[theme.breakpoints.down("md")]: {
			justifyContent: "space-between",
		},
	},
	responsiveTextContent: {
		background: "#E3F2FF",
		padding: "10px 15px 10px 0",
		width: "100% !important",
	},
};
