/** @format */

import React from "react";
import {
	Button,
	ButtonGroup,
	Card,
	Divider,
	Grid,
	Rating,
	Dialog,
	DialogContent,
	TextField,
} from "@mui/material";
import Sidebar from "../../../components/sidebar/Sidebar";
import Footer from "./../../../components/footer/Footer";
import Image2 from "../../../assets/images/singleBottle.png";
import reviewerImg1 from "../../../assets/images/reviewer1.png";
import reviewerImg2 from "../../../assets/images/reviewer2.png";
import reviewerImg3 from "../../../assets/images/reviewer3.png";
import favorite from "../../../assets/images/favorite.png";
import CustomerHeader from "../../../components/shared/customerheader/CustomerHeader";
import Title from "./../../../components/shared/title/Title";
import { relatedProductData } from "../../../utils/data/ProductData";
import ProductCard from "./../../../components/productsection/ProductCard";
import Header from "../../../components/header/Header";
import { Stack, Box, Typography } from "@mui/material";
import { Styles } from "./SingleProductPage.style";
import { withStyles } from "@mui/styles";
import { customerMenus } from "../../../utils/data/SidebarMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CButton from "../../../components/shared/commonButton/CButton";
interface IProps {
	classes: any;
}

class SingleProductPage extends React.Component<IProps> {
	state = {
		open: false,
	};

	handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
		this.setState({ open: false });
	};
	render() {
		const { classes } = this.props;
		return (
			<Stack className={classes.main}>
				<Grid container>
					<Grid item lg={3} md={4} sm={12} xs={12}>
						<Sidebar menus={customerMenus} customer="true" />
					</Grid>
					<Grid item lg={9} md={8} sm={12} xs={12}>
						<Header menus={customerMenus} login="false" customer={true} />
						<Stack sx={{ marginTop: "-35px !important" }}>
							<CustomerHeader customer={true} />
						</Stack>

						<Grid container spacing={1} sx={{ padding: "20px" }}>
							<Grid item lg={9} md={12} sm={12} xs={12}>
								<Grid container>
									<Grid item lg={6} md={12} sm={12} xs={12}>
										<Card
											className={classes.cardContent}
											variant="outlined">
											<Box>
												<img
													alt="tag-2"
													src={Image2}
													className={classes.imageTag}
												/>
											</Box>
											<Box>
												<Box className={classes.favourite}>
													<img alt="favourite" src={favorite} />
												</Box>
												<Box sx={{ marginTop: "20px" }}>
													<ButtonGroup
														size="small"
														variant="contained"
														className={classes.buttonGroup}>
														<Button
															variant="contained"
															className={classes.buttonMinus}>
															-
														</Button>
														<Button
															variant="contained"
															className={classes.buttonNumber}>
															2
														</Button>
														<Button
															variant="contained"
															className={classes.buttonPlus}>
															+
														</Button>
													</ButtonGroup>
												</Box>
											</Box>
										</Card>
									</Grid>
									<Grid item lg={6} md={12} sm={12} xs={12}>
										<Box sx={{ padding: "10px", height: "350px" }}>
											<Typography
												variant="h2"
												component="h2"
												sx={{
													fontFamily: "Inter",
													fontSize: "24px",
													fontStyle: "Medium",
												}}>
												{" "}
												watercan 25L{" "}
											</Typography>
											<Box sx={{ display: "flex", marginTop: "20px" }}>
												<Typography className={classes.price}>
													₹25{" "}
													<Typography
														className={classes.price}
														component="del">
														₹28
													</Typography>
												</Typography>
												<Rating
													sx={{ marginLeft: "15px" }}
													name="read-only"
													size="small"
													value={5}
													readOnly
												/>
											</Box>
											<Typography
												component="p"
												sx={{
													fontFamily: "Inter",
													fontSize: "16px",
													fontStyle: "Medium",
													color: "#A2A3A5",
													marginTop: "20px",
												}}>
												{" "}
												It is a long established fact that a reader will be
												distracted by the readable content of a page when
												looking at its layout. The point of using Lorem
												Ipsum is that it has a more-or-less normal
												distribution of letters,
											</Typography>

											<Stack className={classes.addToContanierButton}>
												<CButton
													icon={<ShoppingCartIcon />}
													title="Add to cart"
												/>
											</Stack>
										</Box>
									</Grid>
								</Grid>
								<Grid container>
									<Grid item lg={12} md={12} sm={12} xs={12}>
										<Title title="Related Product" />
										<Box
											sx={{
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "center",
											}}>
											{relatedProductData.map((ele: any) => {
												return (
													<Grid lg={3} md={6} xs={12} sm={6}>
														<ProductCard ele={ele} />
													</Grid>
												);
											})}
										</Box>
									</Grid>
								</Grid>
							</Grid>
							<Grid
								item
								lg={3}
								md={12}
								sm={12}
								xs={12}
								className={classes.reviewCard}>
								<Stack
									direction="column"
									spacing={1}
									sx={{ padding: "6px" }}>
									<Box
										sx={{
											display: "flex",
											justifyContent: "space-between",
										}}>
										<Typography
											component="h2"
											sx={{
												fontFamily: "Inter",
												fontSize: "24px",
												fontStyle: "Medium",
											}}>
											Reviews
										</Typography>
										<Typography
											component="p"
											sx={{
												fontFamily: "Inter",
												fontSize: "18px",
												fontStyle: "Semi Bold",
												color: "#A2A3A5",
											}}>
											View all
										</Typography>
									</Box>
									<Box>
										<Box sx={{ display: "flex" }}>
											<img
												src={reviewerImg1}
												alt="reviewer-1"
												style={{
													width: "65px",
													height: "65px",
													marginRight: "5px",
												}}
											/>
											<Box>
												<Typography
													component="h4"
													sx={{
														fontFamily: "Inter",
														fontSize: "17px",
														fontStyle: "Medium",
													}}>
													{" "}
													Abhinash Nayak{" "}
												</Typography>
												<Rating
													name="read-only"
													size="small"
													value={5}
													readOnly
												/>
											</Box>
										</Box>
										<Typography
											component="p"
											sx={{
												fontFamily: "Inter",
												fontSize: "16px",
												fontStyle: "Medium",
												color: "#A2A3A5",
												marginTop: "14px",
											}}>
											It is a long established fact that a reader will be
											distracted by the readable
										</Typography>
									</Box>
									<Divider />
									<Box sx={{ padding: "20px 0" }}>
										<Box sx={{ display: "flex" }}>
											<img
												src={reviewerImg2}
												alt="reviewer-2"
												style={{
													width: "65px",
													height: "65px",
													marginRight: "5px",
												}}
											/>
											<Box>
												<Typography
													component="h4"
													sx={{
														fontFamily: "Inter",
														fontSize: "17px",
														fontStyle: "Medium",
													}}>
													Mamta Varni{" "}
												</Typography>
												<Rating
													name="read-only"
													size="small"
													value={5}
													readOnly
												/>
											</Box>
										</Box>
										<Typography
											component="p"
											sx={{
												fontFamily: "Inter",
												fontSize: "16px",
												fontStyle: "Medium",
												color: "#A2A3A5",
												marginTop: "14px",
											}}>
											Good Delivery man2
										</Typography>
									</Box>
									<Divider />
									<Box>
										<Box sx={{ display: "flex" }}>
											<img
												src={reviewerImg3}
												alt="reviewer-3"
												style={{
													width: "65px",
													height: "65px",
													marginRight: "5px",
												}}
											/>
											<Box>
												<Typography
													component="h4"
													sx={{
														fontFamily: "Inter",
														fontSize: "17px",
														fontStyle: "Medium",
													}}>
													Vishal Raghav{" "}
												</Typography>
												<Rating
													name="read-only"
													size="small"
													value={5}
													readOnly
												/>
											</Box>
										</Box>
										<Typography
											component="p"
											sx={{
												fontFamily: "Inter",
												fontSize: "16px",
												fontStyle: "Medium",
												color: "#A2A3A5",
												marginTop: "14px",
											}}>
											{" "}
											It is a long established fact that a reader will be
											distracted by the readable content of a page when
											looking at its layout. The point of using Lorem Ipsum
											is itCollege in Virginia, looked
										</Typography>
									</Box>
									<Box>
										<Stack
											onClick={() => this.setState({ open: true })}
											className={classes.addToContanierButton}>
											<CButton title="Type New Reviews" />
										</Stack>
										<Dialog
											onClose={this.handleClose}
											fullWidth
											sx={{
												boxShadow:
													"2px 2px 25px 2px rgba(177, 233, 255, 0.5)",
												borderRadius: "20px",
											}}
											className="dialog"
											open={this.state.open}>
											<DialogContent
												sx={{ padding: "35px 25px !important" }}>
												<Box>
													<TextField
														className={classes.commentTextArea}
														placeholder="Comments..."
														multiline
														rows={8}
														maxRows={8}
														fullWidth
													/>

													<Stack className={classes.cartFlexCenter}>
														<CButton title="send comments" />
													</Stack>
												</Box>
											</DialogContent>
										</Dialog>
									</Box>
								</Stack>
							</Grid>
						</Grid>
						<Footer />
					</Grid>
				</Grid>
			</Stack>
		);
	}
}

export default withStyles(Styles)(SingleProductPage);
