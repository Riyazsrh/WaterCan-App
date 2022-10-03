/** @format */

import React, { Component } from "react";
import {
	Stack,
	Typography,
	Grid,
	Box,
	Card,
	Divider,
} from "@mui/material";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Cart.css";
import { data } from "../../utils/data/CustomerCartData";
import ProductCart from "./ProductCart";
import { Styles } from "./ProductStyles";
import { withStyles } from "@mui/styles";
import { customerMenus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import CButton from "../../components/shared/commonButton/CButton";

interface IProps {
	classes: any;
}

class Cart extends Component<IProps> {
	state = {
		isEnter: true,
	};
	render(): React.ReactNode {
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
						<Grid item lg={9} md={4} sm={12} xs={12}>
							<Stack sx={{ marginBottom: "20px" }}>
								<CustomerHeader customer={false} />
							</Stack>
						</Grid>
					</Grid>

					<Grid
						item
						container
						lg={9}
						md={8}
						sm={12}
						xs={12}
						justifyContent="space-evenly">
						<Grid
							className={classes.cartProductCart}
							item
							lg={7}
							md={11}
							sx={{ margin: "6px" }}>
							<Typography
								sx={{
									fontSize: "24px !important",
									fontWeight: "600 !important",
								}}
								className={classes.customerCartText}>
								Cart
							</Typography>
							<Grid container justifyContent="space-evenly">
								{data.map((ele: any) => {
									return (
										<Grid item sm={6} xs={10} lg={3}>
											<Box className={classes.cardBox}>
												<ProductCart ele={ele} />
											</Box>
										</Grid>
									);
								})}
							</Grid>
						</Grid>
						<Grid item xs={10} sm={10} lg={4} md={10}>
							<Card className={classes.customerCartCard}>
								<Box>
									<Box className={classes.cartflexBetween}>
										<Typography
											sx={{ fontWeight: "600 !important" }}
											className={classes.cartFirstTextCheckout}>
											Total Bill
										</Typography>
										<Typography className={classes.cartFirstTextCheckout}>
											₹ 150.00
										</Typography>
									</Box>
									<Divider />
									<Box className={classes.cartflexBetween}>
										<Typography className="cart-checkout-text">
											Delivery Charge
										</Typography>
										<Typography className="cart-checkout-text">
											₹ 0.00
										</Typography>
									</Box>
									<Divider />
									<Box className={classes.cartflexBetween}>
										<Typography className="cart-checkout-text">
											Floor
										</Typography>
										<Typography className="cart-checkout-text">
											₹ 15.00
										</Typography>
									</Box>
									<Divider />
									<Box className={classes.cartflexBetween}>
										<Typography className="cart-checkout-text">
											Tax Amount(5.0%)
										</Typography>
										<Typography className="cart-checkout-text">
											₹ 15.00
										</Typography>
									</Box>
									<Divider />
									<Box className={classes.cartflexBetween}>
										<Typography className="cart-checkout-text">
											Total Discount
										</Typography>
										<Typography className="cart-checkout-text">
											₹ 0.00
										</Typography>
									</Box>
									<Divider />
									<Box className={classes.cartflexBetween}>
										<Typography className="cart-checkout-text">
											Can
										</Typography>
										<Typography className="cart-checkout-text">
											₹ 300.00
										</Typography>
									</Box>
									<Divider />
									<Box className={classes.cartflexBetween}>
										<Typography sx={{ fontWeight: "600 !important" }}>
											Grand Total
										</Typography>
										<Typography className="cart-total">
											₹ 480.00
										</Typography>
									</Box>
									<Divider sx={{ marginTop: "12px" }} />
								</Box>

								<Link to="/PaymentPage">
									<Stack className={classes.cartBtnn}>
										<CButton title="checkout " />
									</Stack>
								</Link>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(Styles)(Cart);
