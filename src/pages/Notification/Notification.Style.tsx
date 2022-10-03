/** @format */

import theme from "../../Theme/Theme";

export const Styles = {
	container: {
		width: "100%",
		minHeight: "98vh",
		overflow: "hidden",
	},
	rowItem: {
		display: "flex",
		justifyContent: "space-between",
		alignItem: "center",
		margin: "100px 0",
		flexBasis: "40%",
		marginLeft: "50px",
	},
	waterCan: {
		width: "304px",
		height: "495px",
		top: "442px",
		left: "395px",
		paddingTop: "145px",
		marginBottom: "-113px",
		marginLeft: "-55px",
		marginRight: "-5px",
	},
	waterMan: {
		width: "290px",
		height: "497px",
		top: "162px",
		left: "1230px",
		marginLeft: "-103px",
		paddingTop: "0px",
		marginBottom: "-105px",
	},
	text: {
		width: "246px",
		height: "40px",
		left: "154px",
		top: "118px",
		fontFamily: "Inter !important",
		fontSize: "18px !important",
		lineHeight: "40px !important",
		color: "rgba(0, 6, 32, 1)",
		marginLeft: "0px !important",
		marginTop: "-25px !important",
		[theme.breakpoints.down("sm")]: {
			fontSize: "18px !important",
			marginLeft: "5px !important",
		},
	},
	text2: {
		height: "40px",
		left: "154px",
		top: "118px",
		fontFamily: "Inter !important",
		lineHeight: "40px !important",
		marginLeft: "40px !important",
		marginTop: "-20px !important",
		[theme.breakpoints.down("sm")]: {
			fontSize: "14px !important",
			marginLeft: "31px !important",
		},
	},
	hadding: {
		fontSize: "24px",
		display: "flex",
		paddingBottom: "1%",
		marginTop: "25px",
	},
	time: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "16px !important",
			marginLeft: "-245px !important",
		},
	},
	active: {
		width: "10px",
		height: "10px",
		background: "rgba(28, 151, 253, 1)",
		borderRadius: "10px",
	},
	drawerPaper: {
		marginTop: "0px",
		"&::-webkit-scrollbar": {
			width: "5px!important",
		},
		"&::-webkit-scrollbar-thumb": {
			width: "0.5px !important",
			background: "#1C97FD",
			borderRadius: "5px",
		},
	},
};
