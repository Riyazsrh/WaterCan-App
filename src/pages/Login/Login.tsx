/** @format */

import React from "react";
import {
	Button,
	Divider,
	FormControl,
	MenuItem,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Grid, Box } from "@mui/material";
// import CarouselLogin from "./CarouselLoginSlider";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Login.css";
import bottleCan from "../../assets/images/can.png";
import Customer from "../../assets/images/customer.png";
import DeliveryBoy from "../../assets/images/delivery-boy.png";
import activeArrow from "../../assets/images/active-arrow.png";
import activeCheck from "../../assets/images/active-check.png";
import paco from "../../assets/images/paco.png";
import logo from "../../assets/images/logo.png";
import apple from "../../assets/images/AppleIcon.png";
import android from "../../assets/images/google-play.png";
import Select from "@mui/material/Select";
import india from "../../assets/images/india.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PhoneIcon from "@mui/icons-material/Phone";
import { withRouter } from "../../components/withRouter/withRouter";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import theme from "../../Theme/Theme";
import { ToastContainer, toast } from "react-toastify";
import OtpInput from "react-otp-input";
import CButton from "../../components/shared/commonButton/CButton";
// import BusinessProfile from "../../SellerComponent/BusinessProfile";
import ForgotPassword from "../../components/forgotpasswordsection/ForgotPassword";

interface NavigateProps {
	navigate?: any;
	location?: any;
}

const StyledBox = withStyles({
	root: {
		width: "100%",
		height: "100%",
		[theme.breakpoints.only("xl")]: {
			height: "100vh",
			marginLeft: "0px",
		},
	},
})((props: any) => <Grid {...props} />);

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

class Login extends React.Component<NavigateProps> {
	state = {
		activeClass: "seller",
		selected: 10,
		number: "",
		loginOtp: "",
		OpenModal: false,
		openPassword: false,
		
	};

