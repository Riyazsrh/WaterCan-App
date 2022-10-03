/** @format */

import React, { Component } from "react";
import ProductCard from "../productsection/ProductCard";
import { Stack, Container, Grid } from "@mui/material";
import { data } from "../../utils/data/FavoriteData";
import Sidebar from "../sidebar/Sidebar";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";

import { customerMenus } from "../../utils/data/SidebarMenu";
import Header from "../header/Header";

class FavoritePage extends Component {
	render() {
		return (
			<div
				style={{
					width: "100%",
				}}>
				<Grid container>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Header menus={customerMenus} login="false" customer={true} />
						<Sidebar menus={customerMenus} customer="true" />
					</Grid>
					<Grid item lg={9} md={8} sm={12} xs={12}>
						<CustomerHeader customer={true} />
						<Container maxWidth={false} sx={{ marginTop: "40px" }}>
							<h2 style={{ marginLeft: "30px" }}>Favorite</h2>
							<Stack sx={{}} direction="row" spacing={2}>
								<Grid container spacing={1}>
									{data.map((ele: any) => {
										return (
											<>
												<Grid item lg={3} md={4} sm={6} xs={12}>
													<ProductCard ele={ele} />
												</Grid>
											</>
										);
									})}
								</Grid>
							</Stack>
						</Container>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default FavoritePage;
