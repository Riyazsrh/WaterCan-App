/** @format */

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Typography,
} from "@mui/material";
import React from "react";

interface Iprops {
	open: boolean;
	onClose: any;
	//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	heading: string;
	button1: string;
	button2: string;
}

class CommonDialogBox extends React.Component<Iprops> {
	render(): React.ReactNode {
		return (
			<Dialog
				onClose={this.props.onClose}
				sx={{
					boxShadow: "2px 2px 25px 2px rgba(177, 233, 255, 0.5)",
					borderRadius: "20px",
				}}
				className="dialog"
				open={this.props.open}>
				<DialogContent style={{ overflow: "hidden" }}>
					<Typography
						sx={{
							fontWeight: "500 !important",
							fontSize: "20px !important",
							lineHeight: "31px !important",
						}}>
						{this.props.heading}
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button
						sx={{ color: "black" }}
						// onClick={() => this.props.setOpen(false)}
					>
						{this.props.button1}
					</Button>
					<Button>{this.props.button2}</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default CommonDialogBox;
