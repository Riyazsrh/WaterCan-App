/** @format */

import {
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	Radio,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { Component } from "react";
import CButton from "../../../components/shared/commonButton/CButton";
import { Styles } from "./payout.styles";
import { withStyles } from "@mui/styles";
import MultipleSelect from "./MultiSelect";
import { withRouter } from "../../../components/withRouter/withRouter";
import { ToastContainer, toast } from "react-toastify";


interface IProps {
	classes: any;
	open: boolean;
	onClose: any;
	navigate?: any;
}
interface MyState2 {
	name: any;
	accno: any;
	ifsc: any;
	upi: any;


}
class PayoutDetails extends Component<IProps, MyState2> {
	state = {
		name: "",
		accno: "",
		ifsc: "",
		upi: "",
	};

	loginHandler1 = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value });
	loginHandler2 = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ accno: e.target.value });
	loginHandler3 = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ ifsc: e.target.value });
	loginHandler4 = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ upi: e.target.value });

	handleClickFunc = () => {
		if (!this.state.name || !this.state.accno || !this.state.ifsc || !this.state.upi) {
			const notify = () => toast.warning("Please Enter valid data!");
			notify();
		} else {
			this.props.navigate("/account-login");
		}
	};


	render() {
		console.log("dataaaa", this.state);
		const { classes } = this.props;
		return (
			<Grid container alignItems="center" justifyContent="center">
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
				<Grid>
					<Dialog
						classes={{ paper: classes.mainDialog }}
						open={this.props.open}
						onClose={this.props.onClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<DialogContent>
							<Typography className={classes.titleDetail} variant="h3">
								Payout Details
							</Typography>
							<Stack className={classes.radioComp}>
								<Radio required={true} />
								<Typography variant="h4" component="h4">
									Bank Account
								</Typography>
							</Stack>
							<Stack className={classes.payoutInputEl}>
								<TextField
									placeholder="Account Holder name"
									variant="outlined"
									type='text'
									name="name"
									value={this.state.name}
									onChange={this.loginHandler1}
								/>
								<TextField
									placeholder="Account no"
									variant="outlined"
									type='number'
									value={this.state.accno}
									onChange={this.loginHandler2} />
								<TextField
									variant="outlined"
									placeholder="IFSC Code"
									value={this.state.ifsc}
									onChange={this.loginHandler3} />
								<MultipleSelect />
							</Stack>
							{/* <Stack className={classes.payoutSelectEl}> */}
							{/* <MultipleSelect /> */}
							{/* </Stack> */}
							<Stack className={classes.radioComp}>
								<Radio required={true} />
								<Typography variant="h4" component="h4">
									UPI
								</Typography>
							</Stack>
							<Stack className={classes.payoutInputEl}>
								<TextField
									placeholder="UPI Id"
									variant="outlined"
									value={this.state.upi}
									onChange={this.loginHandler4} />
							</Stack>
						</DialogContent>
						<DialogActions>
							<Stack className={classes.saveBtn} onClick={this.handleClickFunc}>
								<CButton title="SAVE" />
							</Stack>
						</DialogActions>

					</Dialog>
				</Grid>
			</Grid>
		);
	}
}

export default withRouter(withStyles(Styles)(PayoutDetails));
