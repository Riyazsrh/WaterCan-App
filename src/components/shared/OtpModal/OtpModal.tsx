/** @format */

import {
	Dialog,
	DialogContent,
	Box,
	Typography,
	Button,
	Stack,
} from "@mui/material";
import React from "react";
import CButton from "../commonButton/CButton";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import BusinessProfile from "../../../SellerComponent/BusinessProfile";

interface IProps {
	open: boolean;
	onClose: any;
	activeClass?: any;
	customer?: boolean;
}
interface MyState {
	loginOtp3: string;
	OpenModal: boolean;
}

class OtpModal extends React.Component<IProps, MyState> {
	state = {
		loginOtp3: "",
		OpenModal: false,
	};

	handleOpenModal = () => {
		if (this.props.activeClass === "seller") {
			this.setState({ OpenModal: true });
		} else if (this.props.activeClass === "customer") {
			this.setState({ OpenModal: false });
		} else if (this.props.customer === false) {
			this.props.onClose();
		}
	};

	closeModal = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ OpenModal: false });
	};

	loginOtpHandler3 = (loginOtp3: any) => this.setState({ loginOtp3 });
	render(): React.ReactNode {
		console.log(this.props, "model");
		return (
			<Dialog
				onClose={this.props.onClose}
				sx={{
					boxShadow: "2px 2px 25px 2px rgba(177, 233, 255, 0.5)",
					borderRadius: "20px",
				}}
				className="dialog"
				open={this.props.open}>
				<DialogContent style={{ overflow: "hidden" }}>
					<Box>
						<Box className="flex-center">
							<Typography variant="h5" className="modal-text1 mb">
								OTP Verification
							</Typography>
						</Box>
						<Typography className="modal-text2 mb">
							Enter the OTP sent to +91 987654321
						</Typography>

						<Box className="otp-box mb">
							<OtpInput
								placeholder="****"
								inputStyle={{
									width: "100%",
									height: "40px",
									borderRadius: "5%",
									border: "none",
									fontSize: "15px",
									backgroundColor: "#f1f1f1",
									display: "flex",
									flexWrap: "nowrap",
									flexDirection: "row",
									justifyContent: "center",
								}}
								numInputs={4}
								value={this.state.loginOtp3}
								onChange={this.loginOtpHandler3}
								className="otp-width"
								shouldAutoFocus
							/>
						</Box>

						<Box className="flex-center mb">
							<Button sx={{ margin: "0 auto" }}>
								<Typography className="otp-text mb-2">
									don't receive oTP?{" "}
								</Typography>
							</Button>
						</Box>
						{this.props.activeClass === "customer" ? (
							<Link to="/account-login">
								<Stack className="loginButton verify-now">
									<CButton title="verify now" />
								</Stack>
							</Link>
						) : (
							<Stack
								onClick={this.handleOpenModal}
								className="loginButton verify-now">
								<CButton title="verify now" />
							</Stack>
						)}
					</Box>
					<BusinessProfile
						open={this.state.OpenModal}
						onClose={this.closeModal}
					/>
				</DialogContent>
			</Dialog>
		);
	}
}

export default OtpModal;
