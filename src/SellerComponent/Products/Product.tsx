/** @format */

import { withStyles } from "@mui/styles";
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	Divider,
	Grid,
	Stack,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { Styles } from "./Product.styles";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { customerMenus, sellerMenus } from "../../utils/data/SidebarMenu";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SellerProductData } from "../../utils/data/SellerProductsData";
import AddProduct from "../AddProduct/AddProduct";
import CommonDialogBox from "../../components/shared/CommonDialogBox";

interface Iprops {
	classes: any;
}

interface myState {
	openDrawer: boolean;
	open: boolean;
}

class Product extends React.Component<Iprops, myState> {
	state = {
		openDrawer: false,
		open: false,
	};

	closeModal = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({
			open: false,
		});
	};

	handleClickOpenFunc = () => {
		this.setState({
			openDrawer: true,
		});
	};

	handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ openDrawer: false });
	};

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
										<Grid item lg={9} md={9} xs={12} sm={9}>
											<Typography
												className={classes.TypoTxt}
												sx={{ fontSize: "20px !important" }}>
												Product
											</Typography>
										</Grid>
										<Grid item lg={3} md={3} xs={12} sm={3}>
											<Button
												className={classes.addBtn}
												onClick={this.handleClickOpenFunc}>
												Add new +
											</Button>
										</Grid>
									</Grid>
									<AddProduct
										open={this.state.openDrawer}
										onClose={this.handleClose}
									/>
									{SellerProductData.map((item: any) => {
										return (
											<Card
												className={classes.ProductCards}
												sx={{ width: "100%", margin: "15px 0" }}>
												<CardContent>
													<Grid container>
														<Grid
															item
															lg={3}
															md={5}
															xs={12}
															sm={12}
															textAlign="center">
															<img
																src={item.img}
																alt="bottel"
																width="140px"
															/>
														</Grid>
														<Grid item lg={9} md={7} xs={12} sm={12}>
															<Grid container>
																<Grid
																	item
																	lg={10}
																	md={10}
																	xs={10}
																	sm={10}
																	mt={2}>
																	<Typography variant="h3">
																		{item.label}
																	</Typography>
																</Grid>
																<Grid
																	item
																	lg={2}
																	md={2}
																	xs={2}
																	sm={2}
																	mt={1}>
																	<Switch sx={{ float: "right" }} />
																</Grid>
																<Box display="flex" mt={1}>
																	<Typography className={classes.rate}>
																		{item.price1}
																	</Typography>
																	<Typography className={classes.rate}>
																		{item.price2}
																	</Typography>
																</Box>
															</Grid>
															<Button
																className={classes.Editbtn}
																sx={{
																	borderRadius: "10px 0px 0px 10px",
																	textTransform: "capitalize",
																	borderRight:
																		"1px solid #A2A3A5 !important",
																}}>
																<EditIcon /> Edit
															</Button>
															<Button
																className={classes.Editbtn}
																style={{
																	borderRadius: "0px 10px 10px 0px",
																	textTransform: "capitalize",
																}}
																onClick={() =>
																	this.setState({
																		open: true,
																	})
																}>
																<DeleteIcon /> Delete
															</Button>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										);
									})}
									<Dialog title="Dialog" open={this.state.open}>
										<DialogContent>
											Are You sure you want to delete WaterCan25?
										</DialogContent>
										<DialogActions>
											<Button
												onClick={() =>
													this.setState({
														open: false,
													})
												}>
												Cancel
											</Button>
											<Button>Delete</Button>
										</DialogActions>
									</Dialog>
								</Grid>
								<Grid lg={2}></Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(Styles)(Product);
