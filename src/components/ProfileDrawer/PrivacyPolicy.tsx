/** @format */

import React from "react";
import { Box, Typography, Grid, Dialog } from "@mui/material";
import Privacy1 from "../../assets/images/Privacy.png";
import Vector from "../../assets/images/Vector (2).png";
interface IProps {
	classes?: any;
	open: boolean;
	onClose: any;
}

class PrivacyPolicy extends React.Component<IProps> {
	render() {
		return (
			<>
				<Grid>
					<Dialog
						sx={{
							display: {
								xs: "none",
								sm: "none",
								md: "block",
								lg: "block",
							},
						}}
						onClose={this.props.onClose}
						open={this.props.open}>
						<Box
							sx={{
								background: "white",
								maxWidth: "913px !important",
								height: "auto",
								padding: "5%",
							}}>
							<Grid
								container
								columns={{ xs: 4, sm: 6, md: 12 }}
								spacing={1}>
								<Grid item md={5} lg={5}>
									<Box sx={{ textAlign: "center", height: "100%" }}>
										<img src={Privacy1} width="100%" height="100%" />
									</Box>
								</Grid>
								<Grid item md={7} lg={7}>
									<Box>
										<Typography
											sx={{
												color: "#423737",
												fontFamily: "Inter",
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "24px",
											}}>
											Privacy Policy
										</Typography>
										<Box sx={{ marginTop: "5%" }}>
											<Typography>
												{" "}
												There are Many Variations of Passengers of Lorem
												lpsum Available But the Majority Have Suffered
												Alternation in Some Form,By Injected Humour,Or
												Andomised Words Which Don't Look Even Slightly
												Believeabe.
											</Typography>
										</Box>
										<Box sx={{ marginTop: "30px" }}>
											<Typography>
												<img style={{ width: "17px" }} src={Vector} /> It
												is a Long Established Fact that Reader Will be
												Distracted
											</Typography>
											<Typography>
												<img style={{ width: "17px" }} src={Vector} />{" "}
												Readable Content Of a Page Readable
											</Typography>
											<Typography>
												<img style={{ width: "17px" }} src={Vector} /> When
												Looking at Its Layout Get Some
											</Typography>
										</Box>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Dialog>
				</Grid>
			</>
		);
	}
}
export default PrivacyPolicy;
