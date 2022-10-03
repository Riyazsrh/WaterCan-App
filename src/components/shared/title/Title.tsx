/** @format */

import React from "react";
import { Stack, Typography } from "@mui/material";
import { useStyles } from "./title.styles";
import { titleProps } from "../../../utils/models/interface";

const Title: React.FC<titleProps> = ({ title }) => {
	const classes = useStyles();
	return (
		<Stack className={classes.titleContent} sx={{ flexDirection: "row" }}>
			<Typography className={classes.line}></Typography>
			<Typography
				sx={{ fontSize: "1.5rem" }}
				variant="h3"
				className={classes.hero}>
				{title}
			</Typography>
		</Stack>
	);
};

export default Title;
