/** @format */

import { withStyles } from "@mui/styles";
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Divider,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { Styles } from "./PymentCards.style";
import CustomerHeader from "../shared/customerheader/CustomerHeader";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { customerMenus } from "../../utils/data/SidebarMenu";
import bottel from "../../assets/images/orderBottel.png";

interface Iprops {
	classes: any;
}
class OrderDetails extends React.Component<Iprops> {
	render() {
		const { classes } = this.props;
		return (
			<Grid
				style={{
					width: "100%",
					margin: "auto",
				}}>
				<Grid container sx={{ backgroundColor: "#F2F2F2" }}>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Header menus={customerMenus} login="false" customer={true} />
						<Sidebar menus={customerMenus} customer="true" />
					</Grid>
					<Grid
						item
						lg={9}
						md={8}
						sm={12}
						xs={12}
						sx={{ backgroundColor: "#F2F2F2" }}>
						<Stack sx={{ marginBottom: "45px" }}>
							<CustomerHeader customer={true} />
						</Stack>
						<Container maxWidth={false}>
							<Grid container>
								<Grid item lg={2}></Grid>
								<Grid item lg={8} md={12} xs={12} sm={12}>
									<Typography
										className={classes.TypoTxt}
										sx={{
											fontSize: "20px !important",
											margin: "15px 0 ",
										}}>
										Order Details
									</Typography>
									<Card
										className={classes.OrderCards}
										sx={{ width: "100%" }}>
										<CardContent>
											<Grid container>
												<Grid
													item
													lg={5}
													md={5}
													xs={12}
													sm={5}
													textAlign="center">
													<img src={bottel} alt="bottel" width="200px" />
												</Grid>
												<Grid item lg={7} textAlign="center">
													<Typography variant="h3" margin="25px 0" mr={8}>
														Watercab 25L
													</Typography>
													<Grid
														container
														mt="30px"
														textAlign="justify"
														sx={{ margin: "auto" }}>
														<Grid item lg={1} md={1} sm={1}></Grid>
														<Grid item lg={5} md={5} xs={6} sm={5}>
															<Box>
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	Order date
																</Typography>
																<Divider
																	sx={{
																		backgroundColor: "#C4C4C4",
																		opacity: "0.2",
																	}}
																/>
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	Order Id
																</Typography>
																<Divider
																	sx={{
																		backgroundColor: "#C4C4C4",
																		opacity: "0.2",
																	}}
																/>
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	Amount{" "}
																</Typography>
															</Box>
														</Grid>
														<Grid item lg={5} md={5} xs={6} sm={6}>
															<Box>
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	10 may 2022{" "}
																</Typography>
																<Divider
																	sx={{
																		backgroundColor: "#C4C4C4",
																		opacity: "0.2",
																	}}
																/>
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	Order# ORD00003
																</Typography>
																<Divider
																	sx={{
																		backgroundColor: "#C4C4C4",
																		opacity: "0.2",
																	}}
																/>
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	₹480.00{" "}
																</Typography>
															</Box>
														</Grid>
													</Grid>
													<Button
														className={classes.Editbtn}
														style={{
															borderRadius: "10px 0px 0px 10px",
															textTransform: "capitalize",
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
														cencel Order
													</Button>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid lg={2}></Grid>

								{/* payment-card */}
								<Grid container mt={3}>
									<Grid item lg={2}></Grid>
									<Grid item lg={8} md={12} sm={12} xs={12}>
										<Grid container spacing={2}>
											<Grid item lg={6} md={6} xs={12} sm={6}>
												<Card className={classes.paymentCards}>
													<CardContent>
														<Typography
															className={classes.CardsTxt}
															sx={{
																fontSize: "20px !important",
																textAlign: "center",
															}}>
															Payment info
														</Typography>
														<Box
															sx={{
																display: "flex",
																justifyContent: "space-between",
																marginTop: "10px !important",
															}}>
															<Typography
																className={classes.cardPay}
																sx={{
																	textTransform: "capitalize",
																	fontSize: "16px !important",
																}}>
																Payment Method
															</Typography>
															<Typography
																className={classes.cardPay}
																sx={{ fontSize: "16px !important" }}>
																UPI
															</Typography>
														</Box>
													</CardContent>
												</Card>
											</Grid>
											<Grid item lg={6} md={6} xs={12} sm={6}>
												<Card className={classes.paymentCards}>
													<CardContent>
														<Typography
															className={classes.CardsTxt}
															sx={{
																fontSize: "20px !important",
																textAlign: "center",
															}}>
															Shipping Address
														</Typography>
														<Typography
															className={classes.cardPay}
															sx={{
																textTransform: "capitalize",
																fontSize: "16px !important",
																margin: "0 5px 5px 5px",
															}}>
															near Hocky building lakadganj
															Nagpur,maharashtra 441001 India
														</Typography>
													</CardContent>
												</Card>
											</Grid>
										</Grid>
									</Grid>
									<Grid lg={2}></Grid>
								</Grid>

								{/* order-summary */}
								<Grid container mt={3} mb={4}>
									<Grid item lg={2}></Grid>
									<Grid item lg={8} md={12} xs={12} sm={12}>
										<Card className={classes.OrderCards}>
											<CardContent>
												<Typography
													variant="h3"
													textAlign="center"
													margin="10px 0">
													Order Summary
												</Typography>
												<Grid container sx={{ margin: "0 10px" }}>
													<Grid item lg={10} md={10} sm={10} xs={9}>
														<Box>
															<Typography
																className={classes.orderText}
																sx={{
																	color: "#000620",
																	fontWeight: "600",
																}}>
																Total Bill
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																Delivery Charge
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																floor{" "}
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																Tax Amount(5.0%){" "}
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																Total Discount{" "}
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																can{" "}
															</Typography>
															<Divider />
															<Typography
																className={classes.orderText}
																sx={{
																	color: "#1C97FD",
																	fontWeight: "600",
																}}>
																Grand Total{" "}
															</Typography>
														</Box>
													</Grid>
													<Grid item lg={2} md={2} sm={2} xs={3}>
														<Box>
															<Typography
																className={classes.orderText}
																sx={{
																	color: "#000620",
																	fontWeight: "600",
																}}>
																₹150.00
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																₹0.00
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																₹15.00{" "}
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																₹15.00{" "}
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																₹0.00{" "}
															</Typography>
															<Divider />
															<Typography className={classes.orderText}>
																₹300.00{" "}
															</Typography>
															<Divider />
															<Typography
																className={classes.orderText}
																sx={{
																	color: "#1C97FD",
																	fontWeight: "600",
																}}>
																₹480.00
															</Typography>
														</Box>
													</Grid>
												</Grid>
											</CardContent>
										</Card>
									</Grid>
									<Grid item lg={2}></Grid>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(Styles)(OrderDetails);
