/** @format */

import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  Divider,
  FormControl,
  FormControlLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Grid, Box } from "@mui/material";
// import CarouselLogin from "../Login/CarouselLoginSlider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Register.css";
import bottleCan from "../../assets/images/can.png";
import Customer from "../../assets/images/customer.png";
import DeliveryBoy from "../../assets/images/delivery-boy.png";
import activeArrow from "../../assets/images/active-arrow.png";
import activeCheck from "../../assets/images/active-check.png";
import Select from "@mui/material/Select";
import india from "../../assets/images/india.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import { Link } from "react-router-dom";
import deliveryMan from "../../assets/images/delivery-man.png";
import Person from "../../assets/images/person.png";
import email from "../../assets/images/email.png";
import state from "../../assets/images/state.png";
import OtpInput from "react-otp-input";
import CButton from "../../components/shared/commonButton/CButton";
import OtpModal from "../../components/shared/OtpModal/OtpModal";
import { ToastContainer, toast } from "react-toastify";
interface NavigateProps {
  navigate?: any;
}

const PreviousBtn = (props: any) => {
  const { className, onClick } = props;
  return (
    <Stack className={className} onClick={onClick}>
      <ChevronLeftIcon
        sx={{
          backgroundColor: "white",
          borderRadius: "50%",
          padding: "8px",
          fontSize: "3rem",
        }}
      />
    </Stack>
  );
};

class Register extends React.Component<NavigateProps> {
	label = { inputProps: { "aria-label": "Checkbox demo" } };
	state = {
		activeClass: "seller",
		selected: 10,
		open: false,
		loginOtp: "",
		loginOtp2: "",
		loginOtp3: "",
		open2: false,
		OpenModal: false,
		Entername: "",
		Email2: "",
		Mobnumber: "",
		data2: ""
	};


	handleOpenModal = () => {
		this.setState({ OpenModal: true });
	};

