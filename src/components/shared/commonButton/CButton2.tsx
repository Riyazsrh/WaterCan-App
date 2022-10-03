/** @format */

import { Button, Stack } from "@mui/material";
// import { icon } from "leaflet";
import React from "react";
import { useStyles } from "./button.styles";

interface IProps {
	title: string;
	icon?: React.ReactNode;
}

const CButton2: React.FC<IProps> = ({ title, icon }) => {
	const classes = useStyles();
	return (
		<Stack className={classes.btnSec}>
			<Button endIcon={icon} variant="text">
				{title}
			</Button>
		</Stack>
	);
};

export default CButton2;
