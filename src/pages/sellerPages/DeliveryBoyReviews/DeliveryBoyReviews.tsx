/** @format */
import React, { Component } from "react";
import {
	Stack,
	Typography,
	Grid,
	CardContent,
	Box,
	CardActions,
	Button,
} from "@mui/material";
import CustomerHeader from "../../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../../components/sidebar/Sidebar";
import { customerMenus, sellerMenus } from "../../../utils/data/SidebarMenu";
import Header from "../../../components/header/Header";
import Card from "@mui/material/Card";
import { withStyles } from "@mui/styles";
import { Styles } from "../DeliveryNearby/Delivery.syle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import salesImage from "../../../assets/images/Seller/salesman.png";
import StarIcons from "../../../components/shared/starIcons/StarIcons";
import { ReviewsData } from "../../../utils/data/ReviewsData";
import ReviewCard from "./ReviewCard";

interface IProps {
	classes: any;
}
class DeliverBoyReviews extends Component<IProps> {
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
								<Grid item lg={2} md={0.5} sm={0.5} xs={12}></Grid>
								<Grid item lg={8} md={11} sm={11} xs={12}>
									<Stack sx={{ position: "relative", marginTop: "100px" }}>
										<Stack className={classes.imagePosition}>
											<img src={salesImage} width={150} height={150} />
										</Stack>

										<Card className={classes.mainCard}>
											<Stack
												sx={{
													flexDirection: {
														md: "column !important",
														alignItems: "flex-end",
													},
												}}
												className={classes.cardContents}>
												<Stack className={classes.innerCardReviewContent}>
													<Stack className={classes.emptyDiv}></Stack>
													<CardContent
														className={classes.cardReviewContent}>
														<Box>
															<Typography
																variant="h3"
																className={classes.PersonName}>
																Kiran Kumar
															</Typography>
															<Box className={classes.boxReviewContent}>
																<Box className={classes.boxContent}>
																	<LocationOnIcon
																		className={classes.LocationIcon}
																	/>
																	<Typography
																		variant="h3"
																		className={classes.distance}>
																		1.1 km
																	</Typography>
																</Box>
																<Box>
																	{" "}
																	<Typography
																		sx={{ marginTop: { md: "10px" } }}
																		className={classes.rating}>
																		<StarIcons />
																	</Typography>
																</Box>
															</Box>
														</Box>
													</CardContent>
												</Stack>

												<CardActions className={classes.btnSec}>
													<Button disableRipple variant="text">
														Transfer Delivery
													</Button>
												</CardActions>
											</Stack>
											<Typography
												variant="h3"
												className={classes.ManNearby}
												sx={{}}>
												Reviews
											</Typography>
											{ReviewsData.map((item) => (
												<Stack key={item.id}>
													<ReviewCard item={item} />
												</Stack>
											))}
										</Card>
									</Stack>
								</Grid>
								<Grid item lg={2} md={0.5} sm={0.5} xs={12}></Grid>
							</Grid>
						</Stack>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default withStyles(Styles)(DeliverBoyReviews);
