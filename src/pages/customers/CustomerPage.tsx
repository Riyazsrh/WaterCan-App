/** @format */

import React, { Component } from "react";
import { Stack, Grid, Container } from "@mui/material";
import SimpleSlider from "../../components/shared/CarouselBanner";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Title from "../../components/shared/title/Title";
import { shopDetails } from "../../utils/data/ShopNearbyData";
import ShopNearbyCart from "./shopNearbyCart/ShopNearbyCart";
import Sidebar from "../../components/sidebar/Sidebar";
import FooterBottom from "../../components/footer/footerBottom/FooterBottom";
import { customerMenus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";
import { Styles } from "./shopNearbyCart/shopcart.styles";
import { withStyles } from "@mui/styles";
import CommonSidebarHeader from "../../components/shared/commonSidebarHeader/CommonSidebarHeader";
interface IProps {
	classes: any;
}
class CustomerPage extends Component<IProps> {
	render(): React.ReactNode {
		const { classes } = this.props;
		return (
			<>
				<CommonSidebarHeader customer={true} />
				<div
					style={{
						width: "100%",
						margin: "auto",
					}}>
					<Grid container>
						<Grid item lg={3} md={4} sm={12} xs={12}></Grid>
						<Grid item lg={9} md={8} sm={12} xs={12}>
							<Container maxWidth={false}>
								<Stack className={classes.Slider}>
									<SimpleSlider />
								</Stack>

								<Stack id="ShopNearby">
									<Title title="Shop Nearby" />
									<Stack>
										{shopDetails.map((item) => (
											<ShopNearbyCart key={item.id} item={item} />
										))}
									</Stack>
								</Stack>
							</Container>
							<FooterBottom />
						</Grid>
					</Grid>
				</div>
			</>
		);
	}
}

export default withStyles(Styles)(CustomerPage);
