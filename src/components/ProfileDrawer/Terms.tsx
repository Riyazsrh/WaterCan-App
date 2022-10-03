/** @format */

import React from "react";
import {
	Box,
	Typography,
	Grid,
	Dialog,
	DialogContent,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { Styles } from "./Terms.style";
import Terms1 from "../../assets/images/Terms.png";
import Vector from "../../assets/images/Vector (2).png";
interface IProps {
	classes?: any;
	open: boolean;
	onClose: any;
}
interface MyState2 {
	Open: any;
}
class Terms extends React.Component<IProps, MyState2> {
	render() {
		const { classes } = this.props;
		return (
			<Grid>
				<Dialog
					onClose={this.props.onClose}
					sx={{
						borderRadius: "20px",
						padding: "5%",
						width: "100%",
						height: "100%",
					}}
					open={this.props.open}>
					<DialogContent>
						<Box>
							<Grid
								container
								columns={{ xs: 4, sm: 6, md: 12 }}
								spacing={3}>
								<Grid item xs={5} sm={5} md={5} lg={5}>
									<img
										src={Terms1}
										width="100% "
										height="100%"
										className={classes.Privacyimg}
									/>
								</Grid>
								<Grid item xs={7} sm={7} md={7} lg={7}>
									<Box>
										<Typography className={classes.Conditions}>
											Terms and Conditions
										</Typography>
										<Box>
											<Typography className={classes.vector3}>
												<img src={Vector} className={classes.vectorimg} />{" "}
												Its a Long Established Fact. Thats's a Reader Will
												be a Distracted By the Readable Content{" "}
											</Typography>
										</Box>
										<Box>
											<Typography className={classes.vector3}>
												{" "}
												<img
													src={Vector}
													className={classes.vectorimg}
												/>{" "}
												Of a Page When
											</Typography>
										</Box>
										<Box>
											<Typography className={classes.vector3}>
												{" "}
												<img src={Vector} className={classes.vectorimg} />
												Looking At Its Layout.The Point Of Using Lorem
												Ipsum is
											</Typography>
										</Box>
										<Box>
											<Typography className={classes.vector3}>
												{" "}
												<img
													src={Vector}
													className={classes.vectorimg}
												/>{" "}
												That It Has A More-Or-Less Normal Distributioon of
												Letters As Opposed To Using Content Here{" "}
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
												All the Lorem Lpsum Genertors On the Internet Tend
												to
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
					</DialogContent>
				</Dialog>
			</Grid>
		);
	}
}
export default withStyles(Styles)(Terms);
