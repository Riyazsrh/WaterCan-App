/** @format */
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Grid,
} from "@mui/material";
import image1 from "../../assets/images/OurBlog3.jpg";
import image2 from "../../assets/images/OurBlog1.jpg";
import image3 from "../../assets/images/OurBlog2.jpg";

import { withStyles } from "@mui/styles";
import Title from "../shared/title/Title";
import { Component } from "react";
import "./OurBlog.css";

const StyledCard = withStyles({
	root: {
		boxShadow: "none",
		"&:hover": {
			boxShadow: "0 10px 20px rgba(177, 233, 255, 0.5)",
			hadding2: {
				color: "0 10px 20px rgba(177, 233, 255, 0.5)",
			},
		},
	},
})((props: any) => <Card {...props} />);

const StyledTypography = withStyles({
	root: {
		width: "100%",
		height: "31px",
		top: "5795px",
		fontStyle: "normal",
		textAlign: "center",
		textTransform: "capitalize",
		color: "#000620",

		"&:hover": {
			color: "#1C97FD",
		},
	},
})((props: any) => <Typography {...props} />);

const StyledTypography1 = withStyles({
	root: {
		height: "84px",
		width: "100%",
		color: "linear-gradient(0deg, #99959E, #99959E)",
		textAlign: "center",
	},
})((props: any) => <Typography {...props} />);

class OurBlog extends Component {
	render() {
		return (
			<div className="Div" id="Blog" style={{ marginTop: "100px" }}>
				<Grid
					container
					spacing={0}
					alignItems="center"
					style={{ marginBottom: "10px" }}>
					<Grid item xs={12} sm={12}>
						<Title title="Our Blogs" />
					</Grid>
				</Grid>
				<div className="mainDiv">
					<Grid container spacing={2}>
						<Grid item xl={4} md={6} lg={4} sm={6} xs={12}>
							<StyledCard sx={{ boxShadow: "none", height: "115%" }}>
								<>
									<CardMedia>
										<img alt="Image1" src={image1} width="100%" />
									</CardMedia>
									<CardContent>
										<StyledTypography
											gutterBottom
											variant="h5"
											sx={{
												fontWeight: 600,
												fontSize: "22px",
												lineHeight: "27px",
											}}
											component="div">
											Blog title here 1
										</StyledTypography>
										<StyledTypography1
											variant="body2"
											sx={{
												fontSize: "16px",
												fontWeight: 500,
												lineHeight: "27px",
												letterSpacing: "0em",
												color: "linear-gradient(0deg, #99959E, #99959E)",
											}}
											color="text.secondary">
											There are many variations of passages of Lorem Ipsum
											available, but the majority have suffered
										</StyledTypography1>
									</CardContent>
								</>
							</StyledCard>
						</Grid>
						<br />
						<br />
						<Grid item xl={4} md={6} lg={4} sm={6} xs={12}>
							<StyledCard sx={{ boxShadow: "none", height: "115%" }}>
								<>
									<CardMedia>
										<img alt="Image2" src={image2} width="100%" />
									</CardMedia>
									<CardContent>
										<StyledTypography
											gutterBottom
											variant="h5"
											sx={{
												fontWeight: 600,
												fontSize: "22px",
												lineHeight: "27px",
											}}
											component="div">
											Blog title here 2
										</StyledTypography>
										<StyledTypography1
											variant="body2"
											sx={{
												fontSize: "16px",
												fontWeight: 500,
												lineHeight: "27px",
												letterSpacing: "0em",
												color: "linear-gradient(0deg, #99959E, #99959E)",
											}}
											color="text.secondary">
											It is a long established fact that a reader will be
											distracted by the readable content of a page when
											looking at its
										</StyledTypography1>
									</CardContent>
								</>
							</StyledCard>
						</Grid>
						<br />
						<br />
						<Grid item xl={4} md={6} lg={4} sm={6} xs={12}>
							<StyledCard sx={{ boxShadow: "none", height: "115%" }}>
								<>
									<CardMedia>
										<img alt="Image3" src={image3} width="100%" />
									</CardMedia>
									<CardContent>
										<StyledTypography
											gutterBottom
											variant="h5"
											sx={{
												fontWeight: 600,
												fontSize: "22px",
												lineHeight: "27px",
											}}
											component="div">
											Blog title here 3
										</StyledTypography>
										<StyledTypography1
											variant="body2"
											sx={{
												fontSize: "16px",
												fontWeight: 500,
												lineHeight: "27px",
												letterSpacing: "0em",
												color: "linear-gradient(0deg, #99959E, #99959E)",
											}}
											color="text.secondary">
											The standard chunk of Lorem Ipsum used since the
											1500s is reproduced below for those interested.
										</StyledTypography1>
									</CardContent>
								</>
							</StyledCard>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default OurBlog;
