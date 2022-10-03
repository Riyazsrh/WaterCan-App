/** @format */

import React, { Component } from "react";
import {
	Button,
	Card,
	CardMedia,
	CardActions,
	Stack,
} from "@mui/material";
import { shopDataType } from "../../../utils/models/interface";
import { Styles } from "./shopcart.styles";
import CustomerDetail from "../../../components/shared/customerdetails/CustomerDetail";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

interface IProps {
	item: shopDataType;
	classes: any;
}
class ShopNearbyCart extends Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<Card className={classes.MuiPaperRoot} >
				<CardMedia
					component="img"
					image={this.props.item.image}
					alt={this.props.item.shopName}
					className={classes.imgTag}
				/>
				<Stack className={classes.customerinfo}>
					<CustomerDetail item={this.props.item} />
				</Stack>

				<CardActions className={classes.btnSec}>
					<Link to="/shop-details"> 
					<Button disableRipple variant="text">
						More Details
					</Button>
					</Link>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(Styles)(ShopNearbyCart);
