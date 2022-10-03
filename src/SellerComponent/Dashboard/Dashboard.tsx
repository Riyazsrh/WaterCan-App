/** @format */

import React, { Component } from "react";
import { Stack, Typography, Grid, Box, Paper, Button, TextField } from "@mui/material";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import { sellerMenus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";
import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";
import {
	cardData,
	orderHistoryData,
	salesman,
	orderRecent,
} from "../../utils/data/dashboardData";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CButton from "../../components/shared/commonButton/CButton";
import { withStyles } from "@mui/styles";
import { Styles } from "./DashboardStyle";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";

import RecentOrderCard from "../RecentOrder/RecentOrderCard";
import { Link } from "react-router-dom";
import OrderHistoryCard from "../OrderHistory/OrderHistoryCard";
import CommonSidebarHeader from "../../components/shared/commonSidebarHeader/CommonSidebarHeader";
import SearchBar from "material-ui-search-bar";

interface IProps {
	classes?: any;
}


interface MyState {
	searched: any;
	search: any;
}

class Dashboard extends Component<IProps, MyState> {

	state = {
		searched: "",
		search: "",
	}

	onChangeHandle = (searched: any) => {
		this.setState({ searched });
	}

	onChangeHandle1 = (search: any) => {
		this.setState({ search });
	}
	
	data: any = {
		labels: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10",
			"11",
			"12",
			"13",
			"14",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
			"21",
			"22",
			"23",
			"24",
			"25",
			"26",
			"27",
			"28",
		],
		datasets: [
			{
				data: [
					3000, 3800, 4500, 4100, 4400, 4000, 3600, 3300, 4100, 5200, 4200,
					4600, 4900, 4100, 4500, 4700, 3500, 2800, 3400, 4300, 4900, 4400,
					4600, 4200, 4000, 3900, 4600, 4200, 4100,
				],
				label: "₹",
				fill: true,
				backgroundColor: "#D1EAFE",
				borderColor: "#1C97FD",
				lineTension: 0.8,
			},
		],
	};

	options = {
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	revenue(arr: any) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		console.log(arr, "revenue func");

		return sum;
	}

	render(): React.ReactNode {
		const { classes } = this.props;

		const toSearch = (searched: any) => (item: any) =>
			item.id.toLowerCase().includes(searched.toLowerCase());

			const toSearch1 = (search: any) => (item: any) =>
			item.orderNo.toLowerCase().includes(search.toLowerCase());

		return (
			<>
				<CommonSidebarHeader customer={false} />
				<div
					style={{
						width: "100%",
						margin: "auto",
					}}>
					<Grid container>
						<Grid lg={3} md={4}></Grid>
						<Grid
							item
							container
							lg={9}
							md={8}
							sm={12}
							xs={12}
							justifyContent="space-evenly">
							{/* Grid item for App Bar */}

							<Grid container sx={{ padding: "0 1.5rem" }}>
								{/* Grid for graph */}
								<Grid
									sx={{ marginTop: "30px" }}
									item
									lg={12}
									md={20}
									sm={20}
									xs={20}
									className="scroll">
									<Paper sx={{ marginTop: "30px" }}>
										<Box className={classes.earningBox}>
											<Typography
												sx={{ fontSize: "22px !important" }}
												className={classes.fontWeight600}>
												Earning
											</Typography>
											<Typography
												sx={{ fontSize: "20px !important" }}
												className={classes.boxText}>
												<span style={{ color: "#A2A3A5" }}>
													May Revenue
												</span>{" "}
												₹{this.revenue(this.data.datasets[0].data)}
											</Typography>
										</Box>
										<Box className="graphWrapper">
											<Line
												className="graph"
												options={this.options}
												data={this.data}
											/>
										</Box>
									</Paper>
								</Grid>
								{/* Grid for cards */}
								<Grid
									item
									container
									spacing={2}
									lg={12}
									md={12}
									sm={12}
									xs={12}
									sx={{ marginTop: "20px" }}>
									{cardData.map((card: any) => {
										return (
											<Grid item lg={3} md={6} sm={6} xs={12}>
												<Card className={classes.detailCard}>
													<Box className={classes.flexCenter}>
														<Box>
															<img src={card.img} alt="carBottle" />
														</Box>
														<Box>
															<Typography className={classes.cardHeading}>
																{card.heading}
															</Typography>
															<Typography
																className={classes.fontWeight600}>
																{card.value}
															</Typography>
														</Box>
													</Box>
												</Card>
											</Grid>
										);
									})}
								</Grid>
								{/* Grid for recent Orders */}

								<Grid
									item
									lg={12}
									md={12}
									sm={12}
									xs={12}
									id="RecentOrder">


									<Grid container>
										<Grid item lg={6} md={6} sm={6} xs={12}>
											<Typography
												sx={{
													fontSize: "1.5rem !important",
													fontWeight: "700 !important",
													margin: "1.5rem 0",
													borderLeft: "4px solid #1C97FD",
													paddingLeft: "1.2rem",
												}}>
												Recent Orders
											</Typography>
										</Grid>
										<Grid item lg={6} md={6} sm={6} xs={12}>
											<SearchBar
												value={this.state.searched}
													onChange={this.onChangeHandle}
												style={{
													margin: "20px auto",
													maxWidth: 800
												}}
											/>
										</Grid>
									</Grid>
									<Link to="/recentOrderDetails">
										<Grid container>
											{orderRecent
											.filter(toSearch(this.state.searched))
											.map((order) => {
												return (
													<Grid
														item
														lg={12}
														md={12}
														sm={12}
														xs={12}
														key={order.heading}>
														<RecentOrderCard order={order} />
													</Grid>
												);
											})}
										</Grid>
									</Link>
									<Link to="/recentOrders">
										<Box
											sx={{
												textAlign: "center",
												margin: "2rem 0 4rem 0",
											}}>
											<CButton title=" View All Recent Orders" />
										</Box>
									</Link>
								</Grid>
								{/* Grid for Order History */}
								<Grid
									item
									container
									spacing={2}
									lg={12}
									md={12}
									sm={12}
									xs={12}>
									{/* Grid item for orderHistory left */}
									<Grid
										item
										lg={8}
										md={12}
										xs={12}
										sm={12}
										id="OrderHistory">
										
										<Grid container>
											<Grid item lg={6}>
												<Typography
													sx={{
														fontSize: "1.5rem !important",
														fontWeight: "700 !important",
														margin: "1.5rem 0",
														borderLeft: "4px solid #1C97FD",
														paddingLeft: "1.2rem",
													}}>
													Order History
												</Typography>
											</Grid>
											<Grid item lg={6}>
											<SearchBar
												value={this.state.search}
												onChange={this.onChangeHandle1}
												style={{
													margin: "20px auto",
													maxWidth: 800
												}}
											/>
											</Grid>
										</Grid>
										<Grid container>
											{orderHistoryData
											.filter(toSearch1(this.state.search))
											.map((order: any) => {
												return (
													<Stack key={order.id}>
														<OrderHistoryCard elem={order} />
													</Stack>
												);
											})}
										</Grid>
										<Link to="/orderhistory">
											<Box
												sx={{
													textAlign: "center",
													margin: "2rem 0 4rem 0",
												}}>
												<CButton title=" View All Order History" />
											</Box>
										</Link>
									</Grid>
									{/* Grid item for delivery */}
									<Grid item lg={4} md={12} xs={12} sm={12}>
										<Card
											className={classes.mainSalesmanCard}
											sx={{ padding: "1rem" }}>
											<Grid
												rowSpacing={4}
												container
												lg={12}
												md={12}
												xs={12}
												sm={12}>
												{salesman.map((person: any) => {
													return (
														<>
															<Grid
																item
																container
																alignItems="center"
																lg={12}
																md={12}
																xs={12}
																sm={12}
																justifyContent="space-evenly"
																spacing={3}>
																<Grid item lg={4} md={5} sm={4} xs={4}>
																	<img
																		className={classes.imgTag1}
																		src={person.img}
																		alt=""
																	/>
																</Grid>
																<Grid
																	item
																	lg={8}
																	md={7}
																	sm={8}
																	xs={8}
																	sx={{
																		padding: "4px !important",
																	}}>
																	<Typography
																		sx={{
																			fontSize: "16px !important",
																			marginLeft: "4px",
																			marginTop: "20px",
																		}}
																		className={classes.fontWeight600}>
																		{person.name}
																	</Typography>
																	<Box
																		sx={{
																			display: "flex",
																		}}>
																		<Typography
																			className={classes.fontWeight600}>
																			<LocationOnIcon
																				className={
																					classes.locationIconStyle
																				}
																				color="primary"
																			/>
																			{person.distance}
																		</Typography>
																		<Typography
																			sx={{ marginLeft: "10px" }}>
																			{person.rating}
																		</Typography>
																	</Box>
																</Grid>
															</Grid>
														</>
													);
												})}
											</Grid>
										</Card>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</>
		);
	}
}
export default withStyles(Styles)(Dashboard);
