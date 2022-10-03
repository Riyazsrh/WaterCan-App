/** @format */

import React, { Component } from "react";
import {
	Stack,
	Container,
	Box,
	Grid,
	Card,
	FormControl,
	RadioGroup,
	FormControlLabel,
	Radio,
	TextField,
	ListItem,
	Divider,
	ListItemText,
	CardContent,
} from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import YourBank1 from "../../assets/images/paymentImg/YourBank1.png";
import MasterCard2 from "../../assets/images/paymentImg/MasterCard2.png";
import Visa3 from "../../assets/images/paymentImg/Visa3.png";
import Maestro4 from "../../assets/images/paymentImg/Maestro4.png";
import America5 from "../../assets/images/paymentImg/America5.png";
import { Styles } from "./PaymentPage.style";
import { withStyles } from "@mui/styles";
import Header from "../header/Header";
import { customerMenus } from "../../utils/data/SidebarMenu";
import CongratsModal from "../ProfileDrawer/CongratsModal";
import CButton from "../shared/commonButton/CButton";

type IProps = {
	classes: any;
};

class PaymentPage extends Component<IProps> {
	state = {
		Open: false,
	};
	handleClickFunc = () => {
		this.setState({
			Open: true,
		});
	};
	handleCloseFunc = () => {
		this.setState({
			Open: false,
		});
	};
	render() {
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
					</Grid>
					<Grid item lg={9} md={8} sm={12} xs={12}>
						<CustomerHeader customer={true} />
						<Container maxWidth={false}>
							<Grid container spacing={3} sx={{ marginTop: "-40px" }}>
								<Grid item lg={8} md={12} sm={12} xs={12}>
									<Box sx={{ marginTop: "70px", marginBottom: "20px" }}>
										<h2>Payment Method</h2>
									</Box>
									<Grid container>
										<Grid item lg={12} sm={12} xs={12}>
											<Card sx={{ minWidth: "100%" }}>
												<CardContent>
													<Box sx={{ marginLeft: "10px" }}>
														<FormControl>
															<RadioGroup
																aria-labelledby="demo-radio-buttons-group-label"
																defaultValue="female"
																name="radio-buttons-group">
																<FormControlLabel
																	value="female"
																	control={<Radio />}
																	label="Add Debit/Credit/ATM Card"
																/>
															</RadioGroup>
														</FormControl>
													</Box>
													<Box sx={{ marginLeft: "40px" }}>
														<Grid container>
															<Grid
																item
																lg={2}
																md={2}
																sm={2}
																xs={2}></Grid>
															<Grid item lg={12} md={12} sm={12} xs={12}>
																<img
																	alt="your bank"
																	src={YourBank1}
																	className={classes.image}
																/>
																<img
																	alt="mastercard"
																	src={MasterCard2}
																	className={classes.image}
																/>
																<img
																	alt="visa"
																	src={Visa3}
																	className={classes.image}
																/>
																<img
																	alt="maestro"
																	src={Maestro4}
																	className={classes.image}
																/>
																<img
																	alt="american express"
																	src={America5}
																	className={classes.image}
																/>
															</Grid>
														</Grid>
													</Box>

													<Grid
														container
														spacing={2}
														sx={{ marginTop: "0px" }}>
														<Grid item lg={1} md={1}></Grid>
														<Grid item lg={6} md={6} sm={12} xs={12}>
															<TextField
																label="Card No"
																name="Card No"
																variant="outlined"
																className={classes.field}
																sx={{ marginLeft: "0px", width: "100%" }}
															/>
														</Grid>
														<Grid item lg={2.5} md={2.5} sm={6} xs={6}>
															<TextField
																label="Expire"
																name="Expire"
																variant="outlined"
																className={classes.field}
															/>
														</Grid>
														<Grid item lg={2.5} md={2.5} sm={6} xs={6}>
															<TextField
																label="CVC Code"
																name="CVC Code"
																variant="outlined"
																className={classes.field}
															/>
														</Grid>
													</Grid>
													<Grid
														container
														spacing={2}
														sx={{ marginTop: "0px" }}>
														<Grid item lg={1} md={1}></Grid>
														<Grid item lg={6} md={6} sm={12} xs={12}>
															<TextField
																label="Card No"
																name="Card No"
																variant="outlined"
																className={classes.field}
																sx={{ marginLeft: "0px", width: "100%" }}
															/>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</Grid>
									</Grid>

									<Grid container spacing={2} sx={{ marginTop: "10px" }}>
										<Grid item lg={6} md={6} sm={12} xs={12}>
											<Card
												sx={{
													minWidth: 275,
													borderRadius: "10px",
													height: "60px",
													boxShadow:
														"2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
												}}>
												<Box
													sx={{ marginLeft: "20px", marginTop: "10px" }}>
													<FormControl>
														<RadioGroup
															aria-labelledby="demo-radio-buttons-group-label"
															defaultValue="female"
															name="radio-buttons-group">
															<FormControlLabel
																value="female"
																control={<Radio />}
																label="Net Banking"
															/>
														</RadioGroup>
													</FormControl>
												</Box>
											</Card>
										</Grid>
										<Grid item lg={6} md={6} sm={12} xs={12}>
											<Card
												sx={{
													minWidth: 275,
													borderRadius: "10px",
													height: "60px",
													boxShadow:
														"2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
												}}>
												<Box
													sx={{ marginLeft: "20px", marginTop: "10px" }}>
													<FormControl>
														<RadioGroup
															aria-labelledby="demo-radio-buttons-group-label"
															defaultValue="female"
															name="radio-buttons-group">
															<FormControlLabel
																value="female"
																control={<Radio />}
																label="UPI Apps"
															/>
														</RadioGroup>
													</FormControl>
												</Box>
											</Card>
										</Grid>
										<Grid item lg={6} md={6} sm={12} xs={12}>
											<Card
												sx={{
													minWidth: 275,
													borderRadius: "10px",
													height: "60px",
													boxShadow:
														"2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
												}}>
												<Box
													sx={{ marginLeft: "20px", marginTop: "10px" }}>
													<FormControl>
														<RadioGroup
															aria-labelledby="demo-radio-buttons-group-label"
															defaultValue="female"
															name="radio-buttons-group">
															<FormControlLabel
																value="female"
																control={<Radio />}
																label="Pay On Delivery"
															/>
														</RadioGroup>
													</FormControl>
												</Box>
											</Card>
										</Grid>
									</Grid>
								</Grid>

								<Grid item lg={4} md={12} sm={12} xs={12}>
									<Card
										sx={{
											boxShadow:
												"2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
											background: "white",
											marginTop: "80px",
											borderRadius: "20px",
										}}>
										<ListItem alignItems="flex-start">
											<ListItemText primary="Total Payment" />
											<ListItemText
												primary="$150"
												className={classes.list}
											/>
										</ListItem>
										<Divider variant="middle" />
										<ListItem alignItems="flex-start">
											<ListItemText secondary="Delivery" />
											<ListItemText
												secondary="$0"
												sx={{ marginLeft: "100px" }}
											/>
										</ListItem>
										<Divider variant="middle" />

										<ListItem alignItems="flex-start">
											<ListItemText secondary="Floor" />
											<ListItemText
												secondary="$15"
												sx={{ marginLeft: "120px" }}
											/>
										</ListItem>
										<Divider variant="middle" />

										<ListItem alignItems="flex-start">
											<ListItemText secondary="Tax Amount(5.0%)" />
											<ListItemText
												secondary="$15"
												sx={{ marginLeft: "30px" }}
											/>
										</ListItem>
										<Divider variant="middle" />

										<ListItem alignItems="flex-start">
											<ListItemText secondary="Total Discount" />
											<ListItemText
												secondary="$0"
												sx={{ marginLeft: "50px" }}
											/>
										</ListItem>
										<Divider variant="middle" />

										<ListItem alignItems="flex-start">
											<ListItemText secondary="Can" />
											<ListItemText
												secondary="$300"
												sx={{ marginLeft: "110px" }}
											/>
										</ListItem>
										<Divider variant="middle" />

										<ListItem alignItems="flex-start">
											<ListItemText primary="Grand Total" />
											<ListItemText
												primary="$480"
												sx={{ marginLeft: "50px" }}
											/>
										</ListItem>

										<Stack
											onClick={this.handleClickFunc}
											className={classes.payBtn}>
											<CButton title="pay now " />
										</Stack>
										<CongratsModal
											open={this.state.Open}
											onClose={this.handleCloseFunc}
										/>
									</Card>
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(Styles)(PaymentPage);