  closeModal = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    this.setState({ OpenModel: false });
  };

  loginOtpHandler = (loginOtp: any) => this.setState({ loginOtp });
  loginOtpHandler2 = (loginOtp2: any) => this.setState({ loginOtp2 });
  loginOtpHandler3 = (loginOtp3: any) => this.setState({ loginOtp3 });

  handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    this.setState({ open: false });
  };

  handleActive(category: string) {
    this.setState({
      activeClass: category,
    });
  }

  handleClick = () => {
    this.setState({
      open2: true,
    });
  };

  handleClickFn = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
    this.setState({ open: true });
  };

  handleOpen = () => {
    if (this.state.activeClass === "seller") {
      this.setState({ open: true });
    } else if (this.state.activeClass === "customer") {
      this.setState({ open: true });
    }
  };


	handleValidation = () => {
		if (!this.state.Entername || !this.state.Email2 || !this.state.Mobnumber) {
			const notify = () => toast.warn("Please Enter all the Fields!");
			notify();
		} else {
			{ this.handleOpen() }
		}
	}
	onChange = (e: any) => {
		const { data2 }: any = this.state;
		const { name, value } = e.target;
		this.setState({ ...data2, [name]: value })
	}
	render() {
		const { data2 }: any = this.state;
		return (
			<Box sx={{ flexGrow: 1 }}>
				<Grid container className="login-container">
					<Grid
						className="login-sidebar display-none-sm"
						container
						justifyContent="center"
						direction="column"
						item
						xs={0}
						sm={5}
						md={5}
						lg={4}>
						<Grid item>
							<Link to="/">
								<PreviousBtn />
							</Link>
							<Typography
								sx={{ fontSize: "24px !important" }}
								className="category">
								{" "}
								Select category
							</Typography>
						</Grid>
						<Grid
							className="register-sidebar"
							item
							container
							direction="column">
							<Grid
								className={
									this.state.activeClass === "seller"
										? "active login-sidebar-slide-1"
										: "login-sidebar-slide-1"
								}
								onClick={() => this.handleActive("seller")}
								item
								container
								alignItems="center"
								justifyContent="space-evenly">
								<Grid item sm={4}>
									<Typography
										className="login-sidebar-content">
										I’m the Seller
									</Typography>
								</Grid>
								<Grid item sm={4}>
									<img
										className="login-sidebar-image"
										src={bottleCan}
										alt="bottle splashing water"
									/>
								</Grid>
								{this.state.activeClass === "seller" && (
									<>
										<Box className="active-arrow">
											<img alt="active arrow" src={activeArrow} />
										</Box>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</Grid>
							<Grid
								className={
									this.state.activeClass === "customer"
										? "active login-sidebar-slide-2"
										: "login-sidebar-slide-2"
								}
								onClick={() => this.handleActive("customer")}
								item
								container
								alignItems="center"
								justifyContent="space-evenly">
								<Grid item sm={4}>
									<Typography className="login-sidebar-content">
										I’m customer
									</Typography>
								</Grid>
								<Grid item sm={4}>
									<img
										className="login-sidebar-image"
										src={Customer}
										alt="bottle splashing water"
									/>
								</Grid>
								{this.state.activeClass === "customer" && (
									<>
										<Box className="active-arrow">
											<img alt="active arrow" src={activeArrow} />
										</Box>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</Grid>
							<Grid
								className={
									this.state.activeClass === "deliveryBoy"
										? "active login-sidebar-slide-3"
										: "login-sidebar-slide-3"
								}
								onClick={() => this.handleActive("deliveryBoy")}
								item
								container
								alignItems="center"
								justifyContent="space-evenly">
								<Grid item sm={4}>
									<Typography className="login-sidebar-content">
										I’m Delivery Boy
									</Typography>
								</Grid>
								<Grid item sm={4}>
									<img
										className="login-sidebar-image"
										src={DeliveryBoy}
										alt="bottle splashing water"
									/>
								</Grid>
								{this.state.activeClass === "deliveryBoy" && (
									<>
										<Box className="active-arrow">
											<img alt="active arrow" src={activeArrow} />
										</Box>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						container
						xs={12}
						sm={7}
						md={7}
						lg={8}
						justifyContent="space-between"
						className="main-container"
						alignItems="center"
						sx={{
							backgroundColor: "#F2F2F2",
							paddingLeft: "100px",
							paddingBottom: "2rem",
						}}>
						<Grid
							item
							sx={{ maxWidth: "100vw", overflow: "hidden" }}
							className="display-none-md">
							{/* <CarouselLogin  /> */}
							<>
				<div className="carousel-wrapper">
					<Carousel
						centerMode
						showArrows={false}
						showStatus={false}
						showIndicators={false}>
						<div style={{ marginRight: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									padding: "20px",
								}}
								className={
									this.state.activeClass === "seller"
										? "active login-sidebar-slide-1"
										: "login-sidebar-slide-1"
								}
								onClick={() => this.handleActive("seller")}>
								<div>
									<Typography
										sx={{ marginRight: "50px", textAlign: "left" }}
										className="login-sidebar-content">
										I’m <br /> the Seller
									</Typography>
								</div>
								<div>
									<img
										style={{
											paddingRight: "100px",

											marginLeft: "-50px",
										}}
										className="login-sidebar-image login-sidebar-image-1"
										src={bottleCan}
										alt="bottle splashing water"
									/>
								</div>
								{this.state.activeClass === "seller" && (
									<>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</div>
						</div>
						<div style={{ marginRight: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									padding: "20px",
								}}
								className={
									this.state.activeClass === "customer"
										? "active login-sidebar-slide-2"
										: "login-sidebar-slide-2"
								}
								onClick={() => this.handleActive("customer")}>
								<div>
									<Typography
										sx={{ marginRight: "30px", textAlign: "left" }}
										className="login-sidebar-content">
										I’m <br /> customer
									</Typography>
								</div>
								<div>
									<img
										style={{
											paddingRight: "60px",
											width: "80%",
											marginLeft: "-10px",
										}}
										className="login-sidebar-image login-sidebar-image-2"
										src={Customer}
										alt="bottle splashing water"
									/>
								</div>
								{this.state.activeClass === "customer" && (
									<>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</div>
						</div>
						<div style={{ marginRight: "30px" }}>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									padding: "20px",
								}}
								className={
									this.state.activeClass === "deliveryBoy"
										? "active login-sidebar-slide-3"
										: "login-sidebar-slide-3"
								}
								onClick={() => this.handleActive("deliveryBoy")}>
								<div>
									<Typography
										sx={{ marginRight: "50px", textAlign: "left" }}
										className="login-sidebar-content">
										I’m <br /> Delivery Boy
									</Typography>
								</div>
								<div>
									<img
										style={{
											paddingRight: "50px",
											marginLeft: "-70px",
										}}
										className="login-sidebar-image login-sidebar-image-3"
										src={DeliveryBoy}
										alt="bottle splashing water"
									/>
								</div>
								{this.state.activeClass === "deliveryBoy" && (
									<>
										<Box className="active-check">
											<img alt="active check" src={activeCheck} />
										</Box>
									</>
								)}
							</div>
						</div>
					</Carousel>
				</div>
			</>
						</Grid>
						<Grid
							item
							container
							direction="column"
							justifyContent="space-around"
							alignItems="center"
							sm={8}
							lg={6}>
							<Grid
								className="login-section"
								container
								direction="column"
								alignItems="center"
								width="85%">
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
								<Typography
									sx={{
										width: "100%",
										margin: "1rem 0",
										marginTop: "20px ",
										textAlign: "center",
										fontWeight: "700",
										fontSize: "26px !important",
										fontFamily: "Inter",
									}}>
									Register Now
								</Typography>

								<Box className="textbox">
									{" "}
									<img className="reg-name" src={Person} alt="person" />
									<TextField
										sx={{ marginLeft: "10px" }}
										variant="standard"
										placeholder="name"
										name="Entername"
										value={data2.Entername}
										onChange={this.onChange}
										fullWidth
										InputProps={{ disableUnderline: true }}
									/>
								</Box>

								<Box className="mobileNoChildBox1">
									<Box sx={{ maxWidth: 120 }}>
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
															className="india"
															src={india}
															width="20px"
															height="15px"
															alt="india"
														/>
														<Typography className="mobileNoChildBox2Typography">
															+91
														</Typography>
													</Box>
												</MenuItem>
												<MenuItem value={20}>
													<Box sx={{ display: "flex", border: "none" }}>
														<img
															className="india"
															src={india}
															width="20px"
															height="15px"
															alt="india"
														/>
														<Typography className="mobileNoChildBox2Typography">
															+91
														</Typography>
													</Box>
												</MenuItem>
												<MenuItem value={30}>
													<Box sx={{ display: "flex", border: "none" }}>
														<img
															className="india"
															src={india}
															width="20px"
															height="15px"
															alt="india"
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
									/>
									<Box
										className="text-phone"
										sx={{
											display: "flex",
											justifyContent: "space-evenly",
											alignItems: "center",
											marginLeft: "25px",
										}}>
										<Box className="childBox4">
											<PhoneIcon className="phoneIcon" />
										</Box>
										<Box className="mobileNoChildBox3">
											<TextField
												className="textField"
												select={false}
												variant="standard"
												onChange={this.onChange}
												name="Mobnumber"
												value={data2.Mobnumber}
												placeholder="Phone Number"
												InputProps={{
													disableUnderline: true,
												}}></TextField>
										</Box>
									</Box>
								</Box>

								<Box className="textbox">
									{" "}
									<img className="reg-name" src={email} alt="email" />
									<TextField
										sx={{ marginLeft: "10px" }}
										variant="standard"
										placeholder="email"
										name="Email2"
										value={data2.Email2}
										onChange={this.onChange}
										fullWidth
										InputProps={{ disableUnderline: true }}
									/>
								</Box>
								<Typography
									sx={{
										width: "100%",
										variant: "filled",
										textAlign: "left",
										fontWeight: "700",
										fontSize: "20px",
										marginTop: "10px",
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
										}}
										numInputs={6}
										value={this.state.loginOtp}
										onChange={this.loginOtpHandler}
										className="otp"
										isInputSecure
									/>
								</Box>
								<Typography
									sx={{
										width: "100%",
										variant: "filled",
										textAlign: "left",
										fontWeight: "700",
										fontSize: "20px",
										marginTop: "10px",
									}}>
									Confirm Passcode
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
										}}
										numInputs={6}
										value={this.state.loginOtp2}
										onChange={this.loginOtpHandler2}
										className="otp"
										isInputSecure
									/>
								</Box>

								<Stack
									onClick={() => this.handleValidation()}
									className="loginButton">
									<CButton title="register now" />
								</Stack>

								<OtpModal
									onClose={this.handleClose}
									open={this.state.open}
									activeClass={this.state.activeClass}
								/>
							</Grid>
							<Grid item sx={{ marginTop: "1.5rem", width: "85%" }}>
								<Button

									className="registerBtn display-none-md display-none-sm"
									variant="contained">
									Register Now
								</Button>
							</Grid>
						</Grid>

						<Grid
							alignSelf="flex-end"
							className="display-none-sm big-bottle "
							item
							lg={4}
							sm={4}>
							<img
								style={{ width: "100%" }}
								src={deliveryMan}
								alt="deliveryMan"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		);
	}
}

export default Register;
