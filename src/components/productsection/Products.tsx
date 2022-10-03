/** @format */

import React, { Component, Fragment } from "react";
import { Container, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../utils/data/ProductData";
import ProductCard from "./ProductCard";
import "./productcard.css";
import Title from "../shared/title/Title";

export default class Product1 extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 2,
			autoplay: true,
			speed: 4000,
			autoplaySpeed: 4000,
			cssEase: "linear",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 4,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 3,
						autoplay: false,
					},
				},
			],
		};
		return (
			<>
				<Stack id='Product'>
					<Container >
						<Title title="Our Products" />
						<Stack className="productContainer" >
							<Slider {...settings}>
								{data.map((ele: any, index) => {
									return (
										<Fragment key={index}>
											<ProductCard ele={ele} />
										</Fragment>
									);
								})}
							</Slider>
						</Stack>
					</Container>
				</Stack>
			</>
		);
	}
}
