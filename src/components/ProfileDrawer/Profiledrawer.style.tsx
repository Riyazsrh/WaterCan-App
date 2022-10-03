/** @format */

import theme from "../../Theme/Theme";

export const Styles: any = {
	DrawerBox: {
		alignItems: "center !important",
		width: "380px !important",
		[theme.breakpoints.only("xs")]: {
			width: "100%",
		},
		[theme.breakpoints.only("sm")]: {
			width: "420px",
		},
	},
	Close: {
		marginLeft: "75%",
	},
	profileEdit: {
		marginLeft: "12% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	profile: {
		fontFamily: "Inter !important",
	},
	Rectangle18: {
		borderRadius: "20px !important",
		width: "100% !important",
	},
	Name: {
		color: "#000620 !important",
		fontSize: "15px !important",
		fontFamily: "Inter , sans-serif; !important",
	},
	Editprofile: {
		color: "#1C97FD !important",
		fontSize: "5px !important",
		fontWeight: "500 !important",
	},
	Editprofile2: {
		marginLeft: "12% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Favorite: {
		marginLeft: "8% !important",
		marginTop: "3% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Orders: {
		marginLeft: "11% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Adress: {
		marginLeft: "12% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Privacy: {
		marginLeft: "11% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Terms: {
		marginLeft: "11% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Settings: {
		marginLeft: "11% !important",
		fontFamily: "Inter, sans-serif; !important",
		fontSize: "19px !important",
	},
	Logout: {
		width: "100% !important",
		height: "25% !important",
		background: "#1C97FD !important",
		color: "white !important",
		boxShadow: " 2px 2px 25px 2px rgba(73, 194, 233, 0.52)",
		marginTop: "13% !important",
		textTransform: "none !important",
	},
	Editbox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	Favbox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	FavIcon: {
		color: "red !important",
		height: "40px !important",
		width: "35px !important",
		marginRight: "8px !important",
	},
	Orderbox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	Addressbox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	Privacybox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	Termsbox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	Settingbox: {
		display: "flex !important",
		padding: "1% !important",
		marginTop: "5% !important",
	},
	addToContanierButton: {
		marginTop: "50px !important",
		[`& button`]: {
			minWidth: "100% !important",
		},
	},
};
