/** @format */

import React, { Component } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Grid } from "@mui/material";
import { gallery } from "../../../utils/data/GalleryData";
import SearchIcon from "@mui/icons-material/Search";
import Title from "../../shared/title/Title";
import { Styles } from "./gallery.styles";
import { withStyles } from "@mui/styles";
interface IProps {
	classes: any;
}
class Gallery extends Component<IProps> {
	render() {
		const { classes } = this.props;
		return (
			<>
				<Box id="Gallery">
					<Grid container direction="column" sx={{ py: 3 }}>
						<Title title="Our Gallery" />
						<ImageList
							className={classes.mainGallery}
							sx={{ width: "100%", height: "500px" }}
							rowHeight="auto"
							gap={15}>
							{gallery.map((item) => (
								<ImageListItem
									key={item.id}
									cols={item.cols || 1}
									className="imageContainer">
									<img
										alt="gallery"
										src={`${item.image}`}
										loading="lazy"
										className="image"
										style={{
											width: "100%",
											height: "200px",
											borderRadius: "12px",
										}}
									/>
									<Box className="overlay">
										<Box className="icon">
											<SearchIcon sx={{ fontSize: "30px" }} />
										</Box>
									</Box>
								</ImageListItem>
							))}
						</ImageList>
					</Grid>
				</Box>
			</>
		);
	}
}
export default withStyles(Styles)(Gallery);
