/** @format */

import React from "react";
import {
	Box,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import logo from "../../assets/images/logo1.png";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "./Sidebar.style";
import IconsComponent from "./IconsComponent";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface headerProps {
	open: boolean;
	close: () => void;
	menus: any;
}
const MobileSidebar = (props: headerProps, customer:any) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const onClick = (menu:any) => {
		navigate(menu.path)
	}

	const notification = () => {
		navigate("/Notification");
	};
	return (
		<>
			<Drawer
				className={classes.mobDrawer}
				variant="temporary"
				anchor="left"
				open={props.open}>
				<Box sx={{ textAlign: "center", p: 2 }}>
					<Box sx={{ textAlign: "right" }} onClick={props.close}>
						<ClearIcon sx={{ color: "#fff" }} />
					</Box>
					<img alt="Logo" src={logo} width="50%" />
				</Box>
				<List>
					{props.menus.map((menu: any, index: number) => (
						<Box key={index}>
							{/* <Link to={menu.path}> */}
							<a href={menu.url} onClick={props.close} style={{textDecoration:'none'}}>
								<ListItem className={classes.menuList}>
									<ListItemButton
									onClick={() => onClick(menu)}
										sx={{
											borderRadius: "10px",
											"&: hover": {
												background: "#1C97FD",
											},
										}}>
										<ListItemText
											primary={menu.title}
											sx={{ textAlign: "center" }}
										/>
									</ListItemButton>
								</ListItem>
								</a>
							{/* </Link> */}
							<Divider
								variant="middle"
								sx={{
									borderColor: "#fff",
									marginLeft: "35px",
									marginRight: "35px",
									opacity: 0.2,
								}}
							/>
						</Box>
					))}

				</List>
				{customer === "true" ? (
							<>
							</>
						) : (
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
						)}
				{/* <IconsComponent /> */}
			</Drawer>
		</>
	);
};

export default MobileSidebar;
