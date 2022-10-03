/** @format */

import React from "react";
import {
	Modal,
	Box,
	Typography,
	Grid,
	TextField,
	Divider,
	FormControl,
	MenuItem,
	Select,
	Stack,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./Editprofile.style";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import india from "../../assets/images/india.png";
import PhoneIcon from "@mui/icons-material/Phone";
import ConfirmPasscode from "./ConfirmPasscode";
import CloseIcon from "@mui/icons-material/Close";
import OtpInput from "react-otp-input";
import CButton from "../shared/commonButton/CButton";
import { ToastContainer, toast } from "react-toastify";

interface IProps {
	classes: any;
	open: boolean;
	onClose: any;
	handleCloseFunc: () => void;
}
interface MyState3 {
	loginOtp4: any;
	open: boolean;
	name: any;
	phone: any;
	email: any;

}

class Editprofile extends React.Component<IProps, MyState3> {
	state = {
		open: false,
		selected: 10,
		loginOtp4: "",
		name: "",
		phone: "",
		email: "",
	};

	changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ name: e.target.value }) }
	changeHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ phone: e.target.value }) }
	changeHandler3 = (e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ email: e.target.value }) }
	loginOtpHandler4 = (loginOtp4: any) => this.setState({ loginOtp4 });

	handleCloseFunc = () => {
		this.setState({
			open: false,
		});
	};

	handleClickFunc = (event: any) => {
		event?.preventDefault();
		if (!this.state.loginOtp4 || !this.state.name || !this.state.phone || !this.state.email) {
			const notify = () => toast.warn("Please fill all data!");
			notify();
		} else {
			this.setState({
				open: true,
			});
		}
		
	};
	onClose = () => {
		this.setState({
			open: false,
		});
	};


	render() {
		const { classes } = this.props;

		return (
			<Grid
				container
				columns={{ xs: 12, sm: 12, md: 12, lg: 8 }}
				alignItems="center"
				justifyContent="center">
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
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Modal
						open={this.props.open}
						onClose={this.props.onClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Grid container alignItems="center" justifyContent="center">
							<Grid item md={6} lg={4} xs={12} sm={6}>
								<Box
									sx={{
										marginTop: "30%",
										width: "90%",
										height: "73%",
										bgcolor: "background.paper",
										p: 3,
										borderRadius: "10px",
										marginLeft: "5%",
									}}>
									<Box >
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}>
											<Stack
												onClick={this.props.handleCloseFunc}
												sx={{
													display: "flex",
													alignItems: "center",
													flexDirection: "row",
												}}>
												<KeyboardArrowLeftIcon
												// onClick={this.handleCloseFunc}
												// sx={{ color: "black" }}
												/>
												<Typography className={classes.Editprofile}>
													{" "}
													Edit Profile{" "}
												</Typography>
											</Stack>
											<CloseIcon
												// className={classes.Close}
												onClick={this.props.handleCloseFunc}
											/>
										</Box>

										<TextField
											InputProps={{
												startAdornment: (
													<PersonIcon sx={{ color: "#938D8E" }} />
												),
											}}
											type="text"
											placeholder="       name"
											onChange={this.changeHandler}
											value={this.state.name}
											title="please enter only alphabet"
											sx={{
												marginTop: "5%",
												bgcolor: "#E3F2FF",
												color: "#938D8E",
												border: "1px solid #E3F2FF",
												height: "10% !important",
												width: "100%",
											}}
										/>
										<Box
											className="mobileNoChildBox1"
											sx={{
												bgcolor: "#E3F2FF !important",
											}}>
											<Box sx={{ maxWidth: 120, bgcolor: "#E3F2FF" }}>
												<FormControl sx={{ m: 1, minWidth: 85 }}>
													<Select
														value={this.state.selected}
														displayEmpty
														inputProps={{ "aria-label": "Without label" }}
														variant="standard"
														disableUnderline={true}>
														<MenuItem selected={true} value={10}>
															<Box
																sx={{
																	display: "flex",
																	border: "none",
																	alignItems: "center",
																	justifyContent: "center",
																}}>
																<img
																	alt="india"
																	className="india"
																	src={india}
																	width="20px"
																	height="15px"
																/>
																<Typography className="mobileNoChildBox2Typography">
																	+91
																</Typography>
															</Box>
														</MenuItem>
														<MenuItem value={20}>
															<Box
																sx={{ display: "flex", border: "none" }}>
																<img
																	alt="india"
																	className="india"
																	src={india}
																	width="20px"
																	height="15px"
																/>
																<Typography className="mobileNoChildBox2Typography">
																	+91
																</Typography>
															</Box>
														</MenuItem>
														<MenuItem value={30}>
															<Box
																sx={{ display: "flex", border: "none" }}>
																<img
																	alt="india"
																	className="india"
																	src={india}
																	width="20px"
																	height="15px"
																/>
																<Typography className="mobileNoChildBox2Typography">
																	+91
																</Typography>
															</Box>
														</MenuItem>
													</Select>
												</FormControl>
											</Box>
											<Divider
												orientation="vertical"
												flexItem
												className="divider"
												sx={{ bgcolor: "#E3F2FF" }}
											/>
											<Box
												className="text-phone"
												sx={{
													display: "flex",
													justifyContent: "space-evenly",
													alignItems: "center",
													marginLeft: "25px",
													bgcolor: "#E3F2FF",
												}}>
												<Box
													className="childBox4"
													sx={{ bgcolor: "#E3F2FF", mr: 5 }}>
													<PhoneIcon className="phoneIcon" />
												</Box>
												<Box className="mobileNoChildBox3">
													<TextField
														className="textField"
														select={false}
														variant="standard"
														placeholder="Number"
														onChange={this.changeHandler2}
														value={this.state.phone}
														type="number"
														required={true}
														InputProps={{
															disableUnderline: true,
														}}></TextField>
												</Box>
											</Box>
										</Box>

										<TextField
											InputProps={{
												startAdornment: (
													<EmailIcon sx={{ color: "#938D8E" }} />
												),
											}}
											placeholder="       Email"
											type='email'
											onChange={this.changeHandler3}
											value={this.state.email}
											required={true}
											sx={{
												marginTop: "5%",
												bgcolor: "#E3F2FF",
												color: "#938D8E",
												border: "1px solid #E3F2FF",
												height: "10% !important",
												width: "100%",
											}}
										/>

										<Typography
											sx={{
												width: "100%",
												variant: "filled",
												textAlign: "left",
												fontWeight: "700",
												fontSize: "20px",
												margin: "10px 0",
											}}>
											Passcode
										</Typography>
										<Box className="passcodeParentDiv">
											<OtpInput
												data-testid="otp-input"
												placeholder="******"
												inputStyle={{
													width: "100%",
													height: "40px",
													borderRadius: "5%",
													border: "none",
													margin: "0 3px",
													fontSize: "15px",
													backgroundColor: "#E3F2FF",
												}}
												numInputs={6}
												value={this.state.loginOtp4}
												onChange={this.loginOtpHandler4}
												className="otp"
												isInputSecure
												isInputNum

											/>
										</Box>
										<Box>
											<Stack
												onClick={this.handleClickFunc}
												className={classes.addToContanierButton}>
												<CButton title="continue" />
											</Stack>


											<ConfirmPasscode
												open={this.state.open}
												onClose={this.onClose}
												handleClickFunc={this.handleCloseFunc}
											/>
										</Box>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Modal>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(Styles)(Editprofile);
