/** @format */

import { Grid, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import Header from "../../../components/header/Header";
import ProductCard from "../../../components/productsection/ProductCard";
import CustomerHeader from "../../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../../components/sidebar/Sidebar";
import { myOrderData } from "../../../utils/data/ProductData";
import { customerMenus } from "../../../utils/data/SidebarMenu";
import { Styles } from "./order.styles";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

interface IProps {
	classes: any;
}
class Order extends Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<div
				style={{
					width: "100%",
					margin: "auto",
				}}>
				<Grid container>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Header menus={customerMenus} login="false" customer={true} />
						<Sidebar menus={customerMenus} customer="true" />
					</Grid>

					<Grid item lg={9} md={8} sm={12} xs={12}>
						<Stack sx={{ marginBottom: "20px" }}>
							<CustomerHeader customer={true} />
						</Stack>

						<Stack sx={{ marginTop: "30px", padding: "30px" }}>
							<Typography variant="h3" sx={{ margin: "30px 0" }}>
								My Orders
							</Typography>
							<Stack className={classes.myOrder}>
								{myOrderData.map((ele: any) => {
									return (
										<Grid item md={4} sm={6} xs={12}>
											<Link to="/orderDetails">
												<ProductCard ele={ele} />
											</Link>
										</Grid>
									);
								})}
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(Styles)(Order);
