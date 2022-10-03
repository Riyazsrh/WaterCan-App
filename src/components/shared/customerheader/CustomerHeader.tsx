/** @format */

import React, { Component } from "react";
import {
	Stack,
	Typography,
	TextField,
	Button,
	Badge,
	AppBar,
	Toolbar,
	CircularProgress,
	Skeleton,
	Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Styles } from "./customerHeader.styles";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Profiledrawer from "../../ProfileDrawer/Profiledrawer";
import Sellerdrawer from "../../ProfileDrawer/Sellerdrawer";
import { withRouter } from "../../../components/withRouter/withRouter";
interface IProps {
	classes?: any;
	customer: boolean;
	location?: any;
}
interface MyState {
	open: boolean;
	data: any;
	data1: any;
	lat: any;
	lon: any;
}
class CustomerHeader extends Component<IProps, MyState> {
	state = {
		open: false,
		data: "",
		data1: "",
		lat: null,
		lon: null,
	};
	handleClickFunc = () => {
		this.setState({
			open: !this.state.open,
		});
	};
	fetchdata = async () => {
		console.log(this.state.lat, this.state.lon)
		await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${this.state.lat}+${this.state.lon}&key=8518d29fbed240129135f8e8283c4c01`)
			.then(res => res.json())
			.then(data => {
				this.setState({ data: (data.results[0].formatted) });
				let localData = (data.results[0].formatted);
				console.log(localData);
				localStorage.setItem("Current Adress", JSON.stringify(localData));
				console.log(data.results[0].formatted);
			})
			.then((data) =>
				fetch(` https://httpstat.us/200`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ name: data, time: new Date() }),
				})
			);
	};
	getLocation = () => {
		if (navigator.geolocation) {
			var data = navigator.geolocation.getCurrentPosition(
				this.showPosition,
				this.handleLocationError
			);
		} else {
			alert("Geolocation not supported");
		}
	}
	showPosition = (position: any) => {
		this.setState({
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		}, () => this.fetchdata())
	}
	handleLocationError = (error: any) => {
		switch (error) {
			case error.PERMISSION_DENIED:
				alert("user denied request for geolocation error");
				break;
			case error.POSITION_UNAVAILABLE:
				alert("location information unavailable");
				break;
			case error.TIMEOUT:
				alert("request time out");
				break;
			case error.UNKNOWN_ERROR:
				alert("unknown error occured");
				break;
			default:
		}
	};
	componentDidMount() {
		if (localStorage.getItem("Current Adress")) {
			const existingdata = JSON.parse(localStorage.getItem("Current Adress") || "")
			console.log("Exist Data", existingdata);
			this.setState({ data: (existingdata) });

			console.log("local data", existingdata)
		} else {
			this.getLocation();
			console.log("Get location", this.getLocation());
		}
	}
	render() {
		const { classes } = this.props;
		return (
			<>
				<Stack
					className={classes.mainContainer}
					sx={{ flexDirection: "row" }}>
					<AppBar position="fixed">
						<Toolbar className={classes.MuiToolbarRoot}>
							<Stack
								className={classes.textContent1}
								sx={{ flexDirection: "row" }}>
								<LocationOnIcon color="primary" />
								<Typography sx={{ paddingLeft: "10px" }}>
									{/* {localStorage.getItem("Current Adress") ? this.state.data : <CircularProgress />} */}
									{localStorage.getItem("Current Adress") ? this.state.data : <Box sx={{ width: "800px" }}>
									<Skeleton animation="wave" />
									<Skeleton animation={false} />
								</Box>}
								</Typography>
								<KeyboardArrowDownIcon sx={{ color: "#000620" }} />
							</Stack>
							<Stack
								className={classes.textContent2}
								sx={{ flexDirection: "row" }}>
								<TextField
									variant="outlined"
									placeholder="search..."
									className={classes.inputField}
									
								/>
								<Stack className={classes.halfButton}>
									<Button
										variant="contained"
										disableElevation
										disableRipple
										startIcon={<SearchIcon />}></Button>
								</Stack>
							</Stack>
							<Stack
								className={classes.textContent3}
								sx={{ flexDirection: "row" }}>
								<Link to="/cart">
									{this.props.customer === true ? (
										<Badge badgeContent={4} color="primary">
											<ShoppingCartIcon sx={{ color: "#000620" }} />
										</Badge>
									) : null}
								</Link>
								<Stack className={classes.imgContent}>
									{this.props.customer ? (
										<Profiledrawer />
									) : (
										<Sellerdrawer />
									)}
								</Stack>
							</Stack>
						</Toolbar>
					</AppBar>
				</Stack>
				<Stack
					className={classes.responsiveSec}
					sx={{ flexDirection: "row", width: "100%", height: "72px" }}>
					{this.state.open ? (
						<TextField
							variant="outlined"
							placeholder="search..."
							className={classes.inputField}
						/>
					) : (
						<Stack
							className={classes.responsiveTextContent}
							sx={{ flexDirection: "row" }}>
							<LocationOnIcon color="primary" />
							<Typography
								sx={{
									paddingLeft: "10px",
									fontSize: {
										md: "15px !important",
										sm: "15px !important",
										xs: "10px !important",
									},
								}}>
								{/* {this.state.data ? this.state.data : <CircularProgress />} */}
								{localStorage.getItem("Current Adress") ? this.state.data : <Box sx={{ width: "800px" }}>
									<Skeleton animation="wave" />
									<Skeleton animation={false} />
								</Box>}
							</Typography>
							<KeyboardArrowDownIcon sx={{ color: "#000620" }} />
						</Stack>
					)}
					<Stack className={`${classes.halfButton} ${classes.spacious}`} >

						<Button
							variant="contained"
							disableElevation
							disableRipple
							onClick={this.handleClickFunc}
							startIcon={<SearchIcon />}></Button>
					</Stack>
				</Stack>
			</>
		);
	}
}
export default withRouter(withStyles(Styles)(CustomerHeader));