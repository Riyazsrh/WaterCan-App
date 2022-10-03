/** @format */

import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { data } from "../../utils/data/ProductData";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: any) => ({
	rootProducts: {
		[theme.breakpoints.only("xs")]: {
			flexDirection: "column !important" as any,
		},
	},
	productMain: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column!important" as any,
		width: "218px",
		height: "291px",
		borderRadius: "20px",
		"&:hover": {
			boxShadow: " 2px 2px 40px 2px rgba(177, 233, 255, 0.5)",
			color: "#1C97FD",
		},
		[theme.breakpoints.only("md")]: {
			width: "186px",
		},
		[theme.breakpoints.only("sm")]: {
			width: "180px",
		},
		[theme.breakpoints.only("xs")]: {
			width: "342px",
		},
	},

	imgMain: {
		width: "129.14px",
		height: "144.13px",
	},
	img: {
		width: "100%",
		height: "100%",
	},
	content: {
		marginTop: "15px",
	},
	prodcutPrice: {
		textAlign: "center",
		textTransform: "capitalize",
	},
	productText: {
		textAlign: "center",
		textTransform: "capitalize",
		color: "#000620",
	},
}));

function OurProducts() {
	const classes = useStyles();

	return (
		<>
			<Grid container>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
						}}>
						{data.map((elem: any) => {
							return (
								<>
									<Link to="/single-product-page">
										<Grid lg={3} md={6} xs={12} sm={6}>
											<Link to="/single-product-page">
												<Grid item lg={3} xs={12} sm={12}>
													<Grid item className={classes.productMain}>
														<div className={classes.imgMain}>
															<img
																src={elem.imgPath}
																alt="img"
																className={classes.img}
															/>
														</div>
														<div className={classes.content}>
															<Typography className={classes.productText}>
																{elem.label}
															</Typography>
															<Typography
																className={` ${classes.prodcutPrice}`}>
																{elem.price1}
																<Typography
																	className={` ${classes.prodcutPrice}`}
																	component="del">
																	{elem.price2}
																</Typography>
															</Typography>
														</div>
													</Grid>
												</Grid>
											</Link>
										</Grid>
									</Link>
								</>
							);
						})}
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default OurProducts;