	handleOpenModal = () => {
		this.setState({ OpenModal: true });
	};
	closeModal = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ OpenModel: false });
	};

	handleForgetPassword = () => {
		this.setState({
			openPassword: true,
		});
	};
	handleCloseForgetPassword = () => {
		this.setState({
			openPassword: false,
		});
	};

	loginOtpHandler = (loginOtp: any) => this.setState({ loginOtp });

	handleActive(category: string) {
		this.setState({
			activeClass: category,
		});
	}
	onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			number: e.target.value,
		});
	};
	handleClick = () => {
		if (!this.state.activeClass || !this.state.loginOtp) {
			const notify = () => toast.warn("Please Enter valid data!");
			notify();
		} else if (this.state.activeClass === "seller") {
			this.props.navigate("/dashboard");
			this.props.location({ state: "hello" });
		} else if (this.state.activeClass === "customer") {
			this.props.navigate("/customers");
		}
	};
	render() {
		console.log(this.state.activeClass)
		return (
			<Box sx={{ flexGrow: 1 }}>
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
				<StyledBox>
					<Grid container className="login-container">
						<Grid
							className="login-sidebar display-none-sm"
							container
							justifyContent="space-between"
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
							<Grid item container direction="column">
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
											// onClick={this.handleOpenModal}
											className="login-sidebar-content">
											I’m the Seller
										</Typography>
									</Grid>
									{/* <BusinessProfile
										open={this.state.OpenModal}
										onClose={this.closeModal}
									/> */}
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
												<img alt="ArrowActive" src={activeArrow} />
											</Box>
											<Box className="active-check">
												<img alt="activecheck" src={activeCheck} />
											</Box>
										</>
									)}
								</Grid>
								{/* {this.state.OpenModal && ( */}
								{/* <BusinessProfile
									open={this.state.OpenModal}
									onClose={this.closeModal}
								/> */}

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
												<img alt="activeArrow" src={activeArrow} />
											</Box>
											<Box className="active-check">
												<img alt="activeCheck" src={activeCheck} />
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
												<img alt="activeArrow" src={activeArrow} />
											</Box>
											<Box className="active-check">
												<img alt="activeCheck" src={activeCheck} />
											</Box>
										</>
									)}
								</Grid>
							</Grid>
							<Grid item>
								<Link to="register">
									<Stack className="loginButton registerBtn display-none-sm">
										<CButton title="Register now" />
									</Stack>
								</Link>
							</Grid>
						</Grid>
						<Grid
							item
							container
							xs={12}
							sm={7}
							md={7}
							lg={8}
							justifyContent="space-evenly"
							className="main-container"
							alignItems="center"
							sx={{
								backgroundColor: "#F2F2F2",
								paddingLeft: "50px",
								paddingBottom: "2rem",
							}}>
							<Grid
								item
								sx={{ maxWidth: "100vw", overflow: "hidden" }}
								className="display-none-md">
								{/* <CarouselLogin /> */}
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
									<img src={logo} alt="logo" />

									<Typography
										sx={{
											width: "100%",
											margin: "1rem 0",
											marginTop: "20px ",
											textAlign: "center",
											fontWeight: "700",
											fontSize: "26px",
											fontFamily: "Inter",
										}}>
										Login Account
									</Typography>

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
																alt="India"
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
																alt="India"
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
																alt="India"
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
													value={this.state.number}
													className="textField"
													select={false}
													onChange={this.onChangeHandle}
													variant="standard"
													placeholder="Phone Number"
													type="tel"
													required
													InputProps={{
														disableUnderline: true,
													}}></TextField>
											</Box>
										</Box>
									</Box>
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
											}}
											numInputs={6}
											value={this.state.loginOtp}
											onChange={this.loginOtpHandler}
											className="otp"
											isInputSecure
										/>
									</Box>

									<Stack
										onClick={() => this.handleClick()}
										className="loginButton">
										<CButton title="Login" />
									</Stack>

									<Box sx={{ marginTop: "1rem" }}>
										<Typography
											className="forgot-passcode"
											sx={{
												textAlign: "center",
												color: "#1C97FD",

												textDecoration: "underline",
												fontWeight: "600",
												fontSize: "18px",
												marginTop: "0.5rem",
											}}
											onClick={this.handleForgetPassword}>
											Forgot Passcode?
										</Typography>
									</Box>
									<ForgotPassword
										open={this.state.openPassword}
										onClose={this.handleCloseForgetPassword}
									/>
								</Grid>
								<Grid item sx={{ marginTop: "1.5rem", width: "85%" }}>
									<Link to="register">
										<Stack className="loginButton registerBtn display-none-md">
											<CButton title="register now" />
										</Stack>
									</Link>
								</Grid>
								<Grid
									className="playstore-section"
									item
									container
									spacing={2}
									justifyContent="space-between">
									<Grid className="display-none-sm " item sm={6}>
										<Button className="play-store">
											<Box className="playstore-img">
												<img alt="Apple" src={apple} />
											</Box>
											<Box>
												<Typography
													className="playstore-text1"
													sx={{
														fontSize: "0.6rem !important",
														color: "#A2A3A5",
													}}>
													Download on The
												</Typography>
												<Typography
													className="playstore-text2"
													sx={{
														fontSize: "16px",
														color: "#161A1D",
														fontWeight: 600,
													}}>
													App Store
												</Typography>
											</Box>
										</Button>
									</Grid>
									<Grid className="display-none-sm " item sm={6}>
										<Button className="play-store">
											<Box className="playstore-img">
												<img src={android} alt="android" />
											</Box>
											<Box>
												<Typography
													className="playstore-text1"
													sx={{
														fontSize: "0.6rem !important",
														color: "#A2A3A5",
													}}>
													Download on The
												</Typography>
												<Typography
													className="playstore-text2"
													sx={{
														fontSize: "16px",
														color: "#161A1D",
														fontWeight: 600,
													}}>
													App Store
												</Typography>
											</Box>
										</Button>
									</Grid>
								</Grid>
							</Grid>

							<Grid
								alignSelf="flex-end"
								className="display-none-sm big-bottle "
								item
								lg={4}
								sm={4}
								xl={4}
								md={4}>
								<img
									style={{ width: "100%" }}
									src={paco}
									alt="bottleCan"
								/>
							</Grid>
						</Grid>
					</Grid>
				</StyledBox>
			</Box>
		);
	}
}

export default withRouter(Login);
