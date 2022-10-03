/** @format */

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import "./Login.css";
import bottleCan from "../../assets/images/can.png";
import Customer from "../../assets/images/customer.png";
import DeliveryBoy from "../../assets/images/delivery-boy.png";
import activeCheck from "../../assets/images/active-check.png";
import "./Carousel.css";
import React from "react";

class CarouselLogin extends React.Component {
	state = {
		activeClass: "seller",
	};

	handleActive(category: string): void {
		this.setState({
			activeClass: category,
		});
	}
	
	render() {
		return (
			<>
				<div className="carousel-wrapper">
					<Carousel
						centerMode
						showArrows={false}
						showStatus={false}
						showIndicators={false}>
						<div style={{ marginRight: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									padding: "20px",
								}}
								className={
									this.state.activeClass === "seller"
										? "active login-sidebar-slide-1"
										: "login-sidebar-slide-1"
								}
								onClick={() => this.handleActive("seller")}>
								<div>
									<Typography
										sx={{ marginRight: "50px", textAlign: "left" }}
										className="login-sidebar-content">
										I’m <br /> the Seller
									</Typography>
								</div>
								<div>
									<img
										style={{
											paddingRight: "100px",

											marginLeft: "-50px",
										}}
										className="login-sidebar-image login-sidebar-image-1"
										src={bottleCan}
										alt="bottle splashing water"
									/>
								</div>
								{this.state.activeClass === "seller" && (
									<>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</div>
						</div>
						<div style={{ marginRight: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									padding: "20px",
								}}
								className={
									this.state.activeClass === "customer"
										? "active login-sidebar-slide-2"
										: "login-sidebar-slide-2"
								}
								onClick={() => this.handleActive("customer")}>
								<div>
									<Typography
										sx={{ marginRight: "30px", textAlign: "left" }}
										className="login-sidebar-content">
										I’m <br /> customer
									</Typography>
								</div>
								<div>
									<img
										style={{
											paddingRight: "60px",
											width: "80%",
											marginLeft: "-10px",
										}}
										className="login-sidebar-image login-sidebar-image-2"
										src={Customer}
										alt="bottle splashing water"
									/>
								</div>
								{this.state.activeClass === "customer" && (
									<>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</div>
						</div>
						<div style={{ marginRight: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									padding: "20px",
								}}
								className={
									this.state.activeClass === "deliveryBoy"
										? "active login-sidebar-slide-3"
										: "login-sidebar-slide-3"
								}
								onClick={() => this.handleActive("deliveryBoy")}>
								<div>
									<Typography
										sx={{ marginRight: "50px", textAlign: "left" }}
										className="login-sidebar-content">
										I’m <br /> Delivery Boy
									</Typography>
								</div>
								<div>
									<img
										style={{
											paddingRight: "50px",
											marginLeft: "-70px",
										}}
										className="login-sidebar-image login-sidebar-image-3"
										src={DeliveryBoy}
										alt="bottle splashing water"
									/>
								</div>
								{this.state.activeClass === "deliveryBoy" && (
									<>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</div>
						</div>
					</Carousel>
				</div>
			</>
		);
	}
}

export default CarouselLogin;
