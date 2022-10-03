/** @format */

import React, { Component } from "react";
import {
	Box,
	Button,
	Container,
	Grid,
	Stack,
	TextField,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./AddProduct.style";
import Dialog from "@mui/material/Dialog";
import CButton from "../../components/shared/commonButton/CButton";
import DropFileInput from "./DropFileInput";

interface IProps {
	onClose: any;
	open: any;
	classes?: any;
}

class AddProducts extends Component<IProps> {
	render(): React.ReactNode {
		const { classes } = this.props;
		console.log("props", this.props);

		return (
			<>
				<Dialog
					open={this.props.open}
					onClose={this.props.onClose}
					classes={{ paper: classes.dialog }}>
					<Container maxWidth={false}>
						<Box>
							<Grid container sx={{ margin: "auto", marginTop: "20px" }}>
								<Grid item lg={12}>
									<Box className={classes.drag}>
										<DropFileInput />
									</Box>
									<TextField
										placeholder="Name*"
										className={classes.input}
										sx={{
											borderRadius: "10px",
											borderColor: "white !important",
										}}
									/>
									<TextField
										placeholder="Price*"
										className={classes.input}
										sx={{ borderRadius: "10px" }}
									/>
									<TextField
										placeholder="Discount Price*"
										className={classes.input}
										sx={{ borderRadius: "10px" }}
									/>
									<TextField
										placeholder="Description*"
										multiline
										rows={3}
										className={classes.input}
										sx={{ borderRadius: "10px" }}
									/>
									<Stack
										onClick={this.props.onClose}
										className={classes.saveBtn}>
										<CButton title="save " />
									</Stack>
								</Grid>
							</Grid>
						</Box>
					</Container>
				</Dialog>
			</>
		);
	}
}

export default withStyles(Styles)(AddProducts);
