/** @format */

import React from "react";
import {
	Grid,
	Box,
	Typography,
	Button,
	Container,
	Drawer,
	Divider,
	Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profileImg.png";
import Rectangle18 from "../../assets/images/Rectangle 118 (1).png";
import CloseIcon from "@mui/icons-material/Close";
import Privacy from "../../assets/images/Drawerimages/Privacy.png";
import Settings from "../../assets/images/Drawerimages/Settings.png";
import Shopping from "../../assets/images/Drawerimages/shopping-bag .png";
import Terms2 from "../../assets/images/Drawerimages/Terms.png";
import Adress from "../../assets/images/Drawerimages/Adress.png";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { Styles } from "./Profiledrawer.style";
import { withStyles } from "@mui/styles";
import Editimage from "./Editimage";
import Editprofile4 from "./Editprofile";
import Terms from "./Terms";
import CButton from "../shared/commonButton/CButton";
import Editprofile1 from "../../assets/images/Drawerimages/Editprofile.png";
import PrivacyPolicy from "./PrivacyPolicy";
interface IProps {
	classes: any;
}
interface MyState2 {
	isdrawerOpen: any;
	open: boolean;
	openPrivacy: boolean;
	openTerms: boolean;
}
class Profiledrawer extends React.Component<IProps, MyState2> {
	state = {
		isdrawerOpen: false,
		open: false,
		openPrivacy: false,
		openTerms: false,
	};
	handleClickFunc = () => {
		this.setState({
			isdrawerOpen: true,
		});
	};
	handleClickProfileFunc = () => {
		this.setState({
			open: true,
		});
	};
	handleClickPrivacyFunc = () => {
		this.setState({
			openPrivacy: true,
		});
	};
	handleClickTermsFunc = () => {
		this.setState({
			openTerms: true,
		});
	};
	handleCloseFunc = () => {
		this.setState({
			isdrawerOpen: false,
			open: false,
		});
	};
	handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ open: false });
	};
	handlePrivacyClose = (
		event: {},
		reason: "backdropClick" | "escapeKeyDown"
	) => {
		this.setState({ openPrivacy: false });
	};
	handleTermsClose = (
		event: {},
		reason: "backdropClick" | "escapeKeyDown"
	) => {
		this.setState({ openTerms: false });
	};
	render() {
		const { classes } = this.props;
		return (
			<>
				<Grid>
					<Button onClick={this.handleClickFunc}>
						{" "}
						<img src={profileImg} alt="profile" />{" "}
					</Button>

					<Drawer
						anchor="right"
						open={this.state.isdrawerOpen}
						onClose={this.handleCloseFunc}>
						<Container>
							<Grid
								container
								columns={{ xs: 11, sm: 5, md: 6, lg: 2 }}
								alignItems="center"
								justifyContent="center">
								<Grid item md={6} lg={2} xs={10} sm={5}>
									<Box
										className={classes.DrawerBox}
										p={2}
										textAlign="center"
										justifyContent="center"
										role="presentation"
										sx={{}}>
										<Box sx={{ display: "flex" }}>
											<Typography className={classes.profile}>
												Profile
											</Typography>
											<CloseIcon
												className={classes.Close}
												onClick={this.handleCloseFunc}
											/>
										</Box>
										<Box sx={{ p: 9 }}>
											<img
												alt="reactangle"
												className={classes.Rectangle18}
												src={Rectangle18}
											/>
											<Typography className={classes.Name} variant="h6">
												Vishal Raghav
											</Typography>

											<Editimage />
										</Box>
										<Box
											className={classes.Editbox}
											onClick={this.handleClickProfileFunc}>
											<img alt="edit profile" src={Editprofile1} />
											<Typography className={classes.profileEdit}>
												Edit Profile
											</Typography>
										</Box>
										<Editprofile4
											open={this.state.open}
											onClose={this.handleClose}
											handleCloseFunc={this.handleCloseFunc}
										/>
										<Divider />
										<Link to="/FavoritePage">
											<Box className={classes.Favbox}>
												<FavoriteSharpIcon className={classes.FavIcon} />
												<Typography className={classes.Favorite}>
													Favorite
												</Typography>
											</Box>
										</Link>

										<Divider />
										<Link to="/myorders">
											<Box className={classes.Orderbox}>
												<img alt="shopping" src={Shopping} />
												<Typography className={classes.Orders}>
													My Orders
												</Typography>
											</Box>
										</Link>
										<Divider />
										<Link to="/address">
											<Box className={classes.Addressbox}>
												<img alt="address" src={Adress} />
												<Typography className={classes.Adress}>
													Address
												</Typography>
											</Box>
										</Link>
										<Divider />
										<Stack
											sx={{
												display: {
													xs: "none",
													sm: "none",
													md: "block",
													lg: "block",
												},
											}}>
											<Box
												onClick={this.handleClickPrivacyFunc}
												className={classes.Privacybox}>
												<img alt="privacy" src={Privacy} />
												<Typography className={classes.Privacy}>
													Privacy Policy
												</Typography>
											</Box>
											<PrivacyPolicy
												open={this.state.openPrivacy}
												onClose={this.handlePrivacyClose}
											/>
										</Stack>
										<Stack
											sx={{
												display: {
													xs: "block",
													sm: "block",
													md: "none",
													lg: "none",
												},
											}}>
											<Link
												to="/privacyPolicy"
												className={classes.Privacybox}>
												<img alt="privacy" src={Privacy} />
												<Typography className={classes.Privacy}>
													Privacy Policy
												</Typography>
											</Link>
										</Stack>
										<Divider />

										<Stack
											sx={{
												display: {
													xs: "none",
													sm: "none",
													md: "block",
													lg: "block",
												},
											}}>
											<Box
												onClick={this.handleClickTermsFunc}
												className={classes.Termsbox}>
												<img alt="termsandconditions" src={Terms2} />
												<Typography className={classes.Terms}>
													Terms and Conditions
												</Typography>
											</Box>
											<Terms
												open={this.state.openTerms}
												onClose={this.handleTermsClose}
											/>
										</Stack>
										<Stack
											sx={{
												display: {
													xs: "block",
													sm: "block",
													md: "none",
													lg: "none",
												},
											}}>
											<Link
												to="/terms&conditions"
												className={classes.Termsbox}>
												<img alt="privacy" src={Terms2} />
												<Typography className={classes.Terms}>
													Terms and Conditions
												</Typography>
											</Link>
										</Stack>
										<Divider />
										<Box className={classes.Settingbox}>
											<img alt="settings" src={Settings} />
											<Typography className={classes.Settings}>
												Setting
											</Typography>
										</Box>
										<Divider />

										<Link to="/">
										<Stack className={classes.addToContanierButton}>
											<CButton title="log out" />
										</Stack>
										</Link>
									</Box>
								</Grid>
							</Grid>
						</Container>
					</Drawer>
				</Grid>
			</>
		);
	}
}
export default withStyles(Styles)(Profiledrawer);
