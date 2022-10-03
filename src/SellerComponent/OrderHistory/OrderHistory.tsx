/** @format */

import { Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Styles } from "../../components/OrderDetails/PymentCards.style";
import { withStyles } from "@mui/styles";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import { sellerMenus } from "../../utils/data/SidebarMenu";
import { orderHistoryData } from "../../utils/data/dashboardData";
import { orderHistoryProps } from "../../utils/models/interface";
import OrderHistoryCard from "./OrderHistoryCard";
import CommonSidebarHeader from "../../components/shared/commonSidebarHeader/CommonSidebarHeader";
import SearchBar from "material-ui-search-bar";

interface Iprops {
	classes: any;
}


class OrderHistory extends React.Component<Iprops> {

	state = {
		searched: "",
	}

	onChangeHandle = (searched: any) => {
		this.setState({ searched });
	}

	render() {
		const { classes } = this.props;

		const toSearch = (searched: any) => (item: any) =>
			item.orderNo.toLowerCase().includes(searched.toLowerCase());

		return (
			<>
				<CommonSidebarHeader customer={false} />
				<div
					style={{
						width: "100%",
						margin: "auto",
					}}>
					<Grid container sx={{ backgroundColor: "#F2F2F2" }}>
						<Grid item lg={3} md={4}></Grid>
						<Grid
							item
							lg={9}
							md={8}
							sm={12}
							xs={12}
							sx={{ backgroundColor: "#F2F2F2" }}>
							<Container maxWidth={false}>
								<Grid container>
									<Grid item lg={2}></Grid>
									<Grid item lg={8} md={12} xs={12} sm={12}>

										<Grid container >
											<Grid item lg={6} md={6} sm={6} xs={12}>
												<Typography
													className={classes.TypoTxt}
													sx={{
														fontSize: "20px !important",
														margin: "15px 0 ",
													}}>
													Order History
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
										{orderHistoryData
											.filter(toSearch(this.state.searched))
											.map((elem) => {
												return (
													<Stack key={elem.id}>
														<OrderHistoryCard elem={elem} />
													</Stack>
												);
											})}
									</Grid>
									<Grid lg={2}></Grid>
								</Grid>
							</Container>
						</Grid>
					</Grid>
				</div>
			</>
		);
	}
}
export default withStyles(Styles)(OrderHistory);
