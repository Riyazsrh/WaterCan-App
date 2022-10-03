/** @format */

export const Styles: any = {
	mainBox: {
		width: "100%",
	},
	image: {
		marginRight: "10px",
		width: "73px",
		height: "44px",
		display: "inlineBlock",
	},
	field: {
		[`& input`]: {
			marginLeft: "0px",
			marginright: "20px",
			backGround: "#E3F2FF",
			border: "2px solid #CEE4F8",
			borderRadius: "10px",
			background: "#E3F2FF",
		},
		[`& fieldset`]: {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			border: "none !important",
			borderRight: 0,
		},
	},
	box: {
		width: "700px",
		marginLeft: "0px",
		paddingRight: "150px",
		paddingLeft: "20px",
		marginTop: "-10px",
		marginBottom: "20px",
	},
	list: {
		marginLeft: "40px",
	},
	gird: {
		margin: "20px",
	},
	btn: {
		[`& button`]: {
			height: "50px",
			width: "200px",
			background: "#1C97FD",
			color: "white",
			border: "2px solid #CEE4F8",
		},
		"&:hover": {
			background: "#1C97FD",
		},
	},
	div: {
		width: "73px",
		height: "44px",
		left: "838px",
		top: "266px",
		background: "#E3F2FF",
		border: "1px dashed #A4C7E7",
		borderRadius: "5px",
	},
	payBtn: {
		margin: "20px 10px !important",
		[`& button`]: {
			minWidth: "100% !important",
		},
	},
};
