/** @format */
import theme from "../../../Theme/Theme";
export const Styles: any = {
	root: {
		fontFamily: "Inter !important",
	},
	main: {
		width: "100%",
		margin: "auto",
		marginTop: "40px",
	},
	cardContent: {
		display: "flex",
		padding: "10px",
		border: "1px solid #D6DCF3",
		borderRadius: "20px !important",
		justifyContent: "space-around",
		marginTop: "23px !important",
		[theme.breakpoints.up("sm")]: {
			marginTop: "50px",
		},
	},
	imageTag: {
		width: "210px !important",
		height: "400px !important",
		objectFit: "cover",
	},
	favourite: {
		width: "40px",
		height: "40px",
		backgroundColor: "red",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "10px",
	},
	addToContanierButton: {
		marginTop: "50px !important",
		[`& button`]: {
			minWidth: "100% !important",
		},
	},
	reviewCard: {
		padding: "10px",
		borderRadius: "20px !important",
		boxShadow: "2px 2px 40px rgba(177, 233, 255, 0.5) !important",
		marginTop: "30px !important",
	},
	price: {
		color: "#1C97FD",
	},
	buttonGroup: {
		display: "flex",
		flexDirection: "column",
		borderRadius: "none",
		boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.15) !important",
	},
	buttonMinus: {
		color: "#000000 !important",
		borderRadius: "0px !important",
		borderRight: "0 !important",
	},
	buttonPlus: {
		color: "#000000 !important",
		borderRadius: "0px !important",
	},
	buttonNumber: {
		borderRadius: "0px !important",
		color: "#000000 !important",
		borderTop: "1px solid rgba(0 , 0 , 0, 0.2) !important",
		borderBottom: "1px solid rgba(0 , 0 , 0, 0.2) !important",
		borderRight: "0 !important",
	},
	commentTextArea: {
		borderRadius: "20px",
		marginBottom: "20px !important",
	},
	cartFlexCenter: {
		display: "flex !important",
		alignItems: "center !important",
	},
};
