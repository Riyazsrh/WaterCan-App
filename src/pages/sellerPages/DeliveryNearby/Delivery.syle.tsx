/** @format */

import theme from "../../../Theme/Theme";

export const Styles: any = {
	ItemContainer: {
		marginTop: "60px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "0px",
			padding: "20px",
		},
	},
	imagePosition: {
		position: "absolute",
		top: "-75px",
		left: "40px",
		zIndex: "11",
		[theme.breakpoints.down("sm")]: {
			top: "-75px",
			left: "100px",
		},
	},
	emptyDiv: {
		width: "200px",
		[theme.breakpoints.down("sm")]: {
			width: "00px",
		},
	},
	innerCardReviewContent: {
		flexDirection: "row !important",
		justifyContent: "space-between !important",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column !",
			marginTop: "60px",
			textAlign: "center",
		},
	},

	boxReviewContent: {
		display: "flex",
		alignItems: "baseline",
		flexDirection: "row !important",
	},
	btnSec: {
		width: "30%",
		[theme.breakpoints.down("lg")]: {
			marginBottom: "0px",
			width: "30%",
		},
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
			width: "100%",
			marginTop: "20px !important",
		},
		[`& button`]: {
			border: "2px solid #1C97FD",
			textTransform: "capitalize",
			color: "black",
			width: "100%",
			"&:hover": {
				background: "#1C97FD",
				color: "white",
				boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5)",
				border: "1px solid transparent",
			},
		},
	},
	ManNearby: {
		color: "#000620 !important",
		margin: "15px 0 !important",
		fontSize: "24px !important",
	},
	mainCard: {
		padding: "20px !important",
		borderRadius: "20px !important",
	},
	cardContents: {
		flexDirection: "row !important",
		alignItems: "center",
		marginBottom: "20px",
		justifyContent: "space-between",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column !important",
		},
	},
	innerCardContent: {
		flexDirection: "row !important",
		width: "80% !important",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			width: "100% !important",
		},
	},
	cardMedia: {
		objectFit: "contain  !important",
		width: "25% !important",
		[theme.breakpoints.down("sm")]: {
			width: "30% !important",
		},
	},
	cardContent: {
		width: "75% !important",
		marginLeft: "30px !important",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "0px !important",
			padding: "10px 0 10px 10px !important",
		},
	},
	boxContent: {
		display: "flex ",
		alignItems: "center",
	},
	PersonName: {
		color: "#000620 !important",
		textTransform: "capitalize",
		marginBottom: "15px !important",
	},
	LocationIcon: {
		color: "#1C97FD !important",
	},
	distance: {
		marginLeft: "5px !important",
	},
	rating: {
		marginLeft: "20px !important",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "10px !important",
			["& span"]: {
				display: "block",
				["&.MuiTypography-root"]: {
					marginRight: "0px !important",
				},
			},
		},
	},
};
