/** @format */

import { Divider, Stack, Typography } from "@mui/material";
import React, { Component } from "react";
import { ReviewProps } from "../../../utils/models/interface";
interface IProps {
	item: ReviewProps;
}

class ReviewCard extends Component<IProps> {
	render() {
		return (
			<>
				<Stack>
					<Stack
						sx={{ flexDirection: "row", justifyContent: "space-between" }}>
						<Stack
							sx={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<img
								src={this.props.item.img}
								style={{ width: "65px", height: "65px" }}
							/>
							<Stack sx={{ marginLeft: "20px" }}>
								<Typography
									variant="h3"
									sx={{
										marginBottom: "8px",
										fontSize: {
											xs: "16px",
											sm: "19px",
										},
									}}>
									{this.props.item.name}
								</Typography>
								<Typography>{this.props.item.icons}</Typography>
							</Stack>
						</Stack>
						<Typography>{this.props.item.time}</Typography>
					</Stack>
					<Typography sx={{ marginTop: "10px" }}>
						{this.props.item.comment}
					</Typography>
				</Stack>
				<Divider sx={{ margin: "25px 0" }} />
			</>
		);
	}
}

export default ReviewCard;
