/** @format */

import React, { Component } from "react";
import { Stack, Grid, TextField, Button } from "@mui/material";

import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";

import Sidebar from "../../components/sidebar/Sidebar";

import { sellerMenus } from "../../utils/data/SidebarMenu";
import Header from "../../components/header/Header";
import { orderRecentDetails } from "../../utils/data/dashboardData";

import { withStyles } from "@mui/styles";
import { Styles } from "./Recent.Style";
import { orderRecentProps } from "../../utils/models/interface";
import RecentOrderCard from "./RecentOrderCard";
import Title from "../../components/shared/title/Title";
import SearchBar from "material-ui-search-bar";

interface IProps {
	classes?: any;
}


class RecentOrder extends Component<IProps> {

	state = {
		searched: "",
	}

	onChangeHandle = (searched: any) => {
		this.setState({ searched });
	}

	render(): React.ReactNode {
		const { classes } = this.props;

		const toSearch = (searched: any) => (item: any) =>
			item.id.toLowerCase().includes(searched.toLowerCase());

		return (
			<div
				style={{
					width: "100%",
					margin: "auto",
				}}>
				<Grid container>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Header menus={sellerMenus} login="false" customer={false} />
						<Sidebar menus={sellerMenus} customer="true" />
					</Grid>

					<Grid
						item
						container
						lg={9}
						md={8}
						sm={12}
						xs={12}
						justifyContent="space-evenly">
						{/* Grid item for App Bar */}
						<Grid item lg={9} md={8} sm={12} xs={12}>
							<Stack sx={{ marginBottom: "20px" }}>
								<CustomerHeader customer={false} />
							</Stack>
						</Grid>

						<Grid lg={9} md={8} sm={12} xs={12} spacing={4}>
							<Grid container >
								<Grid item lg={6} md={6} sm={6} xs={12}>
									<Stack>
										<Title title="Recent Orders" />
									</Stack>
								</Grid>
								<Grid item lg={6} md={6} sm={6} xs={12}>
									<SearchBar
										value={this.state.searched}
										onChange={this.onChangeHandle}
										style={{
											margin: "20px auto",
											marginTop:'50px',
											maxWidth: 800
										}}
									/>
								</Grid>
							</Grid>

							{orderRecentDetails
							.filter(toSearch(this.state.searched))
							.map((order) => {
								return (
									<Grid
										item
										lg={12}
										md={12}
										sm={12}
										xs={12}
										key={order.id}>
										<RecentOrderCard order={order} />
									</Grid>
								);
							})}
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(Styles)(RecentOrder);
