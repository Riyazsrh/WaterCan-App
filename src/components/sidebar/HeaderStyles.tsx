/** @format */

import { makeStyles } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

export const useStyles = makeStyles((theme: any) => ({
	toolbar: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
	},
	logo: {
		color: "white",
	},
	navlist: {
		minWidth: "250px",
		maxWidth: "300px",
	},
	ulAvater: {
		backgroundColor: blue["A200"],
		color: "white",
	},
	navAvatar: {
		width: "35px",
		height: "35px",
	},

	wrapper: {
		minHeight: "100vh",
		height: "auto",
		background: "#efefef",
		marginTop: "60px",
		padding: theme.spacing(2, 2, 0, 34),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2, 2),
			marginTop: "45px",
		},
	},

	drawerPaper: {
		width: "250px",
		marginTop: "65px",
		[theme.breakpoints.down("sm")]: {
			marginTop: "0px",
		},
	},
	navlinks: {
		color: blueGrey["A400"],
		"& :hover , &:hover div": {
			color: blue["A200"],
		},
		" & div": {
			color: blueGrey["A400"],
		},
	},
	activeNavlinks: {
		color: blue["A700"],
		"& div": {
			color: blue["A700"],
		},
	},
	navButton: {
		width: " 100%",
		textTransform: "capitalize",
	},
}));