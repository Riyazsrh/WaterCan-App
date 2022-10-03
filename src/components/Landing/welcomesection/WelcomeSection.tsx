/** @format */

import React, { Component } from "react";
import { Grid } from "@mui/material";
import WatercanImage from "../../../assets/images/WelcomeWaterCan.png";
import Vector from "../../../assets/images/Vector.png";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./welcomesection.css";
class WelcomeSection extends Component {
	render() {
		return (
			<>
				<Stack id="AboutUs">
					<Grid
						container
						spacing={2}
						style={{ marginBottom: "20px", marginTop: "80px" }} >
						<Grid item lg={8} md={7} sm={12} xs={12}>
							<Grid container className="welcomeSection">
								<Grid
									item
									lg={7}
									md={7}
									sm={7}
									xs={12}
									className="contentText">
									<Stack>
										<Typography variant="h3" component="div" gutterBottom>
											<span style={{ color: "#000620" }}> Welcome To</span>{" "}
											<span style={{ color: "#1C97FD" }}>Watercan Shop</span>
										</Typography>
										<Stack style={{ color: "#99959E", fontSize: "13px" }}>
											<p style={{ marginBottom: "20px" }}>
												With every professional WordPress theme you at least
												get 1 skin to change the pattern as well as
												background, colors and look and feel of your theme.
											</p>
											<p>
												This serves as an added benefit. So in case you don't
												want to waste too much time adjusting and setting up
												color schemes for your theme just pick up the
											</p>
										</Stack>
									</Stack>
								</Grid>
								<Grid item lg={5} md={5} sm={5} xs={12}>
									<img src={WatercanImage} alt="watercan" />
								</Grid>
							</Grid>
						</Grid>
						<Grid item lg={4} md={5} className="textCenter" sm={12} xs={12}>
							<Stack className="WelcomeSectionInfo">
								<Stack className="WelcomeSectionInfo-inner">
									<Typography
										variant="body2"
										gutterBottom
										style={{ fontSize: "22px" }}>
										Timing
									</Typography>
									<Typography
										variant="body2"
										gutterBottom
										style={{ fontSize: "15px" }}>
										Mon-sat 8:00am-10:00pm
									</Typography>
									<Typography
										variant="body2"
										gutterBottom
										style={{ fontSize: "15px" }}>
										Sunday 8:00am-7:30pm
									</Typography>
									<Stack className="welcomeSection2">
										<span style={{ margin: "auto" }}>
											<img src={Vector} alt="call" />
										</span>
									</Stack>
									<Stack style={{ paddingTop: "10px" }}>
										<Typography variant="subtitle1" gutterBottom>
											For any Query
										</Typography>
										<Typography variant="h3" gutterBottom component="div">
											91+9876543210
										</Typography>
									</Stack>
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</Stack>
			</>
		);
	}
}

export default WelcomeSection;
