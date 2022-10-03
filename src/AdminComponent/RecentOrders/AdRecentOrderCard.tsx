/** @format */

import { Card, Grid, Typography, Box, Button, Stack } from "@mui/material";
import React, { Component } from "react";
import { Styles } from "../Dashboard/AdminDasboardStyle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { withStyles } from "@mui/styles";
import { orderRecentProps } from "../../utils/models/interface";
import { Link } from "react-router-dom";
interface IProps {
	classes?: any;
	order: orderRecentProps;
}
class AdRecentOrderCard extends Component<IProps> {
	render() {
		const { classes, order } = this.props;
		return (
			<Card variant="outlined" className={classes.cardStyle}>
				<Grid container alignItems="center">
					{/* For order image */}
					<Grid item lg={3} md={4} xs={12} sm={12}>
						<img
							className={classes.orderImage}
							src={order.img}
							alt="order image"
						/>
					</Grid>
					{/* For order description */}
					<Grid item lg={6} md={6} xs={12} sm={12}>
						<Typography variant="h3">{order.heading}</Typography>
						<Box sx={{ display: "flex", margin: "1rem 0" }}>
							<Typography
								sx={{
									marginRight: "2rem",
									fontWeight: "600 ",
								}}>
								<LocationOnIcon
									className={classes.locationIconStyle}
									color="primary"
								/>
								{order.distance}
							</Typography>
							<Typography className={classes.fontWeight600}>
								{order.cost}
							</Typography>
						</Box>
						<Typography className={classes.addressColor}>
							{order.address}
						</Typography>
					</Grid>
					{/* For Order Buttons */}
					<Grid item lg={3} md={12} xs={12} sm={12}>
						<Stack className={classes.recentOrderbtn}>
							{/* <Link to="/recentOrderDetails"> */}
								<Button disableRipple variant="text">
									More Details
								</Button>
							{/* </Link> */}
						</Stack>
						{/* <Box
							sx={{
								display: "flex",
								justifyContent: "center",
							}}>
							<Box className={classes.checkIcon}>
								<CheckIcon sx={{ color: "green" }} />
							</Box>
							<Box className={classes.closeIcon}>
								<CloseIcon sx={{ color: "red" }} />
							</Box>
						</Box> */}
					</Grid> 
				</Grid>
			</Card>
		);
	}
}
export default withStyles(Styles)(AdRecentOrderCard);
