/** @format */

import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useStyles } from "./footerBottom.styles";
const FooterBottom = () => {
	const classes = useStyles();
	return (
		<Grid item md={12} sm={12} xs={12}>
			<Box className={classes.footerBoxStyle} >
				<Typography className={classes.footerFontStyle}>
					© 2022 watercan Shop | All Rights Reserved
				</Typography>
			</Box>
		</Grid>
	);
};

export default FooterBottom;
