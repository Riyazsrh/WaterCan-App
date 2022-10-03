/** @format */

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Vector from "../../assets/images/Vector (2).png";
import { customerMenus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Terms1 from "../../assets/images/Terms.png";
import { Styles } from "../../components/ProfileDrawer/Terms.style";
import { withStyles } from "@mui/styles";

interface IProps {
	classes: any;
}
class TermsAndConditions extends React.Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<>
				<Box
					sx={{
						display: { xs: "block", sm: "block", md: "none", lg: "none" },
						width: "100%",
						margin: "auto",
					}}>
					<Grid>
						<Grid item sm={12} xs={12}>
							<Header
								menus={customerMenus}
								login="false"
								customer={true}
							/>
						</Grid>
						<Grid item sm={12} xs={12}>
							<CustomerHeader customer={true} />
						</Grid>
						<Grid sx={{ padding: "30px" }} item sm={12} xs={12}>
							<Box sx={{ textAlign: "center", marginTop: "15%" }}>
								<img src={Terms1} width="100%" height="100%" />
							</Box>
							<Box>
								<Typography className={classes.Conditions}>
									Terms and Conditions
								</Typography>
								<Box>
									<Typography className={classes.vector3}>
										<img src={Vector} className={classes.vectorimg} /> Its
										a Long Established Fact. Thats's a Reader Will be a
										Distracted By the Readable Content{" "}
									</Typography>
								</Box>
								<Box>
									<Typography className={classes.vector3}>
										{" "}
										<img src={Vector} className={classes.vectorimg} /> Of a
										Page When
									</Typography>
								</Box>
								<Box>
									<Typography className={classes.vector3}>
										{" "}
										<img src={Vector} className={classes.vectorimg} />
										Looking At Its Layout.The Point Of Using Lorem Ipsum is
									</Typography>
								</Box>
								<Box>
									<Typography className={classes.vector3}>
										{" "}
										<img src={Vector} className={classes.vectorimg} /> That
										It Has A More-Or-Less Normal Distributioon of Letters
										As Opposed To Using Content Here{" "}
									</Typography>
								</Box>
								<Box>
									<Typography className={classes.vector3}>
										{" "}
										<img src={Vector} className={classes.vectorimg} />
										Content Here,Makking It Look like{" "}
									</Typography>
								</Box>
								<Box>
									<Typography className={classes.vector3}>
										{" "}
										<img src={Vector} className={classes.vectorimg} />
										All the Lorem Lpsum Genertors On the Internet Tend to
									</Typography>
								</Box>
								<Box>
									<Typography className={classes.vector3}>
										{" "}
										<img src={Vector} className={classes.vectorimg} />
										Repeat Predefined
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

export default withStyles(Styles)(TermsAndConditions);
