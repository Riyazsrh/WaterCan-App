/** @format */

import React, { Component } from "react";
import {
	Typography,
	Grid,
	Container,
	Box,
	Paper,
	MenuItem,
	MenuList,
	ListItemIcon,
	Divider,
	TableContainer,
	Button,
} from "@mui/material";
import { Styles } from "./Notification.Style";
import { withStyles } from "@mui/styles";
import waterCan from "../../assets/images/water-can.png";
import waterMan from "../../assets/images/Notification/man-with-can.jpg";
import { data } from "../../utils/data/NotificationData";
import Sidebar from "../../components/sidebar/Sidebar";
import ClearIcon from "@mui/icons-material/Clear";
import "./Notification.css";
import { Link } from "react-router-dom";
import { customerMenus } from "../../utils/data/SidebarMenu";

interface IProps {
	classes: any;
}
class Notification extends Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<>
				<div>
					<div className="notification">
						<Box
							sx={{
								width: "100%",
								margin: "auto",
								background: "rgba(242, 242, 242, 1)",
								display: {
									lg: "block",
									md: "none",
									sm: "none",
									xs: "none",
								},
							}}>
							<Grid container>
								<Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
									<Sidebar menus={customerMenus} customer="true" />
								</Grid>
								<Grid item lg={9} md={8} sm={12} xs={12}>
									<Box sx={{ textAlign: "center" }}>
										<h1
											style={{
												fontSize: "24px",
												marginBottom: "-48px",
												marginTop: "25px",
												marginLeft: "-60px",
											}}
											id="hadding">
											Notification
										</h1>
									</Box>
									<Box className={classes.container}>
										<Grid container>
											<Grid item lg={3} md={3} sm={3}>
												<Box id="rowItem" className={classes.rowItem}>
													<img
														src={waterCan}
														id="waterCan"
														className={classes.waterCan}
														alt="watercan"
													/>
												</Box>
											</Grid>
											<Grid item lg={6} md={6} sm={6}>
												<Paper
													id="paper"
													className={classes.paper}
													sx={{
														width: 380,
														height: "auto",
														marginTop: "75px",
														boxShadow: "none",
														borderRadius: "20px",
														marginLeft: "20px",
													}}>
													<MenuList dense>
														<TableContainer
															id="drawerPaper"
															sx={{ maxHeight: 480 }}
															className={classes.drawerPaper}>
															{data.map((item: any, index: any) => {
																return (
																	<>
																		<MenuItem>
																			<hr
																				style={
																					item?.available
																						? {
																								width: "10px",
																								height: "10px",
																								background:
																									"rgba(28, 151, 253, 1)",
																								borderRadius: "10px",
																						  }
																						: {}
																				}
																			/>
																			<ListItemIcon>
																				<img
																					src={item.imgPath}
																					width="100%"
																					height="100%"
																					style={{ padding: "10px" }}
																					alt={item.label}
																				/>
																			</ListItemIcon>
																			<Typography
																				sx={{
																					fontSize: "18px",
																					fontWeight: 500,
																				}}
																				className={classes.text}>
																				{item.label}
																			</Typography>
																			<a
																				href="!#"
																				style={
																					item?.available
																						? {
																								color:
																									"rgba(28, 151, 253, 1)",
																								fontSize: "16px",
																								marginLeft: "-58%",
																								marginTop: "28px",
																						  }
																						: {
																								color:
																									"rgba(162, 163, 165, 1)",
																								fontSize: "16px",
																								marginLeft: "-58%",
																								marginTop: "28px",
																						  }
																				}>
																				{item.c}
																			</a>
																		</MenuItem>
																		<Typography
																			sx={
																				item.available
																					? {
																							fontSize: "14px !important",
																							fontWeight: 500,
																							color: "rgba(0, 6, 32, 1)",
																					  }
																					: {
																							fontSize: "14px !important",
																							fontWeight: 500,
																							color:
																								"rgba(162, 163, 165, 1)",
																					  }
																			}
																			className={classes.text2}>
																			{item.text}
																		</Typography>
																		<Divider />
																	</>
																);
															})}
														</TableContainer>
													</MenuList>
												</Paper>
											</Grid>
											<Grid item lg={3} md={3} sm={3}>
												<Box className={classes.rowItem}>
													<img
														src={waterMan}
														id="waterMan"
														className={classes.waterMan}
														alt="watercan"
													/>
												</Box>
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</div>
					<Box
						sx={{
							display: {
								lg: "none",
								md: "block",
								sm: "block",
								xs: "block",
							},
						}}>
						<div
							style={{
								width: "100%",
								margin: "auto",
								background: "rgba(242, 242, 242, 1)",
							}}>
							<Grid
								container
								spacing={0}
								alignItems="center"
								style={{ marginBottom: "-60px", padding: "0px 30px" }}>
								<Grid item lg={9} xs={9} sm={9}>
									<Box>
										<h1 className={classes.hadding} id="hadding">
											Notification
										</h1>
									</Box>
								</Grid>
								<Grid item lg={3} xs={3} sm={3}>
									<Box sx={{ textAlign: "right" }}>
										<Link to="/customers">
											<Button>
												<ClearIcon sx={{ color: "black" }} />
											</Button>
										</Link>
									</Box>
								</Grid>
							</Grid>
							<Container maxWidth={false}>
								<Grid container>
									<Grid item sm={12} xs={12}>
										<Paper
											sx={{
												width: "100%",
												height: "auto",
												marginTop: "75px",
												boxShadow: "none",
												borderRadius: "20px",
											}}>
											<MenuList dense>
												{data.map((item: any, index: any) => {
													return (
														<Box key={index}>
															<MenuItem>
																<hr
																	style={
																		item?.available
																			? {
																					width: "10px",
																					height: "10px",
																					background:
																						"rgba(28, 151, 253, 1)",
																					borderRadius: "10px",
																			  }
																			: {}
																	}
																/>
																<ListItemIcon>
																	<img
																		src={item.imgPath}
																		width="100%"
																		height="100%"
																		style={{ padding: "10px" }}
																		alt={item.label}
																	/>
																</ListItemIcon>
																<Typography
																	sx={{
																		fontSize: "18px",
																		fontWeight: 500,
																	}}
																	id="text"
																	className={classes.text}>
																	{item.label}
																</Typography>
																<a
																	href="!#"
																	className={classes.time}
																	id="time"
																	style={
																		item?.available
																			? {
																					color: "rgba(28, 151, 253, 1)",
																					fontSize: "16px",
																					marginLeft: "-68%",
																					marginTop: "28px",
																			  }
																			: {
																					color: "rgba(162, 163, 165, 1)",
																					fontSize: "16px",
																					marginLeft: "-68%",
																					marginTop: "28px",
																			  }
																	}>
																	{item.c}
																</a>
															</MenuItem>
															<Typography
																sx={
																	item.available
																		? {
																				fontSize: "14px !important",
																				fontWeight: 500,
																				color: "rgba(0, 6, 32, 1)",
																		  }
																		: {
																				fontSize: "14px !important",
																				fontWeight: 500,
																				color: "rgba(162, 163, 165, 1)",
																		  }
																}
																className={classes.text2}
																id="text2">
																{item.text}
															</Typography>
															<Divider />
														</Box>
													);
												})}
											</MenuList>
										</Paper>
									</Grid>
								</Grid>
							</Container>
						</div>
					</Box>
				</div>
			</>
		);
	}
}

export default withStyles(Styles)(Notification);
