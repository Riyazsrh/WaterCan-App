/** @format */

import { Card, CardContent, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { orderHistoryProps } from "../../utils/models/interface";
import { Styles } from "../../components/OrderDetails/PymentCards.style";
import { withStyles } from "@mui/styles";

interface IProps {
	classes?: any;
	elem: orderHistoryProps;
}
class OrderHistoryCard extends Component<IProps> {
	render() {
		const { classes, elem } = this.props;
		return (
			<Card
				className={classes.OrderCards}
				sx={{ width: "100%", marginBottom: "10px" }}>
				<CardContent>
					<Grid container>
						<Grid item lg={4} xs={12}>
							<img
								style={{ width: "100%", height: "100%" }}
								src={elem.img}
								alt="bottle"
							/>
						</Grid>
						<Grid item lg={7} xs={10}>
							<Typography
								sx={{
									fontWeight: "600 !important",
									fontSize: "22px",
									marginTop: "20px",
									color: "#000620",
								}}>
								{elem.orderNo}
							</Typography>
							<div
								style={{
									display: "flex",
									marginTop: "10px",
								}}>
								<Typography
									sx={{
										color: "#1C97FD",
										fontWeight: "600 !important",
										fontSize: "18px",
									}}>
									{elem.time}
								</Typography>
								<Typography
									sx={{
										marginLeft: "20px",
										fontWeight: 600,
										fontSize: "18px",
									}}
									style={{
										color: elem.status === "Rejected" ? "red" : "green",
									}}>
									{elem.status}
								</Typography>
							</div>
							<Typography
								style={{
									marginTop: "10px",
									color: "#A2A3A5",
									fontWeight: 500,
									fontSize: "17px",
								}}>
								{elem.address}
							</Typography>
						</Grid>
						<Grid item lg={1} xs={2}>
							<Typography
								sx={{
									marginTop: "20px",
									color: "#1C97FD",
									fontWeight: "600 !important",
								}}>
								<span>&#8377;</span>
								{elem.cost}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(Styles)(OrderHistoryCard);
