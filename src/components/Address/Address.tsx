/** @format */

import {
	Card,
	CardContent,
	Grid,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { withStyles } from "@mui/styles";
import { Styles } from "./Address.style";
import CButton from "../shared/commonButton/CButton";

interface Iprops {
	classes: any;
	city?: string;
	area?: string;
	state?: string;
}

class Address extends React.Component<Iprops> {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Grid item lg={12} md={12} sm={12} xs={12}>
					<Card className={classes.AddressCart}>
						<CardContent>
							<Typography className={classes.text}>
								Add New Address
							</Typography>
							<TextField
								select
								label="Country / Region"
								placeholder="Country / Region"
								className={classes.input}
							/>
							<TextField
								placeholder="Pin code"
								className={classes.input}
							/>
							<TextField
								placeholder="Flat, House, Building..."
								className={classes.input}
							/>
							<TextField
								value={this.props.area}

								placeholder="Area, Colony, Street, Sector..."
								className={classes.input}
							/>
							<TextField
								value={this.props.state}
								placeholder="Landmark..."
								className={classes.input}
							/>
							<TextField
								value={this.props.city}
								placeholder="Town / City"
								className={classes.input}
							/>
							<TextField
								select
								label="Floor"
								placeholder="Floor"
								className={classes.input}
							/>
							<Stack className={classes.saveBtn}>
								<CButton title="save " />
							</Stack>
						</CardContent>
					</Card>
				</Grid>
			</div>
		);
	}
}
export default withStyles(Styles)(Address);
