/** @format */

import React from "react";
import {
	Modal,
	Box,
	Button,
	Typography,
	Grid,
	Dialog,
	DialogContent,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import Privacy1 from "../../assets/images/Privacy.png";
import Vector from "../../assets/images/Vector (2).png";
import Privacy2 from "../../assets/images/Drawerimages/Privacy.png";
import { menus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";

class PrivacyMobile extends React.Component {
	render() {
		return (
			<>
				<Box
					sx={{
						display: { xs: "block", sm: "block", md: "none", lg: "none" },
						width: "100%",
						margin: "auto",
						padding: "5%",
					}}>
					<Grid container>
						<Grid item sm={12} xs={12}>
							<Header menus={menus} login="true" customer={true} />
						</Grid>
						<Grid item sm={12} xs={12}>
							<Box sx={{ textAlign: "center", marginTop: "15%" }}>
								<img src={Privacy1} width="100%" height="100%" />
							</Box>
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
								<Box>
									<Typography>
										{" "}
										There are Many Variations of Passengers of Lorem lpsum
										Available But the Majority Have Suffered Alternation in
										Some Form,By Injected Humour,Or Andomised Words Which
										Don't Look Even Slightly Believeabe.
									</Typography>
								</Box>
								<Box sx={{ marginTop: "30px" }}>
									<Typography>
										<img style={{ width: "17px" }} src={Vector} /> It is a
										Long Established Fact that Reader Will be Distracted
									</Typography>
									<Typography>
										<img style={{ width: "17px" }} src={Vector} /> Readable
										Content Of a Page Readable
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
			</>
		);
	}
}

export default PrivacyMobile;
