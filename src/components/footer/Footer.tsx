/** @format */

import {
	Box,
	Grid,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React, { Component } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import Map from "./map/Map";
import FooterBottom from "./footerBottom/FooterBottom";
import { withStyles } from "@mui/styles";
import theme from "../../Theme/Theme";

const StyledGrid = withStyles({
	root: {
		background: "rgba(0, 6, 32, 1)",
		width: "100%",
		minHeight: "52vh",
		color: "white",
		padding: 12,
		marginTop: 30,
		[theme.breakpoints.up("sm")]: {
			padding: "30px !important",
			minHeight: "26vh !important",
		},
	},
})((props: any) => <Grid {...props} />);

const StyledLocalPhoneIcon = withStyles({
	root: {
		color: "white",
		backgroundColor: "#1C97FD",
		padding: 3,
		borderRadius: 3,
	},
})((props: any) => <LocalPhoneIcon {...props} />);

const StyledListItemText = withStyles({
	root: {
		fontFamily: "Inter",
		fontSize: "16px",
		fontWeight: "600",
		lineHeight: "28px",
		letterSpacing: "0em",
		textAlign: "left",
		color: "#A2A3A5",
		margin: -8,
		marginTop: -7,
	},
})((props: any) => <ListItemText {...props} />);

const StyledEmailIcon = withStyles({
	root: {
		color: "white",
		backgroundColor: "#1C97FD",
		padding: 3,
		borderRadius: 3,
	},
})((props: any) => <EmailIcon {...props} />);

const StyledRoomIcon = withStyles({
	root: {
		color: "white",
		backgroundColor: "#1C97FD",
		padding: 3,
		borderRadius: 3,
	},
})((props: any) => <RoomIcon {...props} />);

class Footer extends Component {
	render() {

		return (
			<div>
				<Box sx={{ marginTop: "85px" }} id="ContactUs">
					<Grid container>
						<Grid item md={12} sm={12} xs={12}>
							<StyledGrid
								container
								justifyContent="center"
								alignItems="center"
								// className={classes.footerContainer}
							>
								<Grid item md={6} sm={6} xs={12}>
									<Box style={{ borderRadius: 20, width: "100%" }}>
										{/* <Map /> */}
										<Map />
									</Box>
								</Grid>
								<Grid item md={6} sm={6} xs={12}>
									<Box>
										<ListItem>
											<ListItemIcon>
												<StyledLocalPhoneIcon
													style={{ fontSize: "20px" }}
												/>
											</ListItemIcon>
											<StyledListItemText primary="1234567890  /  9876543210" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<StyledEmailIcon style={{ fontSize: "20px" }} />
											</ListItemIcon>
											<StyledListItemText primary="watercanshop@gmail.com" />
										</ListItem>
										<ListItem>
											<ListItemIcon>
												<StyledRoomIcon style={{ fontSize: "20px" }} />
											</ListItemIcon>
											<StyledListItemText primary="Rani durgawati chowk, 17, behind the puspanjali hall, Panchsheel Nagar, Nagpur, Maharashtra 440017" />
										</ListItem>
									</Box>
								</Grid>
							</StyledGrid>
						</Grid>
						<FooterBottom />
					</Grid>
				</Box>
			</div>
		);
	}
}

export default Footer;
