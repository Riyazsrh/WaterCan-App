/** @format */

import React, { Component } from "react";
import {
	Stack,
	Typography,
	Grid,
	Container,
	Button,
	Box,
	CardContent,
	Card,
} from "@mui/material";
import { Styles } from "./TrackOrderStyles";
import { withStyles } from "@mui/styles";

import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import { customerMenus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";
import "./TrackOrder.css";
import DoneIcon from "@mui/icons-material/Done";
import Parcel from "../../assets/images/parcel.png";

interface IProps {
	classes: any;
}

class TrackOrder extends Component<IProps> {
	state = {
		isEnter: true,
	};
	render(): React.ReactNode {
		const { classes } = this.props;
		return (
			<Box
				style={{
					width: "100%",
					margin: "auto",
				}}>
				{/* Grid Item for Cart */}
				<Grid container>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Header menus={customerMenus} login="false" customer={true} />
						<Sidebar menus={customerMenus} customer="true" />
					</Grid>

					<Grid item lg={9} md={8} sm={12} xs={12}>
						<Stack
							sx={{
								backgroundColor: "#F2F2F2",
								minHeight: "100vh",
								width: "100%",
							}}>
							<Stack sx={{ marginBottom: "20px" }}>
								<CustomerHeader customer={true} />
							</Stack>

							<Container maxWidth={false}>
								<Grid container>
									<Grid item lg={2} sm={2} xs={2}></Grid>
									<Grid
										sx={{ marginTop: "30px" }}
										item
										lg={8}
										md={12}
										xs={12}
										sm={12}>
										<Typography
											sx={{
												fontSize: "24px !important",
												fontWeight: "600 !important",
											}}>
											Track Order
										</Typography>
										<Card
											sx={{
												minWidth: "100%",
												backgroundColor: "white !important",
												marginTop: "15px",
												borderRadius: "15px",
											}}>
											<CardContent>
												<Box className={classes.stepperWrapper}>
													<Box className="stepper-item completed">
														<Box className="step-counter">
															<DoneIcon
																sx={{ color: "white", fontSize: "2.2rem" }}
															/>
														</Box>
														<Box className="step-name">Ordered Today</Box>
													</Box>
													<Box className="stepper-item completed">
														<Box className="step-counter">
															<DoneIcon
																sx={{ color: "white", fontSize: "2.2rem" }}
															/>
														</Box>
														<Box className="step-name">Shipping</Box>
													</Box>
													<Box className="stepper-item active diff">
														<Box className="step-counter"></Box>
														<Box className="step-name">
															Out For Delivery
														</Box>
													</Box>
													<Box className="stepper-item diff">
														<Box className="step-counter"></Box>
														<Box className="step-name">Arriving</Box>
													</Box>
												</Box>
											</CardContent>
										</Card>
										<Grid
											justifyContent="space-between"
											container
											spacing={2}
											sx={{ marginTop: "20px" }}>
											<Grid item lg={2} md={3} sm={2} xs={3}>
												<Box>
													<img src={Parcel} alt="parcel" />
												</Box>
											</Grid>
											<Grid item lg={5} md={9} sm={5} xs={9}>
												<Typography
													sx={{ fontSize: "24px !important" }}
													className={classes.orderBold}>
													Order# ORD00003
												</Typography>
												<Typography>
													Order confirmed on Saturday 6:50 pm May 20, 2022
												</Typography>
											</Grid>
											<Grid item lg={5} md={12} sm={5} xs={12}>
												<Box
													sx={{
														width: "100%",
														margin: "auto",
														display: "flex !important",
														justifyContent: "center !important",
														alignItems: "center !important",
													}}>
													<Button
														className={classes.Editbtn}
														style={{
															borderRadius: "10px 0px 0px 10px",
															textTransform: "capitalize",
															backgroundColor: "white",
														}}>
														Track Order
													</Button>
													<Button
														className={classes.Editbtn}
														style={{
															backgroundColor: "#8DCBFE",
															borderRadius: "0px 10px 10px 0px",
															textTransform: "capitalize",
														}}>
														Cancel Order
													</Button>
												</Box>
											</Grid>
										</Grid>
									</Grid>
									<Grid item lg={2} sm={2} xs={2}></Grid>
								</Grid>
							</Container>
						</Stack>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

export default withStyles(Styles)(TrackOrder);
