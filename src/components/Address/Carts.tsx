/** @format */
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	Radio,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import CustomerHeader from "../shared/customerheader/CustomerHeader";
import Sidebar from "../sidebar/Sidebar";
import Address from "./Address";
import { Styles } from "./Carts.style";
import { withStyles } from "@mui/styles";
import Header from "../header/Header";
import { customerMenus } from "../../utils/data/SidebarMenu";
import MapModal from "./Map/MapModel";

interface Ipro {
	classes: any;
	google?: any
}

interface Mystate {
	openDrawer: boolean;
}

class Carts extends React.Component<Ipro, Mystate> {

	state = {
		openDrawer: false
	}

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
			<Box>
				<Grid container spacing={2}>
					<Grid item lg={3} md={4}>
						<Header menus={customerMenus} login="false" customer={true} />
						<Sidebar menus={customerMenus} customer="true" />
					</Grid>
					<Grid item lg={9} md={8}>
						<Stack sx={{ marginBottom: "45px" }}>
							<CustomerHeader customer={true} />
						</Stack>
						<Container maxWidth={false}>
							<Grid container spacing={3}>
								<Grid item lg={8} md={12} >
									<Grid container justifyContent="space-between">
										<Grid item lg={6} >
											<Box sx={{ marginTop: "15px", marginBottom: "20px" }}>
												<h2>Select Delivery Address</h2>
											</Box>
										</Grid>

										<Grid item lg={6}>

											<Box sx={{ marginTop: "15px", marginBottom: "20px" }}>
												<Button className={classes.addBtn} onClick={this.handleClickOpenFunc}>Add new  +</Button>
												<MapModal open={this.state.openDrawer} onClose={this.handleClose} />
											</Box>
										</Grid>
									</Grid>
									<Grid container spacing={2}>
										<Grid item lg={6} md={6} sm={6} xs={12}>
											<Card className={classes.RadioCard}>
												<CardContent>
													<Radio value="a" />
													<Box
														display="inline"
														className={classes.RadioName}
														style={{ textTransform: "capitalize" }}>
														vishal raghav
													</Box>
													<Typography
														className={classes.cartAdd}
														style={{ textTransform: "capitalize" }}>
														near Hocky building lakadganj Nagpur,
														maharashtra 441001 India
													</Typography>
													<Button
														className={classes.Editbtn}
														style={{ borderRadius: "10px 0px 0px 10px" }}>
														Edit
													</Button>
													<Button
														className={classes.Editbtn}
														style={{
															backgroundColor: "#8DCBFE",
															borderRadius: "0px 10px 10px 0px",
														}}>
														Delete
													</Button>
												</CardContent>
											</Card>
										</Grid>
										<Grid item lg={6} md={6} sm={6} xs={12}>
											<Card className={classes.RadioCard}>
												<CardContent>
													<Radio value="b" />
													<Box
														display="inline"
														className={classes.RadioName}
														style={{ textTransform: "capitalize" }}>
														vishal raghav
													</Box>
													<Typography
														className={classes.cartAdd}
														style={{ textTransform: "capitalize" }}>
														near Hocky building lakadganj Nagpur,
														maharashtra 441001 India
													</Typography>
													<Box sx={{ margin: "auto" }}>
														<Button
															className={classes.Editbtn}
															style={{
																borderRadius: "10px 0px 0px 10px",
															}}>
															Edit
														</Button>
														<Button
															className={classes.Editbtn}
															style={{
																backgroundColor: "#8DCBFE",
																borderRadius: "0px 10px 10px 0px",
															}}>
															Delete
														</Button>
													</Box>
												</CardContent>
											</Card>
										</Grid>
									</Grid>
								</Grid>
								<Grid
									item
									lg={4}
									md={12}
									sm={10}
									xs={12}
									sx={{ margin: "auto" }}>
									{/* <Address /> */}
								</Grid>
							</Grid>
						</Container>
					</Grid>
				</Grid>
			</Box>
		);
	}
}
export default withStyles(Styles)(Carts);