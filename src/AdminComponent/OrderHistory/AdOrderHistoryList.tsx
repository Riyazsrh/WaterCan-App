/** @format */

import { Box, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { orderHistoryProps } from "../../utils/models/interface";
import { Styles } from "./AdOrderHistoryStyle";
import { withStyles } from "@mui/styles";

interface IProps {
	classes?: any;
	elem: orderHistoryProps;
}
class AdOrderHistoryList extends Component<IProps> {
	render() {
		const { classes, elem } = this.props;
		return (
			<Box sx={{borderBottom: '1px solid #D6DCF3', p:2}}>
				<Grid container alignItems="center" justifyContent="center"
				>
					<Grid item lg={1} md={1} sm={4} xs={4}>
					<img
						style={{ width: "100px", height: "100px" }}
						src={elem.img}
						alt="bottle"
					/>
					</Grid>
					<Grid item lg={4} md={5} sm={8} xs={8}>
						<Box sx={{display:{ lg:'flex',md:'block', sm:'block', xs: "block"}}}>
							<Typography
								sx={{
									fontWeight: "600 !important",
									fontSize: "22px",
									color: "#000620",
									marginLeft: {lg:'20px', md:'45px'}
								}}>
								{elem.orderNo}
							</Typography>
							<Box sx={{display:{lg:'flex',md:'flex', sm:'flex', xs: "flex"},
								marginLeft: {lg:'20px', md:'40px'}
								}}
							>
								<Typography
								sx={{
									color: "#1C97FD",
									fontWeight: "600 !important",
									fontSize: "17px",
								}}>
								{elem.time}
								<span>&nbsp;</span><span style={{color:'#D9D9D9'}}>|</span>
								</Typography>
								<Typography
									sx={{
										marginLeft: "25px",
										fontWeight: 600,
										fontSize: "18px",
										color: elem.status === "Rejected" ? "red" : "green",
									}}
									>
									{elem.status}
								</Typography>
							</Box>
						</Box>
					
					</Grid>
					<Grid item lg={7} md={6} sm={12} xs={12}
					 sx={{display:'flex'}}
					>
					<Typography className={classes.addressText}
						>
						{elem.address}
					</Typography>
					<Typography
						sx={{
							color: "#1C97FD",
							fontWeight: "600 !important",
						}}>
						<span>&#8377;</span>
						{elem.cost}
					</Typography>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

export default withStyles(Styles)(AdOrderHistoryList);
