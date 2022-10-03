/** @format */

import { Box, Grid } from "@mui/material";
import React, { Component } from "react";
import Image1 from "../../assets/images/Team (1).jpg";
import Image2 from "../../assets/images/Team (2).jpg";
import Image3 from "../../assets/images/Team (3).jpg";
import "./BestTeam.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Title from "../shared/title/Title";

class Team extends Component {
	render() {
		return (
			<>
				<Box
					className="container"
					sx={{
						display: { lg: "block", md: "block", sm: "none", xs: "none" },
					}}>
					<Grid
						container
						spacing={0}
						alignItems="center"
						style={{
							marginBottom: "-60px",
							padding: "0px 0px",
							marginLeft: "28px",
						}}>
						<Grid item lg={12} xs={12} sm={12}>
							<Title title="Best Team Member" />
						</Grid>
					</Grid>
					<Carousel
						showArrows={false}
						infiniteLoop={true}
						showThumbs={false}
						showStatus={false}
						autoPlay={true}
						interval={3000}
						className="button">
						<Box className="cont">
							<br />
							<br />
							<br />

							<Box className="main">
								<Grid container spacing={3}>
									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team" src={Image2} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team1" src={Image3} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team2" src={Image1} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
							<br />
							<br />
							<br />
						</Box>

						<Box className="cont">
							<br />
							<br />
							<br />

							<Box className="main">
								<Grid container spacing={3}>
									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team3" src={Image2} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team4" src={Image3} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team5" src={Image1} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
							<br />
							<br />
							<br />
						</Box>

						<Box className="cont">
							<br />
							<br />
							<br />

							<Box className="main">
								<Grid container spacing={3}>
									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team6" src={Image2} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team7" src={Image3} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team8" src={Image1} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
							<br />
							<br />
							<br />
						</Box>

						<Box className="cont">
							<br />
							<br />
							<br />

							<Box className="main">
								<Grid container spacing={3}>
									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team9" src={Image2} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team" src={Image3} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team" src={Image1} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
							<br />
							<br />
							<br />
						</Box>

						<Box className="cont">
							<br />
							<br />
							<br />

							<Box className="main">
								<Grid container spacing={3}>
									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team1" src={Image2} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team2" src={Image3} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>

									<Grid item lg={4} sm={4} xs={12}>
										<Box className="single-team">
											<Box className="team-img">
												<img alt="team3" src={Image1} />
											</Box>
											<Box className="overlay-text">
												<h2>
													Aakash Singh{" "}
													<a
														href="!#"
														style={{
															color: "rgba(28, 151, 253, 1)",
															fontSize: "17px",
														}}>
														Delivery Boy
													</a>
												</h2>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
							<br />
							<br />
							<br />
						</Box>
					</Carousel>
				</Box>

				<Box
					className="container"
					sx={{
						display: { lg: "none", md: "none", sm: "block", xs: "block" },
					}}>
					<Grid container spacing={0} alignItems="center">
						<Grid
							item
							lg={12}
							xs={12}
							sm={12}
							sx={{ marginBottom: "30px" }}>
							<Title title="Best Team Member" />
						</Grid>
					</Grid>
					<Box className="main">
						<Grid container spacing={3}>
							<Carousel
								showArrows={false}
								infiniteLoop={true}
								showThumbs={false}
								showStatus={false}
								autoPlay={true}
								interval={3000}
								className="button">
								<Grid item sm={12} xs={12}>
									<Box className="single-team">
										<Box className="team-img" sx={{ marginLeft: "45px" }}>
											<img alt="team" src={Image2} />
										</Box>
										<Box className="overlay-text">
											<h2>
												Aakash Singh{" "}
												<a
													href="!#"
													style={{
														color: "rgba(28, 151, 253, 1)",
														fontSize: "17px",
													}}>
													Delivery Boy
												</a>
											</h2>
										</Box>
									</Box>
								</Grid>

								<Grid item sm={12} xs={12}>
									<Box className="single-team">
										<Box className="team-img" sx={{ marginLeft: "45px" }}>
											<img alt="team" src={Image3} />
										</Box>
										<Box className="overlay-text">
											<h2>
												Aakash Singh{" "}
												<a
													href="!#"
													style={{
														color: "rgba(28, 151, 253, 1)",
														fontSize: "17px",
													}}>
													Delivery Boy
												</a>
											</h2>
										</Box>
									</Box>
								</Grid>

								<Grid item sm={12} xs={12}>
									<Box className="single-team">
										<Box className="team-img" sx={{ marginLeft: "45px" }}>
											<img alt="team" src={Image1} />
										</Box>
										<Box className="overlay-text">
											<h2>
												Aakash Singh{" "}
												<a
													href="!#"
													style={{
														color: "rgba(28, 151, 253, 1)",
														fontSize: "17px",
													}}>
													Delivery Boy
												</a>
											</h2>
										</Box>
									</Box>
								</Grid>
							</Carousel>
						</Grid>
					</Box>
				</Box>
			</>
		);
	}
}

export default Team;
