/** @format */

import React, { Component } from "react";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Vector from "../../assets/images/Vector.png";
import { shopDetails } from "../../utils/data/ShopNearbyData";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./ShopDetail.css";
import { Styles } from "../shared/customerdetails/customerDetail.styles";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { withStyles } from "@mui/styles";

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

interface IProps {
	classes: any;
}

class ShopTimeSection extends Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Grid container spacing={2}>
					<Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
						<Card
							sx={{
								maxWidth: "100%",
								marginLeft: "0px",
								marginTop: "5px",
								borderRadius: "20px",
							}}>
							<Box
								className="Shop"
								sx={{
									width: "100%",
									margin: "auto",
								}}>
								<Slider
									{...settings}
									prevArrow={<PreviousBtn />}
									nextArrow={<NextBtn />}>
									{shopDetails.map((elem: any) => {
										return (
											<CardMedia
												component="img"
												height="220"
												image={elem.image}
											/>
										);
									})}
								</Slider>
							</Box>
							<CardContent>
								<Typography className={classes.shopName} variant="h5">
									{shopDetails[0].shopName}
								</Typography>
								<Stack
									className={classes.locationSec}
									sx={{ flexDirection: "row" }}>
									<Stack
										className={classes.locationSecInner}
										sx={{ flexDirection: "row" }}>
										<Typography
											component="span"
											className={classes.distance}>
											<LocationOnIcon className={classes.icons} />
											{shopDetails[0].distance}
										</Typography>
										<Typography component="span" className={classes.time}>
											<AccessTimeFilledIcon className={classes.icons} />
											{shopDetails[0].time}
										</Typography>
									</Stack>
									<Typography component="span" className={classes.star}>
										<StarIcon className={classes.starIcon} />
										<StarIcon className={classes.starIcon} />
										<StarIcon className={classes.starIcon} />
										<StarIcon className={classes.starIcon} />
										<StarIcon className={classes.starIcon} />
									</Typography>
								</Stack>
								<Typography
									variant="body2"
									className={classes.address}
									component="span">
									{shopDetails[0].address}
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid
						item
						xl={4}
						lg={4}
						md={12}
						className="textCenter"
						sm={12}
						xs={12}>
						<Stack className="WelcomeSectionInfo">
							<Stack className="WelcomeSectionInfo-inner">
								<Typography
									variant="body2"
									gutterBottom
									style={{ fontSize: "22px" }}>
									Timing
								</Typography>
								<Typography
									variant="body2"
									gutterBottom
									style={{ fontSize: "15px" }}>
									Mon-sat 8:00am-10:00pm
								</Typography>
								<Typography
									variant="body2"
									gutterBottom
									style={{ fontSize: "15px" }}>
									Sunday 8:00am-7:30pm
								</Typography>
								<Stack className="welcomeSection2">
									<span style={{ margin: "auto" }}>
										<img src={Vector} alt="call" />
									</span>
								</Stack>
								<Stack style={{ paddingTop: "10px" }}>
									<Typography variant="subtitle1" gutterBottom>
										For any Query
									</Typography>
									<Typography variant="h3" gutterBottom component="div">
										91+9876543210
									</Typography>
								</Stack>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(Styles)(ShopTimeSection);
