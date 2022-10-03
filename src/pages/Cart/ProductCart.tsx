/** @format */

import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import "./ProductCart.css";
import DeleteIcon from "@mui/icons-material/Delete";

type IProps = {
	ele: any;
};

class ProductCart extends React.Component<IProps> {
	state = {
		addToCart: false,
	};
	render() {
		return (
			<Stack className="customerCartCard" id="card">
				<Stack className="customerCardContent">
					<Stack>
						<img
							id="imgTag"
							src={this.props.ele.imgPath}
							alt={this.props.ele.label}
							style={{
								width: "100%",
								height: "150px",
								objectFit: "contain",
							}}
						/>
					</Stack>
					<Stack className="cartTextContent">
						<Typography
							sx={{ color: "#000620", fontSize: "14px !important" }}>
							{this.props.ele.label}
						</Typography>
						<Typography className="cart-price">
							{this.props.ele.price1}{" "}
							<Typography className="cart-price" component="del">
								{this.props.ele.price2}
							</Typography>
						</Typography>
						<Box className="counter">
							<Button className="customer-cart-btn">-</Button>
							<Box className="count">2</Box>
							<Button className="customer-cart-btn">+</Button>
							<Button className="customer-cart-btn delete">
								<DeleteIcon
									sx={{
										color: "white",
										fontSize: "17px",
									}}
								/>
							</Button>
						</Box>
					</Stack>
				</Stack>
			</Stack>
		);
	}
}

export default ProductCart;
