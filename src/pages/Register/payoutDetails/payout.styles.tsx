/** @format */

import theme from "../../../Theme/Theme";
export const Styles: any = {
	mainDialog: {
		maxHeight: '705px !important',
		["& .MuiPaper-root"]: {
			[theme.breakpoints.down("sm")]: {
				width: "100% !important",
			},
		},
	},
	titleDetail: {
		margin: "15px 0 !important",
		fontSize: "22px !important",
		fontWeight: "700 !important",
	},
	radioComp: {
		display: "flex !important",
		alignItems: "center",
		flexDirection: "row !important",
		margin: "10px 0",
		["& span"]: {
			paddingLeft: "0px !important",
		},
	},
	payoutInputEl: {
		display: "flex",
		["& .MuiFormControl-root"]: {
			margin: "10px 0 !important",
			color: "#938D8E !important",
		},
		["& input"]: {
			width: "450px",
			background: "#E3F2FF",
			border: "2px solid #CEE4F8",
			borderRadius: "10px",
			[theme.breakpoints.down("sm")]: {
				width: "100% !important",
			},
		},
		["& fieldset"]: {
			border: "none",
		},
	},
	saveBtn: {
		flexBasis: "100% !important",
		margin: "0 0 20px 20px",
		["& button"]: {
			width: "95% !important",
		},
	},
	payoutSelectEl: {
		["& .MuiFormControl-root"]: {
			margin: "10px 0 !important",
			color: "#938D8E !important",
		},
		["& input"]: {
			width: "450px",
			background: "#E3F2FF",
			border: "2px solid #CEE4F8",
			borderRadius: "10px",
			[theme.breakpoints.down("sm")]: {
				width: "100% !important",
			},
		},
		["& fieldset"]: {
			border: "none",
		},
	},
};
