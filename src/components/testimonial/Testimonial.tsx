/** @format */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";
import { image, testimonial } from "../../utils/data/TestimonialData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Typography, Stack, Box } from "@mui/material";
import { Component } from "react";

const PreviousBtn = (props: any) => {
	const { className, onClick } = props;
	return (
		<Stack
			className={className}
			style={{ marginLeft: "30px" }}
			onClick={onClick}>
			<ArrowBackIos style={{ color: "#000000", fontSize: "13px" }} />
		</Stack>
	);
};
const NextBtn = (props: any) => {
	const { className, onClick } = props;
	return (
		<Stack
			className={className}
			style={{ marginRight: "30px" }}
			onClick={onClick}>
			<ArrowForwardIos style={{ color: "#000000", fontSize: "13px" }} />
		</Stack>
	);
};

class Testimonial extends Component {
	render() {
		return (
			<>
				<Stack id="Testimonials">
					<Box
						sx={{
							width: "100%",
							marginTop: "70px",
							marginBottom: "-65px",
						}} >
						<Stack>
							<Stack className="bg-image">
								<Stack style={{ width: "100%" }} className="carousel">
									<Stack className="content">
										<Typography
											className="title"
											sx={{ fontSize: "30px" }}
											variant="h5">
											Testimonial
										</Typography>
										<Typography
											className="border"
											sx={{ width: "33px" }}></Typography>
									</Stack>
									<>
										<Slider
											autoplay
											autoplaySpeed={2000}
											dots
											initialSlide={2}
											infinite
											prevArrow={<PreviousBtn />}
											nextArrow={<NextBtn />}
											customPaging={(i) => {
												return (
													<Stack>
														<img src={image[i]} alt="" />
													</Stack>
												);
											}}
											dotsClass="slick-dots custom-indicator">
											{testimonial.map((item) => (
												<Stack key={item.id} className="text-container">
													<Typography className="para">
														{item.para1}
														<Typography className="para2" component="span">
															{item.para2}{" "}
														</Typography>
													</Typography>
													<Typography
														sx={{ textAlign: "center" }}
														className="sliderName">
														{item.name}
													</Typography>
												</Stack>
											))}
										</Slider>
									</>
								</Stack>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</>
		);
	}
}

export default Testimonial;
