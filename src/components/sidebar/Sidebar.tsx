/** @format */

import React, { Fragment } from "react";
import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	Typography,
	Box,
	Divider,
	ListItemButton,
	Stack,
} from "@mui/material";
import { useStyles } from "./Sidebar.style";
import logo from "../../assets/images/logo1.png";
import "./Slider.css";
import { useNavigate } from "react-router";
import IconsComponent from "./IconsComponent";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Sidebar({ menus, customer }: any) {
	const classes = useStyles();
	const navigate = useNavigate();
	const [active, setActive] = React.useState<any>('');

	const handeClick = (menu: any) => {
		console.log("sreeja")
		setActive(menu.url)
		console.log(menu.url)
		navigate(menu.path)
	}

	const notification = () => {
		navigate("/Notification");
	};

	return (
		<div>
			<Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
				<Drawer
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}>
					<List className={classes.drawerCss}>
						<Box sx={{ textAlign: "center", p: 2 }}>
							<img alt="Log" src={logo} width="50%" />
						</Box>
						<List>
							{menus.map((menu: any, index: number) => (
								<Fragment key={index}>
									<a href={menu.url} style={{ textDecoration: 'none' }} onClick={() => handeClick(menu)}>
										<ListItem className={classes.menuList}  >
											<ListItemButton className="ListButton"
												sx={active === (menu.url) ? { borderRadius: "10px", background: "#1C97FD" } :
													{ borderRadius: "10px", "&: hover": { background: "#1C97FD", }, }}
												onClick={() => navigate(menu.path)}>
												<ListItemText
													primary={menu.title}
													style={{
														paddingLeft: 6,
														fontFamily: "Inter !important",
													}}
												/>
											</ListItemButton>
										</ListItem>
									</a>
									<Divider
										variant="middle"
										sx={{
											marginLeft: "35px",
											marginRight: "35px",
											borderColor: "#fff",
											opacity: 0.2,
										}}
									/>
								</Fragment>
							))}
						</List>

						{customer === "true" ? (
							<>
								<Stack
									className={classes.Notification}
									sx={{ flexDirection: "row" }}
									onClick={notification}>
									<NotificationsIcon />
									<Typography>Notification</Typography>
									<Typography className={classes.spanC} component="span">
										16
									</Typography>
								</Stack>
								<IconsComponent />
							</>
						) : (
							<IconsComponent />
						)}
					</List>
				</Drawer>
			</Box>
		</div>
	);
}
export default Sidebar;
