/** @format */
import React, { Component } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import CustomerHeader from "../../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../../components/sidebar/Sidebar";
import { customerMenus, sellerMenus } from "../../../utils/data/SidebarMenu";
import Header from "../../../components/header/Header";
import Card from "@mui/material/Card";
import { salesman } from "../../../utils/data/dashboardData";
import { withStyles } from "@mui/styles";
import { Styles } from "./Delivery.syle";
import DeliveryBoyCrad from "./DeliveryBoyCrad";
interface IProps {
	classes: any;
}
class DeliveryNearBy extends Component<IProps> {
	render(): React.ReactNode {
		const { classes } = this.props;
		return (
			<div
				style={{
					width: "100%",
					margin: "auto",
					background: "#F2F2F2",
				}}>
				<Grid container>
					<Grid item lg={3} md={4} sm={12} xs={12}>
					<Header menus={sellerMenus} login="false" customer={false} />
                     <Sidebar menus={sellerMenus} customer="true" />
					</Grid>

					<Grid lg={9} md={8} sm={12} xs={12}>
						<CustomerHeader customer={false} />

						<Stack className={classes.ItemContainer}>
							<Grid container>
								<Grid item lg={2} md={0.5} sm={1} xs={12}></Grid>
								<Grid item lg={8} md={11} sm={10} xs={12}>
									<Typography
										variant="h3"
										className={classes.ManNearby}
										sx={{}}>
										Delivery Man Nearby
									</Typography>
									<Card className={classes.mainCard}>
										{salesman.map((person) => {
											return (
												<Stack key={person.id}>
													<DeliveryBoyCrad person={person} />
												</Stack>
											);
										})}
									</Card>
								</Grid>
								<Grid item lg={2} md={0.5} sm={1} xs={12}></Grid>
							</Grid>
						</Stack>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default withStyles(Styles)(DeliveryNearBy);
