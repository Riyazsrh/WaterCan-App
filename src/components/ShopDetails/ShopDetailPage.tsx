/** @format */

import { Container, Grid, Stack } from "@mui/material";
import React from "react";
import CustomerHeader from "../shared/customerheader/CustomerHeader";
import Sidebar from "../sidebar/Sidebar";
import ShopTimeSection from "./shopTimeSection";
import Title from "../shared/title/Title";
import BestTeam from "../BestTeamL/BestTeam";
import Footer from "../footer/Footer";
import OurProducts from "./ourProduct";
import Header from "../header/Header";
import { customerMenus } from "../../utils/data/SidebarMenu";
function ShopDetailPage() {
	return (
		<div
			style={{
				width: "100%",
				margin: "auto",
			}}>
			<Grid container>
				<Grid item lg={3} md={4} sm={12} xs={12}>
					<Header menus={customerMenus} login="false" customer={true} />
					<Sidebar menus={customerMenus} customer="true" />
				</Grid>
				<Grid item lg={9} md={8} sm={12} xs={12}>
					<Stack sx={{ marginBottom: "20px" }}>
						<CustomerHeader customer={true} />
					</Stack>

					<Container maxWidth={false} style={{ marginTop: "45px" }}>
						<ShopTimeSection />
					</Container>

					<Container maxWidth={false}>
						<Stack>
							<Title title="Our Products" />
						</Stack>
						<OurProducts />
						<BestTeam />
					</Container>
					<Footer />
				</Grid>
			</Grid>
		</div>
	);
}

export default ShopDetailPage;
