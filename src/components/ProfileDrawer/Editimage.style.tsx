/** @format */

import theme from "../../Theme/Theme";

export const Styles: any = {
	SaveProfile: {
		background: "#1C97FD !important",
		color: "white !important",
		width: "100% !important",
		marginTop: "5% !important",
		textTransform: "none !important",
		boxSizing: "border-box !important",
		boxShadow: "2px 2px 60px 2px rgba(28, 151, 253, 0.3) !important",
		borderRadius: "10px !important",
		height: "45px !important",
	},
	Modalbox: {
		width: "52%",
		height: "50%",
		background: "white",
		marginTop: "30%",
		borderRadius: "10px",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		marginLeft: "16%",
		padding: "30px",
		[theme.breakpoints.down("sm")]: {
			width: "70% !important",
		},
	},
	UploadProfile: {
		color: "black !important",
		background: "#FFFFFF !important",
		fontSize: "13px !important",
		width: "45% !important",
		marginLeft: "10% !important",
		marginRight: "9% !important",
		textTransform: "none !important",
	},
	Remove: {
		background: "#8DCBFE !important",
		color: "black !important",
		width: "55% !important",
		textTransform: "none !important",
		border: "2px solid #8DCBFE !important",
		borderRadius: "0px 0px 0px 0px !important",
		fontStyle: "normal",
		fontWeight: "500 !important",
		fontSize: "13px !important",
		lineHeight: "26px !important",
	},
	Rectangle18: {
		width: "100% !important",
		borderRadius: "10% !important",
	},
	Flexbuttons: {
		display: "flex !important",
		width: "100% !important",
		justifyContent: "center !important",
		textAlign: "center !important",

		marginTop: "5% !important",
		borderRadius: "10px !important",
		border: "3px solid #8DCBFE !important",
	},
	Edit: {
		fontSize: "15px !important",
		display: "flex !important",
		width: "100%",
		textTransform: "none !important",
	},
};
