import { makeStyles } from "@mui/material"
import theme from "../../Theme/Theme";

export const Style = ({
    imgSection:{
        [theme.breakpoints.only('xs')]: {
             display:"flex",
             flexDirection:"column-reverse !important"
            },
    },
    button: {
        marginTop: "10px",
        maxWidth:"300px !important"

    },
    addToContanierButton: {
		marginTop: "10px !important",
		[`& button`]: {
			minWidth: "100% !important",
		},
	},
})