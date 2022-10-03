/** @format */

import React from "react";
import { Modal, Box, Typography, Grid, Stack } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./CongratsModal.style";
import Watercan from "../../assets/images/water-can.png";
import Right from "../../assets/images/Gright.png";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import CButton from "../shared/commonButton/CButton";
interface IProps {
	classes: any;
	open: boolean;
	onClose: () => void;
}

class CongratsModal extends React.Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<Grid container alignItems="center" justifyContent="center">
				<Grid>
					<Modal
						open={this.props.open}
						onClose={this.props.onClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description">
						<Grid container alignItems="center" justifyContent="center">
							<Grid item md={8} lg={6} xs={8} sm={9}>
								<Box className={classes.Modalbox}>
									<Grid
										container
										spacing={6}
										direction="row"
										columns={{ xs: 4, sm: 8, md: 12 }}
										alignItems="center"
										justifyContent="center">
										<Grid item md={5} lg={5} xs={3} sm={5}>
											<Box>
												<img
													style={{ width: "100%", height: "25%" }}
													src={Watercan}
													alt="Watercan"
												/>
											</Box>
										</Grid>
										<Grid item md={7} lg={7} xs={5} sm={7}>
											<Box>
												<img
													className={classes.Watercanimage}
													src={Right}
													alt="Watercan"
												/>
												<Typography
													className={classes.Congrats}
													variant="h6">
													Congratulations!
												</Typography>
												<Typography className={classes.Successfully}>
													Your Order Successfully Confirmed
												</Typography>
												<Link to="/customers">
													<Stack sx={{ marginTop: "30px" }}>
														<CButton
															icon={<HomeIcon />}
															title="Back to home"
														/>
													</Stack>
												</Link>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Grid>
						</Grid>
					</Modal>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(Styles)(CongratsModal);
