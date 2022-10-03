/** @format */

import { makeStyles } from "@mui/styles";
import theme from "../../../Theme/Theme";
export const useStyles = makeStyles({
	btnSec: {
		display: "inline-block !important",
		[theme.breakpoints.down("lg")]: {
			marginBottom: "0px",
		},
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			marginBottom: "0px",
			display: "flex !important",
		},
		[`& button`]: {
			textTransform: "capitalize",
			color: "white",
			padding: "15px 20px",
			minWidth: "200px !important",
			background: "#1C97FD",
			"&:hover": {
				background: "#1C97FD",
				color: "white",
				boxShadow: "2px 2px 25px rgba(73, 194, 233, 0.52)",
			},
		},
	},
});
