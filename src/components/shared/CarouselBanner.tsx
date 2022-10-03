/** @format */

// import { withStyles } from "@material-ui/core/styles";
import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import CarouselData from "../../utils/data/CarouselData";
import "./CarouselBanner.css";
import { Box, Grid, Stack, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CButton from "./commonButton/CButton";

interface IProps {
	login?: string;
}
class SimpleSlider extends Component<IProps> {
	state = {
		redirect: false,
	};

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		const PreviousBtn = (props: any) => {
			const { className, onClick } = props;
			return (
				<Stack
					id="pev"
					className={className}
					style={{
						marginLeft: "50px",
						zIndex: "1",
						backgroundColor: "white",
						borderRadius: "25px",
						alignItems: "center",
						width: "30px",
						height: "30px",
					}}
					onClick={onClick}>
					<ArrowBackIos
						id="arrowBtn"
						style={{
							color: "#000000",
							fontSize: "25px",
							margin: "auto",
							marginLeft: "7px",
						}}
					/>
				</Stack>
			);
		};
		const NextBtn = (props: any) => {
			const { className, onClick } = props;
			return (
				<Stack
					id="pev"
					className={className}
					style={{
						marginRight: "50px",
						backgroundColor: "white",
						zIndex: "1",
						borderRadius: "25px",
						alignItems: "center",
						width: "30px",
						height: "30px",
					}}
					onClick={onClick}>
					<ArrowForwardIos
						id="arrowBtn"
						style={{ color: "#000000", fontSize: "25px", margin: "auto" }}
					/>
				</Stack>
			);
		};

		return (
			<>
				<Box
					className="Banner"
					sx={{
						width: "100%",
						margin: "auto",
					}}>
					<Slider
						{...settings}
						prevArrow={<PreviousBtn />}
						nextArrow={<NextBtn />}>
						{CarouselData.map((data, index) => {
							return (
								<Fragment key={index}>
									<Box className="main-div">
										<Grid container>
											<Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
												<Box className=" grid-item headings">
													<Typography
														variant="h2"
														style={{ color: "white" }}
														className="heading">
														{data.heading}
													</Typography>
													<Typography
														sx={{
															fontFamily: "Inter",
															fontStyle: "normal",
															fontWeight: "700",
															fontSize: "39px !important",
															lineHeight: "61px",
															textTransform: "capitalize",
														}}
														className="desc"
														id="description">
														{data.description}
													</Typography>
													{this.props.login === "true" ? (
														<Link
															style={{
																marginLeft: "-14%",
																marginTop: "20px",
															}}
															to="/account-login">
															<Stack
																sx={{
																	display: {
																		lg: "block",
																		md: "none",
																		sm: "none",
																		xs: "none",
																	},
																}}>
																<CButton title="Login account" />
															</Stack>
														</Link>
													) : null}
												</Box>
											</Grid>
											<Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
												<Box className="grid-item bottle">
													<img
														alt="bottleImage"
														id="bottleImg"
														src={data.img}
													/>
												</Box>
											</Grid>
										</Grid>
									</Box>
								</Fragment>
							);
						})}
					</Slider>
				</Box>
			</>
		);
	}
}

export default SimpleSlider;
