/** @format */

import React, { useState } from "react";
import {
	AppBar,
	Box,
	IconButton,
	Typography,
	Badge,
	Stack,
	Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileSidebar from "../sidebar/MobileSidebar";
import { useStyles } from "./Header.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Profiledrawer from "../ProfileDrawer/Profiledrawer";
interface IProps {
	menus: any;
	login: string;
	customer: boolean;
}

function Header({ menus, login, customer }: IProps) {
	const classes = useStyles();
	const [siderbarOpen, setSidebarOpen] = useState<boolean>(false);
	return (
		<>
			<AppBar
				className={classes.appbar}
				sx={{
					display: { md: "none", sm: "block", lg: "none", xs: "block" },
				}}>
				<Grid container spacing={0} alignItems="center">
					<Grid item xs={5} sm={8} md={8}>
						<Box className={classes.box}>
							<IconButton
								size="large"
								className={classes.menuIconBtn}
								onClick={() => setSidebarOpen(true)}>
								<MenuIcon className={classes.menuIcon} />
								<Typography className={classes.menuText}>Menu</Typography>
							</IconButton>
						</Box>
					</Grid>
					<Grid item xs={7} sm={4} md={4}>
						{login === "false" ? (
							<Stack
								className={classes.textContent3}
								sx={{ flexDirection: "row" }}>
								<Link to="/cart">
									{customer === true ? (
										<Badge badgeContent={4} color="primary">
											<ShoppingCartIcon sx={{ color: "#000620" }} />
										</Badge>
									) : null}
								</Link>
								<Stack className={classes.imgContent}>
									<Profiledrawer />
								</Stack>
							</Stack>
						) : (
							<Link to="/account-login">
								<Box className={classes.loginBtn}>
									<Box className={classes.loginText}>Login Acount</Box>
								</Box>
							</Link>
						)}
					</Grid>
				</Grid>
			</AppBar>

			{siderbarOpen === true ? (
				<MobileSidebar
					menus={menus}
					open={siderbarOpen}
					close={() => setSidebarOpen(false)}
				/>
			) : null}
		</>
	);
}

export default Header;
