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
import { Styles } from "./RecentOrderDetail.style";
import CustomerHeader from "../../shared/customerheader/CustomerHeader";
import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import {
	customerMenus,
	sellerMenus,
} from "../../../utils/data/SidebarMenu";
import bottel from "../../../assets/images/orderBottel.png";
import karan from "../../../assets/images/Karan.png";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import OtpModal from "../../shared/OtpModal/OtpModal";
const black = "black";
const green = "#00BC00";
const white = "#F2F2F2";
const red = "red";

interface Iprops {
	classes: any;
}
interface myState {
	color: string;
	background: string;
	closeColor: string;
	closeBackground: string;
	OpenModal: boolean;
}

class RecentOrderDetail extends React.Component<Iprops, myState> {
	constructor(props: any) {
		super(props);
		this.state = {
			color: black,
			background: white,
			closeColor: black,
			closeBackground: white,
			OpenModal: false,
		};
		this.changeColor = this.changeColor.bind(this);
		this.closeChangeColor = this.closeChangeColor.bind(this);
	}
	changeColor() {
		const newColor = this.state.color === black ? white : black;
		const newBgColor = this.state.background === white ? green : white;
		this.setState({ color: newColor, background: newBgColor });
	}
	closeChangeColor() {
		const newColor = this.state.closeColor === black ? white : black;
		const closeBgColor =
			this.state.closeBackground === white ? red : white;
		this.setState({ closeColor: newColor, closeBackground: closeBgColor });
	}
	handleOpenModal = () => {
		this.setState({ OpenModal: true });
	};
	closeModal = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ OpenModal: false });
	};

	render() {
		console.log(this.props);
		const { classes } = this.props;
		return (
			<Grid
				style={{
					width: "100%",
					margin: "auto",
				}}>
				<Grid container sx={{ backgroundColor: "#F2F2F2" }}>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Header menus={sellerMenus} login="false" customer={false} />
						<Sidebar menus={sellerMenus} customer="true" />
					</Grid>
					<Grid
						item
						lg={9}
						md={8}
						sm={12}
						xs={12}
						sx={{ backgroundColor: "#F2F2F2" }}>
						<Stack sx={{ marginBottom: "45px" }}>
							<CustomerHeader customer={false} />
						</Stack>
						<Container maxWidth={false}>
							<Grid container>
								<Grid item lg={2}></Grid>
								<Grid item lg={8} md={12} xs={12} sm={12}>
									<Grid container className={classes.container}>
										<Grid item lg={4} md={4} sm={4} xs={6}>
											<Typography
												className={classes.TypoTxt}
												sx={{ fontSize: "20px !important" }}>
												Order Details
											</Typography>
										</Grid>
										<Grid
											item
											lg={3}
											md={3}
											sm={3}
											xs={5}
											display="flex"
											justifyContent="center"
											alignItems="center"
											columnGap={2}>
											<DoneIcon
												onClick={this.handleOpenModal}
												className={classes.Icons1}
												style={{
													color: this.state.color,
													background: this.state.background,
													border: "2px solid #00BC00",
												}}
											/>

											<OtpModal
												customer={false}
												open={this.state.OpenModal}
												onClose={this.closeModal}
											/>
											<Typography className={classes.CardsTxt}>
												Accepted
											</Typography>
											<CloseIcon
												className={classes.Icons2}
												sx={{
													color: this.state.closeColor,
													background: this.state.closeBackground,
													border: "2px solid #F81919",
												}}
											/>
										</Grid>
										<Grid
											item
											lg={5}
											md={5}
											sm={5}
											xs={12}
											display="flex"
											sx={{ marginTop: "5px", justifyContent: "center" }}>
											<Button
												className={classes.Deliverbtn}
												sx={{
													textTransform: "capitalize",
												}}
												onClick={this.changeColor}>
												Delivered
											</Button>
											<Button
												className={classes.Transferbtn}
												sx={{
													textTransform: "capitalize",
													display: {
														xs: "none",
														sm: "inline",
														lg: "inline ",
														md: "flex ",
													},
												}}
												onClick={this.closeChangeColor}>
												Transfer
											</Button>
										</Grid>
									</Grid>
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
																<Divider className={classes.divider} />
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	Order Id
																</Typography>
																<Divider className={classes.divider} />
																<Typography
																	className={classes.orderText}
																	sx={{
																		lineHeight: "50px !important",
																		color: "#000620",
																		fontWeight: "600",
																	}}>
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
																<Divider className={classes.divider} />
																<Typography
																	className={classes.orderText}
																	sx={{ lineHeight: "50px !important" }}>
																	Order# ORD00003
																</Typography>
																<Divider className={classes.divider} />
																<Typography
																	className={classes.orderText}
																	sx={{
																		lineHeight: "50px !important",
																		color: "#1C97FD",
																		fontWeight: "600",
																	}}>
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
														Make A call
													</Button>
													<Button
														className={classes.Editbtn}
														style={{
															backgroundColor: "#8DCBFE",
															borderRadius: "0px 10px 10px 0px",
															textTransform: "capitalize",
														}}>
														Directions
													</Button>
												</Grid>
											</Grid>
										</CardContent>
									</Card>
								</Grid>
								<Grid lg={2}></Grid>

								{/* order-summary */}
								<Grid container mt={3} mb={3}>
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
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																Delivery Charge
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																floor{" "}
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																Tax Amount(5.0%){" "}
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																Total Discount{" "}
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																can{" "}
															</Typography>
															<Divider className={classes.divider} />
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
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																₹0.00
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																₹15.00{" "}
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																₹15.00{" "}
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																₹0.00{" "}
															</Typography>
															<Divider className={classes.divider} />
															<Typography className={classes.orderText}>
																₹300.00{" "}
															</Typography>
															<Divider className={classes.divider} />
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

								{/* payment-card */}
								<Grid container mb={3}>
									<Grid item lg={2}></Grid>
									<Grid item lg={8} md={12} sm={12} xs={12}>
										<Grid container spacing={2}>
											<Grid item lg={6} md={6} xs={12} sm={6}>
												<Card className={classes.paymentCards}>
													<CardContent>
														<Typography
															className={classes.CardsTxt}
															sx={{
																fontSize: "18px !important",
																textAlign: "center",
																marginBottom: "10px",
															}}>
															Shipping Address
														</Typography>
														<Box sx={{ textAlign: "center" }}>
															<img
																src={karan}
																alt="karan Kundra"
																width="64px"
															/>
															<Typography className={classes.CardsTxt}>
																karan kundra
															</Typography>
														</Box>
														<Typography
															className={classes.cardPay}
															sx={{
																textTransform: "capitalize",
																fontSize: "12px !important",
															}}>
															Rani durgawati chowk, 17, IFN puspanjali
															hall, Panchsheel , Nagpur, Maharashtra 440017
														</Typography>
													</CardContent>
												</Card>
											</Grid>
										</Grid>
									</Grid>
									<Grid lg={2}></Grid>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(Styles)(RecentOrderDetail);
