/** @format */

import React from "react";
import { Modal, Box, Button, Grid, Stack } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./Editimage.style";
import Rectangle18 from "../../assets/images/Rectangle 118 (1).png";
import CloseIcon from "@mui/icons-material/Close";
import CButton from "../shared/commonButton/CButton";

interface IProps {
	classes: any;
}
interface MyState2 {
	Open: any;
}
class Editimage extends React.Component<IProps, MyState2> {
	state = {
		Open: false,
	};
	handleClickFunc = () => {
		this.setState({
			Open: true,
		});
	};
	handleCloseFunc = () => {
		this.setState({
			Open: false,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<Grid container alignItems="center" justifyContent="center">
				<Grid item md={12} lg={12} xs={12} sm={12}>
					<Box sx={{ display: "flex" }}>
						<Button
							className={classes.Edit}
							onClick={this.handleClickFunc}>
							Edit Profile Picture
						</Button>
					</Box>

					<Modal
						open={this.state.Open}
						onClose={this.handleCloseFunc}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Grid container alignItems="center" justifyContent="center">
							<Grid item md={6} lg={4} xs={12} sm={12}>
								<Box className={classes.Modalbox}>
									<Box>
										<CloseIcon
											className={classes.Close}
											onClick={this.handleCloseFunc}
											sx={{ marginLeft: "180px" }}
										/>
									</Box>
									<Box>
										<img
											alt="rectangle"
											className={classes.Rectangle18}
											src={Rectangle18}
										/>
									</Box>
									<Box className={classes.Flexbuttons}>
										<Button className={classes.Remove}>Remove</Button>
										<Button className={classes.UploadProfile}>
											UploadProfile
										</Button>
									</Box>

									<Stack sx={{ marginTop: "15px" }}>
										<CButton title="Save Profile" />
									</Stack>
								</Box>
							</Grid>
						</Grid>
					</Modal>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(Styles)(Editimage);
