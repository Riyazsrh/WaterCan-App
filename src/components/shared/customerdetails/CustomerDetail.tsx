/** @format */

import React, { Component } from "react";
import { CardContent, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import StarIcon from "@mui/icons-material/Star";
import { Styles } from "./customerDetail.styles";
import { shopDataType } from "../../../utils/models/interface";
import { withStyles } from "@mui/styles";
import StarIcons from "../starIcons/StarIcons";
interface IProps {
	item: shopDataType;
	classes: any;
}
class CustomerDetail extends Component<IProps> {
	render(): React.ReactNode {
		const { classes } = this.props;
		return (
			<CardContent>
				<Typography className={classes.shopName} variant="h5">
					{this.props.item.shopName}
				</Typography>
				<Stack
					className={classes.locationSec}
					sx={{ flexDirection: "row" }}>
					<Stack
						className={classes.locationSecInner}
						sx={{ flexDirection: "row" }}>
						<Typography component="span" className={classes.distance}>
							<LocationOnIcon className={classes.icons} />
							{this.props.item.distance}
						</Typography>
						<Typography component="span" className={classes.time}>
							<AccessTimeFilledIcon className={classes.icons} />
							{this.props.item.time}
						</Typography>
					</Stack>
					<StarIcons />
				</Stack>
				<Typography
					variant="body2"
					className={classes.address}
					component="span">
					{this.props.item.address}
				</Typography>
			</CardContent>
		);
	}
}

export default withStyles(Styles)(CustomerDetail);
