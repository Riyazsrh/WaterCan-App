/** @format */

import React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";
import SimpleSlider from "../shared/CarouselBanner";
import WelcomeSection from "../Landing/welcomesection/WelcomeSection";
import Gallery from "../Landing/gallery/Gallery";
import Testimonial from "../testimonial/Testimonial";
import BestTeam from "../BestTeamL/BestTeam";
import OurBlog from "../ourblog/OurBlog";
import Footer from "../footer/Footer";
import Products from "../productsection/Products";
import { menus } from "../../utils/data/SidebarMenu";
import Header from "../header/Header";
export default function Home() {
	return (
		<div
			style={{
				width: "100%",
				margin: "auto",
			}}
			id="Home">
			<Grid container>
				<Grid item lg={3} md={4} sm={12} xs={12}>
					<Header menus={menus} login="true" customer={false} />
					<Sidebar menus={menus} customer="false" />
				</Grid>
				<Grid item lg={9} md={8} sm={12} xs={12}>
					<Container maxWidth={false}>
						<SimpleSlider login="true" />
						<Products />
						<WelcomeSection />
						<Gallery />
						<BestTeam />
						<Testimonial />
						<OurBlog />
					</Container>
					<Footer />
				</Grid>
			</Grid>
		</div>
	);
}
