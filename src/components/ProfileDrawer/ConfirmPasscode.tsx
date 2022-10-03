/** @format */

import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
	Modal,
	Box,
	Button,
	Typography,
	Grid,
	Stack,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./ConfirmPasscode.style";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import OtpInput from "react-otp-input";


interface IProps {
	classes: any;
	open: boolean;
	onClose: () => void;
	handleClickFunc: () => void;
}
interface MyState2 {
	loginOtp5: any;
	loginOtp6: any;
}
class ConfirmPasscode extends React.Component<IProps, MyState2> {
	state = {
		loginOtp5: "",
		loginOtp6: "",
	};

	loginOtpHandler5 = (loginOtp5: any) => this.setState({ loginOtp5 });
	loginOtpHandler6 = (loginOtp6: any) => this.setState({ loginOtp6 });
	render() {
		const { classes } = this.props;
		return (
			<Grid container alignItems="center" justifyContent="center">
				
				<Grid item md={6} lg={4} xs={12} sm={6}>
					<Modal
						open={this.props.open}
						onClose={this.props.onClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Grid container alignItems="center" justifyContent="center">
							<Grid item md={5} lg={4} xs={12} sm={8}>
								<Box
									sx={{
										width: "90%",
										height: "100%",
										bgcolor: "background.paper",
										padding: "72px 20px",
										marginTop: "30%",
										borderRadius: "10px",
										alignItems: "center",
										justifyContent: "center",
										textAlign: "center",
										marginLeft: "5%",
									}}>
									<Box>
										<Box
											sx={{
												display: "flex",
												justifyContent: "space-between",
											}}>
											<Stack
												onClick={this.props.handleClickFunc}
												sx={{
													display: "flex",
													alignItems: "center",
													flexDirection: "row",
												}}>
												<KeyboardArrowLeftIcon />
												<Typography className={classes.Editprofile}>
													{" "}
													New Passcode{" "}
												</Typography>
											</Stack>
											<CloseIcon onClick={this.props.handleClickFunc} />
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
											New
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
												value={this.state.loginOtp5}
												onChange={this.loginOtpHandler5}
												className="otp"
												isInputSecure
												isInputNum
											/>
										</Box>
										<Box>
											<Typography
												sx={{
													width: "100%",
													variant: "filled",
													textAlign: "left",
													fontWeight: "700",
													fontSize: "20px",
													margin: "10px 0",
												}}>
												Confirm
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
													value={this.state.loginOtp6}
													onChange={this.loginOtpHandler6}
													className="otp"
													isInputSecure
													isInputNum
												/>
											</Box>
										</Box>
										<Button
										onClick={this.props.handleClickFunc}
											sx={{
												width: "100% !important",
												height: "25% !important",
												background: "#1C97FD !important",
												color: "white !important",
												boxShadow:
													" 1px 1px 25px 1px rgba(73, 194, 233, 0.52)",
												marginTop: "13% !important",
												textTransform: "none",
											}}>
											Continue
										</Button>
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
export default withStyles(Styles)(ConfirmPasscode);
