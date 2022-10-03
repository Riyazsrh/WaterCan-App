/** @format */

import React, { Component } from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	DialogContent,
	Grid,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import pic1 from "../assets/images/Seller/BProfilepic.jpg";
import CButton from "../components/shared/commonButton/CButton";
import { withStyles } from "@mui/styles";
import { Styles } from "../components/Address/Address.style";
import Dialog from "@mui/material/Dialog";
import PayoutDetails from "../pages/Register/payoutDetails/PayoutDetails";
import { ToastContainer, toast } from "react-toastify";
interface IProps {
	onClose: any;
	open: any;
	classes: any;
	// onClose: any
	// handleCloseFunc: () => void;

}
interface MyState {
	openDrawer: boolean;
	Buisness: any;
	Owner: any;
	Adress: any;
	Email: any;
	Gstno: any
}
class BusinessProfile extends Component<IProps, MyState> {
	state = {
		// isdrawerOpen: false,
		openDrawer: false,
		Buisness: "",
		Owner: "",
		Adress: "",
		Email: "",
		Gstno: "",
		data1: "",
	};
	handleClickOpenFunc = () => {

		if (!this.state.Buisness || !this.state.Owner || !this.state.Adress || !this.state.Email || !this.state.Gstno) {
			const notify = () => toast.warn("Please Enter all the Fields!");
			notify();
		} else {
			this.setState({
				openDrawer: true,
			});
		}
	};
	handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ openDrawer: false });
	};
	onChange = (e: any) => {
		const { data1 }: any = this.state;
		const { name, value } = e.target;
		this.setState({ ...data1, [name]: value })
	}
	render(): React.ReactNode {
		const { classes } = this.props;
		const { data1 }: any = this.state;
		return (
			<>
				<Dialog
					open={this.props.open}
					onClose={this.props.onClose}
					// onClick={this.props.onClose}
					classes={{ paper: classes.dialog }}>
					{/* <DialogContent > */}
					<ToastContainer
						position="top-right"
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<Container maxWidth={false}>
						<Box>
							<Grid container>
								<Grid item lg={12} md={12} sm={12} xs={12}>
									<Typography
										sx={{
											fontSize: "22px !important",
											marginTop: "20px !important",
											marginBottom: "15px !important",
										}}
										className={classes.text}>
										Business Profile
									</Typography>
								</Grid>
							</Grid>
							<Grid container sx={{ margin: "auto" }}>
								<Grid
									item
									lg={12}
									md={12}
									sm={12}
									xs={12}
									sx={{
										margin: "auto",
										display: "flex",
										justifyContent: "center",
									}}>
									<img src={pic1} width="150px" height="150px" />
								</Grid>
								<Grid
									item
									lg={12}
									md={12}
									sm={12}
									xs={12}
									sx={{
										margin: "auto",
										display: "flex",
										justifyContent: "center",
									}}>
									<Button
										className={classes.Editbtn}
										style={{
											backgroundColor: "#8DCBFE",
											borderRadius: "10px 0px 0px 10px",
											textTransform: "capitalize",
										}}>
										Remove
									</Button>
									<Button
										className={classes.Editbtn}
										style={{
											borderRadius: "0px 10px 10px 0px",
											textTransform: "capitalize",
										}}>
										Upload Profile
									</Button>
								</Grid>
							</Grid>
							<Grid container sx={{ margin: "auto", marginTop: "20px" }}>
								<Grid item lg={12}>
									<TextField
										placeholder="Business Name*"
										className={classes.input}
										sx={{
											borderRadius: "10px",
											borderColor: "white !important",
										}}
										name="Buisness"
										value={data1.Buisness}
										onChange={this.onChange}
									/>
									<TextField
										placeholder="Owner name*"
										className={classes.input}
										sx={{ borderRadius: "10px" }}
										name="Owner"
										value={data1.Owner}
										onChange={this.onChange}
									/>
									<TextField
										placeholder="address*"
										className={classes.input}
										sx={{ borderRadius: "10px" }}
										name="Adress"
										value={data1.Adress}
										onChange={this.onChange}
									/>
									<TextField
										placeholder="email*"
										className={classes.input}
										sx={{ borderRadius: "10px" }}
										name="Email"
										value={data1.Email}
										onChange={this.onChange}
									/>
									<TextField
										placeholder="GST No*"
										className={classes.input}
										sx={{ borderRadius: "10px" }}
										name="Gstno"
										value={data1.Gstno}
										onChange={this.onChange}
									/>
									<Stack
										className={classes.saveBtn}
										onClick={this.handleClickOpenFunc}>
										<CButton title="save " />
									</Stack>
								</Grid>
								<PayoutDetails
									open={this.state.openDrawer}
									onClose={this.handleClose}
								/>
							</Grid>
						</Box>
					</Container>
					{/* </DialogContent> */}
				</Dialog>
			</>
		);
	}
}

export default withStyles(Styles)(BusinessProfile);
