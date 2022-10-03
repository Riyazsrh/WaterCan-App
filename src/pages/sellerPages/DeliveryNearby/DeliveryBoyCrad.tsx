/** @format */

import {
	Box,
	Typography,
	CardActions,
	Button,
	Stack,
	CardContent,
	CardMedia,
} from "@mui/material";

import React, { Component } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { withStyles } from "@mui/styles";
import { Styles } from "./Delivery.syle";
import { salesmanData } from "../../../utils/models/interface";
import { Link } from "react-router-dom";

interface IProps {
	classes?: any;
	person: salesmanData;
}

class DeliveryBoyCrad extends Component<IProps> {
	render() {
		const { classes, person } = this.props;
		return (
			<Stack className={classes.cardContents}>
				<Stack className={classes.innerCardContent} sx={{}}>
					<CardMedia
						component="img"
						height="100%"
						image={person.img}
						alt={person.name}
						width="150px"
						className={classes.cardMedia}
					/>
					<CardContent className={classes.cardContent}>
						<Box>
							<Typography variant="h3" className={classes.PersonName}>
								{person.name}
							</Typography>
							<Box className={classes.boxContent}>
								<Box className={classes.boxContent}>
									<LocationOnIcon className={classes.LocationIcon} />
									<Typography variant="h3" className={classes.distance}>
										{person.distance}
									</Typography>
								</Box>
								<Box>
									{" "}
									<Typography className={classes.rating}>
										{person.rating}
									</Typography>
								</Box>
							</Box>
						</Box>
					</CardContent>
				</Stack>

				<CardActions className={classes.btnSec}>
					<Link style={{ display: "block", width: "100%" }} to="/reviews">
						<Button disableRipple variant="text">
							More Details
						</Button>
					</Link>
				</CardActions>
			</Stack>
		);
	}
}

export default withStyles(Styles)(DeliveryBoyCrad);
